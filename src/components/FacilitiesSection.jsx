import { amenities, equipmentPartners } from "../data/amenities";
import SectionHeading from "./SectionHeading";

export default function FacilitiesSection() {
  return (
    <section className="relative py-20 sm:py-28 bg-surface2/80 overflow-hidden">
      <div className="container-x">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 sm:mb-16">
          <SectionHeading
            eyebrow="The Facility"
            title="What's On"
            highlight="The Floor"
            align="left"
          />

          <div className="flex items-center gap-3 shrink-0 border border-primary/40 bg-primary/10 px-5 py-3">
            <span className="font-teko text-3xl sm:text-4xl font-bold text-primary leading-none">
              15,000+
            </span>
            <span className="font-rajdhani text-xs uppercase tracking-wide text-muted leading-tight">
              Sq.Ft. <br /> Area
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {amenities.map((a) => (
            <div
              key={a.title}
              className="group relative flex flex-col items-center text-center gap-3 border border-white/10 bg-surface p-5 sm:p-6 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                <a.icon size={22} strokeWidth={1.75} />
              </div>
              <h3 className="font-rajdhani font-bold text-heading text-sm uppercase tracking-wide leading-tight">
                {a.title}
              </h3>
            </div>
          ))}
        </div>

        {/* brand strip */}
        <div className="mt-14 sm:mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 border-t border-white/10">
          <span className="font-rajdhani font-bold uppercase tracking-[0.15em] text-xs sm:text-sm text-muted">
            Our Philosophy
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {equipmentPartners.map((p) => (
              <span
                key={p}
                className="font-teko text-2xl sm:text-3xl font-bold uppercase text-heading/80 tracking-wide"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
