import doctor from "@/assets/about-doctor.jpg";
import { Wind, Heart, Moon } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="reveal relative">
          <div className="absolute -inset-6 rounded-[2rem] gradient-soft -z-10" />
          <div className="relative rounded-[1.75rem] overflow-hidden shadow-elegant">
            <img
              src={doctor}
              alt="Lead dentist at Dental Harmony"
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 lg:-right-10 bg-card border border-border rounded-2xl p-5 shadow-elegant max-w-[230px]">
            <div className="flex items-center gap-2 text-primary">
              <Heart className="w-4 h-4 fill-accent text-accent" />
              <span className="text-xs uppercase tracking-[0.15em] font-medium">Holistic Care</span>
            </div>
            <p className="mt-2 text-sm text-foreground/80 leading-snug">
              Dentistry that treats the whole person — not just the teeth.
            </p>
          </div>
        </div>

        <div className="reveal">
          <div className="text-xs uppercase tracking-[0.25em] text-accent-foreground/70 mb-4">About the Practice</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
            Where the mouth meets <span className="gradient-text italic font-light">the breath.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            At Dental Harmony, we practice <strong className="text-primary font-medium">airway-focused dentistry</strong> — a modern,
            holistic approach that recognises how your jaw, bite, and breathing
            shape your sleep, energy, and long-term health.
          </p>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            From clenching and grinding to silent sleep apnea, the signs often
            begin in your mouth. We listen, diagnose deeply, and craft personalised
            care that lets you breathe with ease and live with vitality.
          </p>

          <div className="mt-10 grid sm:grid-cols-3 gap-5">
            {[
              { i: Wind, t: "Better Breathing", d: "Open airways, all day." },
              { i: Moon, t: "Restful Sleep", d: "Deep, restorative nights." },
              { i: Heart, t: "Whole Health", d: "Energy that lasts." },
            ].map(({ i: Icon, t, d }) => (
              <div key={t} className="p-5 rounded-2xl bg-card border border-border hover:border-accent/50 hover:shadow-soft transition-all duration-300">
                <Icon className="w-5 h-5 text-accent-foreground" />
                <div className="mt-3 font-medium text-primary text-sm">{t}</div>
                <div className="text-xs text-muted-foreground mt-1">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
