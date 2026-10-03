import React from 'react';
import { ArrowUpRight, Github, ExternalLink, Sparkles } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectCardProps {
  project: Project;
  onSelectProject: (project: Project) => void;
  onOpenQuote: (serviceType?: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onSelectProject,
  onOpenQuote,
}) => {
  const isPlaceholder = project.isPlaceholder;

  return (
    <div
      className={`group relative rounded-2xl border transition-all duration-300 overflow-hidden flex flex-col ${
        isPlaceholder
          ? 'bg-gradient-to-b from-[#121217] to-[#0c0c10] border-dashed border-zinc-700/80 hover:border-zinc-500'
          : 'bg-[#111115] border-zinc-800/80 hover:border-zinc-600/80 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/70'
      }`}
    >
      {/* Top Visual Mockup Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950 border-b border-zinc-800/70">
        {/* Subtle browser mockup header */}
        <div className="absolute top-0 inset-x-0 z-20 px-3.5 py-2.5 bg-black/40 backdrop-blur-md border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-zinc-600" />
            <span className="w-2 h-2 rounded-full bg-zinc-600" />
            <span className="w-2 h-2 rounded-full bg-zinc-600" />
          </div>
          <span className="text-[11px] font-mono text-zinc-400 tracking-wider">
            {project.number} // showcase
          </span>
        </div>

        {/* Mockup Preview Image with fallback */}
        <div className="relative w-full h-full flex items-center justify-center pt-8 overflow-hidden">
          <img
            src={project.imageSrc}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
            onError={(e) => {
              // Graceful CSS fallback container if image load errors
              const target = e.currentTarget;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                parent.classList.add('bg-zinc-900', 'flex', 'items-center', 'justify-center');
              }
            }}
          />
          {/* Subtle gradient vignette to blend with card */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111115] via-transparent to-transparent opacity-80" />
        </div>

        {/* Hover Highlight Overlay */}
        <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

      {/* Card Content */}
      <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between space-y-6">
        <div className="space-y-3.5">
          {/* Unboxed Metadata / Tags with typographic separators (anti-slop rule) */}
          <div className="flex flex-wrap items-center gap-x-2 text-xs font-mono text-zinc-400">
            {project.tags.map((tag, idx) => (
              <React.Fragment key={tag}>
                <span className="hover:text-zinc-200 transition-colors">{tag}</span>
                {idx < project.tags.length - 1 && (
                  <span className="text-zinc-600 select-none" aria-hidden="true">
                    ·
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-zinc-100 transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-zinc-400 leading-relaxed font-normal">
            {project.description}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-wrap items-center gap-3">
          {isPlaceholder ? (
            <button
              type="button"
              onClick={() => onOpenQuote('Custom Web Application')}
              className="group/btn inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-black bg-white rounded-lg hover:bg-zinc-200 transition-all duration-200"
            >
              <span>Start a Project</span>
              <span className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200">
                →
              </span>
            </button>
          ) : (
            <>
              <button
                type="button"
                onClick={() => onSelectProject(project)}
                className="group/btn inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-zinc-100 bg-zinc-800/90 border border-zinc-700/80 rounded-lg hover:bg-zinc-700 hover:text-white transition-all duration-200"
              >
                <span>View Project</span>
                <span className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200 text-zinc-400 group-hover/btn:text-white">
                  →
                </span>
              </button>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-zinc-400 hover:text-white bg-transparent border border-zinc-800 rounded-lg hover:border-zinc-700 transition-all duration-200"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <span className="text-zinc-600">→</span>
                </a>
              )}

              {project.behanceUrl && (
                <a
                  href={project.behanceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 rounded-lg hover:border-zinc-600 transition-all duration-200"
                >
                  <span className="font-bold text-xs">Bē</span>
                  <span>Behance</span>
                  <span className="text-zinc-500">→</span>
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
