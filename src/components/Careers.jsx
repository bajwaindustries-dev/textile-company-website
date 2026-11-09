import { Mail, Phone, MapPin } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";

export default function Careers() {
  return (
    <section id="careers" className="py-20 md:py-28 bg-canvas-soft">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <SectionHeading
          tag="Careers"
          title="We're Hiring"
          subtitle="Bajwa Industries is growing, and we're looking for skilled, motivated people to join our team in Faisalabad — on the production floor and in the office. If you'd like to build your career with a vertically integrated knitwear manufacturer, send us your CV by email or contact us on the number below."
        />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 mt-10 text-sm text-stone-700">
          <a
            href="mailto:bajwaindustryfsd@gmail.com?subject=Job%20Application"
            className="flex items-center gap-2 hover:text-onyx transition-colors"
          >
            <Mail className="w-4 h-4 text-mustard-deep shrink-0" /> bajwaindustryfsd@gmail.com
          </a>
          <a
            href="tel:+923107471706"
            className="flex items-center gap-2 whitespace-nowrap hover:text-onyx transition-colors"
          >
            <Phone className="w-4 h-4 text-mustard-deep shrink-0" /> +92 310 7471706
          </a>
          <div className="flex items-center gap-2 whitespace-nowrap">
            <MapPin className="w-4 h-4 text-mustard-deep shrink-0" /> Faisalabad, Pakistan
          </div>
        </div>

        <a
          href="mailto:bajwaindustryfsd@gmail.com?subject=Job%20Application"
          className="mt-10 inline-flex items-center justify-center gap-3 bg-onyx hover:bg-onyx-soft text-canvas px-10 py-4 rounded-full font-bold text-sm uppercase tracking-wider shadow-xl transition-all duration-300 hover:scale-105"
        >
          <Mail className="w-5 h-5" /> Email Your CV
        </a>
      </div>
    </section>
  );
}
