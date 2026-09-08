import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowRight, Play, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import RFQForm from "./RFQForm";
import CapabilityAccordion from "./CapabilityAccordion";
import SectionHeading from "./ui/SectionHeading";
import { DyeDropIcon, HoodieIcon } from "./icons/BrandIcons";
import { CATEGORIES, PRODUCTS } from "../data/constants";

/* ---------------------------------------------------------------------------
   ABOUT INFO CARDS — count-up stat cards that animate once scrolled into view
   --------------------------------------------------------------------------- */
const INFO_CARDS = [
  {
    icon: DyeDropIcon,
    prefix: "Upto ",
    value: 200,
    suffix: " Ton",
    label: "Dyeing Fabric Capacity Per Month",
  },
  {
    icon: HoodieIcon,
    prefix: "",
    value: 100,
    suffix: "K+",
    label: "Garments pieces per month production",
  },
];

function InfoCard({ icon: Icon, prefix, value, suffix, label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let startTimestamp = null;
    const duration = 1600;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) window.requestAnimationFrame(step);
    };

    window.requestAnimationFrame(step);
  }, [inView, value]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center gap-3 rounded-2xl border border-blue-100 bg-blue-50 p-8 shadow-sm"
    >
      <div className="w-14 h-14 rounded-xl bg-onyx flex items-center justify-center shadow-md">
        <Icon className="w-7 h-7 text-mustard" strokeWidth={1.75} />
      </div>
      <div className="font-serif text-3xl md:text-4xl font-bold text-onyx">
        {prefix}
        {count}
        {suffix}
      </div>
      <p className="text-sm md:text-base text-stone-600 leading-relaxed max-w-xs">{label}</p>
    </div>
  );
}

const AnimatedSection = ({ children, className = "", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ---------------------------------------------------------------------------
   FEATURED COLLECTION — clean scattered / overlapping collage (square cards)
   --------------------------------------------------------------------------- */
const FEATURED_SLOTS = [
  { pos: "left-[10%] top-[10%]", rotate: -4, z: 2 },      // top-left (moved right & down)
  { pos: "right-[10%] top-[14%]", rotate: 4, z: 2 },      // top-right (moved left & down)
  { pos: "left-1/2 top-[22%] -translate-x-1/2", rotate: 0, z: 4 }, // center (moved up)
  { pos: "left-[16%] top-[52%]", rotate: -3, z: 1 },      // bottom-left (moved right & up)
  { pos: "right-[16%] top-[52%]", rotate: 3, z: 1 },      // bottom-right (moved left & up)
];
// Slightly smaller frames (~8px each side) while keeping responsiveness.
// (5–10px each side requested; this effectively trims ~16px total)
const CARD_SIZE =
  "w-[calc(56%_-_16px)] sm:w-[calc(42%_-_16px)] md:w-[calc(34%_-_16px)] lg:w-[calc(32%_-_16px)] aspect-square";

const KNIT_TEXTURE =
  "repeating-linear-gradient(45deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 2px, transparent 2px, transparent 10px)";

function ProductCardVisual({ product }) {
  return (
    <div className={`relative w-full h-full bg-gradient-to-br ${product.color}`}>
      <div className="absolute inset-0" style={{ backgroundImage: KNIT_TEXTURE }} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
        <h3 className="font-serif font-bold text-canvas text-sm md:text-lg leading-snug">
          {product.name}
        </h3>

        {/* Specs hidden on mobile, visible from md+ */}
        <div className="hidden md:flex flex-wrap gap-1.5 mt-2">
          {product.specs.slice(0, 2).map((s) => (
            <span
              key={s}
              className="text-[10px] md:text-xs bg-mustard/90 text-onyx px-2 py-0.5 rounded-full font-semibold"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const [activeCat, setActiveCat] = useState(CATEGORIES[0]);
  const featuredProducts = PRODUCTS[activeCat] ?? [];

  const certifications = [
    { name: "Sedex", img: "/certifications/sedex.png" },
    { name: "BSCI - Business Social Compliance Initiative", img: "/certifications/bsci.png" },
    { name: "OEKO-TEX®", img: "/certifications/oeko-tex.png" },
    { name: "amfori BSCI", img: "/certifications/amfori-bsci.png" },
  ];

  const deckRotations = [-8, -3, 3, 8];

  const deckContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const deckCardVariants = (idx, total) => {
    const centerIndex = (total - 1) / 2;
    const offsetPercent = (centerIndex - idx) * 100;

    return {
      hidden: {
        x: `${offsetPercent}%`,
        rotate: deckRotations[idx] ?? 0,
        scale: 0.85,
        opacity: 0,
      },
      visible: {
        x: "0%",
        rotate: 0,
        scale: 1,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 90,
          damping: 16,
          mass: 0.9,
        },
      },
    };
  };

  const collageStagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };

  return (
    <>
      {/* 1. Hero Video Section */}
      <section className="pt-4 pb-4 md:pt-6 md:pb-6 px-4 sm:px-6 md:px-12 lg:px-16 bg-canvas">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full aspect-video rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl bg-onyx"
          >
            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
              <source src="/videos/factory-hero.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
          </motion.div>
        </div>
      </section>

      {/* 2. About Us Section */}
      <section id="about" className="py-8 md:py-14 px-6 bg-canvas">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-8">
            <span className="text-xs font-bold tracking-widest text-mustard-deep uppercase mb-2 block">
              Who We Are
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-onyx mb-6 uppercase tracking-wider">
              Bajwa Industries
            </h2>
            <p className="text-base md:text-lg text-stone-700 max-w-4xl mx-auto leading-relaxed">
              Bajwa Industries is a premier vertically-integrated <strong className="font-bold text-onyx">textile manufacturer</strong> delivering
              end-to-end high-<strong className="font-bold text-onyx">quality</strong> knits for Global Brands — from raw fiber selection to finished
              garment assembly.
            </p>
            <p className="text-base md:text-lg text-stone-700 max-w-4xl mx-auto leading-relaxed mt-4">
              Founded in <strong className="font-bold text-onyx">2005</strong>, our specialty is{" "}
              <strong className="font-bold text-onyx">Knit Wear Dyeing, Fabric &amp; Garment Manufacturing</strong>, located in{" "}
              <strong className="font-bold text-onyx">Faisalabad, the Textile Hub of Pakistan</strong>.
            </p>
          </AnimatedSection>

          {/* About Info Cards */}
          <AnimatedSection delay={0.1} className="mt-10 md:mt-12 mb-10 md:mb-14">
            <div className="grid sm:grid-cols-2 gap-5 md:gap-6 max-w-3xl mx-auto">
              {INFO_CARDS.map((card) => (
                <InfoCard key={card.label} {...card} />
              ))}
            </div>
          </AnimatedSection>

          {/* CTA Navigation Buttons */}
          <AnimatedSection delay={0.2}>
            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-onyx text-onyx bg-transparent rounded-md font-bold uppercase tracking-wider text-sm hover:bg-onyx hover:text-canvas transition-all"
              >
                EXPLORE PRODUCTS
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                to="/capabilities"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-onyx text-onyx bg-transparent rounded-md font-bold uppercase tracking-wider text-sm hover:bg-onyx hover:text-canvas transition-all"
              >
                OUR CAPABILITIES
                <Play className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 3. "What We Do" Accordion Section + Secondary Facility CTA */}
      <section className="bg-canvas pb-12 md:pb-16">
        <CapabilityAccordion />

        {/* View Facility Secondary CTA Button */}
        <AnimatedSection delay={0.2} className="mt-8 md:mt-10 text-center px-6">
          <Link
            to="/capabilities"
            className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-onyx text-onyx bg-transparent rounded-md font-bold uppercase tracking-wider text-sm hover:bg-onyx hover:text-canvas transition-all duration-300 group shadow-sm hover:shadow-md"
          >
            <span>VIEW FACILITIES</span>
            <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </AnimatedSection>
      </section>

      {/* 3.5 Featured Collection — Animated Card Collage */}
      <section id="featured" className="py-8 md:py-10 px-6 bg-canvas">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            tag="Featured Collection"
            title="Signature Knitwear, Built In-House"
            subtitle="A curated look at our most-requested categories — from performance activewear to premium fleece, manufactured end-to-end under one roof."
          />

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2.5 md:gap-3 justify-center mt-10 md:mt-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`px-4 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all border ${
                  activeCat === cat
                    ? "bg-onyx text-canvas border-onyx"
                    : "bg-canvas text-stone-600 border-stone-200 hover:border-onyx"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Collage Container — floats on the same canvas background */}
          <div className="relative mt-8 md:mt-10 py-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCat}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  variants={collageStagger}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  className="relative w-full overflow-visible h-[430px] sm:h-[520px] md:h-[560px] lg:h-[640px]"
                >
                  {featuredProducts.map((p, idx) => {
                    const slot = FEATURED_SLOTS[idx] ?? FEATURED_SLOTS[2];
                    return (
                      <motion.div
                        key={p.name}
                        variants={{
                          hidden: { opacity: 0 },
                          show: { opacity: 1, transition: { duration: 0.2 } },
                        }}
                        whileHover={{ zIndex: 60 }}
                        style={{ zIndex: slot.z }}
                        className={`absolute ${slot.pos} ${CARD_SIZE}`}
                      >
                        <motion.div
                          variants={{
                            hidden: {
                              opacity: 0,
                              scale: 0.9,
                              rotate: slot.rotate,
                              y: 28,
                            },
                            show: {
                              opacity: 1,
                              scale: 1,
                              rotate: slot.rotate,
                              y: 0,
                              transition: { type: "spring", stiffness: 85, damping: 16 },
                            },
                          }}
                          whileHover={{
                            scale: 1.05,
                            rotate: 0,
                            transition: { duration: 0.28, ease: "easeOut" },
                          }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full h-full rounded-xl md:rounded-2xl overflow-hidden border border-stone-200/70 shadow-xl shadow-stone-300/40 hover:shadow-2xl hover:shadow-stone-300/60 transition-shadow duration-300 cursor-pointer bg-canvas"
                        >
                          <ProductCardVisual product={p} />
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Floating "View Products" CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
              className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 z-9"
            >
              <Link to="/products">
                <motion.span
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-1.5 sm:gap-2 bg-mustard text-onyx px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-full font-bold uppercase tracking-wider text-[10px] sm:text-xs shadow-xl hover:bg-mustard-light transition-colors"
                >
                  View Products
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Certifications Section */}
      <section className="py-14 md:py-20 px-6 bg-canvas-soft border-y border-stone-200">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-10 md:mb-14">
            <span className="text-xs font-bold tracking-widest text-mustard-deep uppercase mb-2 block">
              Trust & Compliance
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-onyx uppercase tracking-wider">
              Certifications
            </h2>
          </AnimatedSection>

          <motion.div
            variants={deckContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                variants={deckCardVariants(idx, certifications.length)}
                style={{ willChange: "transform, opacity" }}
                className="group flex items-center justify-center bg-canvas p-6 md:p-8 rounded-2xl border border-stone-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-shadow duration-300 aspect-square"
              >
                <img
                  src={cert.img}
                  alt={cert.name}
                  title={cert.name}
                  className="w-full h-full object-contain transition-all duration-300"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. Embedded Contact / RFQ Section */}
      <section className="border-t border-stone-200">
        <RFQForm />
      </section>
    </>
  );
}