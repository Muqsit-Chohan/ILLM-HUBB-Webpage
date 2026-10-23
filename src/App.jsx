import { Routes, Route } from "react-router-dom";
import useLenis from "./hooks/useLenis";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import QuranPage from "./pages/QuranPage";
import HadithPage from "./pages/HadithPage";
import PrayerTimesPage from "./pages/PrayerTimesPage";
import CommunityPage from "./pages/CommunityPage";

export default function App() {
  useLenis();

  return (
    <div className="w-full text-charcoal font-sans antialiased overflow-x-hidden selection:bg-gold-light selection:text-espresso-dark">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quran" element={<QuranPage />} />
        <Route path="/hadith" element={<HadithPage />} />
        <Route path="/prayer-times" element={<PrayerTimesPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
