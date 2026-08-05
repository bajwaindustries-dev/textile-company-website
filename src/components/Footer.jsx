import { useState } from "react";
import { LayoutGrid, MapPin, Globe, ArrowRight } from "lucide-react";
import { NAV_LINKS } from "../data/constants";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="bg-onyx text-stone-400 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-10 h-10 rounded-lg bg-mustard flex items-center justify-center">
              <LayoutGrid className="text-onyx w-5 h-5" />
            </div>
            <span className="font-serif text-canvas font-extrabold">
              BAJWA <span className="text-mustard">INDUSTRIES</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed">
            Vertically integrated knitwear manufacturing partner for global apparel brands.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-canvas font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.to} className="hover:text-mustard transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-canvas font-semibold mb-4">Our Offices</h4>
          <div className="space-y-4 text-sm">
            <div className="flex gap-3">
              <MapPin className="w-5 h-5 text-mustard shrink-0" />
              <span>Industrial Estate, Faisalabad, Punjab, Pakistan</span>
            </div>
            <div className="flex gap-3">
              <MapPin className="w-5 h-5 text-mustard shrink-0" />
              <span>Corporate Office, Lahore, Punjab, Pakistan</span>
            </div>
          </div>
          <div className="mt-6">
            <h5 className="text-canvas text-sm font-semibold mb-2">Export Regions</h5>
            <div className="flex flex-wrap gap-2">
              {["North America", "Europe", "Middle East", "Asia Pacific"].map((r) => (
                <span key={r} className="text-xs bg-onyx-soft px-3 py-1 rounded-full flex items-center gap-1">
                  <Globe className="w-3 h-3" /> {r}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-canvas font-semibold mb-4">Stay Updated</h4>
          <p className="text-sm mb-4">Subscribe for sourcing insights &amp; capacity updates.</p>
          {subscribed ? (
            <p className="text-mustard text-sm font-medium">Thanks for subscribing!</p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubscribed(true);
              }}
              className="flex gap-2"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 min-w-0 bg-onyx-soft border border-canvas/15 rounded-lg px-4 py-2.5 text-sm text-canvas focus:outline-none focus:border-mustard"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="bg-mustard hover:bg-mustard-deep rounded-lg px-4 transition-colors shrink-0"
              >
                <ArrowRight className="w-4 h-4 text-onyx" />
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-16 pt-8 border-t border-canvas/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
        <p>© {new Date().getFullYear()} Bajwa Industries. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-mustard transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-mustard transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}