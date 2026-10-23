import Icon from "./Icon";
import Reveal from "./Reveal";

const avatars = [
  {
    alt: "Hijab fabric on display",
    src: "/images/avatar-hijab.jpg",
    position: "20% 50%",
  },
  {
    alt: "Man in a white kufi cap",
    src: "/images/avatar-kufi.jpg",
    position: "50% 20%",
  },
  {
    alt: "Men in traditional white thobe",
    src: "/images/portrait-group-coast.jpg",
    position: "70% 35%",
  },
];

export default function TestimonialSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
      <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta">
            Real Impact
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight mt-1">
            What Our Community Says
          </h2>
        </div>
        <a
          className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#3B281D] hover:bg-black text-white text-xs font-semibold tracking-wide transition-all shadow-sm"
          href="#"
        >
          Discover more
        </a>
      </Reveal>

      <Reveal
        delay={0.1}
        className="bg-white border border-border-warm rounded-3xl p-8 lg:p-12 shadow-sm relative overflow-hidden"
      >
        <div className="absolute top-6 right-1/2 text-gold-primary hidden md:block">
          <Icon name="star" className="text-2xl" fill />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-56 sm:w-64 h-72 sm:h-80 rounded-[140px_140px_32px_32px] overflow-hidden bg-gradient-to-br from-terracotta via-[#C86D43] to-[#9C4400] p-1 shadow-md">
              <img
                alt="Young man in traditional embroidered white thobe and keffiyeh"
                className="w-full h-full object-cover rounded-[136px_136px_28px_28px]"
                style={{ objectPosition: "35% 15%" }}
                src="/images/portrait-testimonial-man.jpg"
              />
              <div className="absolute bottom-4 left-4 right-4 p-2 rounded-xl bg-white/95 backdrop-blur-sm text-center text-xs font-bold text-charcoal shadow-sm border border-border-warm">
                Ayaan Malik • Business man
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6">
            <blockquote className="text-xl sm:text-2xl font-body text-charcoal leading-relaxed">
              “The thoughtfully curated content, timely reminders, and beautifully crafted
              design helped me stay consistently focused on faith, reflection, and personal
              growth throughout every day.”
            </blockquote>
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center -space-x-3">
                {avatars.map((a) => (
                  <div
                    key={a.src}
                    className="w-11 h-11 rounded-full overflow-hidden ring-2 ring-white shadow-sm"
                  >
                    <img
                      alt={a.alt}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: a.position }}
                      src={a.src}
                    />
                  </div>
                ))}
              </div>
              <div>
                <span className="text-sm font-bold text-charcoal block">
                  Over 50,000+ Active Seekers
                </span>
                <span className="text-xs text-[#7A695E]">Connecting across 120+ countries</span>
              </div>
            </div>
            <p className="text-xs text-[#8B796D] italic">
              Authentic voices from people who choose to celebrate faith with us and make it a
              meaningful part of their daily journey.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
