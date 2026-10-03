import React, { useState } from 'react';
import { PROCESS_DATA } from '../data/portfolioData';

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState<string>('01');

  return (
    <section id="process" className="py-24 relative border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            From idea to launch.
          </h2>
          <p className="text-base text-zinc-400 font-normal leading-relaxed">
            A transparent four-phase workflow designed to keep communication simple, eliminate surprises, and ship reliable digital products on time.
          </p>
        </div>

        {/* Process Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_DATA.map((step) => {
            const isSelected = activeStep === step.number;
            return (
              <div
                key={step.number}
                onMouseEnter={() => setActiveStep(step.number)}
                onClick={() => setActiveStep(step.number)}
                className={`relative rounded-2xl p-7 transition-all duration-300 cursor-pointer border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#141419] border-zinc-600 shadow-xl shadow-black/50 -translate-y-1'
                    : 'bg-[#0f0f13] border-zinc-800/80 hover:border-zinc-700'
                }`}
              >
                <div>
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`text-2xl font-mono font-bold tracking-tight transition-colors ${
                        isSelected ? 'text-white' : 'text-zinc-600'
                      }`}
                    >
                      {step.number}
                    </span>
                    <span
                      className={`w-2 h-2 rounded-full transition-all ${
                        isSelected ? 'bg-zinc-200 scale-125' : 'bg-zinc-800'
                      }`}
                    />
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal mb-4">
                    {step.description}
                  </p>
                </div>

                {/* Extended Process Detail */}
                <div
                  className={`pt-4 border-t border-zinc-800/60 text-xs leading-relaxed transition-colors ${
                    isSelected ? 'text-zinc-300' : 'text-zinc-500'
                  }`}
                >
                  {step.detail}
                </div>
              </div>
            );
          })}
        </div>

        {/* Quiet commitment note */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0c0c10] border border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-400">
            Average turnaround: <strong className="text-zinc-200">3–7 days</strong> for starter websites, <strong className="text-zinc-200">1–3 weeks</strong> for complex web apps.
          </p>
          <span className="text-xs font-mono text-zinc-500">
            Direct Git handoff + deployment setup included
          </span>
        </div>
      </div>
    </section>
  );
};
