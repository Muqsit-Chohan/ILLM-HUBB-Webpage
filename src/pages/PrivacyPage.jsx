import Icon from "../components/Icon";
import Reveal from "../components/Reveal";

const dataCards = [
  {
    icon: "schedule",
    title: "Prayer Times",
    desc: "Calculating accurate prayer times based on your coarse location.",
  },
  {
    icon: "explore",
    title: "Qibla Direction",
    desc: "Accurate directional bearing calculated directly via on-device sensors.",
  },
  {
    icon: "menu_book",
    title: "Personalisation",
    desc: "Remembering your Quran progress and customizing learning flows.",
  },
];

const sections = [
  {
    num: 1,
    icon: "person_search",
    title: "Information We Collect",
    body: (
      <>
        <p className="font-body text-[15px] text-[#6A5A50] leading-relaxed">
          We collect only the essential information needed to provide you with a meaningful,
          spiritual experience:
        </p>
        <ul className="space-y-2.5 font-body text-[15px] text-[#6A5A50] pt-1">
          <li className="flex items-start gap-3">
            <Icon name="check_circle" className="text-[#9C4400] text-lg shrink-0 mt-0.5" />
            <span>
              <strong>Account Details:</strong> Basic information such as your email address
              when you register or sign in.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <Icon name="check_circle" className="text-[#9C4400] text-lg shrink-0 mt-0.5" />
            <span>
              <strong>App Usage &amp; Records:</strong> Tasbeeh and dhikr counters, reading
              positions, and bookmarks, which are either stored locally on your device or
              securely synced to your account.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <Icon name="check_circle" className="text-[#9C4400] text-lg shrink-0 mt-0.5" />
            <span>
              <strong>AI Assistant Conversations:</strong> Messages and queries sent to the
              learning assistant to generate contextually relevant Islamic learning support.
            </span>
          </li>
        </ul>
      </>
    ),
  },
  {
    num: 2,
    icon: "hub",
    title: "How We Use Your Data",
    body: (
      <>
        <p className="font-body text-[15px] text-[#6A5A50] leading-relaxed">
          Your data is utilized solely to deliver core spiritual utilities:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
          {dataCards.map((c) => (
            <div key={c.title} className="p-3.5 rounded-xl bg-sand border border-border-warm">
              <Icon name={c.icon} className="text-[#9C4400] text-xl mb-1" />
              <h4 className="text-sm font-bold text-charcoal">{c.title}</h4>
              <p className="text-xs text-[#6A5A50] mt-1">{c.desc}</p>
            </div>
          ))}
        </div>
        <div className="p-4 rounded-xl bg-[#FAF6F0] border-l-4 border-[#9C4400] text-charcoal font-medium text-sm flex items-center gap-2">
          <Icon name="do_not_disturb_on" className="text-[#9C4400] shrink-0" />
          <span>
            We strictly never sell, rent, or trade your personal data to third parties or
            commercial advertisers.
          </span>
        </div>
      </>
    ),
  },
  {
    num: 3,
    icon: "lock",
    title: "Data Storage & Security",
    body: (
      <p className="font-body text-[15px] text-[#6A5A50] leading-relaxed">
        We protect your information with industry-standard encryption protocols and modern
        security controls. Any sensitive information is safely stored with secure
        transmission (TLS/SSL) and access restrictions to ensure uncompromised
        confidentiality.
      </p>
    ),
  },
  {
    num: 4,
    icon: "cloud_done",
    title: "Third-Party Services",
    body: (
      <p className="font-body text-[15px] text-[#6A5A50] leading-relaxed">
        We partner only with a minimal set of trusted third-party providers strictly
        necessary for reliable hosting, database persistence, and infrastructure. These
        entities process data exclusively under strict service agreements that uphold our
        privacy principles.
      </p>
    ),
  },
  {
    num: 5,
    icon: "block",
    title: "Advertising",
    body: (
      <p className="font-body text-[15px] text-[#6A5A50] leading-relaxed">
        IlmHubb does not sell user data to advertising networks. Any future features,
        sponsorships, or platform communications strictly adhere to ethical Islamic
        guidelines and respect the tranquility of your worship.
      </p>
    ),
  },
  {
    num: 6,
    icon: "family_restroom",
    title: "Children's Privacy",
    body: (
      <p className="font-body text-[15px] text-[#6A5A50] leading-relaxed">
        IlmHubb is designed for family and educational use. We do not knowingly collect
        personal information from children under the age of 13 without appropriate parental
        guidance and verified consent.
      </p>
    ),
  },
  {
    num: 7,
    icon: "badge",
    title: "Your Rights",
    body: (
      <p className="font-body text-[15px] text-[#6A5A50] leading-relaxed">
        You retain full ownership of your spiritual journey. You have the right to access,
        update, export, or permanently delete your personal data at any time directly
        through your account settings or by requesting assistance from our team.
      </p>
    ),
  },
  {
    num: 8,
    icon: "contact_support",
    title: "Contact Us",
    body: (
      <>
        <p className="font-body text-[15px] text-[#6A5A50] leading-relaxed">
          If you have questions, feedback, or inquiries regarding this Privacy Policy or your
          personal information, reach our dedicated support at:
        </p>
        <div className="pt-1">
          <a
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sand hover:bg-[#F3ECE4] text-[#9C4400] font-medium text-sm transition-colors"
            href="mailto:dreambyte.space@gmail.com"
          >
            <Icon name="mail" className="text-base" />
            <span>dreambyte.space@gmail.com</span>
          </a>
        </div>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <main className="w-full pt-28 sm:pt-32 pb-20">
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[680px] h-[340px] bg-gradient-to-b from-[#FED708]/25 via-[#FFB68F]/30 to-transparent blur-3xl pointer-events-none rounded-full" />

        {/* Hero */}
        <Reveal
          as="section"
          className="relative max-w-4xl mx-auto px-4 sm:px-6 pt-10 pb-8 text-center flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#ffe9e6] border border-border-warm shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-[#9C4400] animate-pulse" />
            <span className="text-xs uppercase tracking-widest text-[#574238] font-bold">
              Legal Document
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-charcoal tracking-tight leading-tight">
            Privacy Policy
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-[#6A5A50] font-body">
            How IlmHubb collects, uses, and protects your information
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sand text-[#543428] border border-border-warm text-sm">
            <Icon name="calendar_today" className="text-sm text-[#9C4400]" fill />
            <span>Last updated: June 2026</span>
          </div>

          <div className="mt-8 w-full p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-sand via-[#ffe9e6] to-sand border border-[#9C4400]/20 shadow-sm text-left flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#9C4400]/10 flex items-center justify-center shrink-0 text-[#9C4400] mt-0.5">
              <Icon name="verified_user" className="text-2xl" fill />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#9C4400] uppercase tracking-wider text-xs">
                  Our Commitment
                </span>
                <span className="font-arabic text-sm text-[#9C4400] font-bold" dir="rtl">
                  الأَمَانَة
                </span>
              </div>
              <p className="mt-1 text-charcoal font-medium leading-relaxed font-body">
                IlmHubb is built on Amanah (trust). We will never sell your personal data to
                third parties.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Sections */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-4 flex flex-col gap-5 w-full">
          {sections.map((s, i) => (
            <Reveal
              as="section"
              key={s.num}
              delay={i * 0.05}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-border-warm shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-sand flex items-center justify-center text-[#9C4400] shrink-0 font-bold">
                  {s.num}
                </div>
                <div className="flex-grow space-y-3 w-full">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-charcoal">{s.title}</h2>
                    <Icon name={s.icon} className="text-[#6A5A50]/60" />
                  </div>
                  {s.body}
                </div>
              </div>
            </Reveal>
          ))}

          {/* Bottom contact box */}
          <Reveal
            delay={0.1}
            className="mt-8 p-8 rounded-2xl bg-gradient-to-b from-[#FFF9F5] to-sand border border-[#FED708]/30 text-center shadow-sm flex flex-col items-center"
          >
            <div
              className="font-arabic text-2xl sm:text-3xl text-[#9C4400] font-bold mb-3"
              dir="rtl"
              lang="ar"
            >
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </div>
            <h3 className="text-2xl font-bold text-charcoal mt-1">
              Questions about your privacy?
            </h3>
            <p className="mt-2 text-sm text-[#6A5A50] max-w-md font-body">
              Our team is committed to upholding your trust and data integrity with the
              utmost care. Reach out whenever you need clarity.
            </p>
            <a
              className="mt-6 inline-flex items-center gap-2 bg-[#3B281D] hover:bg-[#241710] text-[#FFF9F5] rounded-full px-6 py-2.5 text-sm font-semibold shadow-md hover:shadow-lg transition-all border border-[#FED708]/40 group"
              href="mailto:dreambyte.space@gmail.com"
            >
              <Icon name="mail" className="text-base text-[#FED708]" />
              <span>Contact Support (dreambyte.space@gmail.com)</span>
              <Icon
                name="arrow_forward"
                className="text-sm group-hover:translate-x-0.5 transition-transform text-[#FED708]"
              />
            </a>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
