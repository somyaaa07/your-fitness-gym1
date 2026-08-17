import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "./Logo";
import JoinNowModal from "./JoinNowModal";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  // { to: "/trainers", label: "Trainers" },
  { to: "/services", label: "Services" },
  { to: "/membership", label: "Membership" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [joinOpen, setJoinOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/90 backdrop-blur-md border-b border-white/10 py-2"
            : "bg-gradient-to-b from-black/70 to-transparent py-3 sm:py-4"
        }`}
      >
        <nav className="container-x flex items-center justify-between">
          <Logo />

          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `relative font-rajdhani font-semibold uppercase tracking-wide text-sm pb-1 transition-colors duration-300 ${
                      isActive
                        ? "text-primary after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-primary"
                        : "text-offwhite/85 hover:text-primary"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <button
              type="button"
              onClick={() => setJoinOpen(true)}
              className="btn-primary group text-sm !py-2.5"
            >
              Join Now
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <button
            className="lg:hidden text-offwhite -mr-2 p-2"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} className="sm:hidden" />
            <Menu size={28} className="hidden sm:block" />
          </button>
        </nav>
      </header>

      {/* Mobile Drawer — rendered via portal directly into <body> so it is never
          trapped inside the header's backdrop-blur containing block (which would
          otherwise clip position:fixed to the header's own small box once the
          header picks up `backdrop-blur-md` on scroll). */}
      {createPortal(
        <div
          className={`fixed inset-0 z-[60] lg:hidden transition-all duration-300 ${
            open ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          <div
            className={`absolute inset-0 bg-black/70 transition-opacity duration-300 ${
              open ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => setOpen(false)}
          />
          <div
            className={`absolute top-0 right-0 h-full w-[82%] sm:w-[60%] max-w-xs bg-surface isolate transform-gpu shadow-2xl border-l border-white/10 p-5 sm:p-6 flex flex-col gap-6 sm:gap-8 overflow-y-auto transition-transform duration-300 ${
              open ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between">
              <Logo />
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-offwhite -mr-2 p-2">
                <X size={24} />
              </button>
            </div>

            <ul className="flex flex-col gap-4 sm:gap-5">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `font-rajdhani font-semibold uppercase tracking-wide text-base sm:text-lg ${
                        isActive ? "text-primary" : "text-offwhite/85"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => {
                setOpen(false);
                setJoinOpen(true);
              }}
              className="btn-primary justify-center mt-auto text-sm"
            >
              Join Now
            </button>
          </div>
        </div>,
        document.body
      )}

      <JoinNowModal open={joinOpen} onClose={() => setJoinOpen(false)} />
    </>
  );
}