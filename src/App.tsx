import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { JourneyMap } from './components/JourneyMap';
import { ProjectsSection } from './components/ProjectsSection';
import { CompetitionsArchive } from './components/CompetitionsArchive';
import { PitchDeckLibrary } from './components/PitchDeckLibrary';
import { ExperienceSection } from './components/ExperienceSection';
import { StackMatrix } from './components/StackMatrix';
import { LiteraryRoom } from './components/LiteraryRoom';
import { PoetryCarousel } from './components/PoetryCarousel';
import { PhotoJournal } from './components/PhotoJournal';
import { AboutSection } from './components/AboutSection';
import { ContactFooter } from './components/ContactFooter';
import { RecruiterModal } from './components/RecruiterModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { Project } from './data/portfolioData';

export const App: React.FC = () => {
  const [isRecruiterOpen, setIsRecruiterOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Editorial Sticky Navbar */}
      <Navbar onOpenRecruiter={() => setIsRecruiterOpen(true)} />

      {/* Main Content Sections */}
      <main style={{ flex: 1 }}>
        <Hero onOpenRecruiter={() => setIsRecruiterOpen(true)} />
        <JourneyMap />
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />
        <CompetitionsArchive />
        <PitchDeckLibrary />
        <ExperienceSection />
        <StackMatrix />
        <LiteraryRoom />
        <PoetryCarousel />
        <PhotoJournal />
        <AboutSection />
      </main>

      {/* Footer & Contact Hub */}
      <ContactFooter />

      {/* Executive Recruiter Drawer */}
      <RecruiterModal
        isOpen={isRecruiterOpen}
        onClose={() => setIsRecruiterOpen(false)}
      />

      {/* Case Study Deep Dive Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default App;
