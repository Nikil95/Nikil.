import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { NEXT_PROJECT_IMAGE } from '../data/portfolioData';

interface FreelanceCTAProps {
  onOpenQuote: () => void;
}

export const FreelanceCTA: React.FC<FreelanceCTAProps> = ({ onOpenQuote }) => {
  return (
    <section className="py-24 relative overflow-hidden border-t border-zinc-900">
      {/* Subtle abstract graphic background */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
      <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none">
        <img
          src={NEXT_PROJECT_IMAGE}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover filter blur-2xl"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-700/60 text-xs font-mono text-zinc-300">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Currently Accepting New Projects</span>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white max-w-2xl mx-auto text-balance">
            Have an idea? Let's build it.
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed font-normal">
            Whether you need a simple website, a polished interface or a complete web application, let's turn your idea into something real.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onOpenQuote}
            className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-black bg-white rounded-xl hover:bg-zinc-200 transition-all duration-200 shadow-xl"
          >
            <span>Start a Conversation</span>
            <span className="group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </button>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-zinc-300 bg-zinc-900/80 border border-zinc-800 rounded-xl hover:bg-zinc-800 hover:text-white transition-all duration-200"
          >
            <span>Drop a Direct Message</span>
          </a>
        </div>
      </div>
    </section>
  );
};
