import { useState } from "react";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20),
  message: z.string().trim().min(5, "Tell us a little more").max(1000),
});

export function Contact() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      phone: fd.get("phone"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Thank you — we'll be in touch within 24 hours.");
      (e.target as HTMLFormElement).reset();
    }, 900);
  };

  return (
    <section id="contact" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-2 reveal">
            <div className="text-xs uppercase tracking-[0.25em] text-accent-foreground/70 mb-4">Get in Touch</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
              Let's begin your <span className="gradient-text italic font-light">harmony.</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              We'd love to hear from you. Reach out — our team responds within one business day.
            </p>

            <div className="mt-10 space-y-5">
              {[
                { i: MapPin, t: "Visit", d: "Banjara Hills, Hyderabad, Telangana 500034" },
                { i: Phone, t: "Call", d: "+91 99999 99999" },
                { i: Mail, t: "Email", d: "care@dentalharmony.in" },
                { i: Clock, t: "Hours", d: "Mon – Sat · 9:00 am – 8:00 pm" },
              ].map(({ i: Icon, t, d }) => (
                <div key={t} className="flex gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-secondary flex items-center justify-center shrink-0">
                    <Icon className="w-4.5 h-4.5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{t}</div>
                    <div className="text-sm text-foreground mt-0.5">{d}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl overflow-hidden border border-border shadow-soft aspect-[4/3] bg-secondary">
              <iframe
                title="Clinic location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=78.42%2C17.40%2C78.46%2C17.43&layer=mapnik"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-3 reveal p-8 md:p-12 rounded-3xl bg-card border border-border shadow-elegant">
            <h3 className="font-display text-2xl text-primary">Book your consultation</h3>
            <p className="text-sm text-muted-foreground mt-1">A member of our care team will reach out personally.</p>

            <div className="mt-8 space-y-5">
              <div>
                <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Name</label>
                <input
                  name="name"
                  required
                  maxLength={100}
                  className="mt-2 w-full px-4 py-3.5 rounded-xl bg-background border border-input focus:border-primary focus:ring-2 focus:ring-ring/30 outline-none transition-all"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Phone</label>
                <input
                  name="phone"
                  type="tel"
                  required
                  maxLength={20}
                  className="mt-2 w-full px-4 py-3.5 rounded-xl bg-background border border-input focus:border-primary focus:ring-2 focus:ring-ring/30 outline-none transition-all"
                  placeholder="+91 ..."
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  maxLength={1000}
                  className="mt-2 w-full px-4 py-3.5 rounded-xl bg-background border border-input focus:border-primary focus:ring-2 focus:ring-ring/30 outline-none transition-all resize-none"
                  placeholder="Tell us briefly what you're experiencing..."
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-primary text-primary-foreground font-medium shadow-elegant hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60"
              >
                {loading ? "Sending..." : (<>Send Message <Send className="w-4 h-4" /></>)}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
