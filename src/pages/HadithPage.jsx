import Icon from "../components/Icon";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

const collections = [
  {
    name: "Sahih al-Bukhari",
    author: "Imam Muhammad al-Bukhari",
    count: "7,563",
    desc: "Widely regarded as the most authentic collection of hadith, compiled over 16 years of rigorous verification.",
  },
  {
    name: "Sahih Muslim",
    author: "Imam Muslim ibn al-Hajjaj",
    count: "7,500",
    desc: "The second most authentic collection, renowned for its systematic chain-of-narration methodology.",
  },
  {
    name: "Jami at-Tirmidhi",
    author: "Imam Abu Isa at-Tirmidhi",
    count: "3,956",
    desc: "Notable for grading each hadith's authenticity and including juristic commentary alongside narrations.",
  },
  {
    name: "Sunan Abi Dawud",
    author: "Imam Abu Dawud",
    count: "5,274",
    desc: "Focused heavily on legal rulings (fiqh), making it a cornerstone reference for Islamic jurisprudence.",
  },
  {
    name: "Sunan Ibn Majah",
    author: "Imam Ibn Majah",
    count: "4,341",
    desc: "Completes the Kutub as-Sittah, covering chapters not extensively found in the other five collections.",
  },
  {
    name: "Sunan an-Nasai",
    author: "Imam Ahmad an-Nasai",
    count: "5,758",
    desc: "Known for its exceptionally strict narrator-screening criteria among the six canonical collections.",
  },
];

export default function HadithPage() {
  return (
    <main className="w-full pt-28 sm:pt-32 pb-20">
      <div className="relative w-full overflow-hidden bg-[#fff8f7]">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-[340px] bg-gradient-to-b from-[#FFB68F]/20 via-[#FFE16A]/10 to-transparent blur-3xl pointer-events-none rounded-full" />

        <PageHero
          badge="Sacred Knowledge"
          icon="auto_stories"
          title="Sahih Hadith Library"
          subtitle="Sahih al-Bukhari, Muslim, Tirmidhi, Abu Dawud, Ibn Majah, and An-Nasai with complete chains of narrators."
        />

        <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {collections.map((c, i) => (
              <Reveal
                as="div"
                key={c.name}
                delay={i * 0.06}
                className="flex flex-col p-6 rounded-3xl bg-white border border-border-warm hover:shadow-lg transition-all shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-sand border border-border-warm text-[#9C4400] flex items-center justify-center mb-4">
                  <Icon name="menu_book" fill />
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-0.5">{c.name}</h3>
                <p className="text-xs text-[#9C4400] font-semibold mb-3">{c.author}</p>
                <p className="font-body text-sm text-[#736357] mb-5 flex-grow">{c.desc}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border-warm">
                  <span className="text-xs font-semibold text-[#7A695E]">
                    {c.count} Hadiths
                  </span>
                  <a
                    className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-sand hover:bg-[#F3ECE4] text-[#3B281D] border border-border-warm transition-all"
                    href="#"
                  >
                    Explore
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Hadith of the Day */}
        <Reveal
          delay={0.1}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16"
        >
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-border-warm shadow-sm relative overflow-hidden">
            <div className="flex items-center gap-2 mb-4">
              <Icon name="format_quote" className="text-3xl text-terracotta" fill />
              <span className="text-xs font-bold uppercase tracking-widest text-terracotta">
                Hadith of the Day
              </span>
            </div>
            <blockquote className="text-xl sm:text-2xl font-serif text-charcoal font-bold leading-relaxed mb-4">
              "The best among you are those who have the best manners and character."
            </blockquote>
            <div className="flex items-center justify-between pt-4 border-t border-border-warm text-xs font-semibold text-[#7D6B60]">
              <span>— Sahih al-Bukhari, 3559</span>
              <span className="font-arabic text-xl text-terracotta" dir="rtl">
                خِيَارُكُمْ أَحَاسِنُكُمْ أَخْلَاقًا
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
