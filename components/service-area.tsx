import Link from "next/link"
import { MapPin } from "lucide-react"
import { business } from "@/lib/business"

export function ServiceArea() {
  return (
    <section id="service-area" className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Text */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Service Area
            </span>

            <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">
              Serving {business.city} & Surrounding Communities
            </h2>

            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              We proudly serve {business.city}, {business.state} and surrounding
              communities within a {business.serviceRadius} radius. No matter
              where you are in the area, our team is ready to help.
            </p>

            {/* Cities */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {business.serviceAreas.map((area) => (
                <Link
                  key={area}
                  href={`/services/${area.toLowerCase()}`}
                  className="flex items-center gap-2 text-foreground/80 hover:text-primary transition"
                >
                  <MapPin className="h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm font-medium">{area}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-xl border border-border shadow-sm">
            <iframe
              title={`${business.name} service area map`}
              src={`https://www.google.com/maps?q=${business.city},${business.state}&output=embed`}
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              className="w-full"
            />
          </div>

        </div>
      </div>
    </section>
  )
}