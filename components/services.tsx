import {
  Wrench,
  Droplets,
  Flame,
  ShowerHead,
  PipetteIcon,
  ShieldCheck,
} from "lucide-react"
import { business } from "@/lib/business"

const icons = [
  Wrench,
  Droplets,
  Flame,
  ShowerHead,
  PipetteIcon,
  ShieldCheck,
]

export function Services() {
  return (
    <section id="services" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Our Services
          </span>

          <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">
            Professional {business.name} Solutions
          </h2>

          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            We provide reliable plumbing services throughout {business.city},{" "}
            {business.state}. Our licensed professionals handle everything from
            small repairs to full system installations.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {business.services.map((service: string, index: number) => {
            const Icon = icons[index % icons.length]

            return (
              <div
                key={service}
                className="group rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-xl font-semibold text-foreground">
                  {service}
                </h3>

                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Professional {service.toLowerCase()} services in{" "}
                  {business.city}. Our experienced team ensures high-quality
                  workmanship and fast response times.
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}