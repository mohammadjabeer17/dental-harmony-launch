import { Instagram, Facebook, Youtube, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="gradient-navy text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-20">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-primary-foreground">
                  <path d="M12 2C8 2 6 5 6 8c0 2 .5 4 1.2 6.5C8 17 8.5 22 10 22c1 0 1.2-3 2-3s1 3 2 3c1.5 0 2-5 2.8-7.5C17.5 12 18 10 18 8c0-3-2-6-6-6z" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
              <div>
                <div className="font-display text-lg">Dental Harmony</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-primary-foreground/60">Airway · TMJ · Sleep</div>
              </div>
            </div>
            <p className="mt-6 text-sm text-primary-foreground/70 max-w-sm leading-relaxed">
              A holistic dental studio in Hyderabad helping you breathe better,
              sleep better, and smile better — for life.
            </p>
            <div className="mt-7 flex gap-3">
              {[Instagram, Facebook, Youtube, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-primary border border-primary-foreground/15 flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground/50">Quick Links</div>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { l: "About", h: "#about" },
                { l: "Services", h: "#services" },
                { l: "Why Choose Us", h: "#why" },
                { l: "Patient Stories", h: "#testimonials" },
                { l: "Contact", h: "#contact" },
              ].map((i) => (
                <li key={i.l}>
                  <a href={i.h} className="text-primary-foreground/75 hover:text-accent transition-colors">{i.l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground/50">Visit Us</div>
            <div className="mt-5 text-sm text-primary-foreground/75 leading-relaxed">
              Banjara Hills,<br />
              Hyderabad, Telangana 500034<br />
              +91 99999 99999<br />
              care@dentalharmony.in
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row gap-3 justify-between items-center text-xs text-primary-foreground/50">
          <div>© {new Date().getFullYear()} Dental Harmony. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">Privacy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
