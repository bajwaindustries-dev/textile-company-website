import {
  Sun,
  Recycle,
  ShieldCheck,
  Leaf,
  BadgeCheck,
  Award,
} from "lucide-react";
import {
  YarnSpoolIcon,
  DyeDropIcon,
  FinishingIcon,
  ShearsIcon,
} from "../components/icons/BrandIcons";

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
    icon: YarnSpoolIcon,
    title: "Yarn & Knitting",
    desc: "State-of-the-art circular and flat knitting machines producing premium quality fabric bases at scale.",
    details: [
      "Circular knitting machines",
      "Flat knitting for collars & cuffs",
      "In-house yarn quality testing lab",
    ],
    gallery: [
      "/capabilities/knit-machine.png",
      "https://images.unsplash.com/photo-1675176785803-bffbbb0cd2f4?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    slug: "dyeing",
    icon: DyeDropIcon,
    title: "Dyeing",
    desc: "Eco-friendly wet processing with Pantone-precision custom color matching for every order.",
    details: [
      "Low-water, eco-friendly dyeing processes",
      "Pantone-precision custom color matching with data-color equipment",
      "Automated Lab following ISO standards",
      "22 Imported FONG's machinery units",
    ],
    gallery: [
      "/capabilities/sustainibility.png",
      "https://images.unsplash.com/photo-1517146783983-418c681b56c5?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    slug: "finishing",
    icon: FinishingIcon,
    title: "Finishing",
    desc: "Precision fabric finishing that locks in shape, softness, and surface quality before cutting.",
    details: [
      "Complete open-width and tubular finishing setup",
      "Compacting & heat-setting for dimensional stability",
      "Brushing & raising finishes for fleece fabrics",
    ],
    gallery: [
      "/capabilities/quality.png",
      "https://images.unsplash.com/photo-1610891015188-5369212db097?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    slug: "cutting-sewing",
    icon: ShearsIcon,
    title: "Cutting & Sewing",
    desc: "Precision cutting tables and lean garment assembly lines engineered for consistent output.",
    details: [
      "Skilled fabric spreading & precision cutting tables",
      "100+ stitching machines",
      "In-line quality checkpoints",
      "100K+ monthly capacity",
    ],
    gallery: [
      "/capabilities/machines.png",
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=80",
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
  { icon: DyeDropIcon, value: 65, suffix: "%", label: "Water Recycled Annually" },
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
    icon: YarnSpoolIcon,
  },
  {
    id: "02",
    title: "Dyeing",
    description:
      "Eco-friendly wet processing with Pantone-precision custom color matching for every order.",
    image: "/capabilities/sustainibility.png",
    fallback: "/capabilities/sustainability.jpg",
    href: "/capabilities/dyeing",
    icon: DyeDropIcon,
  },
  {
    id: "03",
    title: "Finishing",
    description:
      "Precision fabric finishing that locks in shape, softness, and surface quality before cutting.",
    image: "/capabilities/quality.png",
    fallback: "/capabilities/quality.jpg",
    href: "/capabilities/finishing",
    icon: FinishingIcon,
  },
  {
    id: "04",
    title: "Cutting & Sewing",
    description:
      "Precision cutting tables and lean garment assembly lines engineered for consistent output.",
    image: "/capabilities/machines.png",
    fallback: "/capabilities/technology.jpg",
    href: "/capabilities/cutting-sewing",
    icon: ShearsIcon,
  },
];
