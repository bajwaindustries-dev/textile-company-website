import React from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppWidget() {
  // Replace with your company's WhatsApp phone number (with country code, no + or dashes)
  const phoneNumber = "923000000000"; 
  const defaultMessage = encodeURIComponent(
    "Hello Bajwa Industries, I would like to inquire about your manufacturing services."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    /* `hidden md:flex` ensures this widget ONLY renders on desktop/tablet screens (>=768px) */
    <aside aria-label="Contact via WhatsApp" className="hidden md:flex fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-3 rounded-full shadow-2xl hover:shadow-emerald-900/30 transition-all duration-300 hover:scale-105"
      >
        <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
        <span className="text-sm font-semibold tracking-wide pr-1">
          Chat with Us
        </span>
      </a>
    </aside>
  );
}