import { useState } from "react";
import { Check, X, Plus, Minus, Crown, ShieldCheck, Sparkles, Dumbbell } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import { Link } from "react-router-dom";
import { memberships, comparisonFeatures, membershipFaqs } from "../data/memberships";

const planIcons = { basic: ShieldCheck, premium: Sparkles, ultimate: Dumbbell };

const trustPoints = [
  "No joining fee",
  "Month-to-month, cancel anytime",
  "One-day free trial pass",
];

function parsePrice(price) {
  return Number(price.replace(/[^0-9]/g, ""));
}

function formatINR(n) {
  return "₹" + n.toLocaleString("en-IN");
}

function FaqItem({ q, a, index }) {
  const [open, setOpen] = useState(false);
  const num = String(index + 1).padStart(2, "0");

  return (
    <div
      className={`group relative rounded-xl p-[1.5px] transition-all duration-500 ${
        open
          ? "bg-gradient-to-r from-primary/70 via-primary/30 to-transparent"
          : "bg-gradient-to-br from-white/10 to-white/[0.03] hover:from-primary/40 hover:to-white/5"
      }`}
    >
      <div className="rounded-[10px] bg-surface overflow-hidden">
        <button
          onClick={() => setOpen((o) => !o)}
          className="w-full flex items-center gap-4 sm:gap-5 px-5 sm:px-6 py-5 text-left"
        >
          <span
            className={`font-teko text-3xl sm:text-4xl font-semibold leading-none shrink-0 transition-colors duration-300 ${
              open ? "text-primary" : "text-white/10"
            }`}
          >
            {num}
          </span>
          <span
            className={`flex-1 font-rajdhani font-semibold uppercase tracking-wide text-sm sm:text-base transition-colors duration-300 ${
              open ? "text-primary" : "text-heading"
            }`}
          >
            {q}
          </span>
          <span
            className={`shrink-0 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full border transition-all duration-300 ${
              open
                ? "bg-primary border-primary text-black"
                : "border-white/20 text-body group-hover:border-primary/60 group-hover:text-primary"
            }`}
          >
            {open ? <Minus size={16} /> : <Plus size={16} />}
          </span>
        </button>
        <div
          className={`grid transition-all duration-300 ${
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <p className="font-inter text-sm text-body pl-[3rem] sm:pl-[4.75rem] pr-4 sm:pr-14 pb-5 -mt-1">
              {a}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BillingToggle({ annual, setAnnual }) {
  return (
    <div className="relative inline-flex items-center gap-1 p-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm">
      <span
        className="absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] rounded-full bg-primary transition-all duration-300 ease-out"
        style={{ left: annual ? "calc(50% + 0px)" : "6px" }}
      />
      <button
        onClick={() => setAnnual(false)}
        className={`relative z-10 font-rajdhani font-bold uppercase text-sm tracking-wide px-6 py-2.5 rounded-full transition-colors duration-300 ${
          !annual ? "text-black" : "text-body hover:text-heading"
        }`}
      >
        Monthly
      </button>
      <button
        onClick={() => setAnnual(true)}
        className={`relative z-10 flex items-center gap-2 font-rajdhani font-bold uppercase text-sm tracking-wide px-6 py-2.5 rounded-full transition-colors duration-300 ${
          annual ? "text-black" : "text-body hover:text-heading"
        }`}
      >
        Annual
        <span
          className={`text-[10px] px-1.5 py-0.5 rounded-full ${
            annual ? "bg-black/15 text-black" : "bg-primary/15 text-primary"
          }`}
        >
          2 mo free
        </span>
      </button>
    </div>
  );
}

function PlanCard({ plan, annual }) {
  const Icon = planIcons[plan.id] || ShieldCheck;
  const monthly = parsePrice(plan.price);
  const displayPrice = annual ? formatINR(monthly * 10) : plan.price;
  const displayPeriod = annual ? "/ year" : plan.period;

  return (
    <div
      className={`relative flex flex-col rounded-xl p-8 transition-all duration-300 ${
        plan.popular
          ? "bg-surface border-2 border-primary shadow-glow lg:scale-105 z-10"
          : "bg-surface border border-white/10 hover:border-white/25"
      }`}
    >
      {plan.popular && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-primary text-black font-rajdhani font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
          <Crown size={13} /> Most Popular
        </span>
      )}

      <div
        className={`w-12 h-12 flex items-center justify-center rounded-full mb-5 ${
          plan.popular ? "bg-primary text-black" : "bg-primary/10 text-primary"
        }`}
      >
        <Icon size={22} strokeWidth={1.75} />
      </div>

      <h3
        className={`font-teko text-3xl font-semibold uppercase leading-none ${
          plan.popular ? "text-primary" : "text-heading"
        }`}
      >
        {plan.name}
      </h3>

      <div className="flex items-end gap-1.5 mt-5 mb-1">
        <span className="font-teko text-5xl font-bold text-offwhite leading-none tabular-nums">
          {displayPrice}
        </span>
        <span className="font-rajdhani text-muted text-sm mb-1">{displayPeriod}</span>
      </div>
      {annual && (
        <p className="font-inter text-xs text-primary">
          Save {formatINR(monthly * 2)} a year
        </p>
      )}

      <div className="h-px bg-white/10 my-6" />

      <ul className="flex flex-col gap-3.5 mb-8 flex-1">
        {plan.features.map((f) => (
          <li key={f} className="flex items-center gap-3 text-sm text-body font-inter">
            <span
              className={`shrink-0 w-5 h-5 flex items-center justify-center rounded-full ${
                plan.popular ? "bg-primary/20 text-primary" : "bg-white/5 text-muted"
              }`}
            >
              <Check size={12} strokeWidth={3} />
            </span>
            {f}
          </li>
        ))}
      </ul>

      <Link to="/contact">
        <button
          className={`w-full font-rajdhani font-bold uppercase tracking-wide py-3.5 rounded-md transition-all duration-300 ${
            plan.popular
              ? "bg-primary text-black hover:bg-primaryDark hover:shadow-glow"
              : "bg-transparent border border-white/15 text-offwhite hover:border-primary hover:text-primary"
          }`}
        >
          Choose {plan.name}
        </button>
      </Link>
    </div>
  );
}

export default function Membership() {
  const [annual, setAnnual] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Membership"
        title="Choose "
        highlight="Perfect Plan"
        description="Flexible membership plans designed to fit your fitness goals, schedule, and lifestyle. Get access to quality training, a motivating community, and everything you need to stay consistent and achieve results."
        image="/membershipBanner.png"
        primaryBtnText="Contact Us"
        primaryBtnLink="/contact"
        secondaryBtnText="Learn More"
        secondaryBtnLink="/about"
      />

      {/* Pricing */}
      <section className="py-16 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Pricing"
            title="Plans For Every"
            highlight="Commitment"
            align="center"
            className="mb-8"
          />

          <div className="flex justify-center mb-16">
            <BillingToggle annual={annual} setAnnual={setAnnual} />
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto md:items-center">
            {memberships.map((plan) => (
              <div
                key={plan.id}
                className={`transition-all duration-300 ${
                  plan.popular ? "md:-translate-y-4 md:scale-105 relative z-10" : "opacity-90"
                }`}
              >
                <PlanCard plan={plan} annual={annual} />
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-14">
            {trustPoints.map((t) => (
              <span
                key={t}
                className="flex items-center gap-2 font-rajdhani text-sm text-body"
              >
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-primary/15 text-primary shrink-0">
                  <Check size={13} strokeWidth={3} />
                </span>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Full comparison table */}
      <section className="py-16 sm:py-24 bg-surface2">
        <div className="container-x flex flex-col items-center">
          <SectionHeading
            eyebrow="What's Included"
            title="Compare Every"
            highlight="Plan"
            align="center"
            className="mb-14"
          />

          <div className="w-full max-w-6xl rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left font-rajdhani text-xs uppercase tracking-wide text-muted font-semibold px-6 sm:px-8 py-6 w-[34%]">
                    Feature
                  </th>
                  {memberships.map((plan) => (
                    <th
                      key={plan.id}
                      className={`text-center px-4 py-6 ${
                        plan.popular ? "bg-primary/[0.06]" : ""
                      }`}
                    >
                      <div className="flex flex-col items-center gap-1">
                        {plan.popular && (
                          <span className="flex items-center gap-1 text-[10px] font-rajdhani font-bold uppercase tracking-widest text-primary">
                            <Crown size={11} /> Popular
                          </span>
                        )}
                        <span className="font-teko text-2xl font-semibold uppercase text-heading leading-none">
                          {plan.name}
                        </span>
                        <span className="font-inter text-xs text-muted">{plan.price}{plan.period}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-white/[0.015]" : ""}>
                    <td className="font-inter text-sm text-body px-6 sm:px-8 py-4">
                      {row.feature}
                    </td>
                    {memberships.map((plan) => {
                      const value = row[plan.id];
                      const included = value === true || typeof value === "string";
                      return (
                        <td
                          key={plan.id}
                          className={`text-center px-4 py-4 ${
                            plan.popular ? "bg-primary/[0.04]" : ""
                          }`}
                        >
                          {typeof value === "string" ? (
                            <span className="font-rajdhani font-semibold text-xs sm:text-sm text-primary">
                              {value}
                            </span>
                          ) : (
                            <span
                              className={`inline-flex w-6 h-6 sm:w-7 sm:h-7 items-center justify-center rounded-full ${
                                included ? "bg-primary/15 text-primary" : "bg-white/5 text-muted/40"
                              }`}
                            >
                              {included ? <Check size={13} /> : <X size={13} />}
                            </span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ — modern flat list, two columns */}
      <section className="py-16 sm:py-24">
        <div className="container-x flex flex-col items-center">
          <SectionHeading eyebrow="FAQ" title="Common" highlight="Questions" className="mb-12" />
          <div className="w-full max-w-6xl mx-auto grid sm:grid-cols-2 sm:gap-x-14 gap-4">
            <div className="flex flex-col gap-4">
              {membershipFaqs
                .filter((_, i) => i % 2 === 0)
                .map((f) => (
                  <FaqItem key={f.q} {...f} index={membershipFaqs.indexOf(f)} />
                ))}
            </div>
            <div className="flex flex-col gap-4">
              {membershipFaqs
                .filter((_, i) => i % 2 !== 0)
                .map((f) => (
                  <FaqItem key={f.q} {...f} index={membershipFaqs.indexOf(f)} />
                ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
