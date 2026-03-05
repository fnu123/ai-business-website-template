import { MapPin } from "lucide-react"

const areas = [
  "McKinney",
  "Allen",
  "Frisco",
  "Plano",
  "Prosper",
  "Celina",
  "Princeton",
  "Melissa",
  "Anna",
  "Fairview",
  "Lucas",
  "Lowry Crossing",
]

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
            <h2 className="mt-2 font-[family-name:var(--font-heading)] text-3xl font-bold text-foreground md:text-4xl text-balance">
              Serving McKinney & Surrounding Communities
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
              We proudly serve McKinney, Texas and surrounding communities
              within a 25-mile radius. No matter where you are in the area,
              our team is ready to help.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {areas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2 text-foreground/80"
                >
                  <MapPin className="h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm font-medium">{area}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Map placeholder */}
          <div className="overflow-hidden rounded-xl border border-border shadow-sm">
            <iframe
              title="McKinney Plumbing Experts service area map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107001.82050419748!2d-96.72893!3d33.19784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c14a4e3c4fa99%3A0x73ad4a1e7fcb6216!2sMcKinney%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
