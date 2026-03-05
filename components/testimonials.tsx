import { Star } from "lucide-react"
import { business } from "@/lib/business"

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Testimonials
          </span>

          <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">
            What Our Customers Say
          </h2>

          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Real reviews from homeowners across {business.city} who trust{" "}
            {business.name} with their plumbing needs.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {business.testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-xl border border-border bg-card p-8"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              <blockquote className="flex-1 leading-relaxed text-foreground/80">
                "{t.text}"
              </blockquote>

              <div className="mt-6 border-t border-border pt-4">
                <p className="font-semibold text-foreground">
                  {t.name}
                </p>

                <p className="text-sm text-muted-foreground">
                  {t.city}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}