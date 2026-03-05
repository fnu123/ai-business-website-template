"use client"

import { useState, type FormEvent } from "react"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { business } from "@/lib/business"

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: business.phone,
    href: business.phoneLink,
  },
  {
    icon: Mail,
    label: "Email",
    value: business.email,
    href: `mailto:${business.email}`,
  },
  {
    icon: MapPin,
    label: "Address",
    value: business.address,
    href: null,
  },
  {
    icon: Clock,
    label: "Hours",
    value: business.hours,
    href: null,
  },
]

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)

    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      message: formData.get("message"),
    }

    try {
      setLoading(true)

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setSubmitted(true)
        form.reset()
      } else {
        alert("Failed to send message")
      }
    } catch (error) {
      console.error(error)
      alert("Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">

        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Contact Us
          </span>

          <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">
            Get Your Free Estimate
          </h2>

          <p className="mt-4 text-lg text-muted-foreground">
            Fill out the form below and we will get back to you shortly, or call
            us anytime for immediate assistance.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-5">

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center rounded-xl border border-primary/20 bg-primary/5 p-12 text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Send className="h-6 w-6" />
                </div>

                <h3 className="text-2xl font-bold text-foreground">
                  Thank You!
                </h3>

                <p className="mt-2 text-muted-foreground">
                  Your message has been sent. We will be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-6 sm:grid-cols-2">

                <div className="flex flex-col gap-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" name="firstName" placeholder="John" required />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" name="lastName" placeholder="Doe" required />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" type="tel" placeholder={business.phone} required />
                </div>

                <div className="flex flex-col gap-2 sm:col-span-2">
                  <Label htmlFor="service">Service Needed</Label>

                  <select
                    id="service"
                    name="service"
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    defaultValue=""
                  >
                    <option value="" disabled>Select a service</option>

                    {business.services.map((service) => (
                      <option key={service}>{service}</option>
                    ))}

                    <option>Other</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2 sm:col-span-2">
                  <Label htmlFor="message">Message</Label>

                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Describe your issue or project..."
                    required
                  />
                </div>

                <div className="sm:col-span-2">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full text-base"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 rounded-lg border border-border bg-card p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {item.label}
                  </p>

                  {item.href ? (
                    <a href={item.href} className="font-medium text-foreground hover:text-primary">
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-medium text-foreground">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Google Map */}
            <div className="overflow-hidden rounded-lg border">
              <iframe
                src={`https://www.google.com/maps?q=${business.city},${business.state}&output=embed`}
                width="100%"
                height="250"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}