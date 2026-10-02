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
    image: "/capabilities/dyeing/high-temperature-dyeing-machine.jpeg",
    desc: "Eco-friendly wet processing with Pantone-precision custom color matching for every order.",
    details: [
      "Low-water, eco-friendly dyeing processes",
      "Pantone-precision custom color matching with data-color equipment",
      "Automated Lab following ISO standards",
      "22 Imported FONG's machinery units",
    ],
    gallery: [
      "/capabilities/dyeing/high-temperature-dyeing-machine.jpeg",
      "/capabilities/dyeing/dyeing01.jpeg",
      "/capabilities/dyeing/testing-lab.jpeg",
    ],
  },
  {
    slug: "finishing",
    icon: FinishingIcon,
    title: "Finishing",
    image: "/capabilities/finishing/finishing-stenter.jpeg",
    desc: "Precision fabric finishing that locks in shape, softness, and surface quality before cutting.",
    details: [
      "Complete open-width and tubular finishing setup",
      "Compacting & heat-setting for dimensional stability",
      "Brushing & raising finishes for fleece fabrics",
    ],
    gallery: [
      "/capabilities/finishing/finishing-stenter.jpeg",
      "/capabilities/finishing/finishing-compactor.jpeg",
      "/capabilities/finishing/finishing-brushing-machines.jpeg",
      "/capabilities/finishing/finishing-stenter-02.jpeg",
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
  "Custom Fabrics",
];

export const PRODUCTS = {
  "Activewear & Performance": [
    {
      name: "Men's Tracksuit — Black",
      image: "/products/active-wear/men-tracksuit-black.webp",
      specs: [],
      color: "from-black to-stone-800",
    },
    {
      name: "Men's Tracksuit — Grey",
      image: "/products/active-wear/men-tracksuit-grey.webp",
      specs: [],
      color: "from-stone-800 to-black",
    },
    {
      name: "Panelled Tracksuit",
      image: "/products/active-wear/panelled-tracksuit.webp",
      specs: [],
      color: "from-amber-950 to-stone-900",
    },
    {
      name: "Varsity Jacket",
      image: "/products/active-wear/varsity-jacket.webp",
      // Square shot on white: show the whole jacket instead of cropping the sleeves
      imageContain: true,
      imageBg: "#ffffff",
      specs: [],
      color: "from-stone-900 to-amber-950",
    },
  ],
  "Casual & Fleece Wear": [
    {
      name: "Hoodie & Trouser Set",
      image: "/products/casual-and-fleece-wear/hoodie-and-trousers.webp",
      specs: [],
      color: "from-black to-stone-800",
    },
    {
      name: "Printed Camouflage Sweatshirt",
      image: "/products/casual-and-fleece-wear/printed-camouflage-sweatshirt.webp",
      specs: [],
      color: "from-amber-950 to-stone-900",
    },
    {
      name: "Fleece Acid Wash Trouser",
      image: "/products/casual-and-fleece-wear/fleece-acid-wash-trouser.webp",
      specs: [],
      color: "from-amber-900 to-black",
    },
    {
      name: "Cargo Trouser",
      image: "/products/casual-and-fleece-wear/cargo-trouser.webp",
      specs: [],
      color: "from-stone-900 to-amber-950",
    },
    {
      name: "Striped Full Sleeve Tee",
      image: "/products/casual-and-fleece-wear/striped-full-sleeve-tee.webp",
      specs: [],
      color: "from-stone-800 to-black",
    },
    {
      name: "Printed Grey Tee",
      image: "/products/casual-and-fleece-wear/printed-grey-tee.webp",
      specs: [],
      color: "from-stone-900 to-amber-900",
    },
    {
      name: "Plain Black Tee",
      image: "/products/casual-and-fleece-wear/plain-black-tee.webp",
      specs: [],
      color: "from-amber-800 to-stone-900",
    },
    {
      name: "Sleeveless Sweatshirt & Shorts Set",
      image: "/products/casual-and-fleece-wear/sweatshirt-and-joggers.webp",
      specs: [],
      color: "from-black to-amber-950",
    },
  ],
  "Custom Fabrics": [
    {
      name: "Fleece",
      image: "/products/custom-fabrics/fleece-200-550-gsm.jpeg",
      specs: ["200–550 GSM", "Brushed Back"],
      color: "from-stone-900 to-amber-950",
    },
    {
      name: "Single Jersey",
      image: "/products/custom-fabrics/single-jersey-100-190-gsm.jpeg",
      specs: ["100–190 GSM", "Smooth Face"],
      color: "from-amber-900 to-black",
    },
    {
      name: "Terry",
      image: "/products/custom-fabrics/terry-200-450-gsm.jpeg",
      specs: ["200–450 GSM", "Looped Back"],
      color: "from-amber-900 to-stone-950",
    },
    {
      name: "Scuba Interlock",
      image: "/products/custom-fabrics/scuba-interlock-200-350-gsm.jpeg",
      specs: ["200–350 GSM", "Double Knit"],
      color: "from-black to-stone-800",
    },
    {
      name: "Interlock",
      image: "/products/custom-fabrics/interlock-120-350-gsm.jpeg",
      specs: ["120–350 GSM", "Double-Faced"],
      color: "from-stone-800 to-amber-900",
    },
    {
      name: "Mesh",
      image: "/products/custom-fabrics/mesh-150-250-gsm.jpeg",
      specs: ["150–250 GSM", "Breathable"],
      color: "from-amber-800 to-stone-950",
    },
    {
      name: "Heavy Jersey",
      image: "/products/custom-fabrics/heavy-jersey-200-300-gsm.jpeg",
      specs: ["200–300 GSM", "Heavyweight"],
      color: "from-stone-900 to-black",
    },
    {
      name: "Stripe",
      image: "/products/custom-fabrics/stripe-150-300-gsm.jpeg",
      specs: ["150–300 GSM", "Auto-Striper Knit"],
      color: "from-amber-950 to-stone-900",
    },
    {
      name: "Rib",
      image: "/products/custom-fabrics/rib-200-500-gsm.webp",
      imageFill: true, // close-up texture shot: fill the whole frame
      specs: ["200–500 GSM", "1x1 / 2x2 Rib"],
      color: "from-black to-amber-950",
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
    image: "/capabilities/dyeing/high-temperature-dyeing-machine.jpeg",
    href: "/capabilities/dyeing",
    icon: DyeDropIcon,
  },
  {
    id: "03",
    title: "Finishing",
    description:
      "Precision fabric finishing that locks in shape, softness, and surface quality before cutting.",
    image: "/capabilities/finishing/finishing-stenter.jpeg",
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
