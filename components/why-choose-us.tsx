import { Clock, BadgeCheck, DollarSign, ThumbsUp, Headphones, Award } from "lucide-react"
import { business } from "@/lib/business"

const reasons = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description:
      "Plumbing emergencies happen at the worst times. We are always on call, day or night, weekends and holidays.",
  },
  {
    icon: BadgeCheck,
    title: "Licensed & Insured",
    description:
      "Fully licensed, bonded, and insured plumbers. Every technician passes rigorous background checks.",
  },
  {
    icon: DollarSign,
    title: "Upfront Pricing",
    description:
      "No hidden fees or surprise charges. We provide a detailed quote before any work begins, guaranteed.",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction Guarantee",
    description:
      "We stand behind every job. If you are not 100% satisfied, we will make it right at no extra cost.",
  },
  {
    icon: Headphones,
    title: "Fast Response Time",
    description:
      "Most calls answered within minutes. Same-day service for emergencies throughout the service area.",
  },
  {
    icon: Award,
    title: "Award-Winning Service",
    description:
      "Trusted by hundreds of homeowners and businesses with a reputation for quality workmanship.",
  },
]

export function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Why Choose Us
          </span>

          <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">
            The {business.city} Difference
          </h2>

          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Homeowners and businesses across {business.city} trust{" "}
            {business.name} to deliver reliable service and professional
            workmanship every time.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <reason.icon className="h-5 w-5" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {reason.title}
                </h3>

                <p className="mt-1.5 leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}