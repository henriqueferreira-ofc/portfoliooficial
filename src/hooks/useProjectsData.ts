
import { useQuery } from '@tanstack/react-query';
import { toast as sonnerToast } from '@/components/ui/sonner';
import { 
  getSampleWebProjects, 
  getSampleMobileProjects, 
  getSampleDesignProjects,
  type Project 
} from '@/utils/sampleProjectsData';
import type { ProjetosAntigos } from '@/components/LegacyProjects';

const fetchProjects = async () => {
  console.log("Usando dados de exemplo para projetos...");
  
  try {
    // Use sample data instead of fetching from Supabase
    const webProjects = getSampleWebProjects();
    const mobileProjects = getSampleMobileProjects();
    const designProjects = getSampleDesignProjects();
    const projetosAntigos: ProjetosAntigos[] = [];
    
    sonnerToast("Dados de exemplo carregados", {
      description: "Usando projetos de exemplo"
    });

    return { 
      webProjects, 
      mobileProjects, 
      designProjects, 
      projetosAntigos 
    };
  } catch (error) {
    console.error('Erro ao carregar dados:', error);
    return {
      webProjects: getSampleWebProjects(),
      mobileProjects: getSampleMobileProjects(),
      designProjects: getSampleDesignProjects(),
      projetosAntigos: []
    };
  }
};

export const useProjectsData = () => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  return {
    webProjects: data?.webProjects || [],
    mobileProjects: data?.mobileProjects || [],
    designProjects: data?.designProjects || [],
    projetosAntigos: data?.projetosAntigos || [],
    isLoading,
    hasError: isError,
    fetchProjects: () => refetch()
  };
};
