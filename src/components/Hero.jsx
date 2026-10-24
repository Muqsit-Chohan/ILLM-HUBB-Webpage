import { motion } from "framer-motion";
import Icon from "./Icon";
import Reveal from "./Reveal";
import CountUp from "./CountUp";

const stats = [
  { value: "16+", label: "Spiritual Modules", sub: "All verified by scholars" },
  { value: "6,236", label: "Quranic Ayats", sub: "Audio & multilingual tafsir" },
  { value: "26,000+", label: "Sahih Hadiths", sub: "6 authentic collections" },
  { value: "99", label: "Asma-ul-Husna", sub: "Names of Allah with meanings" },
];

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-4 lg:py-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        {/* Left Arched Portrait Column */}
        <Reveal
          as="div"
          className="lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left gap-4 order-2 lg:order-1"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-40 lg:h-40 xl:w-44 xl:h-44 rounded-full p-2 bg-gradient-to-b from-terracotta/20 via-border-warm to-white shadow-lg"
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-sand ring-4 ring-white shadow-inner flex items-center justify-center relative">
              <img
                alt="Smiling young man in traditional embroidered white thobe and keffiyeh"
                className="w-full h-full object-cover"
                style={{ objectPosition: "25% 20%" }}
                src="/images/portrait-young-man.jpg"
              />
            </div>
            <motion.div
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
              className="absolute -top-1 -right-1 w-11 h-11 rounded-full bg-gold-primary text-espresso-dark flex items-center justify-center shadow-md ring-2 ring-white"
            >
              <motion.span
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-gold-primary"
                animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <Icon name="bedtime" className="text-xl relative" fill />
            </motion.div>
          </motion.div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-center lg:justify-start gap-1 text-gold-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.3, type: "spring" }}
                >
                  <motion.span
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut",
                    }}
                  >
                    <Icon name="star" className="text-lg" fill />
                  </motion.span>
                </motion.span>
              ))}
            </div>
            <p className="text-sm font-body text-[#6A5A50] leading-relaxed max-w-xs">
              A month of faith, authentic Hadith, and peaceful Quran recitations crafted to
              elevate your daily spiritual tranquility.
            </p>
          </div>
        </Reveal>

        {/* Center Typography & CTA */}
        <Reveal
          as="div"
          delay={0.1}
          className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left gap-4 order-1 lg:order-2"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-border-warm text-terracotta text-xs font-bold tracking-wider uppercase shadow-sm">
            <motion.span
              animate={{ rotate: [0, 15, -10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" }}
              className="inline-flex"
            >
              <Icon name="auto_awesome" className="text-sm" fill />
            </motion.span>
            <span>Your Complete Islamic Companion</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal tracking-tight leading-[1.1] font-serif">
            <motion.span
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-terracotta inline-block"
            >
              Strengthen Your
            </motion.span>
            <br />
            Connection With Islam
          </h1>
          <p className="font-body text-sm sm:text-base text-[#665449] max-w-md leading-relaxed">
            Cultivate deep spiritual presence with ILLMHUBB. From verified Hadith volumes to
            interactive prayer posture guidance, access everything your soul seeks in one
            mindful space.
          </p>
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-7 py-3 rounded-full bg-[#3B281D] hover:bg-[#2B1C13] text-white font-medium text-sm shadow-lg hover:shadow-xl transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-terracotta"
              href="#modules"
            >
              <span>Explore Sacred Knowledge</span>
              <Icon
                name="arrow_forward"
                className="text-lg transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-white border border-border-warm hover:border-terracotta text-charcoal hover:text-terracotta font-medium text-sm shadow-sm hover:shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-terracotta"
              href="/prayer-times"
            >
              <Icon name="schedule" className="text-xl" aria-hidden="true" />
              <span>Prayer Times</span>
            </motion.a>
          </div>
        </Reveal>

        {/* Right Arched Mosque Architecture Frame */}
        <Reveal
          as="div"
          delay={0.2}
          className="lg:col-span-4 flex justify-center lg:justify-end order-3"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            className="relative w-full max-w-[260px] sm:max-w-[300px] lg:max-w-[260px] xl:max-w-[280px]"
          >
            <div className="absolute -inset-3 bg-[#EEDCCE]/50 rounded-[180px_180px_48px_48px] transform -rotate-1" />
            <div className="relative rounded-[160px_160px_40px_40px] overflow-hidden shadow-2xl bg-sand aspect-[3/4.2] ring-4 ring-white">
              <motion.img
                alt="Aerial view of Masjid al-Haram and the Kaaba in Makkah"
                className="w-full h-full object-cover"
                src="/images/masjid-al-haram.jpg"
                initial={{ scale: 1.15 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-dark/80 via-espresso-dark/20 to-transparent flex flex-col justify-end p-6">
                <span className="text-xs uppercase tracking-widest font-bold text-gold-light">
                  Makkah &amp; Madinah
                </span>
                <p className="font-arabic text-2xl text-white font-bold" dir="rtl">
                  المَسْجِدُ الحَرَام
                </p>
              </div>
            </div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
              className="absolute -bottom-3 -left-3 w-12 h-12 rounded-full bg-gold-primary text-espresso flex items-center justify-center shadow-lg ring-4 ring-white"
            >
              <motion.span
                animate={{ rotate: [0, 15, 0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Icon name="star" className="text-2xl" fill />
              </motion.span>
            </motion.div>
          </motion.div>
        </Reveal>
      </div>

      {/* Quick Platform Stats Bar */}
      <div className="mt-8 lg:mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
        {stats.map((stat, i) => (
          <Reveal
            as="div"
            key={stat.label}
            delay={i * 0.08}
            whileHover={{ scale: 1.03, y: -4 }}
            className="p-5 rounded-2xl bg-gradient-to-b from-white to-[#FFF9F5] border border-[#FED708]/30 hover:border-[#FED708]/70 flex flex-col items-center text-center shadow-[0_8px_20px_-4px_rgba(74,51,38,0.06)] hover:shadow-lg transition-colors"
          >
            <span className="text-2xl sm:text-3xl font-extrabold text-[#9C4400]">
              <CountUp value={stat.value} />
            </span>
            <span className="font-bold text-[#3B281D] text-sm mt-1.5">{stat.label}</span>
            <span className="text-xs text-[#7A695E] mt-0.5">{stat.sub}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
