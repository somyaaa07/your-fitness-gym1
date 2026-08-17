import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import Logo from "./Logo";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "./SocialIcons";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  // { to: "/trainers", label: "Trainers" },
  { to: "/services", label: "Services" },
  { to: "/membership", label: "Membership" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-white/10 ">
      <div className="container-x py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="font-inter text-sm text-muted max-w-xs">
            Train. Transform. Dominate. Premium equipment, expert
            trainers, personalized programs.
          </p>
          <div className="flex items-center gap-3 mt-1">
            {[FacebookIcon, InstagramIcon, YoutubeIcon].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social link"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-white/15 text-body hover:border-primary hover:text-primary transition-colors duration-300"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-rajdhani font-bold text-heading uppercase tracking-wide mb-4">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-2.5">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="font-inter text-sm text-muted hover:text-primary transition-colors duration-300"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-rajdhani font-bold text-heading uppercase tracking-wide mb-4">
            Contact
          </h4>
          <ul className="flex flex-col gap-3 text-sm text-muted font-inter">
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
              6th Floor, Zeal 31 (Plot 31), Techzone 4, Greater Noida West, Uttar Pradesh 201306
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={16} className="text-primary shrink-0" />
              <a href="tel:+919217688279" className="hover:text-primary transition-colors">
                +91 92176 88279
              </a>
              ,&nbsp;
              <a href="tel:+918826699811" className="hover:text-primary transition-colors">
                88266 99811
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={16} className="text-primary shrink-0" />
              <a href="mailto:hello@yourfitnessclub.com" className="hover:text-primary transition-colors">
                hello@yourfitnessclub.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-rajdhani font-bold text-heading uppercase tracking-wide mb-4">
            Opening Hours
          </h4>
          <p className="font-inter text-sm text-muted">Mon - Sat</p>
          <p className="font-teko text-3xl font-semibold text-primary leading-none mt-1">
            6:00 AM - 10:00 PM
          </p>
        </div>
      </div>

      <div className="relative flex flex-col sm:flex-row items-stretch overflow-hidden border-t border-white/10">
        <div className="flex-1 px-5 sm:px-12 py-4 flex items-center justify-center sm:justify-start">
          <p className="font-inter text-xs text-muted">
            &copy; {new Date().getFullYear()} Your Fitness Club. All rights reserved.
          </p>
        </div>
        <div className="relative bg-primary px-8 sm:px-16 py-4 flex items-center justify-center sm:justify-end clip-diagonal">
          <p className="font-teko text-xl sm:text-2xl font-semibold text-black uppercase leading-none text-center sm:text-right">
            Discipline Today <br className="hidden sm:block" /> Strength Forever
          </p>
        </div>
      </div>
    </footer>
  );
}
