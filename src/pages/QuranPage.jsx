import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Icon from "../components/Icon";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import surahs from "../data/surahs";

export default function QuranPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return surahs;
    return surahs.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.meaning.toLowerCase().includes(q) ||
        String(s.number).includes(q)
    );
  }, [query]);

  return (
    <main className="w-full pt-28 sm:pt-32 pb-20">
      <div className="relative w-full overflow-hidden bg-[#fff8f7]">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-[340px] bg-gradient-to-b from-[#FFB68F]/20 via-[#FFE16A]/10 to-transparent blur-3xl pointer-events-none rounded-full" />

        <PageHero
          badge="Sacred Knowledge"
          icon="menu_book"
          title="Al-Quran Al-Kareem"
          subtitle="114 Surahs with verse-by-verse audio recitations by renowned Qaris and authentic multilingual tafsir."
        >
          <div className="mt-6 w-full max-w-md relative">
            <Icon
              name="search"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9C4400] text-lg"
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by Surah name or number..."
              className="w-full h-12 pl-11 pr-4 rounded-full border border-border-warm bg-white text-sm text-charcoal placeholder:text-[#9A897D] focus:outline-none focus:ring-2 focus:ring-terracotta/40 shadow-sm"
            />
          </div>
        </PageHero>

        <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <p className="text-xs text-[#7A695E] mb-4 font-body">
            Showing {filtered.length} of {surahs.length} Surahs
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((s, i) => (
              <Reveal
                as="a"
                href="#"
                key={s.number}
                delay={Math.min(i, 12) * 0.03}
                className="group flex items-center gap-4 p-4 rounded-2xl bg-white border border-border-warm hover:border-[#FED708]/60 hover:shadow-md transition-all"
              >
                <span className="shrink-0 w-11 h-11 rounded-full bg-sand border border-border-warm text-[#9C4400] font-bold text-sm flex items-center justify-center group-hover:bg-gold-primary group-hover:text-espresso-dark transition-colors">
                  {s.number}
                </span>
                <div className="flex-grow min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-bold text-charcoal text-sm truncate">{s.name}</h3>
                    <span className="font-arabic text-lg text-[#9C4400] shrink-0" dir="rtl">
                      {s.arabic}
                    </span>
                  </div>
                  <p className="text-xs text-[#7A695E] truncate">{s.meaning}</p>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-sand text-[#6A5A50] border border-border-warm">
                      {s.verses} Ayahs
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-terracotta-light text-terracotta border border-terracotta/20">
                      {s.type}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-[#7A695E] font-body">
              No Surah found matching "{query}"
            </div>
          )}
        </section>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-6"
        >
          <div className="rounded-3xl bg-gradient-to-br from-espresso-dark via-[#3B281D] to-[#261816] text-white p-8 sm:p-10 text-center shadow-lg border border-[#FED708]/20">
            <div className="font-arabic text-2xl sm:text-3xl text-gold-light mb-3" dir="rtl">
              شَهْرُ رَمَضَانَ الَّذِي أُنزِلَ فِيهِ الْقُرْآنُ
            </div>
            <p className="font-body text-sm text-neutral-300 max-w-md mx-auto">
              "The month of Ramadan in which was revealed the Quran, a guidance for mankind
              and clear proofs for guidance and the criterion." — Surah Al-Baqarah, Ayah 185
            </p>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
