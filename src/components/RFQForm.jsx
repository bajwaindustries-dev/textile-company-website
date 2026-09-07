import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";

export default function RFQForm() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-canvas-soft">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <SectionHeading
          tag="Get In Touch"
          title="Talk to Our Sourcing Team"
          subtitle="Tell us about your product needs on WhatsApp and our team will respond with pricing, lead times, and MOQ options within 24 hours."
        />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 mt-10 text-sm text-stone-700">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-mustard-deep shrink-0" /> bajwaindustryfsd@gmail.com
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-mustard-deep shrink-0" /> +92 321 1137545
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-mustard-deep shrink-0" /> Faisalabad, Pakistan
          </div>
        </div>

        <a
          href="https://wa.me/923211137545"
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white px-10 py-4 rounded-full font-bold text-sm uppercase tracking-wider shadow-xl hover:shadow-emerald-900/30 transition-all duration-300 hover:scale-105"
        >
          <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
        </a>
      </div>
    </section>
  );
}
