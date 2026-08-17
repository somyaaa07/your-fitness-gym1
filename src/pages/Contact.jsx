import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, Plus, Minus, MessageCircle } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "6th Floor, Zeal 31 (Plot 31), Techzone 4, Greater Noida West, Uttar Pradesh 201306",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 92176 88279, 88266 99811",
    href: "tel:+919217688279",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@yourfitnessclub.com",
    href: "mailto:hello@yourfitnessclub.com",
  },
  { icon: Clock, label: "Opening Hours", value: "Mon - Sat : 6:00 AM - 10:00 PM" },
];

const contactFaqs = [
  {
    q: "How quickly will I get a response?",
    a: "Our team typically replies within 24 hours on weekdays. For anything urgent, call us directly and we'll pick up.",
  },
  {
    q: "Can I schedule a free trial or tour before joining?",
    a: "Yes — use the form below or call us to book a walk-through of the facility and a free trial session with one of our trainers.",
  },
  {
    q: "Do you offer corporate or group memberships?",
    a: "We do. Mention it in your message subject and our team will reach out with corporate and group pricing options.",
  },
  {
    q: "Where exactly are you located?",
    a: "We're on the 6th Floor of Zeal 31 (Plot 31), Techzone 4, Greater Noida West — see the map above for directions and nearby parking.",
  },
  {
    q: "What's the best way to reach the front desk directly?",
    a: "Call or WhatsApp us at +91 92176 88279 or 88266 99811 and our team will assist you right away.",
  },
];

function ContactFaqItem({ q, a, index }) {
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

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      <PageHero
        image="/contactbanner1.png"
        eyebrow="Get In Touch"
        title="Contact "
        highlight="us"
        description="Have a question, need more information, or ready to bring your ideas to life? Get in touch with our team today. We’re here to listen, help, and find the right solution for you."
        primaryBtnText="Contact Us"
        primaryBtnLink="/contact"
        secondaryBtnText="Learn More"
        secondaryBtnLink="/about"
      />

      {/* Quick info strip */}
      <section className="py-14 sm:py-20 bg-surface">
        <div className="container-x">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {contactInfo.map((info) => {
              const Content = (
                <>
                  <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-full bg-primary/15 border border-primary/50 text-primary">
                    <info.icon size={20} strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="font-rajdhani font-bold text-heading uppercase tracking-wide text-xs">
                      {info.label}
                    </h3>
                    <p className="font-inter text-sm text-body mt-1 leading-snug">
                      {info.value}
                    </p>
                  </div>
                </>
              );
              return info.href ? (
                <a
                  key={info.label}
                  href={info.href}
                  className="card-dark flex items-start gap-4 p-6 hover:border-primary/50 transition-colors duration-300"
                >
                  {Content}
                </a>
              ) : (
                <div key={info.label} className="card-dark flex items-start gap-4 p-6">
                  {Content}
                </div>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12">
            {/* Map */}
            <div className="relative h-72 lg:h-full min-h-[320px] w-full overflow-hidden rounded-xl border border-white/10 bg-surface shadow-lg">
              <iframe
                className="absolute inset-0 h-full w-full border-0"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBVizdQeh3udy11xDc5Ao2YStR2gLc-rfc&q=Your%20Fitness%20Club%2C%206th%20Floor%2C%20Zeal%2031%2C%20Plot%2031%2C%20Techzone%204%2C%20Greater%20Noida%20West%2C%20Uttar%20Pradesh%20201306&maptype=roadmap&zoom=15"
                title="Your Fitness Club Location"
                allowFullScreen
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center gap-3 rounded-lg border border-white/10 bg-black/60 px-4 py-3 text-white backdrop-blur-md">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/15">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold">Your Fitness Club</p>
                  <p className="truncate text-xs text-white/60">
                    Zeal 31, Techzone 4, Greater Noida West
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="card-dark p-8 flex flex-col gap-5">
              <div className="flex items-center justify-between gap-4">
                <h2 className="font-teko text-3xl font-semibold text-heading uppercase">
                  Send Us A Message
                </h2>
                <a
                  href="https://wa.me/919217688279"
                  target="_blank"
                  rel="noreferrer"
                  className="hidden sm:flex items-center gap-2 font-rajdhani font-semibold text-xs uppercase tracking-wide text-primary hover:text-heading transition-colors"
                >
                  <MessageCircle size={16} />
                  WhatsApp Us
                </a>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-rajdhani text-xs font-semibold uppercase tracking-wide text-muted">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="bg-black/40 border border-white/15 rounded-md px-4 py-3 text-sm text-offwhite font-inter focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-rajdhani text-xs font-semibold uppercase tracking-wide text-muted">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="bg-black/40 border border-white/15 rounded-md px-4 py-3 text-sm text-offwhite font-inter focus:outline-none focus:border-primary transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="font-rajdhani text-xs font-semibold uppercase tracking-wide text-muted">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    className="bg-black/40 border border-white/15 rounded-md px-4 py-3 text-sm text-offwhite font-inter focus:outline-none focus:border-primary transition-colors"
                    placeholder="+91 12345 67890"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="font-rajdhani text-xs font-semibold uppercase tracking-wide text-muted">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    className="bg-black/40 border border-white/15 rounded-md px-4 py-3 text-sm text-offwhite font-inter focus:outline-none focus:border-primary transition-colors"
                    placeholder="How can we help?"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-rajdhani text-xs font-semibold uppercase tracking-wide text-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="bg-black/40 border border-white/15 rounded-md px-4 py-3 text-sm text-offwhite font-inter focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell us what you're looking for..."
                />
              </div>

              <button type="submit" className="btn-primary justify-center group">
                Send Message
                <Send size={16} className="transition-transform group-hover:translate-x-1" />
              </button>

              {submitted && (
                <p className="text-primary font-rajdhani font-semibold text-sm text-center animate-fadeIn">
                  Message sent! We'll get back to you shortly.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="container-x relative">
          <SectionHeading
            eyebrow="FAQ"
            title="Common"
            highlight="Questions"
            align="left"
            className="mb-14"
          />

          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-14 items-start">
            {/* Side CTA panel */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 p-8 sm:p-10 flex flex-col gap-6 lg:sticky lg:top-28 bg-gradient-to-br from-surface to-black">
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary/10 blur-3xl" />
              <div className="relative w-14 h-14 flex items-center justify-center rounded-xl border border-primary/40 bg-black/30 text-primary">
                <Mail size={24} strokeWidth={1.75} />
              </div>
              <div className="relative flex flex-col gap-2">
                <h3 className="font-teko text-3xl font-semibold uppercase text-heading leading-none">
                  Still Have <span className="text-primary">Questions?</span>
                </h3>
                <p className="font-inter text-sm text-body">
                  Can't find what you're looking for? Reach out directly and our
                  team will get back to you right away.
                </p>
              </div>

              <div className="relative flex flex-col gap-3 pt-2 border-t border-white/10">
                <a
                  href="tel:+919217688279"
                  className="flex items-center gap-3 font-rajdhani font-semibold text-sm text-body hover:text-primary transition-colors duration-300"
                >
                  <Phone size={16} className="text-primary shrink-0" />
                  +91 92176 88279
                </a>
                <a
                  href="mailto:hello@yourfitnessclub.com"
                  className="flex items-center gap-3 font-rajdhani font-semibold text-sm text-body hover:text-primary transition-colors duration-300"
                >
                  <Mail size={16} className="text-primary shrink-0" />
                  hello@yourfitnessclub.com
                </a>
                <div className="flex items-center gap-3 font-rajdhani font-semibold text-sm text-body">
                  <Clock size={16} className="text-primary shrink-0" />
                  Mon - Sat: 6:00 AM - 10:00 PM
                </div>
              </div>
            </div>

            {/* FAQ list */}
            <div className="flex flex-col gap-4">
              {contactFaqs.map((f, i) => (
                <ContactFaqItem key={f.q} {...f} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
