import { Wind, Activity, Shield, Moon, AudioLines, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Wind,
    title: "Airway Dentistry",
    desc: "Diagnosing and resolving the root causes of restricted breathing through dental and orthopedic care.",
  },
  {
    icon: Activity,
    title: "TMJ Treatment",
    desc: "Relieving jaw pain, clicking, and headaches with precise, non-invasive joint therapy.",
  },
  {
    icon: Shield,
    title: "Bruxism Treatment",
    desc: "Custom night guards and neuromuscular care to stop grinding and protect your enamel.",
  },
  {
    icon: Moon,
    title: "Sleep Apnea Therapy",
    desc: "Comfortable oral appliance therapy — a discreet alternative to CPAP for restful nights.",
  },
  {
    icon: AudioLines,
    title: "Snoring Treatment",
    desc: "Quiet your nights and revive your mornings with airway-opening dental solutions.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 md:py-36 gradient-soft">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl reveal">
          <div className="text-xs uppercase tracking-[0.25em] text-accent-foreground/70 mb-4">Our Specialities</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
            Specialised care for every <span className="gradient-text italic font-light">breath you take.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Five focused programs — one shared goal: helping you live, sleep, and smile with ease.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <a
              key={title}
              href="#contact"
              className="reveal group relative p-8 rounded-3xl bg-card border border-border hover:border-primary/30 hover:shadow-elegant hover:-translate-y-1 transition-all duration-500"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/10 group-hover:to-transparent transition-all duration-500 -z-10" />
              <div className="flex items-start justify-between">
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center group-hover:gradient-navy transition-all duration-500">
                  <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:rotate-12 transition-all duration-300" />
              </div>
              <h3 className="mt-6 font-display text-2xl text-primary">{title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </a>
          ))}

          <div className="reveal relative p-8 rounded-3xl gradient-navy text-primary-foreground overflow-hidden">
            <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-accent/20 blur-2xl" />
            <div className="relative">
              <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60">Not sure where to start?</div>
              <h3 className="mt-3 font-display text-2xl leading-tight">A 30-minute discovery consult.</h3>
              <p className="mt-3 text-sm text-primary-foreground/80">
                We listen first. Then build a plan around your breath, your sleep, and your smile.
              </p>
              <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-medium border-b border-primary-foreground/40 pb-1 hover:border-primary-foreground transition-colors">
                Book your consult <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
