import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Icon from "./Icon";
import Reveal from "./Reveal";

const palette = [
  { bg: "bg-terracotta", fg: "text-white" },
  { bg: "bg-sand", fg: "text-terracotta" },
  { bg: "bg-gold-primary", fg: "text-espresso-dark", fill: true },
  { bg: "bg-[#3B281D]", fg: "text-white" },
];

const modules = [
  {
    title: "Holy Quran",
    desc: "114 Surahs · 30 Parahs · Arabic + Urdu + English · Audio Recitation",
    cta: "Read Quran",
    to: "/quran",
    icon: "menu_book",
  },
  {
    title: "Hadith Library",
    desc: "Bukhari · Muslim · Tirmidhi · Abu Dawud · Ibn Majah · Nasai",
    cta: "Explore Hadiths",
    to: "/hadith",
    icon: "auto_stories",
  },
  {
    title: "Namaz Guide",
    desc: "9-step animated guide with beautiful prayer position figures",
    cta: "View Postures",
    icon: "self_improvement",
  },
  {
    title: "Wudu Guide",
    desc: "10-step animated water effects with Fard & Sunnah labels",
    cta: "Learn Wudu",
    icon: "water_drop",
  },
  {
    title: "Prayer Times",
    desc: "Live GPS · Hijri Date · Countdown to next Salah",
    cta: "Check Times",
    to: "/prayer-times",
    icon: "schedule",
  },
  {
    title: "Qibla Compass",
    desc: "Real-time compass pointing toward Makkah al-Mukarramah",
    cta: "Find Qibla",
    icon: "explore",
  },
  {
    title: "AI Islamic Chat",
    desc: "Groq AI powered · Instant answers to all Islamic questions",
    cta: "Ask Now",
    icon: "smart_toy",
  },
  {
    title: "MCQ Quiz",
    desc: "160+ questions · 8 categories · Daily AI-generated quiz",
    cta: "Take Quiz",
    icon: "quiz",
  },
  {
    title: "Kids Section",
    desc: "Alphabet · Surahs · Prophet stories · Duas · Islamic poems",
    cta: "Explore",
    icon: "child_care",
  },
  {
    title: "Wazifa Tracker",
    desc: "Daily dhikr counter · Subhanallah · Alhamdulillah · Allahu Akbar",
    cta: "Start Dhikr",
    icon: "fingerprint",
  },
  {
    title: "Allah's 99 Names",
    desc: "Asma-ul-Husna · Arabic calligraphy · Meanings · Audio",
    cta: "View Names",
    icon: "stars",
  },
  {
    title: "Zakat Calculator",
    desc: "Gold · Silver · Cash · Livestock · Business assets",
    cta: "Calculate Zakat",
    icon: "calculate",
  },
  {
    title: "Islamic Calendar",
    desc: "Hijri calendar · Islamic events · Eid dates · Ramadan countdown",
    cta: "View Calendar",
    icon: "calendar_month",
  },
  {
    title: "Habit Tracker",
    desc: "Build Islamic habits · Daily streaks · Prayer & Quran goals",
    cta: "Track Habits",
    icon: "trending_up",
  },
  {
    title: "Masjid Finder",
    desc: "Find nearest mosques · Prayer times · Directions",
    cta: "Find Masjid",
    icon: "mosque",
  },
  {
    title: "Smart Reminders",
    desc: "Prayer alerts · Quran reminders · Islamic event notifications",
    cta: "Set Reminders",
    icon: "notifications_active",
  },
];

export default function ModulesSection() {
  const trackRef = useRef(null);

  const scrollByCards = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const amount = Math.min(track.clientWidth * 0.8, 600) * direction;
    track.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12" id="modules">
      <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta">
            16 Powerful Features
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight">
            Essential Tools for Your Islamic Journey
          </h2>
          <p className="font-body text-base text-[#6E5D53] max-w-xl">
            Everything authenticated and verified by Islamic scholars, made effortless with
            contemporary intuitive craftsmanship.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            aria-label="Previous"
            onClick={() => scrollByCards(-1)}
            className="w-11 h-11 rounded-full bg-white border border-border-warm flex items-center justify-center text-charcoal hover:bg-sand transition-colors shadow-sm"
          >
            <Icon name="arrow_back" className="text-lg" />
          </button>
          <button
            aria-label="Next"
            onClick={() => scrollByCards(1)}
            className="w-11 h-11 rounded-full bg-[#3B281D] text-white flex items-center justify-center hover:bg-black transition-colors shadow-sm"
          >
            <Icon name="arrow_forward" className="text-lg" />
          </button>
        </div>
      </Reveal>

      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {modules.map((mod, i) => {
          const colors = palette[i % palette.length];
          return (
            <Reveal
              as="div"
              key={mod.title}
              delay={Math.min(i, 6) * 0.06}
              className="group shrink-0 snap-start w-60 sm:w-64 flex flex-col items-center text-center p-6 rounded-3xl bg-white border border-border-warm hover:shadow-lg transition-all shadow-sm"
            >
              <motion.div
                whileHover={{ scale: 1.08, rotate: 2 }}
                className={`relative w-28 h-28 rounded-full mb-5 ${colors.bg} ${colors.fg} ring-4 ring-sand shadow-md flex items-center justify-center`}
              >
                <Icon name={mod.icon} className="text-6xl" fill={colors.fill} />
              </motion.div>
              <h3 className="text-lg font-bold text-charcoal mb-1.5">{mod.title}</h3>
              <p className="font-body text-xs text-[#736357] mb-5">{mod.desc}</p>
              {mod.to ? (
                <Link
                  className="mt-auto px-5 py-2 rounded-full text-xs font-semibold tracking-wide bg-sand hover:bg-[#F3ECE4] text-[#3B281D] border border-border-warm transition-all"
                  to={mod.to}
                >
                  {mod.cta}
                </Link>
              ) : (
                <a
                  className="mt-auto px-5 py-2 rounded-full text-xs font-semibold tracking-wide bg-sand hover:bg-[#F3ECE4] text-[#3B281D] border border-border-warm transition-all"
                  href="#"
                >
                  {mod.cta}
                </a>
              )}
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
