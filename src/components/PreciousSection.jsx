import Icon from "./Icon";
import Reveal from "./Reveal";

export default function PreciousSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
      <Reveal className="bg-gradient-to-br from-white via-[#FFFDFB] to-[#FFF9F5] border border-[#FED708]/30 rounded-3xl p-8 lg:p-14 shadow-[0_16px_40px_-12px_rgba(74,51,38,0.08)] relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="px-3.5 py-1 rounded-full bg-[#FAF6F0] border border-[#FED708]/25 text-xs font-semibold text-[#9C4400]">
                Reflection
              </span>
              <span className="px-3.5 py-1 rounded-full bg-[#FAF6F0] border border-[#FED708]/25 text-xs font-semibold text-[#7D6B60]">
                Community
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal tracking-tight leading-tight">
              Every Second of Your Devotion is{" "}
              <span className="text-[#9C4400] font-serif italic font-normal">Precious</span>
            </h2>
            <p className="font-body text-base sm:text-lg text-[#6A5A50] leading-relaxed max-w-lg">
              We celebrate faith with intention, purity, and purpose through inspired design
              and authenticated content crafted for your everyday spiritual mindfulness.
            </p>
            <div className="pt-2">
              <a
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#3B281D] hover:bg-[#241710] text-[#FFF9F5] font-medium text-sm transition-all shadow-md hover:shadow-xl border border-[#FED708]/25"
                href="#modules"
              >
                Discover All Features
              </a>
            </div>
          </div>
          <div className="lg:col-span-6 flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-6 relative">
            <div className="relative w-48 sm:w-56 h-64 sm:h-72 rounded-[120px_120px_28px_28px] overflow-hidden bg-sand shadow-lg border-2 border-white ring-1 ring-[#FED708]/30">
              <img
                alt="Men in traditional white thobe walking along the coast"
                className="w-full h-full object-cover"
                src="/images/portrait-thobe.jpg"
              />
              <div className="absolute -top-1 -right-1 text-[#FED708] p-2 drop-shadow-md">
                <Icon name="bedtime" className="text-2xl" fill />
              </div>
            </div>
            <div className="w-44 h-44 sm:w-48 sm:h-48 rounded-full bg-gradient-to-br from-[#FED708] to-[#E8C27E] text-espresso-dark flex flex-col items-center justify-center text-center p-4 shadow-[0_12px_28px_-6px_rgba(254,215,8,0.35)] ring-4 ring-white">
              <span className="text-xs font-bold uppercase tracking-wider text-[#3B281D]/80">
                Prayers Shared
              </span>
              <span className="text-2xl sm:text-3xl font-black tracking-tight text-[#30211F]">
                500,000+
              </span>
              <Icon name="volunteer_activism" className="text-2xl mt-1 text-[#3B281D]" fill />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
