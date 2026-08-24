import { Routes, Route } from "react-router-dom";
import { Phone, MessageCircle } from "lucide-react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Services from "./pages/Services";
import Membership from "./pages/Membership";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-offwhite">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />

      {/* Floating Call + WhatsApp Buttons */}
      <div className="fixed bottom-5 right-5 z-[90] flex flex-col gap-3">
        {/* WhatsApp */}
        <a
          href="https://wa.me/918750002845"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300"
        >
          <MessageCircle size={26} strokeWidth={2} />
        </a>

        {/* Call */}
        <a
          href="tel:+918750002845"
          aria-label="Call Your Fitness Club"
          className="w-14 h-14 rounded-full bg-primary text-black flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300"
        >
          <Phone size={24} strokeWidth={2} />
        </a>
      </div>
    </div>
  );
}