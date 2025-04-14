
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
      
      <div className="pt-24 container mx-auto px-4" id="projects">
        <h1 className="text-4xl font-bold text-white mb-8">Meus Projetos</h1>
        
        <ProjectsLoadingState 
          isLoading={isLoading} 
          hasError={hasError} 
          onRetry={() => window.location.reload()}
        />
        
        {!isLoading && !hasError && (
          <div className="pb-8">
            {webProjects.length > 0 && <ProjectRow title="Desenvolvimento Web" projects={webProjects} />}
            {mobileProjects.length > 0 && <ProjectRow title="Aplicativos Móveis" projects={mobileProjects} />}
            {designProjects.length > 0 && <ProjectRow title="Projetos de Design" projects={designProjects} />}
            
            <LegacyProjects projetosAntigos={projetosAntigos} />
            
            <ProjectsEmptyState noProjects={hasNoProjects} />
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Projects;
