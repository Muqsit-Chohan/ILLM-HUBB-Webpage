import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function BismillahBanner() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-4 pb-6 text-center">
      <Reveal y={10}>
        <motion.p
          animate={{ opacity: [0.75, 1, 0.75] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="font-arabic text-3xl sm:text-4xl text-charcoal tracking-wide pt-1 select-none"
          dir="rtl"
          lang="ar"
        >
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </motion.p>
      </Reveal>
    </section>
  );
}
