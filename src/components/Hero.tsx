import React, { useState } from 'react';
import { ArrowRight, Code2, Sparkles, Layers, Terminal, CheckCircle2 } from 'lucide-react';
import { HERO_GRAPHIC_URL } from '../data/portfolioData';

interface HeroProps {
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');

  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Subtle background glow & grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-zinc-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bold Minimalist Copy */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-zinc-400 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>SOFTWARE DEVELOPER • UI DESIGNER</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1] text-balance">
              I build digital experiences that feel simple.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed font-normal">
              I design and develop modern websites, interfaces, web applications, and Flutter mobile apps for individuals, students and small businesses.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-black bg-white rounded-xl hover:bg-zinc-200 transition-all duration-200 shadow-sm"
              >
                <span>View My Work</span>
                <span className="group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </a>

              <button
                type="button"
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-zinc-300 bg-zinc-900/80 border border-zinc-700/70 rounded-xl hover:bg-zinc-800 hover:text-white hover:border-zinc-500 transition-all duration-200"
              >
                <span>Let's Work Together</span>
              </button>
            </div>

            {/* Quiet Trust Bar */}
            <div className="pt-6 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-zinc-400 border-t border-zinc-800/80 w-full">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Modern React & Clean Code</span>
              </div>
              <span className="text-zinc-700">·</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Pixel-Perfect Figma Design</span>
              </div>
              <span className="text-zinc-700">·</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Transparent Starting Prices</span>
              </div>
            </div>
          </div>

          {/* Right Column: Abstract Minimalist 3D Graphic & Product Illustration */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Ambient shadow plane */}
            <div className="relative w-full max-w-[460px] aspect-[5/4] sm:aspect-square">
              {/* Decorative subtle border glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-zinc-800/40 via-zinc-700/20 to-zinc-900/40 blur-xl opacity-50" />

              {/* Minimalist Browser Window Container */}
              <div className="relative h-full w-full rounded-2xl bg-[#0f0f13] border border-zinc-800 shadow-2xl overflow-hidden flex flex-col group">
                {/* Browser Top Window Bar */}
                <div className="px-4 py-3 bg-[#141419] border-b border-zinc-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-700/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-700/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-700/80" />
                    <span className="ml-2 text-[11px] font-mono text-zinc-400">nikil.studio / preview</span>
                  </div>

                  {/* Segmented Mode Switcher */}
                  <div className="flex items-center bg-zinc-900/80 p-0.5 rounded-md border border-zinc-800">
                    <button
                      type="button"
                      onClick={() => setActiveTab('preview')}
                      className={`px-2.5 py-0.5 text-[10px] font-medium rounded transition-colors ${
                        activeTab === 'preview'
                          ? 'bg-zinc-700 text-white'
                          : 'text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      Interface
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('code')}
                      className={`px-2.5 py-0.5 text-[10px] font-medium rounded transition-colors ${
                        activeTab === 'code'
                          ? 'bg-zinc-700 text-white'
                          : 'text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      Code
                    </button>
                  </div>
                </div>

                {/* Content Area */}
                <div className="relative flex-1 bg-zinc-950/90 overflow-hidden flex flex-col justify-center">
                  {activeTab === 'preview' ? (
                    <div className="relative h-full w-full flex items-center justify-center p-4">
                      {/* High-fidelity generated 3D abstract graphic */}
                      <img
                        src={HERO_GRAPHIC_URL}
                        alt="Minimalist 3D abstract geometry and sleek interface preview"
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
                      />
                      
                      {/* Subtle gradient overlay to keep it calm and minimal */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f13] via-transparent to-[#0f0f13]/40" />

                      {/* Floating UI Card 1: Live Status */}
                      <div className="absolute top-6 left-5 z-20 bg-zinc-900/90 backdrop-blur-md border border-zinc-700/60 rounded-xl p-3 shadow-xl transition-transform duration-300 hover:-translate-y-1">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="text-[11px] font-semibold text-white">System Available</span>
                        </div>
                        <p className="text-[10px] text-zinc-400 font-mono">India · IST (UTC+5:30)</p>
                      </div>

                      {/* Floating UI Card 2: Interactive Micro Component */}
                      <div className="absolute bottom-6 right-5 z-20 bg-zinc-900/90 backdrop-blur-md border border-zinc-700/60 rounded-xl p-3.5 shadow-xl transition-transform duration-300 hover:translate-y-[-2px] max-w-[210px]">
                        <div className="flex items-center justify-between text-[11px] font-medium text-zinc-300 mb-1.5">
                          <span>Craftsmanship</span>
                          <span className="text-zinc-400 font-mono text-[10px]">100%</span>
                        </div>
                        <div className="w-full bg-zinc-800 rounded-full h-1 overflow-hidden">
                          <div className="bg-zinc-200 h-full rounded-full w-full" />
                        </div>
                        <p className="text-[10px] text-zinc-400 mt-2">Zero bloat. Fast load times.</p>
                      </div>

                      {/* Animated Simulated Cursor */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-30 flex items-center gap-2">
                        <svg
                          className="w-5 h-5 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] animate-bounce"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M3 3l7 18 3-7 7-3L3 3z" />
                        </svg>
                        <span className="px-2 py-0.5 rounded bg-zinc-800/90 border border-zinc-600/60 text-[10px] text-zinc-200 font-mono shadow-md">
                          Nikil
                        </span>
                      </div>
                    </div>
                  ) : (
                    /* Clean Code Snippet View */
                    <div className="p-5 font-mono text-[12px] leading-relaxed text-zinc-300 overflow-x-auto h-full flex flex-col justify-center">
                      <div className="space-y-1 text-zinc-400">
                        <p><span className="text-zinc-500">const</span> <span className="text-white font-semibold">developer</span> = &#123;</p>
                        <p className="pl-4">name: <span className="text-emerald-300">'Nikil'</span>,</p>
                        <p className="pl-4">focus: <span className="text-emerald-300">'Web & Flutter Apps'</span>,</p>
                        <p className="pl-4">stack: [<span className="text-zinc-300">'React'</span>, <span className="text-zinc-300">'Flutter'</span>, <span className="text-zinc-300">'TypeScript'</span>, <span className="text-zinc-300">'Figma'</span>],</p>
                        <p className="pl-4">openForFreelance: <span className="text-amber-300">true</span>,</p>
                        <p className="pl-4">startingRate: <span className="text-emerald-300">'₹2,000'</span>,</p>
                        <p>&#125;;</p>
                        <p className="pt-2 text-zinc-500">// Ready to build your vision</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Subtle bottom bar */}
                <div className="px-4 py-2 bg-[#121217] border-t border-zinc-800/60 flex items-center justify-between text-[11px] text-zinc-500">
                  <span>Responsive & Accessible</span>
                  <span>Linear & Vercel Aesthetic</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
