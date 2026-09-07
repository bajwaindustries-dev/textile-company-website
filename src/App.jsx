import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Capabilities from "./components/Capabilities";
import Products from "./components/Products";
import RFQForm from "./components/RFQForm";
import Footer from "./components/Footer";
import WhatsAppWidget from "./components/WhatsAppWidget";

// Scrolls to top on route change, or smooth-scrolls to a hash anchor
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  React.useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace("#", ""));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
};

export default function App() {
  return (
    <div className="font-sans antialiased bg-canvas text-onyx flex flex-col min-h-screen selection:bg-mustard/30 selection:text-onyx">
      <ScrollToTop />
      <Navbar />

      <main className="flex-grow pt-16 lg:pt-20">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<RFQForm />} />
        </Routes>
      </main>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
}