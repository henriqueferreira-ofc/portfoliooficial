
import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

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
      <div className="py-8">
        <div className="flex gap-4 mb-12">
          <Skeleton className="h-[180px] w-[280px] md:w-[320px]" />
          <Skeleton className="h-[180px] w-[280px] md:w-[320px] hidden md:block" />
          <Skeleton className="h-[180px] w-[280px] md:w-[320px] hidden lg:block" />
        </div>
        <div className="flex gap-4">
          <Skeleton className="h-[180px] w-[280px] md:w-[320px]" />
          <Skeleton className="h-[180px] w-[280px] md:w-[320px] hidden md:block" />
          <Skeleton className="h-[180px] w-[280px] md:w-[320px] hidden lg:block" />
        </div>
      </div>
    );
  }
  
  if (hasError) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold text-white mb-4">Erro ao carregar projetos</h2>
        <p className="text-gray-300 mb-6">Mostrando dados de exemplo enquanto tentamos resolver o problema.</p>
        <button 
          onClick={onRetry} 
          className="mt-2 bg-netflix-red hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Tentar novamente
        </button>
      </div>
    );
  }
  
  return null;
};

export default ProjectsLoadingState;
