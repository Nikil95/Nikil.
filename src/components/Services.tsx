import React from 'react';
import { Layout, Cpu, Smartphone, Palette, Wrench, ArrowUpRight, Check } from 'lucide-react';
import { SERVICES_DATA } from '../data/portfolioData';
import { Service } from '../types/portfolio';

interface ServicesProps {
  onOpenQuote: (serviceType?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenQuote }) => {
  const renderIcon = (iconName: Service['iconName']) => {
    switch (iconName) {
      case 'layout':
        return <Layout className="w-5 h-5 text-zinc-200" />;
      case 'cpu':
        return <Cpu className="w-5 h-5 text-zinc-200" />;
      case 'smartphone':
        return <Smartphone className="w-5 h-5 text-zinc-200" />;
      case 'palette':
        return <Palette className="w-5 h-5 text-zinc-200" />;
      case 'wrench':
        return <Wrench className="w-5 h-5 text-zinc-200" />;
      default:
        return <Layout className="w-5 h-5 text-zinc-200" />;
    }
  };

  return (
    <section id="services" className="py-24 relative border-t border-zinc-900 bg-zinc-950/40">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            What I Can Build
          </h2>
          <p className="text-base text-zinc-400 font-normal leading-relaxed">
            Tailored digital development services built with speed, precision, and modern engineering standards across web and mobile.
          </p>
        </div>

        {/* Elegant Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              className="group relative rounded-2xl bg-[#111115] border border-zinc-800/80 p-7 sm:p-8 hover:border-zinc-600/80 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-5">
                {/* Header with icon and index */}
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-zinc-600 transition-colors">
                    {renderIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-mono text-zinc-400">
                    0{index + 1}
                  </span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zinc-100 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>

                {/* Deliverables list */}
                <div className="pt-2 border-t border-zinc-900 space-y-2">
                  <p className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
                    Key Highlights
                  </p>
                  <ul className="space-y-1.5">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-zinc-400">
                        <Check className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="pt-6 mt-6 border-t border-zinc-800/60 flex items-center justify-between">
                <span className="text-xs text-zinc-400">
                  Custom scope & quote
                </span>
                <button
                  type="button"
                  onClick={() => onOpenQuote(service.title)}
                  className="inline-flex items-center gap-1 text-xs font-medium text-zinc-300 hover:text-white transition-colors"
                >
                  <span>Discuss Service</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
