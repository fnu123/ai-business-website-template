import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "McKinney, TX",
    text: "They fixed our burst pipe in the middle of the night within an hour of calling. Incredibly professional and fair pricing. Could not recommend them more highly.",
    rating: 5,
  },
  {
    name: "James Rodriguez",
    location: "Allen, TX",
    text: "We had a complete bathroom remodel done and the work was flawless. The team was punctual, clean, and finished ahead of schedule. Our new bathroom looks amazing.",
    rating: 5,
  },
  {
    name: "Emily Chen",
    location: "Frisco, TX",
    text: "After dealing with a slow drain for months, their team found and fixed the root cause in one visit. Transparent pricing and they explained every step. Excellent service.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Testimonials
          </span>
          <h2 className="mt-2 font-[family-name:var(--font-heading)] text-3xl font-bold text-foreground md:text-4xl text-balance">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Real reviews from homeowners across the McKinney area who trust us
            with their plumbing needs.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-xl border border-border bg-card p-8"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              <blockquote className="flex-1 leading-relaxed text-foreground/80">
                {`"${t.text}"`}
              </blockquote>

              <div className="mt-6 border-t border-border pt-4">
                <p className="font-[family-name:var(--font-heading)] font-semibold text-foreground">
                  {t.name}
                </p>
                <p className="text-sm text-muted-foreground">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
