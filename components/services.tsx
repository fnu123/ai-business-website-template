import {
  Wrench,
  Droplets,
  Flame,
  ShowerHead,
  PipetteIcon,
  ShieldCheck,
} from "lucide-react"

const services = [
  {
    icon: Wrench,
    title: "Emergency Repairs",
    description:
      "Burst pipes, overflows, and leaks handled fast. Our emergency team is available 24/7 for when disaster strikes.",
  },
  {
    icon: Droplets,
    title: "Drain Cleaning",
    description:
      "Professional drain clearing for stubborn clogs. We use advanced hydro-jetting and camera inspection technology.",
  },
  {
    icon: Flame,
    title: "Water Heater Service",
    description:
      "Installation, repair, and maintenance for all water heater types including tankless and traditional models.",
  },
  {
    icon: ShowerHead,
    title: "Bathroom Remodeling",
    description:
      "Complete bathroom plumbing for renovations. Fixture installation, re-piping, and layout modifications.",
  },
  {
    icon: PipetteIcon,
    title: "Leak Detection",
    description:
      "State-of-the-art leak detection technology to find hidden leaks without damaging your walls or floors.",
  },
  {
    icon: ShieldCheck,
    title: "Sewer Line Service",
    description:
      "Full sewer line inspection, repair, and replacement. Trenchless options available to minimize yard disruption.",
  },
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
          <h2 className="mt-2 font-[family-name:var(--font-heading)] text-3xl font-bold text-foreground md:text-4xl text-balance">
            Professional Plumbing Solutions
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            We handle everything from minor fixes to major installations with
            the same level of care and professionalism.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
