import Link from "next/link"
import { business } from "@/lib/business"

export async function generateStaticParams() {
  return business.cities.map((city) => ({
    city: city.toLowerCase(),
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>
}) {
  const { city } = await params

  const cityName = city.charAt(0).toUpperCase() + city.slice(1)

  return {
    title: `Plumber in ${cityName}, ${business.state} | ${business.name}`,
    description: `Professional plumbing services in ${cityName}, ${business.state}. Emergency repairs, drain cleaning, and more.`,
  }
}

export default async function CityServicePage({
  params,
}: {
  params: Promise<{ city: string }>
}) {
  const { city } = await params

  const cityName = city.charAt(0).toUpperCase() + city.slice(1)

  return (
    <main className="mx-auto max-w-5xl px-6 py-20">

      {/* Back link */}
      <Link
        href="/"
        className="text-primary font-medium underline mb-6 inline-block"
      >
        ← Back to {business.name}
      </Link>

      <h1 className="text-4xl font-bold mb-6">
        Plumbing Services in {cityName}, {business.state}
      </h1>

      <p className="text-lg text-muted-foreground mb-6">
        {business.name} proudly provides professional plumbing services in{" "}
        {cityName}, {business.state}. Our licensed plumbers specialize in
        emergency repairs, drain cleaning, water heater installation,
        leak detection, sewer line repair, and complete plumbing solutions.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Local Plumbing Experts in {cityName}
      </h2>

      <p className="text-muted-foreground mb-6">
        If you are searching for a reliable plumber in {cityName}, our
        experienced team is ready to help. We provide fast response
        times and 24/7 emergency service throughout the area.
      </p>

      <ul className="grid md:grid-cols-2 gap-3 mb-10">
        <li>✔ Emergency Plumbing Repairs</li>
        <li>✔ Drain Cleaning</li>
        <li>✔ Water Heater Installation</li>
        <li>✔ Leak Detection</li>
        <li>✔ Sewer Line Repair</li>
        <li>✔ Bathroom Plumbing</li>
      </ul>

      <div className="bg-primary/5 border rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-2">
          Need a plumber in {cityName}?
        </h3>

        <p className="mb-4 text-muted-foreground">
          Call {business.name} today for fast and reliable plumbing
          services in {cityName}, {business.state}.
        </p>

        <a
          href={`tel:${business.phone}`}
          className="inline-block bg-primary text-white px-6 py-3 rounded-md"
        >
          Call {business.phone}
        </a>
      </div>
    </main>
  )
}