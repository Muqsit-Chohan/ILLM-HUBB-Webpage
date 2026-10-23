import Reveal from "./Reveal";

export default function BismillahBanner() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-4 pb-6 text-center">
      <Reveal>
        <p
          className="font-arabic text-3xl sm:text-4xl text-charcoal tracking-wide pt-1 select-none"
          dir="rtl"
          lang="ar"
        >
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </p>
      </Reveal>
    </section>
  );
}
