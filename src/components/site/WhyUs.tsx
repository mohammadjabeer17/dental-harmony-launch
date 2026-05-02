import { Award, Microscope, Star, HeartHandshake } from "lucide-react";

const items = [
  {
    icon: Award,
    title: "Specialised Expertise",
    desc: "Among Hyderabad's few clinics dedicated to airway, TMJ and sleep dentistry.",
  },
  {
    icon: Microscope,
    title: "Advanced Technology",
    desc: "3D imaging, digital scans and modern airway diagnostics — precise from day one.",
  },
  {
    icon: HeartHandshake,
    title: "Personalised Care",
    desc: "Every plan is built around you — your symptoms, your lifestyle, your goals.",
  },
  {
    icon: Star,
    title: "5-Star Patient Trust",
    desc: "Hundreds of patients rate us for warmth, clarity and life-changing results.",
  },
];

export function WhyUs() {
  return (
    <section id="why" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 reveal">
            <div className="text-xs uppercase tracking-[0.25em] text-accent-foreground/70 mb-4">Why Dental Harmony</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
              A standard of care you can <span className="gradient-text italic font-light">feel.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              We've built a practice where every detail — from your first call
              to your final smile — is designed around comfort, clarity and
              clinical excellence.
            </p>
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[0,1,2,3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-gradient-to-br from-soft-blue to-accent" />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                <div className="flex items-center gap-1 text-gold">
                  {[...Array(5)].map((_,i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                </div>
                <div className="mt-0.5">Loved by 500+ patients</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {items.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className="reveal group p-7 rounded-3xl bg-card border border-border hover:border-accent/50 hover:shadow-elegant transition-all duration-500"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-2xl bg-soft-blue/40 flex items-center justify-center group-hover:bg-soft-blue transition-colors duration-500">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="mt-5 font-display text-xl text-primary">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
