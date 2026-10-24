import Icon from "../components/Icon";
import Reveal from "../components/Reveal";

const sections = [
  {
    num: "01",
    title: "Acceptance of Terms",
    body: (
      <p className="font-body text-[15px] text-[#6A5A50] leading-relaxed">
        By accessing or using IlmHubb website, web app, or mobile apps, you agree to be bound
        by these Terms and Conditions. If you do not agree, please do not use the service.
      </p>
    ),
  },
  {
    num: "02",
    title: "Islamic Content Disclaimer",
    body: (
      <div className="rounded-xl bg-[#FFF9F2] border border-[#FED708]/40 p-5 space-y-2">
        <div className="flex items-center gap-2 text-[#9C4400] font-semibold text-sm">
          <Icon name="info" className="text-base" fill />
          <span>Important Religious Notice</span>
        </div>
        <p className="font-body text-[15px] text-charcoal leading-relaxed">
          IlmHubb provides educational tools, Quranic texts, prayer calculations, and
          AI-assisted information for learning and reference. It is{" "}
          <strong>NOT a replacement for qualified Islamic scholarship or formal fatwas</strong>.
          Users should consult verified scholars for binding religious rulings.
        </p>
      </div>
    ),
  },
  {
    num: "03",
    title: "Use of the Service",
    body: (
      <p className="font-body text-[15px] text-[#6A5A50] leading-relaxed">
        You agree to use IlmHubb respectfully and lawfully, upholding Islamic manners (
        <span className="font-arabic font-semibold text-[#9C4400]">Adab</span>), and
        refraining from misuse, scraping, abuse, or service disruption.
      </p>
    ),
  },
  {
    num: "04",
    title: "Accounts and User Content",
    body: (
      <p className="font-body text-[15px] text-[#6A5A50] leading-relaxed">
        You are responsible for safeguarding your account credentials. You retain all rights
        to your personal notes and reflections, while granting IlmHubb a limited operating
        license strictly necessary to store and display your content to you.
      </p>
    ),
  },
  {
    num: "05",
    title: "Changes and Contact",
    body: (
      <p className="font-body text-[15px] text-[#6A5A50] leading-relaxed">
        We reserve the right to update these terms at any time. Continued use of the
        platform constitutes acceptance of revised terms. For questions or concerns, contact
        us at{" "}
        <a className="text-[#9C4400] font-medium hover:underline" href="mailto:dreambyte.space@gmail.com">
          dreambyte.space@gmail.com
        </a>
        .
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <main className="w-full pb-20">
      <div className="relative w-full overflow-hidden bg-[#fff8f7] pt-28 sm:pt-32">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-[340px] bg-gradient-to-b from-[#FFB68F]/20 via-[#FFE16A]/10 to-transparent blur-3xl pointer-events-none rounded-full" />

        {/* Header */}
        <Reveal as="section" className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fde2de] text-[#574238] shadow-sm mb-4">
            <Icon name="gavel" className="text-sm text-[#9C4400]" fill />
            <span className="text-[11px] uppercase tracking-wider font-semibold">
              Legal Document
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-charcoal font-serif tracking-tight">
            Terms &amp; Conditions
          </h1>
          <p className="text-base sm:text-lg text-[#6A5A50] pt-2 max-w-xl mx-auto font-body">
            Please read these terms before using IlmHubb
          </p>
          <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand border border-border-warm text-[#6A5A50] text-xs font-body">
            <Icon name="update" className="text-xs text-[#9C4400]" />
            <span>Last updated: June 2026</span>
          </div>
        </Reveal>

        {/* Sections */}
        <section className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-6">
          {sections.map((s, i) => (
            <Reveal
              as="article"
              key={s.num}
              delay={i * 0.06}
              className="bg-white border border-border-warm rounded-2xl p-6 sm:p-8 shadow-sm space-y-3"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#9C4400]/10 text-[#9C4400] flex items-center justify-center text-xs font-bold font-mono">
                  {s.num}
                </span>
                <h2 className="text-xl font-bold text-charcoal font-serif">{s.title}</h2>
              </div>
              {s.body}
            </Reveal>
          ))}

          {/* Bottom contact box */}
          <Reveal
            delay={0.1}
            className="mt-10 rounded-2xl bg-gradient-to-br from-espresso-dark via-[#3B281D] to-[#261816] text-white p-7 sm:p-9 text-center shadow-lg relative overflow-hidden space-y-4 border border-[#FED708]/20"
          >
            <div className="font-arabic text-2xl sm:text-3xl text-gold-light" dir="rtl">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </div>
            <div className="space-y-1">
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                Questions about our terms?
              </h3>
              <p className="font-body text-sm text-neutral-300 max-w-md mx-auto">
                Our team is here to assist with any questions regarding our terms, data
                handling, or community guidelines.
              </p>
            </div>
            <div className="pt-2">
              <a
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#9C4400] hover:bg-[#ff863b] text-white text-sm font-semibold transition-all shadow-md group"
                href="mailto:dreambyte.space@gmail.com"
              >
                <Icon name="mail" className="text-sm" />
                <span>dreambyte.space@gmail.com</span>
              </a>
            </div>
          </Reveal>
        </section>
      </div>
    </main>
  );
}
