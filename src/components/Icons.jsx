import { Phone, MessageCircle } from "lucide-react";
<div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
  <a
    href="https://wa.me/918750002845"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp"
    className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
  >
    <MessageCircle size={26} />
  </a>

  <a
    href="tel:+918750002845"
    aria-label="Call"
    className="w-14 h-14 rounded-full bg-primary text-black flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
  >
    <Phone size={24} />
  </a>
</div>