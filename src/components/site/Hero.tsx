import heroImg from "@/assets/hero-clinic.jpg";
import { Phone, Calendar, ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Premium dental clinic interior in Hyderabad"
          width={1920}
          height={1080}
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* floating orbs */}
      <div className="absolute top-1/4 right-[10%] w-72 h-72 rounded-full bg-accent/30 blur-3xl animate-float -z-10" />
      <div className="absolute bottom-1/3 right-[20%] w-56 h-56 rounded-full bg-soft-blue/40 blur-3xl animate-float -z-10" style={{ animationDelay: "2s" }} />

      <div className="mx-auto max-w-7xl px-5 md:px-8 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary border border-border text-xs uppercase tracking-[0.2em] text-primary/80 mb-7 animate-fade-in">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            Hyderabad's Airway-Focused Dental Studio
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-[88px] leading-[0.95] tracking-tight text-balance animate-fade-up">
            Breathe Better.
            <br />
            <span className="gradient-text italic font-light">Sleep Better.</span>
            <br />
            Smile Better.
          </h1>

          <p className="mt-7 text-lg md:text-xl text-muted-foreground max-w-xl text-balance animate-fade-up" style={{ animationDelay: "150ms" }}>
            Advanced Airway, TMJ &amp; Sleep Dentistry in Hyderabad — a holistic
            approach to restore your breath, your rest, and your radiant smile.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "300ms" }}>
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-primary text-primary-foreground font-medium shadow-elegant hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300"
            >
              <Calendar className="w-4 h-4" />
              Book Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+919999999999"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-card border border-border text-primary font-medium hover:bg-secondary hover:-translate-y-0.5 transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-8 max-w-xl animate-fade-up" style={{ animationDelay: "450ms" }}>
            {[
              { v: "5★", l: "Patient Trust" },
              { v: "12+", l: "Years Specialised" },
              { v: "2000+", l: "Smiles Restored" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl md:text-4xl text-primary">{s.v}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.15em] text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
