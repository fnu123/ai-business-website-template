import { Droplets, Phone, Mail, MapPin } from "lucide-react"
import { business } from "@/lib/business"

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Droplets className="h-5 w-5 text-primary-foreground" />
              </div>

              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight">
                  {business.city}
                </span>

                <span className="text-xs font-medium uppercase tracking-wider opacity-60">
                  {business.name}
                </span>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed opacity-70">
              Professional plumbing services for residential and commercial
              properties across {business.city} and surrounding areas.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold">Quick Links</h4>

            <nav className="mt-4 flex flex-col gap-2">
              {[
                { label: "Services", href: "#services" },
                { label: "Why Choose Us", href: "#why-us" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "Service Area", href: "#service-area" },
                { label: "Contact Us", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm opacity-70 transition-opacity hover:opacity-100"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold">Services</h4>

            <ul className="mt-4 flex flex-col gap-2">
              {business.services.map((service) => (
                <li key={service} className="text-sm opacity-70">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold">Contact</h4>

            <div className="mt-4 flex flex-col gap-3">
              <a
                href={business.phoneLink}
                className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100"
              >
                <Phone className="h-4 w-4" />
                {business.phone}
              </a>

              <a
                href={`mailto:${business.email}`}
                className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100"
              >
                <Mail className="h-4 w-4" />
                {business.email}
              </a>

              <span className="flex items-center gap-2 text-sm opacity-70">
                <MapPin className="h-4 w-4 shrink-0" />
                {business.address}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center text-sm opacity-50">
          <p>
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}