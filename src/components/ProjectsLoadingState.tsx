
import React from 'react';

interface ProjectsLoadingStateProps {
  isLoading: boolean;
  hasError: boolean;
  onRetry: () => void;
}

const ProjectsLoadingState: React.FC<ProjectsLoadingStateProps> = ({ 
  isLoading, 
  hasError, 
  onRetry 
}) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-16">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-netflix-red"></div>
      </div>
    );
  }
  
  if (hasError) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold text-white mb-4">Erro ao carregar projetos</h2>
        <p className="text-gray-300">Mostrando dados de exemplo enquanto tentamos resolver o problema.</p>
        <button 
          onClick={onRetry} 
          className="mt-6 bg-netflix-red hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Tentar novamente
        </button>
      </div>
    );
  }
  
  return null;
};

export default ProjectsLoadingState;
