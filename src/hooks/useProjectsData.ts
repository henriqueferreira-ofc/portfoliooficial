
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast as sonnerToast } from '@/components/ui/sonner';
import { 
  getSampleWebProjects, 
  getSampleMobileProjects, 
  getSampleDesignProjects,
  type Project 
} from '@/utils/sampleProjectsData';
import type { ProjetosAntigos } from '@/components/LegacyProjects';

export const useProjectsData = () => {
  const [webProjects, setWebProjects] = useState<Project[]>([]);
  const [mobileProjects, setMobileProjects] = useState<Project[]>([]);
  const [designProjects, setDesignProjects] = useState<Project[]>([]);
  const [projetosAntigos, setProjetosAntigos] = useState<ProjetosAntigos[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const fetchProjects = async () => {
    try {
      setIsLoading(true);
      setHasError(false);
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
        sonnerToast("Erro ao carregar projetos recentes", {
          description: projectsError.message,
          action: {
            label: "Tentar novamente",
            onClick: () => window.location.reload(),
          }
        });
        setHasError(true);
      }
      
      if (projetosError) {
        console.error('Erro ao buscar projetos:', projetosError);
      }

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
        const web = transformedProjects.filter(project => 
          project.tags.some(tag => 
            ['React', 'JavaScript', 'TypeScript', 'Node.js', 'HTML', 'CSS', 'Web'].includes(tag)
          )
        );
        
        const mobile = transformedProjects.filter(project => 
          project.tags.some(tag => 
            ['React Native', 'Flutter', 'Mobile', 'iOS', 'Android', 'Swift'].includes(tag)
          )
        );
        
        const design = transformedProjects.filter(project => 
          project.tags.some(tag => 
            ['Design', 'UI/UX', 'Figma', 'Sketch', 'Adobe XD', 'Photoshop', 'Illustrator'].includes(tag)
          )
        );

        setWebProjects(web.length > 0 ? web : getSampleWebProjects());
        setMobileProjects(mobile.length > 0 ? mobile : getSampleMobileProjects());
        setDesignProjects(design.length > 0 ? design : getSampleDesignProjects());
        
        // Show a success toast if we got data
        sonnerToast("Projetos carregados com sucesso", {
          description: `${projectsData.length} projetos encontrados`
        });
      } else {
        console.log("Nenhum projeto recente encontrado, usando dados de exemplo");
        // Use sample data if no projects found
        setWebProjects(getSampleWebProjects());
        setMobileProjects(getSampleMobileProjects());
        setDesignProjects(getSampleDesignProjects());
        
        sonnerToast("Aviso", {
          description: "Usando projetos de exemplo pois nenhum projeto foi encontrado",
        });
      }
      
      // Process projetos (older structure) if available
      if (projetosData && projetosData.length > 0) {
        console.log("Dados de projetos antigos carregados:", projetosData.length);
        setProjetosAntigos(projetosData);
        
        sonnerToast("Projetos antigos", {
          description: `${projetosData.length} projetos antigos carregados`
        });
      }
      
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      setHasError(true);
      sonnerToast("Erro", {
        description: "Erro ao carregar dados do banco de dados, usando dados de exemplo",
      });
      
      // Use sample data if there's an error
      setWebProjects(getSampleWebProjects());
      setMobileProjects(getSampleMobileProjects());
      setDesignProjects(getSampleDesignProjects());
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return {
    webProjects,
    mobileProjects,
    designProjects,
    projetosAntigos,
    isLoading,
    hasError,
    fetchProjects
  };
};
