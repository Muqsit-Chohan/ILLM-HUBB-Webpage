import { Link } from "react-router-dom";
import Icon from "./Icon";

export default function Footer() {
  return (
    <footer className="w-full bg-[#30211F] text-white pt-16 pb-12 border-t border-[#46312E]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          {/* Brand & Mission */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full overflow-hidden shadow-md shrink-0">
                <img
                  src="/images/logo-gold.png"
                  alt="ILLMHUBB crest"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-serif text-2xl font-bold tracking-[0.25em] text-[#E8C27E]">
                ILLMHUBB
              </span>
              <span
                className="font-arabic text-lg font-bold text-[#E8C27E] px-2.5 py-0.5 rounded-full bg-[#E8C27E]/10"
                dir="rtl"
                lang="ar"
              >
                عِلم وَحُبّ
              </span>
            </div>
            <p className="font-body text-sm text-neutral-300 max-w-sm leading-relaxed">
              Delivering sacred compassionate knowledge with excellence. We're here for you at
              every step of your spiritual journey.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a aria-label="Twitter" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-neutral-200 hover:text-white transition-all" href="#">
                <span className="text-xs font-bold">𝕏</span>
              </a>
              <a aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-neutral-200 hover:text-white transition-all" href="#">
                <Icon name="share" className="text-base" />
              </a>
              <a aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-neutral-200 hover:text-white transition-all" href="#">
                <Icon name="thumb_up" className="text-base" />
              </a>
              <a aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-neutral-200 hover:text-white transition-all" href="#">
                <Icon name="photo_camera" className="text-base" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E8C27E]">Quick Links</h4>
            <div className="flex flex-col gap-2 font-body text-sm text-neutral-300">
              <Link className="hover:text-white transition-colors" to="/">Home</Link>
              <a className="hover:text-white transition-colors" href="#">About Us</a>
              <a className="hover:text-white transition-colors" href="#">Ramadan Essentials</a>
              <a className="hover:text-white transition-colors" href="#">Our Story</a>
              <Link className="hover:text-white transition-colors" to="/community">Community</Link>
            </div>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E8C27E]">Resources</h4>
            <div className="flex flex-col gap-2 font-body text-sm text-neutral-300">
              <Link className="hover:text-white transition-colors" to="/terms">Terms of Service</Link>
              <Link className="hover:text-white transition-colors" to="/privacy">Privacy Policy</Link>
              <Link className="hover:text-white transition-colors" to="/prayer-times">Prayer Times</Link>
              <a className="hover:text-white transition-colors" href="#">Blog</a>
              <a className="hover:text-white transition-colors" href="#">FAQs</a>
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E8C27E]">Contact Us</h4>
            <div className="flex flex-col gap-2 font-body text-sm text-neutral-300">
              <span className="text-neutral-300">123 Sacred Light Ave, Madinah</span>
              <span className="text-neutral-300">(555) 123-4567</span>
              <a className="text-[#E8C27E] hover:underline" href="mailto:salam@illmhubb.com">salam@illmhubb.com</a>
            </div>
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div className="py-6 border-b border-white/10 flex items-center justify-between text-[11px] sm:text-xs tracking-[0.25em] uppercase font-serif text-[#E8C27E]/80 select-none">
          <div className="flex items-center gap-2">
            <span className="font-medium text-[#E8C27E]">POWERED BY DREAMBYTE</span>
            <span className="text-[#FED708] text-[10px]">✦</span>
          </div>
          <div className="font-arabic text-base sm:text-lg font-bold text-[#E8C27E] normal-case tracking-normal" dir="rtl" lang="ar">
            بِسْمِ اللَّهِ
          </div>
        </div>
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 font-body">
          <p>© 2026 Noor / ILLMHUBB. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link className="hover:text-neutral-200 transition-colors" to="/privacy">Privacy policy</Link>
            <Link className="hover:text-neutral-200 transition-colors" to="/terms">Terms of use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
