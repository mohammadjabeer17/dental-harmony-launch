import c1 from "@/assets/clinic/clinic-1.jpg";
import c2 from "@/assets/clinic/clinic-2.jpg";
import c3 from "@/assets/clinic/clinic-3.jpg";
import c4 from "@/assets/clinic/clinic-4.jpg";

export function Gallery() {
  return (
    <section id="gallery" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 reveal">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.25em] text-accent-foreground/70 mb-4">Inside the Clinic</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
              A space designed for <span className="gradient-text italic font-light">calm &amp; care.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Every corner of Dental Harmony is crafted to make you feel at ease — from the moment you walk in.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-3 md:gap-4 h-[520px] md:h-[640px]">
          <figure className="reveal relative col-span-2 row-span-2 rounded-3xl overflow-hidden group shadow-soft">
            <img src={c4} alt="Dental Harmony clinic interior" loading="lazy" className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </figure>
          <figure className="reveal relative rounded-3xl overflow-hidden group shadow-soft">
            <img src={c1} alt="Reception at Dental Harmony" loading="lazy" className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105" />
          </figure>
          <figure className="reveal relative rounded-3xl overflow-hidden group shadow-soft">
            <img src={c3} alt="Treatment room" loading="lazy" className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105" />
          </figure>
          <figure className="reveal relative col-span-2 rounded-3xl overflow-hidden group shadow-soft">
            <img src={c2} alt="Clinic detail" loading="lazy" className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105" />
          </figure>
        </div>
      </div>
    </section>
  );
}
