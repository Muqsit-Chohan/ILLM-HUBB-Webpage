import { motion } from "framer-motion";
import Icon from "./Icon";
import Reveal from "./Reveal";

const stats = [
  { value: "16+", label: "Spiritual Modules", sub: "All verified by scholars" },
  { value: "6,236", label: "Quranic Ayats", sub: "Audio & multilingual tafsir" },
  { value: "26,000+", label: "Sahih Hadiths", sub: "6 authentic collections" },
  { value: "99", label: "Asma-ul-Husna", sub: "Names of Allah with meanings" },
];

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-6 lg:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Arched Portrait Column */}
        <Reveal
          as="div"
          className="lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left gap-5 order-2 lg:order-1"
        >
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full p-2 bg-gradient-to-b from-terracotta/20 via-border-warm to-white shadow-lg">
            <div className="w-full h-full rounded-full overflow-hidden bg-sand ring-4 ring-white shadow-inner flex items-center justify-center relative">
              <img
                alt="Smiling young man in traditional embroidered white thobe and keffiyeh"
                className="w-full h-full object-cover"
                style={{ objectPosition: "25% 20%" }}
                src="/images/portrait-young-man.jpg"
              />
            </div>
            <div className="absolute -top-1 -right-1 w-11 h-11 rounded-full bg-gold-primary text-espresso-dark flex items-center justify-center shadow-md ring-2 ring-white">
              <Icon name="bedtime" className="text-xl" fill />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-center lg:justify-start gap-1 text-gold-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon key={i} name="star" className="text-lg" fill />
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
          className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left gap-6 order-1 lg:order-2"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-border-warm text-terracotta text-xs font-bold tracking-wider uppercase shadow-sm">
            <Icon name="auto_awesome" className="text-sm" fill />
            <span>Mindful Islamic Living</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-charcoal tracking-tight leading-[1.12]">
            Every Moment <br className="hidden sm:inline" />
            <span className="text-terracotta font-serif font-normal italic">Glows with</span>{" "}
            <br />
            Mercy &amp; Faith
          </h1>
          <p className="font-body text-base sm:text-lg text-[#665449] max-w-md leading-relaxed">
            Cultivate deep spiritual presence with ILLMHUBB. From verified Hadith volumes to
            interactive prayer posture guidance, access everything your soul seeks in one
            mindful space.
          </p>
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#3B281D] hover:bg-[#2B1C13] text-white font-medium text-sm sm:text-base shadow-lg hover:shadow-xl transition-all group"
              href="#modules"
            >
              <span>Explore Sacred Knowledge</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Jump to Prayer Times"
              className="w-13 h-13 p-3.5 rounded-full bg-terracotta hover:bg-[#b55d34] text-white flex items-center justify-center shadow-md transition-all"
              href="/prayer-times"
            >
              <Icon name="arrow_forward" className="text-xl" />
            </motion.a>
          </div>
        </Reveal>

        {/* Right Arched Mosque Architecture Frame */}
        <Reveal
          as="div"
          delay={0.2}
          className="lg:col-span-4 flex justify-center lg:justify-end order-3"
        >
          <div className="relative w-full max-w-[320px] sm:max-w-[350px]">
            <div className="absolute -inset-3 bg-[#EEDCCE]/50 rounded-[180px_180px_48px_48px] transform -rotate-1" />
            <div className="relative rounded-[160px_160px_40px_40px] overflow-hidden shadow-2xl bg-sand aspect-[3/4.2] ring-4 ring-white">
              <img
                alt="Aerial view of Masjid al-Haram and the Kaaba in Makkah"
                className="w-full h-full object-cover"
                src="/images/masjid-al-haram.jpg"
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
            <div className="absolute -bottom-3 -left-3 w-12 h-12 rounded-full bg-gold-primary text-espresso flex items-center justify-center shadow-lg ring-4 ring-white">
              <Icon name="star" className="text-2xl" fill />
            </div>
          </div>
        </Reveal>
      </div>

      {/* Quick Platform Stats Bar */}
      <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
        {stats.map((stat, i) => (
          <Reveal
            as="div"
            key={stat.label}
            delay={i * 0.08}
            className="p-6 rounded-2xl bg-gradient-to-b from-white to-[#FFF9F5] border border-[#FED708]/30 hover:border-[#FED708]/70 flex flex-col items-center text-center shadow-[0_8px_20px_-4px_rgba(74,51,38,0.06)] hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            <span className="text-3xl sm:text-4xl font-extrabold text-[#9C4400]">
              {stat.value}
            </span>
            <span className="font-bold text-[#3B281D] text-sm mt-1.5">{stat.label}</span>
            <span className="text-xs text-[#7A695E] mt-0.5">{stat.sub}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
