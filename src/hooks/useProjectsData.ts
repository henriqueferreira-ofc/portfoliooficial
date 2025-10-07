
import { useQuery } from '@tanstack/react-query';
import { 
  getSampleWebProjects, 
  getSampleMobileProjects, 
  getSampleDesignProjects,
} from '@/utils/sampleProjectsData';
import type { ProjetosAntigos } from '@/components/LegacyProjects';

type ProjectsData = {
  webProjects: ReturnType<typeof getSampleWebProjects>;
  mobileProjects: ReturnType<typeof getSampleMobileProjects>;
  designProjects: ReturnType<typeof getSampleDesignProjects>;
  projetosAntigos: ProjetosAntigos[];
};

const buildSampleProjects = (): ProjectsData => ({
  webProjects: getSampleWebProjects(),
  mobileProjects: getSampleMobileProjects(),
  designProjects: getSampleDesignProjects(),
  projetosAntigos: [],
});

const fetchProjects = async (): Promise<ProjectsData> => {
  console.log("Usando dados de exemplo para projetos...");
  return buildSampleProjects();
};

const initialProjects = buildSampleProjects();

export const useProjectsData = () => {
  const { data = initialProjects, isLoading, isError, refetch } = useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects,
    initialData: initialProjects,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });

  return {
    webProjects: data.webProjects,
    mobileProjects: data.mobileProjects,
    designProjects: data.designProjects,
    projetosAntigos: data.projetosAntigos,
    isLoading,
    hasError: isError,
    fetchProjects: () => refetch()
  };
};
