import React, { useEffect } from 'react';
import { X, Github, ExternalLink, Check, Layers, ArrowRight } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenQuote: (serviceType?: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onOpenQuote,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl rounded-2xl bg-[#111116] border border-zinc-800 shadow-2xl overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-title"
      >
        {/* Top Bar */}
        <div className="px-6 py-4 bg-[#14141a] border-b border-zinc-800/80 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <span>PROJECT CASE STUDY</span>
            <span>·</span>
            <span>{project.number}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Mockup Preview Image */}
          <div className="relative rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 aspect-[16/9]">
            <img
              src={project.imageSrc}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Title & Metadata */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-400">
              {project.tags.map((tag, idx) => (
                <React.Fragment key={tag}>
                  <span>{tag}</span>
                  {idx < project.tags.length - 1 && (
                    <span className="text-zinc-600" aria-hidden="true">
                      ·
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>

            <h3 id="project-title" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h3>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
              {project.description}
            </p>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-2">
              <h4 className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider">
                The Challenge
              </h4>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-2">
              <h4 className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider">
                The Solution
              </h4>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider">
              Key Technical Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat) => (
                <div
                  key={feat}
                  className="p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/60 flex items-start gap-2.5 text-xs text-zinc-300"
                >
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
              )}

              {project.behanceUrl && (
                <a
                  href={project.behanceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-zinc-900 border border-zinc-700 rounded-lg hover:bg-zinc-800 transition-colors"
                >
                  <span className="font-bold text-xs">Bē</span>
                  <span>View on Behance</span>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                </a>
              )}
            </div>

            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenQuote(project.title);
              }}
              className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold text-black bg-white rounded-lg hover:bg-zinc-200 transition-colors"
            >
              <span>Build Something Similar</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
