import { motion } from "framer-motion";
import Icon from "./Icon";
import Reveal from "./Reveal";

export default function PageHero({ badge, icon, title, subtitle, children }) {
  return (
    <Reveal
      as="section"
      className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8 text-center flex flex-col items-center"
    >
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fde2de] text-[#574238] shadow-sm mb-4">
        <motion.span
          animate={{ rotate: [0, 15, -10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" }}
          className="inline-flex"
        >
          <Icon name={icon} className="text-sm text-[#9C4400]" fill />
        </motion.span>
        <span className="text-[11px] uppercase tracking-wider font-semibold">{badge}</span>
      </div>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-charcoal font-serif tracking-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="text-base sm:text-lg text-[#6A5A50] pt-2 max-w-xl mx-auto font-body">
          {subtitle}
        </p>
      )}
      {children}
    </Reveal>
  );
}
