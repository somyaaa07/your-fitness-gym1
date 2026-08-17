import { Dumbbell, Award, Snowflake, HeartPulse, Coffee } from "lucide-react";
import SectionHeading from "./SectionHeading";

const reasons = [
  {
    icon: Award,
    title: "Certified Coaches",
    description: "Every coach on the floor is certified and invested in your progress, not just your check-in.",
  },
  {
    icon: Dumbbell,
    title: "Premium Equipment",
    description: "45+ stations of Matrix and Thor USA gear so you're never waiting on a machine.",
  },
  {
    icon: Snowflake,
    title: "Full Recovery Suite",
    description: "Steam, sauna and ice bath built in — recovery isn't an afterthought here.",
  },
  {
    icon: HeartPulse,
    title: "On-Site Physio",
    description: "Injury care and physiotherapy on-site, so setbacks don't turn into stoppages.",
  },
  {
    icon: Coffee,
    title: "Cafe & Lounge",
    description: "Refuel with a protein shake or unwind in the lounge before you head out.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="The Difference"
          title="Why Members"
          highlight="Stay"
          align="left"
          className="mb-14"
        />

        <div className="grid lg:grid-cols-3 gap-5 sm:gap-6">
          {/* Large featured tile */}
          <div className="lg:col-span-2 lg:row-span-2 relative overflow-hidden border border-white/10 min-h-[320px] group">
            <img
              src="https://i.pinimg.com/736x/a5/c8/d8/a5c8d8c59ea0ad752e141453393e5d7b.jpg"
              alt="Member training at Your Fitness Club"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="relative h-full flex flex-col justify-end p-7 sm:p-8 gap-2">
              <span className="font-teko text-5xl sm:text-6xl font-bold text-primary leading-none">
                18,000+
              </span>
              <p className="font-rajdhani text-sm uppercase tracking-[0.15em] text-heading/90">
                Sq. Ft. Of Training Floor
              </p>
            </div>
          </div>

          {reasons.map((r) => (
            <div
              key={r.title}
              className="group relative border border-white/10 bg-surface p-6 flex flex-col gap-3 hover:border-primary/50 transition-all duration-300"
            >
              <r.icon size={22} strokeWidth={1.75} className="text-primary" />
              <h3 className="font-rajdhani font-bold text-heading uppercase tracking-wide text-sm">
                {r.title}
              </h3>
              <p className="font-inter text-xs sm:text-sm text-body leading-relaxed">
                {r.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
