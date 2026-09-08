import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, MessageCircle } from "lucide-react";
import { StitchCheckIcon } from "./icons/BrandIcons";
import ContactPopup from "./ContactPopup";
import { STEPS } from "../data/constants";

const SLIDE_MS = 5000;

function Slideshow({ images, alt, className, offset = 0 }) {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    setTick(0);
    if (images.length < 2) return;
    const timer = setInterval(() => setTick((t) => t + 1), SLIDE_MS);
    return () => clearInterval(timer);
  }, [images]);

  const current = images[(tick + offset) % images.length];

  return (
    <AnimatePresence>
      <motion.img
        key={current}
        src={current}
        alt={alt}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        className={className}
      />
    </AnimatePresence>
  );
}

const AnimatedSection = ({ children, className = "", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function CapabilityDetail() {
  const { slug } = useParams();

  const index = STEPS.findIndex((s) => s.slug === slug);
  const department = STEPS[index];

  if (!department) return <Navigate to="/capabilities" replace />;

  const prev = STEPS[(index - 1 + STEPS.length) % STEPS.length];
  const next = STEPS[(index + 1) % STEPS.length];
  const gallery = department.gallery || [];
  const deptNumber = String(index + 1).padStart(2, "0");

  const whatsappHref = `https://wa.me/923211137545?text=${encodeURIComponent(
    `Hi, I'm interested in learning more about your ${department.title} capability.`
  )}`;

  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b border-stone-200 bg-canvas">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-4 flex items-center gap-2 text-xs font-medium text-stone-500 uppercase tracking-wider">
          <Link to="/capabilities" className="hover:text-onyx transition-colors">
            Capabilities
          </Link>
          <span className="text-stone-300">/</span>
          <span className="text-onyx">{department.title}</span>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="relative isolate overflow-hidden bg-onyx">
        <div className="relative h-[46vh] min-h-[340px] md:h-[54vh]">
          <Slideshow
            images={gallery}
            alt={department.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/30" />

          <div className="relative z-10 h-full max-w-6xl mx-auto px-6 lg:px-8 flex flex-col justify-end pb-10 md:pb-14">
            <span className="text-[11px] font-bold tracking-[0.25em] text-mustard uppercase mb-3">
              Department {deptNumber} / {String(STEPS.length).padStart(2, "0")}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-canvas mb-4 max-w-3xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
              {department.title}
            </h1>
            <p className="text-canvas/85 text-base md:text-lg max-w-2xl leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)]">
              {department.desc}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 md:py-20 px-6 bg-canvas">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 lg:grid-rows-2 gap-x-12 gap-y-8">
          {/* Highlights — mobile order 1, desktop top-left */}
          <AnimatedSection className="order-1 lg:order-none lg:col-span-7 lg:row-start-1">
            <span className="text-xs font-bold tracking-widest text-mustard-deep uppercase mb-3 block">
              Capability Highlights
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-onyx mb-6">
              What Happens on the Floor
            </h2>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4 pb-8 border-b border-stone-200">
              {department.details?.map((d) => (
                <li key={d} className="flex items-start gap-3 text-sm text-stone-700">
                  <StitchCheckIcon className="w-4.5 h-4.5 text-mustard-deep shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{d}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Slideshow — mobile order 2, desktop right column spanning both rows */}
          <AnimatedSection
            delay={0.1}
            className="order-2 lg:order-none lg:col-span-5 lg:row-start-1 lg:row-span-2"
          >
            <div className="relative rounded-xl overflow-hidden border border-stone-200 shadow-sm aspect-[4/5]">
              <Slideshow
                images={gallery}
                offset={1}
                alt={`${department.title} — facility detail`}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <p className="mt-3 text-xs text-stone-500 uppercase tracking-wider">
              {department.title} — Faisalabad Facility
            </p>
          </AnimatedSection>

          {/* Contact CTA — mobile order 3 (after the slideshow), desktop bottom-left */}
          <AnimatedSection
            delay={0.15}
            className="order-3 lg:order-none lg:col-span-7 lg:row-start-2 self-start"
          >
            <div className="rounded-xl border border-stone-200 bg-canvas-soft p-6 md:p-7 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8 justify-between">
              <div>
                <h3 className="font-serif text-lg font-semibold text-onyx mb-1">
                  Sourcing this capability?
                </h3>
                <p className="text-sm text-stone-600">
                  Get pricing, lead times, and MOQ options within 24 hours.
                </p>
              </div>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider shadow-md transition-colors shrink-0"
              >
                <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Prev / Next */}
      <section className="border-t border-stone-200 bg-canvas-soft">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2">
          <Link
            to={`/capabilities/${prev.slug}`}
            className="group flex items-center gap-4 px-6 lg:px-8 py-8 border-b sm:border-b-0 sm:border-r border-stone-200 hover:bg-canvas transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-stone-400 group-hover:-translate-x-1 group-hover:text-onyx transition-all shrink-0" />
            <div>
              <div className="text-[10px] font-bold tracking-widest text-stone-400 uppercase mb-1">
                Previous
              </div>
              <div className="font-serif font-semibold text-onyx">{prev.title}</div>
            </div>
          </Link>
          <Link
            to={`/capabilities/${next.slug}`}
            className="group flex items-center justify-between gap-4 px-6 lg:px-8 py-8 hover:bg-canvas transition-colors sm:text-right"
          >
            <div className="sm:order-1">
              <div className="text-[10px] font-bold tracking-widest text-stone-400 uppercase mb-1">
                Next
              </div>
              <div className="font-serif font-semibold text-onyx">{next.title}</div>
            </div>
            <ArrowRight className="w-4 h-4 text-stone-400 group-hover:translate-x-1 group-hover:text-onyx transition-all shrink-0 sm:order-2" />
          </Link>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 md:py-20 px-6 bg-onyx text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-canvas mb-4">
            Ready to move forward with {department.title}?
          </h2>
          <p className="text-canvas/75 text-sm md:text-base mb-8 leading-relaxed">
            Our sourcing team is based in Faisalabad and responds to every enquiry within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/capabilities"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-canvas/30 text-canvas rounded-full font-bold text-xs uppercase tracking-wider hover:bg-canvas hover:text-onyx transition-colors"
            >
              All Capabilities
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-mustard hover:bg-mustard-light text-onyx px-7 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-md transition-colors"
            >
              Request a Quote <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <ContactPopup department={department.title} />
    </>
  );
}
