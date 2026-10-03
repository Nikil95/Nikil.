import React, { useState } from 'react';
import { ExternalLink, Palette, Code, Sparkles } from 'lucide-react';
import { ProjectCard } from './ProjectCard';
import { Project } from '../types/portfolio';
import { PROJECTS_DATA, BEHANCE_PROFILE_URL } from '../data/portfolioData';

interface FeaturedWorkProps {
  onSelectProject: (project: Project) => void;
  onOpenQuote: (serviceType?: string) => void;
}

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({
  onSelectProject,
  onOpenQuote,
}) => {
  const [filter, setFilter] = useState<'all' | 'engineering' | 'design'>('all');

  const filteredProjects =
    filter === 'all'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === filter);

  const designCount = PROJECTS_DATA.filter((p) => p.category === 'design').length;
  const engineeringCount = PROJECTS_DATA.filter((p) => p.category === 'engineering').length;

  return (
    <section id="work" className="py-24 relative border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>PORTFOLIO & CASE STUDIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Selected Work
            </h2>
            <p className="text-base text-zinc-400 font-normal">
              A few things I've built and designed across full-stack code and UI/UX.
            </p>
          </div>

          {/* Interactive Filter Controls & Behance Link */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex p-1 bg-zinc-900 border border-zinc-800 rounded-xl">
              <button
                type="button"
                onClick={() => setFilter('all')}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  filter === 'all'
                    ? 'bg-zinc-800 text-white shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                All ({PROJECTS_DATA.length})
              </button>
              <button
                type="button"
                onClick={() => setFilter('design')}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  filter === 'design'
                    ? 'bg-zinc-800 text-white shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <Palette className="w-3 h-3" />
                <span>UI/UX Design ({designCount})</span>
              </button>
              <button
                type="button"
                onClick={() => setFilter('engineering')}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  filter === 'engineering'
                    ? 'bg-zinc-800 text-white shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <Code className="w-3 h-3" />
                <span>Engineering ({engineeringCount})</span>
              </button>
            </div>

            <a
              href={BEHANCE_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900/80 border border-zinc-800 hover:border-zinc-600 rounded-xl transition-all"
            >
              <span>Behance Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectProject={onSelectProject}
              onOpenQuote={onOpenQuote}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
