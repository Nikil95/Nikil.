import React from 'react';
import { MapPin, Briefcase, GraduationCap, Clock, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative border-t border-zinc-900 bg-zinc-950/40">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait / Developer Identity Placeholder */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-full max-w-[320px] aspect-square rounded-2xl bg-gradient-to-b from-[#141419] to-[#0c0c10] border border-zinc-800 p-8 flex flex-col items-center justify-between shadow-2xl group hover:border-zinc-600 transition-colors">
              {/* Top Bar status */}
              <div className="w-full flex items-center justify-between text-xs text-zinc-500 font-mono">
                <span>IDENTITY</span>
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  ONLINE
                </span>
              </div>

              {/* Minimalist Monogram / Workstation Graphic Placeholder (NO fake human portrait) */}
              <div className="my-auto relative flex flex-col items-center">
                <div className="w-24 h-24 rounded-2xl bg-zinc-900 border border-zinc-700/80 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300">
                  <span className="text-3xl font-extrabold tracking-tighter text-white font-mono">
                    N<span className="text-zinc-500">.</span>
                  </span>
                </div>
                <div className="mt-4 text-center">
                  <h4 className="text-base font-bold text-white tracking-tight">Nikil</h4>
                  <p className="text-xs text-zinc-400 font-mono mt-0.5">Software Developer & Designer</p>
                </div>
              </div>

              {/* Bottom Quick Tag */}
              <div className="w-full pt-4 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400">
                <span>CS Student</span>
                <span>Freelance Ready</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Details */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block">
                About Me
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
                A developer who likes building things.
              </h2>
            </div>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
              I'm Nikil, a computer science student and developer interested in building useful digital products. I enjoy turning ideas into clean interfaces and functional web applications.
            </p>

            <p className="text-sm text-zinc-400 leading-relaxed">
              My engineering approach prioritizes simplicity: removing visual clutter, optimizing load speeds, writing understandable code, and ensuring every client project delivers immediate utility to its users.
            </p>

            {/* Crucial Meta Badges (Required by prompt & Behance) */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#111116] border border-zinc-800/80 flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-zinc-300" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400">Location</p>
                  <p className="text-sm font-semibold text-white">Coimbatore, India</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#111116] border border-zinc-800/80 flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-700 flex items-center justify-center shrink-0">
                  <Briefcase className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400">Status</p>
                  <p className="text-sm font-semibold text-white">Freelance & Full-Time Open</p>
                </div>
              </div>
            </div>

            {/* Quick Principles */}
            <div className="pt-2 flex flex-wrap gap-y-2 gap-x-6 text-xs text-zinc-400">
              <span>· Clean typography & whitespace</span>
              <span>· Zero bloat or fake metrics</span>
              <span>· Fast asynchronous communication</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
