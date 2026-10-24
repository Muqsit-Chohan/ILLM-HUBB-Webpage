import { motion } from "framer-motion";
import Reveal from "./Reveal";
import CountUp from "./CountUp";

export default function CtaSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-6 pb-12">
      <Reveal className="bg-white border border-border-warm rounded-3xl p-8 lg:p-14 shadow-sm relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal tracking-tight leading-tight">
              Make Your Journey <br />
              <span className="text-terracotta font-serif font-normal italic">
                With Deen More Meaningful
              </span>
            </h2>
            <p className="font-body text-base text-[#6E5D53] max-w-md">
              Discover authentic sacred essentials that uplift your heart, home, and daily
              routine. Free forever, made with devotion.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3 rounded-full bg-[#3B281D] hover:bg-black text-white font-medium text-sm shadow-md transition-colors"
                href="#"
              >
                Join Our Community
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3 rounded-full bg-sand hover:bg-[#F0E7DE] text-charcoal font-medium text-sm border border-border-warm transition-colors"
                href="#"
              >
                Explore On Web
              </motion.a>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="w-44 h-44 sm:w-48 sm:h-48 rounded-full bg-gold-primary text-espresso-dark flex flex-col items-center justify-center text-center p-4 shadow-md mt-4"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-espresso-dark/80">
                Members in our community
              </span>
              <span className="text-3xl font-black tracking-tight text-espresso-dark">
                <CountUp value="45,000+" />
              </span>
            </motion.div>
          </div>

          <div className="lg:col-span-6 flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-5">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.04 }}
              className="w-44 sm:w-48 h-64 sm:h-72 rounded-[110px_110px_28px_28px] overflow-hidden bg-sand border border-border-warm shadow-md"
            >
              <img
                alt="Man in a white kufi cap reading by a mosque pillar"
                className="w-full h-full object-cover"
                src="/images/portrait-kufi.jpg"
              />
            </motion.div>
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              whileHover={{ scale: 1.04 }}
              className="w-48 sm:w-56 h-72 sm:h-80 rounded-[130px_130px_32px_32px] overflow-hidden bg-sand shadow-lg ring-2 ring-white"
            >
              <img
                alt="Sultan Ahmed (Blue) Mosque, a historic Ottoman mosque in Istanbul"
                className="w-full h-full object-cover"
                src="/images/blue-mosque-istanbul.jpg"
              />
            </motion.div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
