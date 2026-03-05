import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { firstName, lastName, email, phone, service, message } = body;

    await resend.emails.send({
      from: "Website <onboarding@resend.dev>",
      to: "hdhashmat@gmail.com", // change to business email
      replyTo: email,
      subject: "New Website Contact",
      html: `
        <h2>New Contact Request</h2>

        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service Needed:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>

        <hr/>

        <p>This lead came from the website contact form.</p>
      `,
    });

    return Response.json({ success: true });

  } catch (error) {
    console.error("Email sending error:", error);

    return Response.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}