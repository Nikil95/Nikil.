import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-14 border-t border-zinc-900 bg-[#070709] text-zinc-500">
      <div className="max-w-6xl mx-auto px-6 md:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Brand & Tagline */}
          <div className="space-y-1.5">
            <a
              href="#"
              className="text-lg font-bold tracking-tight text-white hover:text-zinc-200 transition-colors inline-block"
            >
              Nikil<span className="text-zinc-600">.</span>
            </a>
            <p className="text-xs text-zinc-400 font-normal">
              Building useful things on the internet.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-zinc-400">
            <a href="#work" className="hover:text-white transition-colors">
              Work
            </a>
            <a href="#services" className="hover:text-white transition-colors">
              Services
            </a>
            <a href="#pricing" className="hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
            <a
              href="mailto:nikilg782@gmail.com"
              className="hover:text-white transition-colors"
            >
              Email
            </a>
            <a
              href="https://www.behance.net/gnikil"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Behance
            </a>
            <a
              href="https://github.com/Nikil95"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/nikil-g-4b3a73288/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-zinc-400">
          <p>© 2026 Nikil. All rights reserved.</p>
          <div className="flex items-center gap-4 text-zinc-400">
            <span>UI/UX Designer & Software Developer</span>
            <span>·</span>
            <span>Coimbatore, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
