import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Icon from "./Icon";
import Reveal from "./Reveal";
import {
  QuranIcon,
  HadithIcon,
  NamazIcon,
  WuduIcon,
  PrayerTimesIcon,
  QiblaIcon,
  AiChatIcon,
  QuizIcon,
  KidsIcon,
  WazifaIcon,
  NamesOfAllahIcon,
  ZakatIcon,
  CalendarIcon,
  HabitIcon,
  MasjidIcon,
  RemindersIcon,
} from "./ModuleIcons";

const palette = [
  { grad: "from-[#E08A5B] to-[#A8491F]", fg: "text-white", glow: "shadow-[0_10px_24px_-8px_rgba(168,73,31,0.55)]" },
  { grad: "from-[#ECC77E] to-[#B9832F]", fg: "text-[#3B281D]", glow: "shadow-[0_10px_24px_-8px_rgba(185,131,47,0.5)]" },
  { grad: "from-[#5B4234] to-[#2A1B14]", fg: "text-white", glow: "shadow-[0_10px_24px_-8px_rgba(42,27,20,0.55)]" },
  { grad: "from-[#D4714A] to-[#6E3220]", fg: "text-white", glow: "shadow-[0_10px_24px_-8px_rgba(110,50,32,0.55)]" },
];

const modules = [
  {
    title: "Holy Quran",
    desc: "114 Surahs · 30 Parahs · Arabic + Urdu + English · Audio Recitation",
    cta: "Read Quran",
    to: "/quran",
    icon: QuranIcon,
  },
  {
    title: "Hadith Library",
    desc: "Bukhari · Muslim · Tirmidhi · Abu Dawud · Ibn Majah · Nasai",
    cta: "Explore Hadiths",
    to: "/hadith",
    icon: HadithIcon,
  },
  {
    title: "Namaz Guide",
    desc: "9-step animated guide with beautiful prayer position figures",
    cta: "View Postures",
    icon: NamazIcon,
  },
  {
    title: "Wudu Guide",
    desc: "10-step animated water effects with Fard & Sunnah labels",
    cta: "Learn Wudu",
    icon: WuduIcon,
  },
  {
    title: "Prayer Times",
    desc: "Live GPS · Hijri Date · Countdown to next Salah",
    cta: "Check Times",
    to: "/prayer-times",
    icon: PrayerTimesIcon,
  },
  {
    title: "Qibla Compass",
    desc: "Real-time compass pointing toward Makkah al-Mukarramah",
    cta: "Find Qibla",
    icon: QiblaIcon,
  },
  {
    title: "AI Islamic Chat",
    desc: "Groq AI powered · Instant answers to all Islamic questions",
    cta: "Ask Now",
    icon: AiChatIcon,
  },
  {
    title: "MCQ Quiz",
    desc: "160+ questions · 8 categories · Daily AI-generated quiz",
    cta: "Take Quiz",
    icon: QuizIcon,
  },
  {
    title: "Kids Section",
    desc: "Alphabet · Surahs · Prophet stories · Duas · Islamic poems",
    cta: "Explore",
    icon: KidsIcon,
  },
  {
    title: "Wazifa Tracker",
    desc: "Daily dhikr counter · Subhanallah · Alhamdulillah · Allahu Akbar",
    cta: "Start Dhikr",
    icon: WazifaIcon,
  },
  {
    title: "Allah's 99 Names",
    desc: "Asma-ul-Husna · Arabic calligraphy · Meanings · Audio",
    cta: "View Names",
    icon: NamesOfAllahIcon,
  },
  {
    title: "Zakat Calculator",
    desc: "Gold · Silver · Cash · Livestock · Business assets",
    cta: "Calculate Zakat",
    icon: ZakatIcon,
  },
  {
    title: "Islamic Calendar",
    desc: "Hijri calendar · Islamic events · Eid dates · Ramadan countdown",
    cta: "View Calendar",
    icon: CalendarIcon,
  },
  {
    title: "Habit Tracker",
    desc: "Build Islamic habits · Daily streaks · Prayer & Quran goals",
    cta: "Track Habits",
    icon: HabitIcon,
  },
  {
    title: "Masjid Finder",
    desc: "Find nearest mosques · Prayer times · Directions",
    cta: "Find Masjid",
    icon: MasjidIcon,
  },
  {
    title: "Smart Reminders",
    desc: "Prayer alerts · Quran reminders · Islamic event notifications",
    cta: "Set Reminders",
    icon: RemindersIcon,
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
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            aria-label="Previous"
            onClick={() => scrollByCards(-1)}
            className="w-11 h-11 rounded-full bg-white border border-border-warm flex items-center justify-center text-charcoal hover:bg-sand transition-colors shadow-sm"
          >
            <Icon name="arrow_back" className="text-lg" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            aria-label="Next"
            onClick={() => scrollByCards(1)}
            className="w-11 h-11 rounded-full bg-[#3B281D] text-white flex items-center justify-center hover:bg-black transition-colors shadow-sm"
          >
            <Icon name="arrow_forward" className="text-lg" />
          </motion.button>
        </div>
      </Reveal>

      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {modules.map((mod, i) => {
          const colors = palette[i % palette.length];
          const ModIcon = mod.icon;
          return (
            <Reveal
              as="div"
              key={mod.title}
              delay={Math.min(i, 6) * 0.06}
              className="group shrink-0 snap-start w-60 sm:w-64 flex flex-col items-center text-center p-6 rounded-3xl bg-white border border-border-warm hover:shadow-lg transition-all shadow-sm"
            >
              <motion.div
                whileHover={{ scale: 1.08, rotate: 3 }}
                className={`relative w-24 h-24 rounded-full mb-5 bg-gradient-to-br ${colors.grad} ${colors.fg} ring-4 ring-sand ${colors.glow} flex items-center justify-center overflow-hidden`}
              >
                <span className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-white/25 blur-md" />
                <ModIcon className="w-11 h-11 relative drop-shadow-sm" />
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
