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

      {/* Full-bleed background banner */}
      <div className="absolute inset-0">
        <img
          src="/HomeBanner.png"
          alt="Home Section Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/85 to-bg/40" />
        {/* <div className="absolute inset-0 bg-gradient-to-r from-bg/90 via-bg/40 to-transparent" /> */}
      </div>

      <div className="container-x relative pt-28 xs:pt-32 sm:pt-40 md:pt-44 lg:pt-40 pb-16 xs:pb-20 sm:pb-24 md:pb-28">
        <div className="flex flex-col gap-4 xs:gap-5 sm:gap-6 max-w-2xl">
          <div
            className={`flex items-center gap-2.5 xs:gap-3 transition-all duration-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            {/* <span
              className="w-7 h-7 xs:w-8 xs:h-8 flex items-center justify-center bg-primary shrink-0"
              style={{ clipPath: "polygon(25% 2%, 75% 2%, 98% 50%, 75% 98%, 25% 98%, 2% 50%)" }}
            >
              <Flame size={13} className="text-black xs:hidden" strokeWidth={2.5} />
              <Flame size={15} className="text-black hidden xs:block" strokeWidth={2.5} />
            </span> */}
            <span className="eyebrow !text-[10px] xs:!text-xs sm:!text-sm">Your Fitness Club</span>
          </div>

          <h1
            className={`font-teko font-black uppercase leading-[1.05] xs:leading-[0.95] sm:leading-[0.92] md:leading-[0.9] lg:leading-[0.92] xl:leading-[0.98] text-4xl xs:text-[2.75rem] sm:text-6xl md:text-6xl lg:text-7xl xl:text-7xl text-heading transition-all duration-700 delay-100 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Build The
            <br />
            <span className="text-primary">Strongest</span>
            <br />
            Version Of You
          </h1>

          <p
            className={`font-inter text-body text-xs xs:text-sm sm:text-base max-w-[92%] xs:max-w-sm sm:max-w-md transition-all duration-700 delay-200 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            A training floor built on real coaching, real programming and a
            community that shows up. No fads — just consistent work that
            compounds.
          </p>

          <div
            className={`flex flex-col xs:flex-row gap-3 xs:gap-4 w-full xs:w-auto transition-all duration-700 delay-300 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Link
              to="/membership"
              className="group inline-flex items-center justify-center gap-2 bg-primary hover:opacity-90 text-black font-rajdhani font-bold uppercase text-xs xs:text-sm tracking-wide px-5 xs:px-7 py-3 xs:py-4 transition w-full xs:w-auto"
            >
              Start Training
              <ArrowRight size={14} className="xs:hidden transition-transform group-hover:translate-x-1" />
              <ArrowRight size={16} className="hidden xs:block transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/programs"
              className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-primary hover:text-primary text-heading font-rajdhani font-bold uppercase text-xs xs:text-sm tracking-wide px-5 xs:px-7 py-3 xs:py-4 transition-colors w-full xs:w-auto"
            >
              See Programs
            </Link>
          </div>

          {/* quick stat cluster */}
          <div
            className={`flex flex-wrap justify-between xs:justify-start gap-4 xs:gap-6 sm:gap-8 pt-5 xs:pt-6 mt-1 xs:mt-2 border-t border-white/10 transition-all duration-700 delay-500 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {quickStats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="font-teko text-lg xs:text-2xl sm:text-4xl font-bold text-heading tabular-nums leading-none">
                  {s.number}
                </span>
                <span className="font-rajdhani text-[8px] xs:text-[10px] uppercase tracking-[0.08em] xs:tracking-[0.15em] text-muted mt-1 xs:mt-1.5 whitespace-nowrap">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Floating offer badge */}
        {/* <div
          className={`absolute bottom-6 right-5 xs:bottom-8 xs:right-8 sm:bottom-10 sm:right-12 bg-surface border border-primary/40 px-4 py-3 xs:px-5 xs:py-4 shadow-glow transition-all duration-1000 delay-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="font-teko text-xl xs:text-2xl sm:text-3xl font-bold text-primary leading-none">
            50% OFF
          </p>
          <p className="font-rajdhani text-[9px] xs:text-[10px] uppercase tracking-[0.1em] xs:tracking-[0.15em] text-muted mt-1 whitespace-nowrap">
            Founding Member Offer
          </p>
        </div> */}
      </div>

      {/* full-bleed ticker strip */}
      <div className="relative border-y border-white/10 bg-primary overflow-hidden">
        <div className="flex whitespace-nowrap py-2.5 xs:py-3 sm:py-3.5 yfc-ticker-track w-max">
          {[...tickerWords, ...tickerWords, ...tickerWords].map((w, i) => (
            <span
              key={i}
              className="flex items-center font-teko text-sm xs:text-base sm:text-xl md:text-2xl font-bold uppercase text-black tracking-wide px-3 xs:px-4 sm:px-6"
            >
              {w}
              <span className="mx-3.5 xs:mx-4 sm:mx-6 w-1.5 h-1.5 rounded-full bg-black/50" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}