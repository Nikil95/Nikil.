import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenQuote: (serviceType?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#09090b]/85 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-lg shadow-black/20'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Brand Zone */}
        <a
          href="#"
          className="text-xl font-bold tracking-tight text-white hover:opacity-85 transition-opacity"
        >
          Nikil<span className="text-zinc-500">.</span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-400">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors duration-150 relative py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Zone */}
        <div className="hidden md:flex items-center gap-2.5">
          <a
            href="https://www.behance.net/gnikil"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-zinc-300 hover:text-white bg-zinc-900/90 border border-zinc-800 rounded-lg hover:border-zinc-600 transition-all duration-200"
          >
            <span className="font-bold text-xs text-zinc-200">Bē</span>
            <span>Behance</span>
          </a>

          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-zinc-200 bg-zinc-900/90 border border-zinc-700/80 rounded-lg hover:bg-zinc-800 hover:text-white hover:border-zinc-500 transition-all duration-200 whitespace-nowrap"
          >
            <span>Contact</span>
            <span className="text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
              →
            </span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden p-2 text-zinc-400 hover:text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-zinc-500"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e0e11] border-b border-zinc-800/80 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-zinc-300 hover:text-white py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-zinc-800/60 flex flex-col gap-2.5">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-zinc-200 bg-zinc-900 border border-zinc-700 rounded-lg hover:bg-zinc-800 transition-all"
            >
              Contact Me →
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-black bg-white rounded-lg hover:bg-zinc-200 transition-all"
            >
              Start a Project
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
