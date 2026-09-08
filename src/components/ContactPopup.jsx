import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { X, MessageCircle } from "lucide-react";

const DWELL_MS = 30000;

export default function ContactPopup({ department }) {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    setOpen(false);
    setDismissed(false);
    const timer = setTimeout(() => setOpen(true), DWELL_MS);
    return () => clearTimeout(timer);
  }, [department]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const whatsappHref = `https://wa.me/923211137545?text=${encodeURIComponent(
    `Hi, I'm interested in learning more about your ${department} capability.`
  )}`;

  const visible = open && !dismissed;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center bg-onyx/40 backdrop-blur-[2px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={() => setDismissed(true)}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-popup-title"
            className="relative w-full max-w-sm rounded-2xl border border-stone-200 bg-canvas shadow-2xl p-6 sm:p-7"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setDismissed(true)}
              aria-label="Close"
              className="absolute top-4 right-4 text-stone-400 hover:text-onyx transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-[11px] font-bold tracking-widest text-mustard-deep uppercase mb-2 block">
              Still Exploring?
            </span>
            <h3 id="contact-popup-title" className="font-serif text-xl sm:text-2xl font-bold text-onyx mb-2">
              Talk to us about {department}
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed mb-6">
              Our sourcing team can share pricing, lead times, and MOQ options for this
              capability within 24 hours.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                onClick={() => setDismissed(true)}
                className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
              </a>
              <Link
                to="/contact"
                onClick={() => setDismissed(true)}
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-onyx text-onyx rounded-full font-bold text-xs uppercase tracking-wider hover:bg-onyx hover:text-canvas transition-colors"
              >
                View Contact Details
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
