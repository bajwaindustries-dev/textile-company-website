import { MapPin, Globe, Instagram } from "lucide-react";
import { NAV_LINKS } from "../data/constants";

function TikTokIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16.6 5.82c-1.12-1.08-1.67-2.64-1.75-4.17-1.3.01-2.6 0-3.91.02v12.07c0 1.79.04 3.57-.07 5.36-.01.39-.22.73-.41 1.06-.58.95-1.65 1.6-2.77 1.61-1.68.15-3.26-1.23-3.5-2.87-.01-.54-.07-1.1.14-1.61.25-.71.73-1.34 1.36-1.75.87-.6 2.03-.69 3.02-.37 0-1.48.06-2.96.04-4.44-2.17-.41-4.49.28-6.15 1.72-1.46 1.24-2.4 3.06-2.58 4.96-.02.49-.01.99.01 1.49.21 2.34 1.63 4.52 3.65 5.71 1.22.72 2.65 1.11 4.08 1.03 2.33-.04 4.6-1.29 5.91-3.21.81-1.15 1.27-2.54 1.35-3.94.03-2.91.01-5.83.02-8.75.52.34 1.05.67 1.62.93 1.31.62 2.76.92 4.2.97V6.6c-1.54-.17-3.12-.68-4.24-1.79z" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/bajwa.industries?stkn=MTQ5emRmYTVtZng1cQ==",
    Icon: Instagram,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@bajwaindustriesfsd?_r=1&_t=ZS-99XHsTDXARk",
    Icon: TikTokIcon,
  },
];

export default function Footer() {
  return (
    <footer className="bg-onyx text-stone-400 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <img
              src="/logo/bajwa_industry_logo.jpeg"
              alt="Bajwa Industries"
              className="w-10 h-10 object-contain rounded-lg bg-canvas p-1"
            />
            <span className="font-serif text-canvas font-extrabold">
              BAJWA <span className="text-mustard">INDUSTRIES</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed">
            Vertically integrated knitwear manufacturing partner for global apparel brands.
          </p>

          <div className="flex items-center gap-3 mt-5">
            {SOCIAL_LINKS.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="w-9 h-9 rounded-full bg-onyx-soft flex items-center justify-center text-canvas hover:bg-mustard hover:text-onyx transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
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
          <h4 className="font-serif text-canvas font-semibold mb-4">Our Location</h4>
          <div className="space-y-4 text-sm">
            <div className="flex gap-3">
              <MapPin className="w-5 h-5 text-mustard shrink-0" />
              <span>Millat Industrial Estate, Millat Road, Saim Road, Near Ismail Green Colony, Faisalabad, Pakistan</span>
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