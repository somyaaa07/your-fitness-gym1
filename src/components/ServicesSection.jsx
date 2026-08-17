import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "../data/services";
import SectionHeading from "./SectionHeading";

export default function ServicesSection() {
  return (
    <section className="relative py-20 sm:py-28 bg-bg overflow-hidden">
      {/* faint hexagon watermark, echoes the logo shape */}
      <svg
        aria-hidden="true"
        className="pointer-events-none select-none absolute -top-24 -right-24 w-[420px] h-[420px] opacity-[0.05]"
        viewBox="0 0 100 100"
      >
        <polygon
          points="25,2 75,2 98,50 75,98 25,98 2,50"
          fill="none"
          stroke="#A3E635"
          strokeWidth="1.2"
        />
      </svg>

      <div className="container-x relative">
        <SectionHeading
          eyebrow="What We Do"
          title="Our"
          highlight="Services"
          align="center"
          className="mb-14 sm:mb-16"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative card-dark p-7 sm:p-8 flex flex-col gap-5 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
            >
              <span className="absolute top-5 right-6 font-teko text-3xl text-white/5 group-hover:text-primary/20 transition-colors duration-300">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div
                className="relative w-16 h-16 flex items-center justify-center bg-primary/10 group-hover:bg-primary transition-colors duration-300"
                style={{
                  clipPath:
                    "polygon(25% 2%, 75% 2%, 98% 50%, 75% 98%, 25% 98%, 2% 50%)",
                }}
              >
                <s.icon
                  size={26}
                  strokeWidth={1.75}
                  className="text-primary group-hover:text-black transition-colors duration-300"
                />
              </div>

              <h3 className="font-teko text-2xl sm:text-[26px] font-semibold uppercase text-heading leading-tight">
                {s.title}
              </h3>
              <p className="font-inter text-sm text-body leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 font-rajdhani font-bold uppercase tracking-wide text-sm text-primary hover:text-heading transition-colors duration-300"
          >
            View All Services
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
