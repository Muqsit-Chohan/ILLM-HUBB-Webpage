import Icon from "../components/Icon";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

const stats = [
  { value: "50,000+", label: "Active Seekers" },
  { value: "120+", label: "Countries Reached" },
  { value: "500,000+", label: "Prayers Shared" },
  { value: "45,000+", label: "Community Members" },
];

const testimonials = [
  {
    name: "Ayaan Malik",
    role: "Business Man",
    quote:
      "The thoughtfully curated content, timely reminders, and beautifully crafted design helped me stay consistently focused on faith, reflection, and personal growth throughout every day.",
    avatarBg: "bg-terracotta",
  },
  {
    name: "Sumaya Rahman",
    role: "Teacher",
    quote:
      "ILLMHUBB has become part of my daily routine — from prayer reminders to the Hadith library, everything feels made with real care and authenticity.",
    avatarBg: "bg-gold-primary",
  },
  {
    name: "Bilal Hussain",
    role: "Software Engineer",
    quote:
      "As someone with a busy schedule, the Qibla compass and accurate prayer times keep me grounded no matter where I am traveling.",
    avatarBg: "bg-sand",
  },
];

export default function CommunityPage() {
  return (
    <main className="w-full pt-28 sm:pt-32 pb-20">
      <div className="relative w-full overflow-hidden bg-[#fff8f7]">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-[340px] bg-gradient-to-b from-[#FFB68F]/20 via-[#FFE16A]/10 to-transparent blur-3xl pointer-events-none rounded-full" />

        <PageHero
          badge="Real Impact"
          icon="groups"
          title="Our Community"
          subtitle="Authentic voices from people who choose to celebrate faith with us and make it a meaningful part of their daily journey."
        />

        {/* Stats */}
        <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
            {stats.map((stat, i) => (
              <Reveal
                as="div"
                key={stat.label}
                delay={i * 0.08}
                className="p-6 rounded-2xl bg-gradient-to-b from-white to-[#FFF9F5] border border-[#FED708]/30 flex flex-col items-center text-center shadow-[0_8px_20px_-4px_rgba(74,51,38,0.06)]"
              >
                <span className="text-2xl sm:text-3xl font-extrabold text-[#9C4400]">
                  {stat.value}
                </span>
                <span className="font-bold text-[#3B281D] text-xs sm:text-sm mt-1.5 text-center">
                  {stat.label}
                </span>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal
                as="div"
                key={t.name}
                delay={i * 0.08}
                className="flex flex-col p-6 rounded-3xl bg-white border border-border-warm shadow-sm"
              >
                <Icon name="format_quote" className="text-2xl text-terracotta mb-2" fill />
                <p className="font-body text-sm text-charcoal leading-relaxed flex-grow mb-5">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border-warm">
                  <div className={`w-10 h-10 rounded-full ${t.avatarBg} ring-2 ring-white shadow-sm`} />
                  <div>
                    <span className="text-sm font-bold text-charcoal block">{t.name}</span>
                    <span className="text-xs text-[#7A695E]">{t.role}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <Reveal delay={0.1} className="rounded-3xl bg-gradient-to-br from-espresso-dark via-[#3B281D] to-[#261816] text-white p-8 sm:p-12 text-center shadow-lg border border-[#FED708]/20">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">
              Join Our Growing Community
            </h2>
            <p className="font-body text-sm text-neutral-300 max-w-md mx-auto mb-6">
              Connect with thousands of seekers on the same journey — share reflections,
              ask questions, and grow together in faith.
            </p>
            <a
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#9C4400] hover:bg-[#ff863b] text-white font-medium text-sm shadow-md transition-all"
              href="#"
            >
              <span>Become a Member</span>
              <Icon name="arrow_forward" className="text-sm" />
            </a>
          </Reveal>
        </section>
      </div>
    </main>
  );
}
