import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects, projects } from './components/Projects';
import { Skills } from './components/Skills';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectDetail } from './components/ProjectDetail';

export default function App() {
  const [currentView, setCurrentView] = useState<'portfolio' | 'project'>('portfolio');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const handleProjectClick = (projectId: string) => {
    setSelectedProjectId(projectId);
    setCurrentView('project');
    // Scroll to top when opening project detail
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToPortfolio = () => {
    setCurrentView('portfolio');
    setSelectedProjectId(null);
    // Scroll to projects section when returning
    setTimeout(() => {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const selectedProject = selectedProjectId 
    ? projects.find(p => p.id === selectedProjectId) 
    : null;

  if (currentView === 'project' && selectedProject) {
    return (
      <ProjectDetail 
        project={selectedProject} 
        onBack={handleBackToPortfolio}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Projects onProjectClick={handleProjectClick} />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}