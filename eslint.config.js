import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Capabilities from "./components/Capabilities";
import Products from "./components/Products";
import Sustainability from "./components/Sustainability";
import GlobalImpact from "./components/GlobalImpact";
import RFQForm from "./components/RFQForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans antialiased bg-slate-50 text-slate-900 selection:bg-emerald-500/30">
      <Navbar />
      <Hero />
      <About />
      <Capabilities />
      <Products />
      <Sustainability />
      <GlobalImpact />
      <RFQForm />
      <Footer />
    </div>
  );
}