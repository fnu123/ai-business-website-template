import Image from "next/image"
import { Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { business } from "@/lib/business"

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden pt-16">
      {/* Background image */}
      <Image
        src="/images/hero-plumbing.jpg"
        alt={`Professional services in ${business.city}, ${business.state}`}
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-foreground/70" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 lg:px-8">
        <div className="max-w-2xl">
          <span className="mb-4 inline-block rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium text-primary-foreground/90 backdrop-blur-sm">
            Trusted by {business.city} Homeowners
          </span>

          <h1 className="text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            Expert Plumbing Services in {business.city}, {business.state}
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
            From emergency repairs to full installations, our licensed plumbers
            deliver fast, reliable service you can count on. Available 24/7.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" asChild className="text-base">
              <a href="#contact">
                {business.ctaPrimary}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground/20 hover:text-primary-foreground text-base"
            >
              <a href={business.phoneLink}>
                <Phone className="mr-2 h-4 w-4" />
                {business.phone}
              </a>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap gap-6">
            {[
              { number: business.stats.experienceYears, label: "Years Experience" },
              { number: business.stats.jobsCompleted, label: "Jobs Completed" },
              { number: business.stats.rating, label: "Google Rating" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-2xl font-bold text-primary-foreground">
                  {stat.number}
                </span>
                <span className="text-sm text-primary-foreground/60">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}