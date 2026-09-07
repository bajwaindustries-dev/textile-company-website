import {
  Factory,
  Droplets,
  Scissors,
  PackageCheck,
  Sun,
  Recycle,
  ShieldCheck,
  Leaf,
  BadgeCheck,
  Award,
} from "lucide-react";

export const NAV_LINKS = [
  { label: "About", to: "/#about" },
  { label: "Capabilities", to: "/capabilities" },
  { label: "Products", to: "/products" },
  { label: "RFQ", to: "/contact" },
];

// Made defensive so non-string inputs won't throw an exception
export const toId = (s) =>
  typeof s === "string" ? s.toLowerCase().replace(/\s+/g, "-") : "";

export const METRICS = [
  { label: "Garments / Year", value: 25, suffix: "M+" },
  { label: "Vertically Integrated", value: 100, suffix: "%" },
  { label: "Export Destinations", value: 40, suffix: "+" },
];

export const STEPS = [
  {
    slug: "yarn-knitting",
    icon: Factory,
    title: "Yarn & Knitting",
    desc: "State-of-the-art circular and flat knitting machines producing premium quality fabric bases at scale.",
    details: [
      "Circular knitting machines",
      "Flat knitting for collars & cuffs",
      "In-house yarn quality testing lab",
    ],
  },
  {
    slug: "dyeing-finishing",
    icon: Droplets,
    title: "Dyeing & Finishing",
    desc: "Eco-friendly wet processing with Pantone-precision custom color matching for every order.",
    details: [
      "Low-water, eco-friendly dyeing processes",
      "Pantone-precision custom color matching with data-color equipment",
      "Bio-polishing with Enzyme for clean fabric surface",
      "22 Imported FONG's machinery units",
    ],
  },
  {
    slug: "cutting-sewing",
    icon: Scissors,
    title: "Cutting & Sewing",
    desc: "Automated cutting tables and lean garment assembly lines engineered for consistent output.",
    details: [
      "Automated fabric spreading & cutting tables",
      "120+ lean garment assembly lines",
      "In-line quality checkpoints",
      "Daily capacity: 100,000+ pieces",
    ],
  },
  {
    slug: "quality-packaging",
    icon: PackageCheck,
    title: "Quality Control & Packaging",
    desc: "AQL 1.5 inspection standards paired with custom, retailer-ready packaging solutions.",
    details: [
      "AQL 1.5 statistical sampling standards",
      "4-point fabric inspection system",
      "Custom retailer-ready poly & carton packaging",
      "Metal detection & final pre-shipment audit",
    ],
  },
];

export const CATEGORIES = [
  "Activewear & Performance",
  "Casual & Fleece Wear",
  "Essential Basics",
  "Custom Fabrics",
];

export const PRODUCTS = {
  "Activewear & Performance": [
    {
      name: "Seamless Performance Tee",
      specs: ["Moisture-Wicking", "4-Way Stretch", "160 GSM"],
      color: "from-stone-900 to-black",
    },
    {
  name: "Reflective Running Jacket",
  specs: ["Water-Resistant", "Reflective Trim", "Packable"],
  color: "from-stone-900 to-amber-900",
    },

    {
      name: "Compression Base Layer",
      specs: ["92/8 Poly-Spandex", "Anti-Microbial"],
      color: "from-amber-800 to-stone-950",
    },
    {
      name: "Training Mesh Tank",
      specs: ["Breathable Mesh", "Quick-Dry", "UPF 30+"],
      color: "from-stone-800 to-amber-900",
    },
  ],
  "Casual & Fleece Wear": [
    {
      name: "Classic Pullover Hoodie",
      specs: ["320 GSM Fleece", "Brushed Back"],
      color: "from-black to-stone-800",
    },
    {
  name: "Oversized Zip Hoodie",
  specs: ["360 GSM", "Heavyweight Fleece"],
  color: "from-amber-950 to-stone-900",
    },
    {
      name: "Heavyweight Crewneck",
      specs: ["280 GSM", "Ring-Spun Cotton"],
      color: "from-amber-900 to-black",
    },
    {
      name: "Jogger Sweatpants",
      specs: ["French Terry", "Elastic Waistband"],
      color: "from-stone-900 to-amber-950",
    },
  ],
  "Essential Basics": [
    {
      name: "Premium Combed Cotton Tee",
      specs: ["180 GSM", "Pre-Shrunk"],
      color: "from-stone-800 to-black",
    },
    {
  name: "Relaxed Fit Tank",
  specs: ["160 GSM", "Combed Cotton"],
  color: "from-stone-900 to-amber-900",
    },
    {
      name: "Classic Pique Polo",
      specs: ["220 GSM Pique", "3-Button Placket"],
      color: "from-amber-800 to-stone-900",
    },
    {
      name: "Long Sleeve Henley",
      specs: ["200 GSM Jersey", "Enzyme Washed"],
      color: "from-black to-amber-950",
    },
  ],
  "Custom Fabrics": [
    {
      name: "Single Jersey Knit",
      specs: ["100% Cotton", "140–220 GSM"],
      color: "from-stone-900 to-amber-950",
    },
    {
  name: "Pique Polo Fabric",
  specs: ["Cotton-Poly", "180–240 GSM"],
  color: "from-amber-900 to-black",
    },
    {
      name: "Interlock Fabric",
      specs: ["Double-Faced", "Premium Drape"],
      color: "from-amber-900 to-stone-950",
    },
    {
      name: "Rib & French Terry",
      specs: ["1x1 / 2x2 Rib", "Custom GSM"],
      color: "from-black to-stone-800",
    },
  ],
};

export const CERTS = [
  { name: "OEKO-TEX Standard 100", icon: ShieldCheck },
  { name: "GOTS Certified", icon: Leaf },
  { name: "BSCI Compliant", icon: BadgeCheck },
  { name: "WRAP Certified", icon: Award },
  { name: "GRS Recycled", icon: Recycle },
];

export const ECO_METRICS = [
  { icon: Droplets, value: 65, suffix: "%", label: "Water Recycled Annually" },
  { icon: Sun, value: 40, suffix: "%", label: "Solar Energy Footprint" },
  { icon: Recycle, value: 98, suffix: "%", label: "Zero-Waste Cutting Efficiency" },
];

export const REGIONS = [
  { region: "North America", countries: "USA, Canada" },
  { region: "Europe", countries: "Germany, UK, Spain, Italy" },
  { region: "Middle East", countries: "UAE, Saudi Arabia" },
  { region: "Asia Pacific", countries: "Australia, Japan, S. Korea" },
];

export const CAPABILITIES_DATA = [
  {
    id: "01",
    title: "Yarn & Knitting",
    description:
      "State-of-the-art circular and flat knitting machines producing premium quality fabric bases at scale.",
    image: "/capabilities/knit-machine.png",
    fallback: "/capabilities/farm-to-retail.jpg",
    href: "/capabilities/yarn-knitting",
    icon: Factory,
  },
  {
    id: "02",
    title: "Dyeing",
    description:
      "Eco-friendly wet processing with Pantone-precision custom color matching for every order.",
    image: "/capabilities/sustainibility.png",
    fallback: "/capabilities/sustainability.jpg",
    href: "/capabilities/dyeing-finishing",
    icon: Droplets,
  },
  {
    id: "03",
    title: "Quality Control and Finishing",
    description:
      "AQL 1.5 inspection standards paired with custom, retailer-ready packaging solutions.",
    image: "/capabilities/quality.png",
    fallback: "/capabilities/quality.jpg",
    href: "/capabilities/quality-packaging",
    icon: ShieldCheck,
  },
  {
    id: "04",
    title: "Cutting & Sewing",
    description:
      "Automated cutting tables and lean garment assembly lines engineered for consistent output.",
    image: "/capabilities/machines.png",
    fallback: "/capabilities/technology.jpg",
    href: "/capabilities/cutting-sewing",
    icon: Scissors,
  },
];
