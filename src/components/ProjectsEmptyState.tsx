
import React from 'react';

interface ProjectsEmptyStateProps {
  noProjects: boolean;
}

const ProjectsEmptyState: React.FC<ProjectsEmptyStateProps> = ({ noProjects }) => {
  if (!noProjects) {
    return null;
  }
  
  return (
    <div className="text-center py-16">
      <h2 className="text-2xl font-bold text-white mb-4">Nenhum projeto encontrado</h2>
      <p className="text-gray-300">Não há projetos cadastrados no momento.</p>
    </div>
  );
};

export default ProjectsEmptyState;
