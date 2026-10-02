import { motion } from "framer-motion";

/* `compact` tightens spacing and type on mobile only; md+ is unchanged */
export default function SectionHeading({ tag, title, subtitle, dark = false, center = true, compact = false }) {
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
          className={`inline-block text-xs font-bold tracking-[0.25em] uppercase border-b-2 ${
            compact ? "mb-2 pb-1 md:mb-4 md:pb-2" : "mb-4 pb-2"
          } ${dark ? "text-mustard border-mustard" : "text-mustard-deep border-mustard"}`}
        >
          {tag}
        </span>
      )}
      <h2
        className={`font-serif font-semibold tracking-tight ${
          compact ? "text-2xl sm:text-4xl md:text-5xl mb-2 md:mb-4" : "text-3xl sm:text-4xl md:text-5xl mb-4"
        } ${dark ? "text-canvas" : "text-onyx"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`leading-relaxed ${compact ? "text-sm sm:text-lg" : "text-base sm:text-lg"} ${
            dark ? "text-stone-400" : "text-stone-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
