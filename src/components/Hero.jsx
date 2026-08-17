import { useState, useEffect } from "react";
import { ArrowRight, Flame } from "lucide-react";
import { Link } from "react-router-dom";

const quickStats = [
  { number: "500+", label: "Active Members" },
  { number: "20+", label: "Expert Coaches" },
  { number: "9", label: "Years Running" },
];

const tickerWords = [
  "TRAIN",
  "TRANSFORM",
  "DOMINATE",
  "NO SHORTCUTS",
  "NO EXCUSES",
];

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative w-full bg-bg overflow-hidden">
      <style>{`
        @keyframes yfc-ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .yfc-ticker-track { animation: yfc-ticker 20s linear infinite; }
        @media (prefers-reduced-motion: reduce) { .yfc-ticker-track { animation: none; } }
      `}</style>

      <div className="container-x pt-32 sm:pt-40 pb-14 sm:pb-20">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center">
          {/* Left: typography-led content */}
          <div className="flex flex-col gap-6">
            <div
              className={`flex items-center gap-3 transition-all duration-700 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
            >
              <span
                className="w-8 h-8 flex items-center justify-center bg-primary shrink-0"
                style={{ clipPath: "polygon(25% 2%, 75% 2%, 98% 50%, 75% 98%, 25% 98%, 2% 50%)" }}
              >
                <Flame size={15} className="text-black" strokeWidth={2.5} />
              </span>
              <span className="eyebrow">Your Fitness Club</span>
            </div>

            <h1
              className={`font-teko font-black uppercase leading-[0.82] text-6xl sm:text-7xl lg:text-8xl text-heading transition-all duration-700 delay-100 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Build The
              <br />
              <span className="text-primary">Strongest</span>
              <br />
              Version Of You
            </h1>

            <p
              className={`font-inter text-body text-sm sm:text-base max-w-md transition-all duration-700 delay-200 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              A training floor built on real coaching, real programming and a
              community that shows up. No fads — just consistent work that
              compounds.
            </p>

            <div
              className={`flex flex-wrap gap-4 transition-all duration-700 delay-300 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Link
                to="/membership"
                className="group inline-flex items-center justify-center gap-2 bg-primary hover:opacity-90 text-black font-rajdhani font-bold uppercase text-sm tracking-wide px-7 py-4 transition"
              >
                Start Training
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/programs"
                className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-primary hover:text-primary text-heading font-rajdhani font-bold uppercase text-sm tracking-wide px-7 py-4 transition-colors"
              >
                See Programs
              </Link>
            </div>

            {/* quick stat cluster */}
            <div
              className={`flex flex-wrap gap-6 sm:gap-8 pt-6 mt-2 border-t border-white/10 transition-all duration-700 delay-500 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {quickStats.map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="font-teko text-3xl sm:text-4xl font-bold text-heading tabular-nums leading-none">
                    {s.number}
                  </span>
                  <span className="font-rajdhani text-[11px] uppercase tracking-[0.15em] text-muted mt-1.5">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: hex-clipped image with floating badge */}
          <div
            className={`relative transition-all duration-1000 delay-200 ${
              loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              <div
                className="absolute inset-0 bg-primary/25"
                style={{ clipPath: "polygon(25% 2%, 75% 2%, 98% 50%, 75% 98%, 25% 98%, 2% 50%)" }}
              />
              <div
                className="absolute inset-[10px] overflow-hidden"
                style={{ clipPath: "polygon(25% 2%, 75% 2%, 98% 50%, 75% 98%, 25% 98%, 2% 50%)" }}
              >
                <img
                  src="/banner2.png"
                  alt="Member training at Your Fitness Club"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-4 -left-4 sm:-left-8 bg-surface border border-primary/40 px-5 py-4 shadow-glow">
                <p className="font-teko text-2xl sm:text-3xl font-bold text-primary leading-none">
                  50% OFF
                </p>
                <p className="font-rajdhani text-[10px] uppercase tracking-[0.15em] text-muted mt-1">
                  Founding Member Offer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* full-bleed ticker strip */}
      <div className="relative border-y border-white/10 bg-primary overflow-hidden">
        <div className="flex whitespace-nowrap py-3.5 yfc-ticker-track w-max">
          {[...tickerWords, ...tickerWords, ...tickerWords].map((w, i) => (
            <span
              key={i}
              className="flex items-center font-teko text-xl sm:text-2xl font-bold uppercase text-black tracking-wide px-6"
            >
              {w}
              <span className="mx-6 w-1.5 h-1.5 rounded-full bg-black/50" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
