import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { programs } from "../data/programs";
import ProgramCard from "./ProgramCard";
import SectionHeading from "./SectionHeading";

export default function ProgramsSection() {
  const scrollerRef = useRef(null);

  const scroll = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: dir === "next" ? amount : -amount, behavior: "smooth" });
  };

  const featured = programs.slice(0, 4);

  return (
    <section className="relative py-20 sm:py-28 bg-bg">
      <div className="container-x">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 sm:mb-16">
          <SectionHeading
            eyebrow="Training Menu"
            title="Pick Your"
            highlight="Program"
            align="left"
          />

          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => scroll("prev")}
              aria-label="Previous programs"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-white/15 text-body hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("next")}
              aria-label="Next programs"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-white/15 text-body hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="relative -mx-6 sm:mx-0">
          <div
            ref={scrollerRef}
            className="flex gap-6 overflow-x-auto px-6 sm:px-0 pb-4 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {featured.map((program) => (
              <div key={program.id} className="min-w-[280px] sm:min-w-[320px] w-[320px] snap-start">
                <ProgramCard program={program} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile arrows, centered below */}
        <div className="flex sm:hidden items-center justify-center gap-4 mt-8">
          <button
            onClick={() => scroll("prev")}
            aria-label="Previous programs"
            className="w-11 h-11 flex items-center justify-center rounded-full border border-white/15 text-body active:border-primary active:text-primary transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scroll("next")}
            aria-label="Next programs"
            className="w-11 h-11 flex items-center justify-center rounded-full border border-white/15 text-body active:border-primary active:text-primary transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}