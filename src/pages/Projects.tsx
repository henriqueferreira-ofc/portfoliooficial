
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectRow from '@/components/ProjectRow';
import LegacyProjects from '@/components/LegacyProjects';
import ProjectsLoadingState from '@/components/ProjectsLoadingState';
import ProjectsEmptyState from '@/components/ProjectsEmptyState';
import { useProjectsData } from '@/hooks/useProjectsData';

const Projects: React.FC = () => {
  const {
    webProjects,
    mobileProjects,
    designProjects,
    projetosAntigos,
    isLoading,
    hasError,
    fetchProjects
  } = useProjectsData();

  const hasNoProjects = 
    !isLoading && 
    !hasError && 
    webProjects.length === 0 && 
    mobileProjects.length === 0 && 
    designProjects.length === 0 && 
    projetosAntigos.length === 0;

  return (
    <div className="bg-netflix-black min-h-screen">
      <Navbar />
      
      <main className="pt-24 md:pt-28 container mx-auto px-4 sm:px-6 lg:px-8 pb-12 overflow-x-hidden" id="projects">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8">Meus Projetos</h1>
        
        <ProjectsLoadingState 
          isLoading={isLoading} 
          hasError={hasError} 
          onRetry={fetchProjects}
        />
        
        {!isLoading && (
          <div className="pb-8">
            {webProjects.length > 0 && <ProjectRow title="Desenvolvimento Web" projects={webProjects} />}
            {mobileProjects.length > 0 && <ProjectRow title="Aplicativos Móveis" projects={mobileProjects} />}
            {designProjects.length > 0 && <ProjectRow title="Projetos de Design" projects={designProjects} />}
            
            <LegacyProjects projetosAntigos={projetosAntigos} />
            
            <ProjectsEmptyState noProjects={hasNoProjects} />
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
