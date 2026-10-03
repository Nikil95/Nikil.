import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const categories = ['All', 'Mobile', 'Frontend', 'Backend', 'Database', 'Design'];

  const filteredCategories =
    selectedCategory === 'All'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl space-y-3">
            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Technical Stack & Tools
            </h2>
            <p className="text-base text-zinc-400 font-normal">
              Practical tools and frameworks I use to build reliable websites, web applications, and mobile apps.
            </p>
          </div>

          {/* Category Filter Controls (interactive buttons, as permitted by zero-pill constitution) */}
          <div className="flex items-center gap-1.5 p-1 bg-zinc-900 border border-zinc-800 rounded-xl overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-zinc-800 text-white shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Display Grid (Clean interactive badges, NO fake percentage bars) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.category}
              className="rounded-2xl bg-[#101014] border border-zinc-800/80 p-6 flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-800">
                  <h3 className="text-sm font-bold text-white tracking-tight uppercase">
                    {cat.category}
                  </h3>
                  <span className="text-xs font-mono text-zinc-400">
                    {cat.skills.length} tools
                  </span>
                </div>

                {/* Interactive Badges */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => {
                    const isFocused = activeSkill === skill.name;
                    return (
                      <button
                        key={skill.name}
                        type="button"
                        onClick={() =>
                          setActiveSkill(activeSkill === skill.name ? null : skill.name)
                        }
                        onMouseEnter={() => setActiveSkill(skill.name)}
                        className={`group px-3 py-2 text-xs font-mono rounded-lg border transition-all text-left flex items-center justify-between gap-2 ${
                          isFocused
                            ? 'bg-zinc-800 border-zinc-500 text-white shadow-md'
                            : 'bg-zinc-900/80 border-zinc-800 text-zinc-300 hover:border-zinc-700 hover:text-white'
                        }`}
                      >
                        <span className="font-medium">{skill.name}</span>
                        {skill.featured && (
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dynamic Skill Detail / Context */}
              <div className="pt-3 border-t border-zinc-900 min-h-[44px] flex items-center">
                <p className="text-[11px] text-zinc-400 leading-snug">
                  {activeSkill &&
                  cat.skills.some((s) => s.name === activeSkill)
                    ? cat.skills.find((s) => s.name === activeSkill)?.description
                    : 'Click any badge for focus area.'}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stack Integrity Note */}
        <div className="mt-8 text-center">
          <p className="text-xs text-zinc-400">
            No bloated dependencies or gimmick libraries. Focused on vanilla web standards and long-term maintainability.
          </p>
        </div>
      </div>
    </section>
  );
};
