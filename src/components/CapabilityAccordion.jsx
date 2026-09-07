import { Link } from "react-router-dom";
import SectionHeading from "./ui/SectionHeading";
import { CAPABILITIES_DATA } from "../data/constants";

/* Smooth, luxury deceleration curve */
const SMOOTH_EASE = "ease-[cubic-bezier(0.25,1,0.5,1)]";

export default function CapabilityAccordion() {
  return (
    <section className="py-14 md:py-20 px-4 sm:px-6 md:px-12 lg:px-16 bg-canvas">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeading
          tag="What We Do"
          title="Built End to End"
          subtitle="Four disciplines, one roof — from raw fiber to the finished garment on a retail shelf."
        />

        {/* Outer Stack Frame with Enhanced Borders & Heavy Outer Drop-Shadow */}
        <div className="mt-6 md:mt-8 w-full rounded-2xl md:rounded-3xl overflow-hidden border-2 border-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] bg-onyx">
          <div className="flex flex-col md:flex-row w-full h-[600px] md:h-[640px]">
            {CAPABILITIES_DATA.map((item, idx) => {
              const Icon = item.icon;
              const itemDesc = item.description || item.desc;

              return (
                <Link
                  to="/capabilities"
                  key={item.id || item.slug || idx}
                  className={`group relative isolate overflow-hidden flex-1 md:hover:flex-[3.5] md:focus-within:flex-[3.5] transition-[flex] duration-700 ${SMOOTH_EASE} border-b-2 md:border-b-0 md:border-r-2 border-white/20 last:border-none shadow-[inset_0_0_40px_rgba(0,0,0,0.5)] cursor-pointer`}
                >
                  {/* Background Image */}
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      loading={idx === 0 ? "eager" : "lazy"}
                      decoding="async"
                      onError={(e) => {
                        if (item.fallback && !e.currentTarget.dataset.fallback) {
                          e.currentTarget.dataset.fallback = "1";
                          e.currentTarget.src = item.fallback;
                        }
                      }}
                      className={`absolute inset-0 -z-10 w-full h-full object-cover transform-gpu transition-transform duration-1000 ${SMOOTH_EASE} group-hover:scale-105`}
                    />
                  )}

                  {/* Dark Scrim Overlay */}
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/90 via-black/45 to-black/35 group-hover:from-black/95 group-hover:via-black/55 transition-colors duration-500" />

                  {/* --- COLLAPSED VERTICAL BADGE (Desktop View) --- */}
                  <div className="absolute bottom-0 left-0 z-20 p-3 md:p-4 group-hover:opacity-0 group-hover:pointer-events-none transition-opacity duration-300 hidden md:block">
                    <div className="bg-black/80 backdrop-blur-md px-3 py-5 rounded-sm border border-white/15 shadow-md flex items-center justify-center">
                      <span className="font-display text-xs md:text-sm tracking-widest text-canvas uppercase font-semibold [writing-mode:vertical-lr] rotate-180 whitespace-nowrap">
                        {item.title}
                      </span>
                    </div>
                  </div>

                  {/* --- EXPANDED CONTENT OVERLAY --- */}
                  <div className="relative z-10 h-full p-6 md:p-8 pt-12 md:pt-14 flex flex-col justify-between opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {/* Top Right Icon */}
                    <div className="flex items-center justify-end">
                      {Icon && (
                        <div className="p-3 rounded-full bg-black/60 backdrop-blur-md border border-white/15 shadow-lg">
                          <Icon className="w-5 h-5 md:w-6 md:h-6 text-mustard" strokeWidth={1.75} />
                        </div>
                      )}
                    </div>

                    {/* Bottom Title & Description */}
                    <div className={`transform-gpu translate-y-3 group-hover:translate-y-0 transition-transform duration-500 text-center ${SMOOTH_EASE}`}>
                      <h3 className="font-serif text-xl md:text-2xl text-canvas font-medium mb-2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)]">
                        {item.title}
                      </h3>
                      <p className="hidden md:block font-sans text-xs md:text-sm text-canvas/90 leading-relaxed max-w-lg mx-auto drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)]">
                        {itemDesc}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}