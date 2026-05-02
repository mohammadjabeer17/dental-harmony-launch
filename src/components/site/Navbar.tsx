import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Us" },
  { href: "#testimonials", label: "Stories" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-7xl px-5 md:px-8 flex items-center justify-between rounded-full transition-all duration-500",
          scrolled
            ? "glass shadow-soft border border-border/60 py-2.5"
            : "bg-transparent py-2"
        )}
      >
        <a href="#top" className="flex items-center gap-2.5 group">
          <div className="relative">
            <div className="w-9 h-9 rounded-full gradient-navy flex items-center justify-center shadow-soft">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-primary-foreground">
                <path d="M12 2C8 2 6 5 6 8c0 2 .5 4 1.2 6.5C8 17 8.5 22 10 22c1 0 1.2-3 2-3s1 3 2 3c1.5 0 2-5 2.8-7.5C17.5 12 18 10 18 8c0-3-2-6-6-6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <div className="leading-tight">
            <div className="font-display text-[15px] font-semibold tracking-tight text-primary">Dental Harmony</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Airway · TMJ · Sleep</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 text-sm text-foreground/75 hover:text-primary rounded-full transition-colors relative group"
            >
              {l.label}
              <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+919999999999"
            className="flex items-center gap-2 text-sm text-primary font-medium hover:text-primary/80 transition-colors"
          >
            <Phone className="w-4 h-4" />
            +91 99999 99999
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 hover:shadow-elegant transition-all duration-300"
          >
            Book Consultation
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 rounded-full hover:bg-secondary transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden mx-5 mt-2 glass border border-border/60 rounded-3xl p-5 shadow-elegant animate-fade-in">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-sm text-foreground/80 hover:bg-secondary rounded-xl transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 px-4 py-3 text-center rounded-xl bg-primary text-primary-foreground text-sm font-medium"
            >
              Book Consultation
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
