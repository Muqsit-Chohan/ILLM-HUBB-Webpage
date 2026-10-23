import BismillahBanner from "../components/BismillahBanner";
import Hero from "../components/Hero";
import PreciousSection from "../components/PreciousSection";
import ModulesSection from "../components/ModulesSection";
import PrayerTimesSection from "../components/PrayerTimesSection";
import TestimonialSection from "../components/TestimonialSection";
import CtaSection from "../components/CtaSection";

export default function HomePage() {
  return (
    <main className="w-full pt-28 sm:pt-32 pb-20">
      <BismillahBanner />
      <Hero />
      <PreciousSection />
      <ModulesSection />
      <PrayerTimesSection />
      <TestimonialSection />
      <CtaSection />
    </main>
  );
}
