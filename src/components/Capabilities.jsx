import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { STEPS } from "../data/constants";

/* High-resolution industrial dummy photos */
const DUMMY_IMAGES = [
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80", // Yarn & Knitting
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80", // Dyeing & Finishing
  "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1000&q=80", // Cutting & Sewing
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80", // Quality Control
];

export default function Capabilities() {
  const [active, setActive] = useState(0);
  const ActiveIcon = STEPS[active]?.icon;

  return (
    <section id="capabilities" className="py-12 md:py-16 bg-canvas">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          tag="Our Capabilities"
          title="Vertically Integrated. Fully Controlled."
          subtitle="Every stage of production — from fiber to finished product — happens under one roof, ensuring quality, speed, and full traceability."
        />

        {/* ========================================== */}
        {/* 1. MOBILE VIEW: Standalone Compact Cards   */}
        {/* ========================================== */}
        <div className="flex flex-col gap-4 mt-8 lg:hidden">
          {STEPS.map((s, i) => {
            const StepIcon = s.icon;
            const cardImg = s.image || s.bgImage || DUMMY_IMAGES[i % DUMMY_IMAGES.length];

            return (
              <div
                key={s.slug || i}
                className="group relative isolate overflow-hidden rounded-xl border border-stone-300/40 bg-onyx p-5 shadow-md flex flex-col justify-between"
              >
                {/* Background Image & Overlay */}
                <img
                  src={cardImg}
                  alt={s.title}
                  loading="lazy"
                  className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/90 via-black/80 to-black/95 pointer-events-none" />

                <div>
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-mustard text-onyx flex items-center justify-center shrink-0 shadow-md">
                      <StepIcon className="w-5 h-5 text-onyx" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-mustard tracking-widest uppercase">
                        DEPARTMENT {String(i + 1).padStart(2, "0")}
                      </div>
                      <h3 className="font-serif text-lg font-bold text-canvas">
                        {s.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-canvas/80 text-xs sm:text-sm mb-4 leading-relaxed">
                    {s.desc}
                  </p>

                  <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2 pt-3 border-t border-white/10 mb-4">
                    {s.details?.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-xs text-canvas/90">
                        <CheckCircle2 className="w-3.5 h-3.5 text-mustard shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] text-canvas/50 font-medium uppercase tracking-wider">
                    Detailed View
                  </span>
                  <Link
                    to={`/capabilities/${s.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-mustard hover:text-white uppercase tracking-[0.1em] transition-colors group/link"
                  >
                    <span>View Facility</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================== */}
        {/* 2. DESKTOP VIEW: Compact Tabbed Layout     */}
        {/* ========================================== */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-6 mt-10 items-stretch">
          {/* LEFT SELECTION BOXES (Compact Tighter Gap) */}
          <div className="lg:col-span-5 flex flex-col gap-2.5 justify-between">
            {STEPS.map((s, i) => {
              const StepIcon = s.icon;
              const isActive = active === i;
              const tabImg = s.image || s.bgImage || DUMMY_IMAGES[i % DUMMY_IMAGES.length];

              return (
                <button
                  key={s.slug || i}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`group relative isolate overflow-hidden text-left p-3.5 md:p-4 rounded-xl transition-all duration-300 border text-canvas ${
                    isActive
                      ? "border-2 border-mustard ring-1 ring-mustard/40 shadow-[0_8px_25px_rgba(0,0,0,0.45)] scale-[1.01]"
                      : "border-stone-300/30 hover:border-mustard/60 hover:shadow-md"
                  }`}
                >
                  {/* Background Image */}
                  <img
                    src={tabImg}
                    alt={s.title}
                    loading="lazy"
                    className={`absolute inset-0 -z-10 h-full w-full object-cover transform-gpu transition-transform duration-700 ${
                      isActive ? "scale-110" : "scale-100 group-hover:scale-105"
                    }`}
                  />

                  {/* Dark Scrim Overlay */}
                  <div
                    className={`absolute inset-0 -z-10 transition-colors duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-black/90 via-black/80 to-black/65"
                        : "bg-gradient-to-r from-black/80 via-black/70 to-black/50 group-hover:from-black/75 group-hover:via-black/60"
                    }`}
                  />

                  <div className="flex items-center gap-3.5">
                    {/* Compact Icon Badge */}
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 shadow-md ${
                        isActive
                          ? "bg-mustard text-onyx scale-105"
                          : "bg-black/50 backdrop-blur-md text-canvas border border-white/15 group-hover:border-mustard/40"
                      }`}
                    >
                      <StepIcon className="w-5 h-5" />
                    </div>

                    <div>
                      <div
                        className={`text-[11px] font-bold tracking-widest uppercase mb-0.5 transition-colors ${
                          isActive ? "text-mustard" : "text-mustard/80"
                        }`}
                      >
                        DEPARTMENT {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className="font-serif font-bold text-base md:text-lg text-canvas drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                        {s.title}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT FEATURE DETAIL PANEL (Shorter & Compact) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={STEPS[active]?.slug || active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group relative isolate overflow-hidden rounded-xl border-2 border-white/15 bg-onyx p-6 md:p-7 h-full flex flex-col justify-between shadow-xl"
              >
                {/* Background Image of Selected Department */}
                <img
                  src={
                    STEPS[active]?.image ||
                    STEPS[active]?.bgImage ||
                    DUMMY_IMAGES[active % DUMMY_IMAGES.length]
                  }
                  alt={STEPS[active]?.title}
                  className="absolute inset-0 -z-10 h-full w-full object-cover transform-gpu transition-transform duration-1000 group-hover:scale-105"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-black/95 via-black/85 to-black/60 pointer-events-none" />

                <div>
                  {/* Compact Header Icon */}
                  <div className="w-12 h-12 rounded-xl bg-mustard text-onyx flex items-center justify-center mb-4 shadow-lg border border-white/20">
                    {ActiveIcon && <ActiveIcon className="w-6 h-6 text-onyx" />}
                  </div>

                  <h3 className="font-serif text-2xl md:text-3xl text-canvas font-medium mb-2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                    {STEPS[active]?.title}
                  </h3>

                  <p className="text-canvas/85 text-sm md:text-base mb-5 leading-relaxed max-w-xl drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                    {STEPS[active]?.desc}
                  </p>

                  {/* Bullet Points Details Grid */}
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-5 pt-4 border-t border-white/15">
                    {STEPS[active]?.details?.map((d) => (
                      <li key={d} className="flex items-start gap-2.5 text-xs md:text-sm text-canvas/90">
                        <CheckCircle2 className="w-4 h-4 text-mustard shrink-0 mt-0.5" />
                        <span className="drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Desktop Action Link */}
                <div className="pt-4 border-t border-white/15 flex items-center justify-between">
                  <span className="text-[11px] text-canvas/60 font-medium uppercase tracking-wider">
                    Full Facility Specs
                  </span>
                  <Link
                    to={`/capabilities/${STEPS[active]?.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-mustard hover:text-white uppercase tracking-[0.1em] transition-colors group/link"
                  >
                    <span>View Facility</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}