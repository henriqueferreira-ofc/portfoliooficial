
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectRow from '@/components/ProjectRow';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Project {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

const Index = () => {
  const [webProjects, setWebProjects] = useState<Project[]>([]);
  const [mobileProjects, setMobileProjects] = useState<Project[]>([]);
  const [designProjects, setDesignProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        console.log("Tentando buscar projetos do Supabase...");
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) {
          console.error('Erro ao buscar projetos:', error);
          throw error;
        }

        if (data && data.length > 0) {
          // Transform the data to match our Project interface
          const transformedProjects: Project[] = data.map(project => ({
            id: project.id.toString(), // Ensure ID is a string
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
          console.log("Projetos carregados com sucesso do Supabase");
        } else {
          console.log("Nenhum dado encontrado no Supabase, usando dados de exemplo");
          // No data found, use sample data
          setWebProjects(getSampleWebProjects());
          setMobileProjects(getSampleMobileProjects());
          setDesignProjects(getSampleDesignProjects());
        }
      } catch (error) {
        console.error('Erro ao buscar projetos:', error);
        toast({
          title: "Aviso",
          description: "Usando dados de projetos de exemplo para exibição",
          variant: "default",
        });
        
        // Use sample data if there's an error
        setWebProjects(getSampleWebProjects());
        setMobileProjects(getSampleMobileProjects());
        setDesignProjects(getSampleDesignProjects());
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, [toast]);

  // Funções de dados de exemplo (fallback se a busca do Supabase falhar)
  const getSampleWebProjects = (): Project[] => [
    {
      id: '1',
      imageUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: 'Plataforma E-Commerce',
      description: 'Uma loja online completa com carrinho, checkout e processamento de pagamento.',
      tags: ['React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      id: '2',
      imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: 'Site de Portfólio',
      description: 'Site de portfólio responsivo com transições animadas e carregamento dinâmico de conteúdo.',
      tags: ['React', 'Tailwind CSS', 'Framer Motion'],
      link: '#'
    },
    {
      id: '3',
      imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: 'Interface de Dashboard',
      description: 'Painel administrativo com visualização de dados, gerenciamento de usuários e recursos de relatórios.',
      tags: ['React', 'TypeScript', 'Chart.js'],
      link: '#'
    },
    {
      id: '4',
      imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: 'App de Mídia Social',
      description: 'Plataforma para conectar usuários com interesses semelhantes e compartilhar conteúdo.',
      tags: ['React Native', 'Firebase'],
      link: '#'
    },
  ];

  const getSampleMobileProjects = (): Project[] => [
    {
      id: '5',
      imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: 'Rastreador de Fitness',
      description: 'Aplicativo móvel para rastrear treinos, nutrição e métricas de saúde.',
      tags: ['React Native', 'Redux', 'HealthKit'],
      link: '#'
    },
    {
      id: '6',
      imageUrl: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: 'Localizador de Receitas',
      description: 'Aplicativo que sugere receitas com base nos ingredientes que você tem em casa.',
      tags: ['Flutter', 'Firebase', 'Integração API'],
      link: '#'
    },
    {
      id: '7',
      imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: 'Companheiro de Viagem',
      description: 'Planejamento de viagens e gerenciamento de itinerário com mapas e recomendações.',
      tags: ['React Native', 'Google Maps API'],
      link: '#'
    },
    {
      id: '8',
      imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: 'App de Clima',
      description: 'Previsões meteorológicas em tempo real com belas visualizações e notificações.',
      tags: ['Swift', 'Weather API'],
      link: '#'
    },
  ];

  const getSampleDesignProjects = (): Project[] => [
    {
      id: '9',
      imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: 'Identidade de Marca',
      description: 'Design completo de identidade de marca incluindo logotipo, esquema de cores e diretrizes.',
      tags: ['Branding', 'Illustrator', 'Photoshop'],
      link: '#'
    },
    {
      id: '10',
      imageUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: 'Estudo de Caso UI/UX',
      description: 'Pesquisa UX abrangente e design de UI para um aplicativo financeiro.',
      tags: ['Figma', 'Pesquisa de Usuário', 'Prototipagem'],
      link: '#'
    },
    {
      id: '11',
      imageUrl: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: 'Design de Produto',
      description: 'Design completo de produto para um dispositivo de casa inteligente e aplicativo complementar.',
      tags: ['Design Industrial', 'UI/UX', 'Modelagem 3D'],
      link: '#'
    },
    {
      id: '12',
      imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: 'Materiais de Marketing',
      description: 'Design de materiais de marketing impressos e digitais para uma campanha de lançamento de produto.',
      tags: ['Design Gráfico', 'Marketing', 'Design de Impressão'],
      link: '#'
    },
  ];

  return (
    <div className="bg-netflix-black min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        <div className="container mx-auto pt-16 px-4" id="projects">
          {isLoading ? (
            <div className="flex justify-center items-center py-16">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-netflix-red"></div>
            </div>
          ) : (
            <div id="featured-project" className="pb-8">
              {webProjects.length > 0 && <ProjectRow title="Desenvolvimento Web" projects={webProjects} />}
              {mobileProjects.length > 0 && <ProjectRow title="Aplicativos Móveis" projects={mobileProjects} />}
              {designProjects.length > 0 && <ProjectRow title="Projetos de Design" projects={designProjects} />}
            </div>
          )}
        </div>
        
        <About />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
