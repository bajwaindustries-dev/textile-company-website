import { MessageCircle } from "lucide-react";

export default function WhatsAppWidget() {
  const phoneNumber = "923211137545";
  const defaultMessage = encodeURIComponent(
    "Hello Bajwa Industries, I would like to inquire about your manufacturing services."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    /* Icon-only pill on mobile, expands to the full "Chat with Us" label from sm+ */
    <aside aria-label="Contact via WhatsApp" className="flex fixed bottom-6 right-4 sm:right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-2xl hover:shadow-emerald-900/30 transition-all duration-300 hover:scale-105"
      >
        <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
        <span className="hidden sm:inline text-sm font-semibold tracking-wide pr-1">
          Chat with Us
        </span>
      </a>
    </aside>
  );
}