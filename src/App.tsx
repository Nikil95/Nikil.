import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedWork } from './components/FeaturedWork';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { Process } from './components/Process';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { FreelanceCTA } from './components/FreelanceCTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { Project } from './types/portfolio';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteServiceType, setQuoteServiceType] = useState<string | undefined>(undefined);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenQuote = (serviceType?: string) => {
    setQuoteServiceType(serviceType);
    setIsQuoteOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteOpen(false);
    setQuoteServiceType(undefined);
  };

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] flex flex-col font-sans selection:bg-neutral-800 selection:text-white">
      {/* Sticky Navigation */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenQuote={() => handleOpenQuote()} />

        {/* Selected Work */}
        <FeaturedWork
          onSelectProject={handleSelectProject}
          onOpenQuote={handleOpenQuote}
        />

        {/* What I Can Build */}
        <Services onOpenQuote={handleOpenQuote} />

        {/* Simple, Transparent Pricing */}
        <Pricing onOpenQuote={handleOpenQuote} />

        {/* From Idea to Launch */}
        <Process />

        {/* About Nikil */}
        <About />

        {/* Skills & Capabilities */}
        <Skills />

        {/* Bottom Freelance CTA */}
        <FreelanceCTA onOpenQuote={() => handleOpenQuote()} />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={handleCloseQuote}
        initialServiceType={quoteServiceType}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={handleCloseProjectModal}
        onOpenQuote={handleOpenQuote}
      />
    </div>
  );
}
