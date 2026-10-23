import Icon from "./Icon";
import Reveal from "./Reveal";

const prayerTimes = [
  { name: "Fajr", time: "05:51" },
  { name: "Dhuhr", time: "12:35" },
  { name: "Asr", time: "15:50", active: true },
  { name: "Magrib", time: "18:16" },
  { name: "Isha", time: "19:45" },
];

export default function PrayerTimesSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12" id="community">
      <Reveal className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-terracotta">
          Timeless Discipline
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight mt-1">
          Daily Spiritual Guidance
        </h2>
        <p className="font-body text-base text-[#6E5D53] mt-2">
          Stay connected with your Creator through accurate prayer times, uplifting verses,
          and meal schedules.
        </p>
      </Reveal>

      {/* Prayer Times Card */}
      <Reveal
        id="prayer-widget"
        className="w-full rounded-3xl bg-gradient-to-br from-[#7B5647] via-[#654639] to-[#432E22] p-6 sm:p-10 text-white shadow-[0_20px_50px_-12px_rgba(67,46,34,0.35)] border border-[#FED708]/30 relative overflow-hidden"
      >
        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[#FED708]/15 blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-[#FF863B]/20 blur-2xl pointer-events-none" />
        <div className="absolute top-6 left-8 text-[#FED708] opacity-90 hidden sm:block drop-shadow-md">
          <Icon name="bedtime" className="text-4xl" fill />
        </div>
        <div className="absolute top-8 right-10 text-[#FED708] opacity-90 hidden sm:block drop-shadow-md">
          <Icon name="star" className="text-3xl" fill />
        </div>

        <div className="flex flex-col items-center text-center gap-2 mb-8 relative z-10">
          <div className="flex items-center gap-2 text-lg sm:text-xl font-bold tracking-wide">
            <Icon name="schedule" className="text-[#FED708]" />
            <span>Prayer Times</span>
          </div>
          <div className="flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-medium text-white/95 border border-white/20 shadow-sm">
            <Icon name="location_on" className="text-xs text-[#FED708]" />
            <span>Mecca, Saudi Arabia (GPS Synced)</span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 max-w-4xl mx-auto relative z-10">
          {prayerTimes.map((p) => (
            <div
              key={p.name}
              className={
                p.active
                  ? "flex items-center justify-between p-3.5 sm:p-4 rounded-full bg-white text-espresso-dark font-bold shadow-lg ring-2 ring-[#FED708] scale-105"
                  : `flex items-center justify-between p-3.5 sm:p-4 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 hover:bg-white/25 transition-all shadow-sm ${
                      p.name === "Isha" ? "col-span-2 sm:col-span-1" : ""
                    }`
              }
            >
              {p.active ? (
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#9C4400] animate-ping" />
                  <span className="text-sm text-[#3B281D]">{p.name}</span>
                </div>
              ) : (
                <span className="text-sm font-medium text-white/90">{p.name}</span>
              )}
              <span className={p.active ? "text-base font-extrabold text-[#9C4400]" : "text-base font-bold text-white"}>
                {p.time}
              </span>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Verse & Iftar Row */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        <Reveal
          as="div"
          className="lg:col-span-7 p-8 rounded-3xl bg-white border border-border-warm flex flex-col justify-between shadow-sm"
        >
          <div className="flex flex-col gap-3">
            <Icon name="format_quote" className="text-3xl text-terracotta" fill />
            <blockquote className="text-xl sm:text-2xl font-serif text-charcoal font-bold leading-relaxed">
              “The month of Ramadan in which was revealed the Quran, a guidance for mankind and
              clear proofs for guidance and the criterion.”
            </blockquote>
          </div>
          <div className="mt-6 pt-4 flex items-center justify-between border-t border-border-warm text-xs font-semibold text-[#7D6B60]">
            <span>— Surah Al-Baqarah, Ayah 185</span>
            <span className="font-arabic text-xl text-terracotta" dir="rtl">
              شَهْرُ رَمَضَانَ الَّذِي أُنزِلَ فِيهِ الْقُرْآنُ
            </span>
          </div>
        </Reveal>

        <Reveal
          as="div"
          delay={0.1}
          className="lg:col-span-5 p-8 rounded-3xl bg-white border border-border-warm flex flex-col justify-between gap-4 shadow-sm"
        >
          <div className="flex items-center justify-between text-charcoal font-bold text-sm">
            <div className="flex items-center gap-2">
              <Icon name="restaurant" className="text-terracotta text-base" />
              <span>Iftar &amp; Suhoor Times</span>
            </div>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-sand text-[#6A5A50] border border-border-warm">
              Makkah
            </span>
          </div>
          <div className="flex flex-col gap-3 my-auto">
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#3B281D] text-white shadow-sm">
              <span className="text-sm font-medium">Suhoor Ends</span>
              <span className="text-base font-bold text-gold-light">05:51 AM</span>
            </div>
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-sand border border-border-warm text-charcoal shadow-sm">
              <span className="text-sm font-medium">Iftar Time</span>
              <span className="text-base font-bold text-terracotta">18:16 PM</span>
            </div>
          </div>
          <p className="text-xs text-[#7D6B60] text-center">
            Calculated using Umm al-Qura University, Makkah
          </p>
        </Reveal>
      </div>
    </section>
  );
}
