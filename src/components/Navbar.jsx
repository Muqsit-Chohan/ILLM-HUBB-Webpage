import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import Icon from "./Icon";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Quran", to: "/quran" },
  { label: "Hadith", to: "/hadith" },
  { label: "Prayer Times", to: "/prayer-times" },
  { label: "Community", to: "/community" },
];

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 py-3 sm:py-4 bg-[#FDFCFB]/70 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto">
        <div className="w-full bg-[#FFF9F5]/90 backdrop-blur-xl rounded-2xl sm:rounded-full px-4 sm:px-7 py-2.5 sm:py-3 flex items-center justify-between shadow-[0_12px_36px_-6px_rgba(74,51,38,0.12)] border border-[#FED708]/35 ring-1 ring-white/80">
          {/* Left: Brand Crest & Title */}
          <div className="flex items-center gap-3 shrink-0">
            <Link className="flex items-center gap-2.5 group" to="/">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden shadow-md border border-[#FED708]/30 group-hover:scale-105 transition-transform">
                <img
                  src="/assets/logo.png"
                  alt="ILLMHUBB crest"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-[0.25em] text-[#3B281D] leading-none">ILLMHUBB</span>
              </div>
            </Link>
          </div>

          {/* Center: Nav Links */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-[#FAF6F0]/80 px-3 py-1.5 rounded-full border border-border-warm shadow-inner">
            {navLinks.map((link) => {
              const isActive = pathname === link.to;
              const className = isActive
                ? "relative px-3.5 py-1 text-xs font-semibold text-[#9C4400] rounded-full"
                : "relative px-3.5 py-1 text-xs font-medium text-[#6A5A50] hover:text-[#3B281D] hover:bg-white/60 rounded-full transition-colors";
              return (
                <Link key={link.label} to={link.to} className={className}>
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 bg-white rounded-full shadow-sm"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right: CTAs */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-[#FAF6F0] border border-border-warm text-[#3B281D] transition-colors shadow-sm group"
              href="#"
            >
              <Icon name="download" className="text-sm text-[#9C4400]" fill />
              <span className="text-xs font-semibold">Get App</span>
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-[#3B281D] hover:bg-[#241710] text-[#FFF9F5] rounded-full px-4 sm:px-5 py-2 text-xs font-semibold shadow-md hover:shadow-lg transition-colors border border-[#FED708]/30 group"
              href="#modules"
            >
              <span>Launch Web</span>
              <Icon name="arrow_forward" className="text-sm text-[#FED708] group-hover:translate-x-0.5 transition-transform" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
