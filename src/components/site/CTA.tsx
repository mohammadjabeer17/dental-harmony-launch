import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="reveal relative overflow-hidden rounded-[2rem] gradient-navy text-primary-foreground p-12 md:p-20 text-center shadow-elegant">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-soft-blue/20 blur-3xl" />

          <div className="relative">
            <div className="inline-block text-xs uppercase tracking-[0.3em] text-primary-foreground/60 mb-6">
              Your next chapter begins here
            </div>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-balance max-w-4xl mx-auto">
              Take the first step towards <em className="font-light italic text-accent">better sleep</em> &amp; health.
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/75 max-w-xl mx-auto">
              Book your personalised consultation today — and discover what your breath has been trying to tell you.
            </p>
            <a
              href="#contact"
              className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-card text-primary font-medium hover:bg-primary-foreground hover:-translate-y-0.5 hover:shadow-glow transition-all duration-300"
            >
              Book Appointment
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
