
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { toast as sonnerToast } from '@/components/ui/sonner';
import { 
  getSampleWebProjects, 
  getSampleMobileProjects, 
  getSampleDesignProjects,
  type Project 
} from '@/utils/sampleProjectsData';
import type { ProjetosAntigos } from '@/components/LegacyProjects';

const fetchProjects = async () => {
  console.log("Buscando dados de projetos do Supabase...");
  
  // Fetch from projects table (newer structure)
  const { data: projectsData, error: projectsError } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false });

  // Fetch from projetos table (older structure) 
  const { data: projetosData, error: projetosError } = await supabase
    .from('projetos')
    .select('*')
    .order('nivel', { ascending: false });

  // Check for errors and handle them
  if (projectsError) {
    console.error('Erro ao buscar projects:', projectsError);
    throw new Error(projectsError.message);
  }
  
  if (projetosError) {
    console.error('Erro ao buscar projetos:', projetosError);
    // This is a secondary error, so we don't throw but log it
  }

  // Process data
  let webProjects: Project[] = [];
  let mobileProjects: Project[] = [];
  let designProjects: Project[] = [];
  let projetosAntigos: ProjetosAntigos[] = [];

  // Process projects data if available
  if (projectsData && projectsData.length > 0) {
    console.log("Dados de projetos recentes carregados:", projectsData.length);
    
    // Transform the data to match our Project interface
    const transformedProjects: Project[] = projectsData.map(project => ({
      id: project.id.toString(),
      imageUrl: project.cover_image || 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: project.title,
      description: project.description,
      tags: project.technologies || [],
      link: project.demo_url || project.github_url
    }));

    // Filter projects by category
    webProjects = transformedProjects.filter(project => 
      project.tags.some(tag => 
        ['React', 'JavaScript', 'TypeScript', 'Node.js', 'HTML', 'CSS', 'Web'].includes(tag)
      )
    );
    
    mobileProjects = transformedProjects.filter(project => 
      project.tags.some(tag => 
        ['React Native', 'Flutter', 'Mobile', 'iOS', 'Android', 'Swift'].includes(tag)
      )
    );
    
    designProjects = transformedProjects.filter(project => 
      project.tags.some(tag => 
        ['Design', 'UI/UX', 'Figma', 'Sketch', 'Adobe XD', 'Photoshop', 'Illustrator'].includes(tag)
      )
    );
    
    sonnerToast("Projetos carregados com sucesso", {
      description: `${projectsData.length} projetos encontrados`
    });
  } else {
    console.log("Nenhum projeto recente encontrado, usando dados de exemplo");
    webProjects = getSampleWebProjects();
    mobileProjects = getSampleMobileProjects();
    designProjects = getSampleDesignProjects();
    
    sonnerToast("Usando projetos de exemplo", {
      description: "Nenhum projeto foi encontrado no banco de dados"
    });
  }
  
  // Process projetos (older structure) if available
  if (projetosData && projetosData.length > 0) {
    console.log("Dados de projetos antigos carregados:", projetosData.length);
    projetosAntigos = projetosData;
    
    sonnerToast("Projetos antigos", {
      description: `${projetosData.length} projetos antigos carregados`
    });
  }

  return { 
    webProjects, 
    mobileProjects, 
    designProjects, 
    projetosAntigos 
  };
};

export const useProjectsData = () => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 1,
    meta: {
      onError: (error: Error) => {
        console.error('Erro na query de projetos:', error);
        sonnerToast("Erro ao carregar projetos", {
          description: error.message,
          action: {
            label: "Tentar novamente",
            onClick: () => refetch(),
          }
        });
      }
    }
  });

  return {
    webProjects: data?.webProjects || [],
    mobileProjects: data?.mobileProjects || [],
    designProjects: data?.designProjects || [],
    projetosAntigos: data?.projetosAntigos || [],
    isLoading,
    hasError: isError,
    fetchProjects: refetch
  };
};
