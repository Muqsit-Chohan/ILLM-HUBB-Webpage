import Icon from "../components/Icon";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

const prayerTimes = [
  { name: "Fajr", time: "05:51", icon: "bedtime" },
  { name: "Sunrise", time: "07:12", icon: "wb_twilight" },
  { name: "Dhuhr", time: "12:35", icon: "light_mode" },
  { name: "Asr", time: "15:50", icon: "clear_day", active: true },
  { name: "Maghrib", time: "18:16", icon: "wb_twilight" },
  { name: "Isha", time: "19:45", icon: "bedtime" },
];

const weekForecast = [
  { day: "Mon", fajr: "05:49", dhuhr: "12:35", asr: "15:51", maghrib: "18:18", isha: "19:47" },
  { day: "Tue", fajr: "05:50", dhuhr: "12:35", asr: "15:51", maghrib: "18:17", isha: "19:46" },
  { day: "Wed", fajr: "05:51", dhuhr: "12:35", asr: "15:50", maghrib: "18:16", isha: "19:45", today: true },
  { day: "Thu", fajr: "05:52", dhuhr: "12:35", asr: "15:50", maghrib: "18:15", isha: "19:44" },
  { day: "Fri", fajr: "05:53", dhuhr: "12:34", asr: "15:49", maghrib: "18:14", isha: "19:43" },
  { day: "Sat", fajr: "05:54", dhuhr: "12:34", asr: "15:49", maghrib: "18:13", isha: "19:42" },
  { day: "Sun", fajr: "05:55", dhuhr: "12:34", asr: "15:48", maghrib: "18:12", isha: "19:41" },
];

export default function PrayerTimesPage() {
  return (
    <main className="w-full pb-20">
      <div className="relative w-full overflow-hidden bg-[#fff8f7] pt-28 sm:pt-32">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-[340px] bg-gradient-to-b from-[#FFB68F]/20 via-[#FFE16A]/10 to-transparent blur-3xl pointer-events-none rounded-full" />

        <PageHero
          badge="Timeless Discipline"
          icon="schedule"
          title="Prayer Times"
          subtitle="Accurate, GPS-synced prayer schedules calculated using Umm al-Qura University, Makkah."
        >
          <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border-warm shadow-sm text-sm text-charcoal">
            <Icon name="location_on" className="text-base text-[#9C4400]" fill />
            <span className="font-medium">Mecca, Saudi Arabia</span>
            <button className="ml-1 text-xs font-semibold text-[#9C4400] hover:underline">
              Change
            </button>
          </div>
        </PageHero>

        <section className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <Reveal className="w-full rounded-3xl bg-gradient-to-br from-[#7B5647] via-[#654639] to-[#432E22] p-6 sm:p-10 text-white shadow-[0_20px_50px_-12px_rgba(67,46,34,0.35)] border border-[#FED708]/30 relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[#FED708]/15 blur-2xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-[#FF863B]/20 blur-2xl pointer-events-none" />

            <div className="flex flex-col items-center text-center gap-1 mb-8 relative z-10">
              <span className="text-xs uppercase tracking-widest text-white/70 font-semibold">
                Wednesday, 15 Ramadan 1447
              </span>
              <span className="text-lg sm:text-xl font-bold tracking-wide">Today's Schedule</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 relative z-10">
              {prayerTimes.map((p) => (
                <div
                  key={p.name}
                  className={
                    p.active
                      ? "flex flex-col items-center gap-1 p-4 rounded-2xl bg-white text-espresso-dark font-bold shadow-lg ring-2 ring-[#FED708]"
                      : "flex flex-col items-center gap-1 p-4 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 hover:bg-white/25 transition-all"
                  }
                >
                  <Icon
                    name={p.icon}
                    className={p.active ? "text-[#9C4400] text-lg" : "text-[#FED708] text-lg"}
                    fill
                  />
                  <span className={p.active ? "text-xs text-[#3B281D]" : "text-xs text-white/85"}>
                    {p.name}
                  </span>
                  <span className={p.active ? "text-base font-extrabold text-[#9C4400]" : "text-base font-bold text-white"}>
                    {p.time}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Weekly forecast */}
        <section className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <Reveal delay={0.1} className="p-6 sm:p-8 rounded-3xl bg-white border border-border-warm shadow-sm">
            <h2 className="text-lg font-bold text-charcoal mb-4">This Week</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-[560px]">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-wider text-[#9C4400] border-b border-border-warm">
                    <th className="py-2 pr-4 font-semibold">Day</th>
                    <th className="py-2 px-3 font-semibold">Fajr</th>
                    <th className="py-2 px-3 font-semibold">Dhuhr</th>
                    <th className="py-2 px-3 font-semibold">Asr</th>
                    <th className="py-2 px-3 font-semibold">Maghrib</th>
                    <th className="py-2 pl-3 font-semibold">Isha</th>
                  </tr>
                </thead>
                <tbody>
                  {weekForecast.map((d) => (
                    <tr
                      key={d.day}
                      className={
                        d.today
                          ? "bg-sand/70 text-charcoal font-bold"
                          : "text-[#6A5A50] border-b border-border-warm/60 last:border-0"
                      }
                    >
                      <td className="py-2.5 pr-4">{d.day}</td>
                      <td className="py-2.5 px-3">{d.fajr}</td>
                      <td className="py-2.5 px-3">{d.dhuhr}</td>
                      <td className="py-2.5 px-3">{d.asr}</td>
                      <td className="py-2.5 px-3">{d.maghrib}</td>
                      <td className="py-2.5 pl-3">{d.isha}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </section>

        {/* Qibla + Iftar row */}
        <section className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Reveal className="p-8 rounded-3xl bg-white border border-border-warm flex flex-col items-center text-center gap-4 shadow-sm">
            <div className="relative w-28 h-28 rounded-full border-4 border-sand flex items-center justify-center">
              <div className="absolute inset-2 rounded-full border border-border-warm" />
              <Icon name="explore" className="text-4xl text-terracotta rotate-45" fill />
            </div>
            <div>
              <h3 className="font-bold text-charcoal">Qibla Direction</h3>
              <p className="text-xs text-[#7A695E] mt-1">
                GPS-precise bearing toward the Ka'bah from your location
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="p-8 rounded-3xl bg-white border border-border-warm flex flex-col justify-center gap-4 shadow-sm">
            <div className="flex items-center justify-between text-charcoal font-bold text-sm">
              <div className="flex items-center gap-2">
                <Icon name="restaurant" className="text-terracotta text-base" />
                <span>Iftar &amp; Suhoor Times</span>
              </div>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-sand text-[#6A5A50] border border-border-warm">
                Makkah
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#3B281D] text-white shadow-sm">
                <span className="text-sm font-medium">Suhoor Ends</span>
                <span className="text-base font-bold text-gold-light">05:51 AM</span>
              </div>
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-sand border border-border-warm text-charcoal shadow-sm">
                <span className="text-sm font-medium">Iftar Time</span>
                <span className="text-base font-bold text-terracotta">18:16 PM</span>
              </div>
            </div>
          </Reveal>
        </section>
      </div>
    </main>
  );
}
