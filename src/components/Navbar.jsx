import React, { useState } from "react";
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
            {/*
              Logo mark: flat solid onyx tile at 6px radius, with the inner
              ring switched to the mustard accent for a single, restrained
              brand cue.
            */}
            <div className="w-10 h-10 bg-onyx rounded-md flex items-center justify-center flex-shrink-0">
              <div className="w-5 h-5 border-[1.5px] border-mustard rounded-full"></div>
            </div>
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
          {/*
            CTA: retained as a solid button (primary action gets the reserved
            mustard accent), but:
            - `bg-mustard` + `hover:bg-mustard-deep`
            - `rounded-md` (6px) — uniform architectural radius.
            - Dropped shadow-sm — flat surface, no faux depth.
          */}
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-mustard hover:bg-mustard-deep text-onyx hover:text-canvas text-xs font-semibold rounded-md transition-colors uppercase tracking-[0.14em]"
          >
            <span>Get In Touch</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </header>

      {/* ========================================================= */}
      {/* 2. MOBILE TOP HEADER (Visible ONLY on Mobile lg:hidden)  */}
      {/* ========================================================= */}
      {/*
        Refactor notes:
        - Unified surface color to `bg-canvas` (matches app canvas).
        - Border tightened to `border-onyx/10` hairline; removed shadow.
      */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-canvas border-b border-onyx/10 px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          {/* Same logo treatment as desktop for consistency */}
          <div className="w-8 h-8 bg-onyx rounded-md flex items-center justify-center flex-shrink-0">
            <div className="w-4 h-4 border-[1.5px] border-mustard rounded-full"></div>
          </div>
          <div className="font-serif text-base tracking-tight">
            {/* Weight-based hierarchy: 500 for "Bajwa", 600 for "Industries." */}
            <span className="font-medium text-stone-700">Bajwa </span>
            <span className="font-semibold text-onyx">Industries.</span>
          </div>
        </Link>

        {/*
          Mobile CTA: KEPT rounded-full here intentionally — this is a
          conversational "Let's Talk" pill button. This is the ONE documented
          exception to the rounded-full ban, aligned with the project's
          dual-nav strategy.
          - Recolored to mustard / mustard-deep.
          - Dropped shadow for flat treatment.
        */}
        <Link
          to="/contact"
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-mustard hover:bg-mustard-deep text-onyx hover:text-canvas text-xs font-semibold rounded-full transition-colors"
        >
          <span>Get in Touch</span>
          <MessageSquare className="w-3.5 h-3.5" />
        </Link>
      </header>

      {/* ========================================================= */}
      {/* 3. MOBILE BOTTOM NAVIGATION (Visible ONLY on Mobile)      */}
      {/* ========================================================= */}
      {/*
        Refactor notes:
        - Removed heavy backdrop blur and aggressive shadow in favor of a
          flat `bg-canvas` surface with a hairline top border for spatial
          separation — cleaner and more architectural.
      */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-canvas border-t border-onyx/10">
        <div className="px-6 h-14 flex items-center justify-between">
          <span className="text-[11px] font-medium tracking-[0.16em] text-stone-500 uppercase">
            Navigation
          </span>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md text-stone-700 hover:bg-canvas-soft transition-colors flex items-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-700">
              {isMobileMenuOpen ? "Close" : "Menu"}
            </span>
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Upward Mobile Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              // Flat opaque surface, hairline border, and a modest 8px top
              // radius (rounded-lg).
              className="absolute bottom-full left-0 right-0 bg-canvas border-t border-onyx/10 rounded-t-lg overflow-hidden"
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
      </nav>
    </>
  );
}