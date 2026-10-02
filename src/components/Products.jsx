import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "./ui/SectionHeading";
import FittedImage from "./ui/FittedImage";
import { CATEGORIES, PRODUCTS } from "../data/constants";

/* Tab order for the Products page; it opens on Custom Fabrics.
   Any category not listed here is appended in its CATEGORIES order. */
const FABRIC_CATEGORY = "Custom Fabrics";
const DEFAULT_CATEGORY = FABRIC_CATEGORY;
const PAGE_ORDER = [DEFAULT_CATEGORY, "Casual & Fleece Wear", "Activewear & Performance"];
const PAGE_CATEGORIES = [
  ...PAGE_ORDER.filter((cat) => CATEGORIES.includes(cat)),
  ...CATEGORIES.filter((cat) => !PAGE_ORDER.includes(cat)),
];

/* Mobile: one swipeable row of pills. Edge fades + arrow buttons appear on
   whichever side has more pills, so it's obvious the row scrolls. */
function MobileCategoryPicker({ activeTab, setActiveTab }) {
  const rowRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  const updateArrows = useCallback(() => {
    const el = rowRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateArrows();
    const el = rowRef.current;
    const observer = new ResizeObserver(updateArrows);
    observer.observe(el);
    return () => observer.disconnect();
  }, [updateArrows]);

  const scrollByDir = (dir) => {
    const el = rowRef.current;
    el.scrollBy({ left: dir * el.clientWidth * 0.6, behavior: "smooth" });
  };

  const selectCategory = (cat, btn) => {
    setActiveTab(cat);
    // Bring a half-hidden pill fully into view once it's tapped
    btn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
  };

  return (
    <div className="relative -mx-6">
      <div
        ref={rowRef}
        onScroll={updateArrows}
        className="no-scrollbar px-6 scroll-px-6 flex gap-2 overflow-x-auto snap-x"
      >
        {PAGE_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={(e) => selectCategory(cat, e.currentTarget)}
            className={`snap-start shrink-0 whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all ${
              activeTab === cat
                ? "bg-onyx text-canvas border-onyx"
                : "bg-canvas text-stone-600 border-stone-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Left fade + arrow */}
      <div
        className={`absolute inset-y-0 left-0 flex items-center pl-2 pr-6 bg-gradient-to-r from-canvas via-canvas/90 to-transparent transition-opacity duration-300 ${
          canLeft ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          type="button"
          onClick={() => scrollByDir(-1)}
          aria-label="Scroll categories left"
          tabIndex={canLeft ? 0 : -1}
          className="w-7 h-7 rounded-full bg-onyx text-canvas flex items-center justify-center shadow-md"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
      </div>

      {/* Right fade + arrow */}
      <div
        className={`absolute inset-y-0 right-0 flex items-center pr-2 pl-6 bg-gradient-to-l from-canvas via-canvas/90 to-transparent transition-opacity duration-300 ${
          canRight ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          type="button"
          onClick={() => scrollByDir(1)}
          aria-label="Scroll categories right"
          tabIndex={canRight ? 0 : -1}
          className="w-7 h-7 rounded-full bg-onyx text-canvas flex items-center justify-center shadow-md animate-[nudge_1.6s_ease-in-out_3]"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default function Products() {
  const [activeTab, setActiveTab] = useState(DEFAULT_CATEGORY);
  // Fabric cards keep their spec tags + full button; garment cards are image + text link
  const isFabricTab = activeTab === FABRIC_CATEGORY;

  return (
    <section id="products" className="pt-5 pb-8 md:py-24 bg-canvas">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          compact
          tag="Product Range"
          title="Knitwear Categories Built For Every Brand"
          subtitle="From performance activewear to premium basics — explore our production categories and request fabric specifications instantly."
        />

        <div className="md:hidden mt-5 mb-6">
          <MobileCategoryPicker activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        <div className="hidden md:flex flex-wrap gap-3 justify-center mt-12 mb-12">
          {PAGE_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all border ${
                activeTab === cat
                  ? "bg-onyx text-canvas border-onyx"
                  : "bg-canvas text-stone-600 border-stone-200 hover:border-onyx"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            // Narrower than the section so the portrait cards stay a comfortable size
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-[20rem] sm:max-w-3xl lg:max-w-5xl mx-auto"
          >
            {PRODUCTS[activeTab].map((p, idx) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                className="group rounded-2xl overflow-hidden border border-stone-200 hover:shadow-2xl hover:shadow-stone-200 transition-shadow bg-canvas-soft"
              >
                {/* Portrait 3:4 frame (the shape of most product photos), filled edge to edge */}
                <div className={`aspect-[3/4] relative overflow-hidden bg-gradient-to-br ${p.color}`}>
                  {p.image ? (
                    <>
                      <FittedImage
                        src={p.image}
                        alt={isFabricTab ? `${p.name} fabric` : p.name}
                        // `imageContain` products (e.g. a square shot) show whole on their own background
                        fill={!p.imageContain}
                        zoom={1}
                        background={p.imageBg}
                        // Fabric swatches zoom from the bottom so the printed label at the top drops out
                        // of frame (full-frame texture shots like Rib are left as-is);
                        // garments are anchored to the top so faces/waistbands stay in
                        fillZoom={isFabricTab && !p.imageFill ? 1.36 : 1}
                        fillPosition={isFabricTab ? "center bottom" : "center top"}
                        className="transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                      {/* Keeps the name legible over light fabric photos */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    </>
                  ) : (
                    <motion.div
                      className="absolute inset-0"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(45deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 2px, transparent 2px, transparent 10px)",
                      }}
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                  )}
                  <div className="absolute bottom-4 left-5 right-5 text-canvas font-serif font-bold text-lg leading-snug">
                    {p.name}
                  </div>
                </div>
                {isFabricTab ? (
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-5">
                      {p.specs.map((spec) => (
                        <span key={spec} className="text-xs bg-mustard/10 text-mustard-deep px-3 py-1 rounded-full font-medium">
                          {spec}
                        </span>
                      ))}
                    </div>
                    <Link
                      to="/contact"
                      className="w-full flex items-center justify-center gap-2 bg-onyx hover:bg-mustard text-canvas hover:text-onyx py-3 rounded-lg text-sm font-semibold transition-colors"
                    >
                      Get More Info <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                ) : (
                  <div className="px-5 py-4">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-onyx underline decoration-mustard decoration-2 underline-offset-4 hover:text-mustard-deep transition-colors"
                    >
                      Get More Info
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}