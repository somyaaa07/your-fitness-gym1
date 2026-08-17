import { useState, useEffect, useRef } from "react";
import { Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";

const pillars = ["Coaching", "Programming", "Community", "Recovery"];

const stats = [
  { number: "9", label: "Years Open" },
  { number: "500+", label: "Members" },
  { number: "20+", label: "Coaches" },
  { number: "6", label: "Days A Week" },
];

export default function About() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative bg-surface2/60 py-20 sm:py-28">
      <div className="container-x">
        <div
          className={`grid lg:grid-cols-[1fr_0.55fr] gap-10 lg:gap-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Left: statement */}
          <div className="flex flex-col gap-6">
            <span className="eyebrow">Our Story</span>
            <p className="font-teko text-4xl sm:text-5xl lg:text-6xl font-semibold uppercase text-heading leading-[1.02]">
             
              Built for those <span className="text-primary">who put in the work</span>
            </p>
            <p className="font-inter text-body text-sm sm:text-base max-w-xl">
              Your Fitness Club started with one floor, three coaches and a
              simple rule — every program has to earn its place. Nine years
              on, that's still how we run things: real coaching, honest
              programming, and a community that holds you accountable on the
              days motivation doesn't show up.
            </p>

            <div className="flex flex-wrap gap-3 mt-2">
              {pillars.map((p) => (
                <span
                  key={p}
                  className="font-rajdhani text-xs font-semibold uppercase tracking-wide text-primary border border-primary/40 px-4 py-2"
                >
                  {p}
                </span>
              ))}
            </div>

            <Link
              to="/about"
              className="group inline-flex w-fit items-center gap-2 text-heading font-rajdhani font-bold uppercase text-sm tracking-wide mt-2 border-b-2 border-primary pb-1"
            >
              Read Our Full Story
              <Dumbbell size={15} className="transition-transform group-hover:rotate-12" />
            </Link>
          </div>

          {/* Right: quote card */}
          <div className="relative bg-surface border border-white/10 p-7 sm:p-8 flex flex-col justify-between gap-8 self-start">
            <span className="font-teko text-6xl text-primary leading-none">“</span>
            <p className="font-inter text-body text-sm sm:text-base italic">
              Consistency beats intensity. Show up, do the work that's on the
              board, and the results take care of themselves.
            </p>
            <div>
              <p className="font-rajdhani font-bold text-heading uppercase text-sm tracking-wide">
                Founder's Note
              </p>
              <p className="font-inter text-xs text-muted mt-0.5">
                Your Fitness Club, Greater Noida West
              </p>
            </div>
          </div>
        </div>

        {/* stat ribbon */}
        <div
          className={`mt-14 sm:mt-20 grid grid-cols-2 sm:grid-cols-4 border-t border-white/10 transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`py-8 px-2 sm:px-6 ${i !== 0 ? "sm:border-l border-white/10" : ""}`}
            >
              <div className="font-teko text-4xl sm:text-5xl font-bold text-heading tabular-nums">
                {s.number}
              </div>
              <div className="font-rajdhani text-[11px] uppercase tracking-[0.15em] text-muted mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
