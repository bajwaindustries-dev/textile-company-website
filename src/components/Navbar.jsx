import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, MessageSquare, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "CAPABILITIES", href: "/capabilities" },
    { label: "PRODUCTS", href: "/products" },
    { label: "CONTACT US", href: "/contact" },
  ];

  return (
    <>
      {/* ========================================================= */}
      {/* 1. DESKTOP HEADER (Visible ONLY on Desktop lg:flex)      */}
      {/* ========================================================= */}
      {/*
        Refactor notes:
        - Removed heavy backdrop-blur-xl glassmorphism and shadow-sm in
          favor of a flat opaque bg-canvas/95 surface with a single
          ultra-subtle 1px hairline border (border-onyx/10).
        - Kept sticky positioning + z-index untouched.
      */}
      <header className="hidden lg:block fixed top-0 left-0 right-0 z-50 bg-canvas/95 border-b border-onyx/10">
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo/bajwa_industry_logo.jpeg"
              alt="Bajwa Industries"
              className="w-10 h-10 object-contain rounded-md flex-shrink-0"
            />
            <div className="flex flex-col leading-none">
              <span className="font-serif text-xl font-semibold text-onyx tracking-tight">BI</span>
              <span className="text-[10px] font-medium text-stone-500 tracking-[0.14em] uppercase mt-0.5">
                BAJWA INDUSTRIES
              </span>
            </div>
          </Link>

          {/* Centered Navigation Links */}
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                // Hover pivots to the mustard-deep accent, and weight steps
                // 500 → 600 on hover instead of relying on color intensity alone.
                className="font-serif text-xs font-medium text-stone-600 hover:text-mustard-deep transition-colors tracking-[0.14em] uppercase"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Call to Action */}
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-sky-200 hover:bg-sky-300 text-onyx text-xs font-semibold rounded-md transition-colors uppercase tracking-[0.14em]"
          >
            <span>Get In Touch</span>
            <ArrowRight className="w-4 h-4 text-onyx" />
          </Link>
        </div>
      </header>

      {/* ========================================================= */}
      {/* 2. MOBILE HEADER (Visible ONLY on Mobile lg:hidden)       */}
      {/* ========================================================= */}
      {/*
        Refactor notes:
        - Single top header replaces the old top-header + fixed-bottom-nav
          pair: hamburger on the left, logo centered, CTA on the right, and
          the nav links drop down from here instead of floating up from a
          bottom bar.
      */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-canvas border-b border-onyx/10">
        <div className="relative px-4 py-3 flex items-center justify-between">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 -ml-2 rounded-md text-onyx hover:bg-canvas-soft transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Centered Logo */}
          <Link
            to="/"
            className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <img
              src="/logo/bajwa_industry_logo.jpeg"
              alt="Bajwa Industries"
              className="w-8 h-8 object-contain rounded-md flex-shrink-0"
            />
            <div className="font-serif text-base tracking-tight whitespace-nowrap">
              <span className="font-medium text-stone-700">Bajwa </span>
              <span className="font-semibold text-onyx">Industries</span>
            </div>
          </Link>

          {/*
            Mobile CTA: KEPT rounded-full here intentionally — this is a
            conversational "Let's Talk" pill button, the ONE documented
            exception to the rounded-full ban.
          */}
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 px-3 py-2 bg-sky-200 hover:bg-sky-300 text-xs font-semibold rounded-full transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 text-onyx" />
          </Link>
        </div>

        {/* Dropdown Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="border-t border-onyx/10 bg-canvas overflow-hidden"
            >
              <div className="px-6 py-5 space-y-1 text-center">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="block px-4 py-3 font-serif text-sm font-medium text-stone-700 hover:text-mustard-deep hover:bg-canvas-soft rounded-md transition-colors uppercase tracking-[0.12em] text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}