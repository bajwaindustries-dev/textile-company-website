import { motion } from "framer-motion";

export default function SectionHeading({ tag, title, subtitle, dark = false, center = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={center ? "text-center max-w-3xl mx-auto" : ""}
    >
      {tag && (
        <span
          className={`inline-block text-xs font-bold tracking-[0.25em] uppercase mb-4 pb-2 border-b-2 ${
            dark ? "text-mustard border-mustard" : "text-mustard-deep border-mustard"
          }`}
        >
          {tag}
        </span>
      )}
      <h2
        className={`font-serif text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 tracking-tight ${
          dark ? "text-canvas" : "text-onyx"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base sm:text-lg leading-relaxed ${dark ? "text-stone-400" : "text-stone-600"}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}