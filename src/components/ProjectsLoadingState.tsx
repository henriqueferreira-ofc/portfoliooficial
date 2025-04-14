
import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { RefreshCcw } from 'lucide-react';

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
      <div className="text-center py-8">
        <Alert variant="destructive" className="mb-6 bg-netflix-dark-gray border-netflix-red text-white">
          <AlertTitle className="text-xl mb-2">Erro ao carregar projetos</AlertTitle>
          <AlertDescription className="text-gray-300">
            Mostrando dados de exemplo enquanto tentamos resolver o problema.
          </AlertDescription>
        </Alert>
        <Button 
          onClick={onRetry} 
          className="bg-netflix-red hover:bg-red-700 text-white" 
          variant="default"
        >
          <RefreshCcw className="mr-2 h-4 w-4" /> Tentar novamente
        </Button>
      </div>
    );
  }
  
  return null;
};

export default ProjectsLoadingState;
