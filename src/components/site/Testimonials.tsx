import { Star, Quote } from "lucide-react";
import patient1 from "@/assets/clinic/testimonial-1.jpg";

const reviews = [
  {
    name: "Priya R.",
    role: "Patient · Hyderabad",
    photo: patient1,
    text: "For years I thought my fatigue was just stress. Dental Harmony's airway assessment changed everything — I'm sleeping deeply for the first time in a decade.",
  },
  {
    name: "Arjun M.",
    role: "Patient · Banjara Hills",
    photo: null,
    text: "My jaw clicking and morning headaches are gone. The team is genuinely warm and the clinic feels more like a wellness studio than a dental office.",
  },
  {
    name: "Sneha K.",
    role: "Patient · Jubilee Hills",
    photo: null,
    text: "My partner finally sleeps through the night — I stopped snoring after their oral appliance therapy. Honestly life-changing care.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 md:py-36 gradient-soft">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl reveal">
          <div className="text-xs uppercase tracking-[0.25em] text-accent-foreground/70 mb-4">Patient Stories</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
            Quiet nights. <span className="gradient-text italic font-light">Brighter mornings.</span>
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <figure
              key={r.name}
              className="reveal relative p-8 rounded-3xl bg-card border border-border hover:shadow-elegant transition-all duration-500"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Quote className="w-8 h-8 text-accent absolute top-6 right-6 opacity-40" />
              <div className="flex items-center gap-1 text-gold">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 text-foreground/85 leading-relaxed">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-7 pt-5 border-t border-border flex items-center gap-3">
                {r.photo ? (
                  <img src={r.photo} alt={r.name} loading="lazy" className="w-11 h-11 rounded-full object-cover ring-2 ring-accent/30" />
                ) : (
                  <div className="w-11 h-11 rounded-full gradient-navy flex items-center justify-center text-primary-foreground font-display text-sm">
                    {r.name.charAt(0)}
                  </div>
                )}
                <div>
                  <div className="text-sm font-medium text-primary">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
