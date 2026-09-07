import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "./ui/SectionHeading";
import { CATEGORIES, PRODUCTS } from "../data/constants";

export default function Products() {
  const [activeTab, setActiveTab] = useState(CATEGORIES[0]);

  return (
    <section id="products" className="py-24 bg-canvas">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading tag="Product Range" title="Knitwear Categories Built For Every Brand" subtitle="From performance activewear to premium basics — explore our production categories and request fabric specifications instantly." />

        <div className="flex flex-wrap gap-3 justify-center mt-12 mb-12">
          {CATEGORIES.map((cat) => (
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
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {PRODUCTS[activeTab].map((p, idx) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                className="group rounded-2xl overflow-hidden border border-stone-200 hover:shadow-2xl hover:shadow-stone-200 transition-shadow bg-canvas-soft"
              >
                <div className={`h-52 relative overflow-hidden bg-gradient-to-br ${p.color}`}>
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(45deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 2px, transparent 2px, transparent 10px)",
                    }}
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                  <div className="absolute bottom-4 left-5 right-5 text-canvas font-serif font-bold text-lg leading-snug">
                    {p.name}
                  </div>
                </div>
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
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}