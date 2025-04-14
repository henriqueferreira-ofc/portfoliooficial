import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectRow from '@/components/ProjectRow';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { toast as sonnerToast } from '@/components/ui/sonner';

interface Project {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

interface Tecnologia {
  id: number;
  nome: string;
  descricao: string;
  imagem: string;
  destaque: boolean;
}

interface ProjetosAntigos {
  id: number;
  nome: string;
  descricao: string;
  nivel: number;
  tipo: string;
  repositorio: string;
  imagens: string[] | null;
  destaque: boolean;
}

const Index = () => {
  const [webProjects, setWebProjects] = useState<Project[]>([]);
  const [mobileProjects, setMobileProjects] = useState<Project[]>([]);
  const [designProjects, setDesignProjects] = useState<Project[]>([]);
  const [tecnologias, setTecnologias] = useState<Tecnologia[]>([]);
  const [projetosAntigos, setProjetosAntigos] = useState<ProjetosAntigos[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setIsLoading(true);
        console.log("Buscando dados do Supabase...");
        
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
          
        // Fetch from tecnologias table
        const { data: tecnologiasData, error: tecnologiasError } = await supabase
          .from('tecnologias')
          .select('*');

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
        }
        
        if (projetosError) {
          console.error('Erro ao buscar projetos:', projetosError);
        }
        
        if (tecnologiasError) {
          console.error('Erro ao buscar tecnologias:', tecnologiasError);
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
        
        // Process tecnologias data if available
        if (tecnologiasData && tecnologiasData.length > 0) {
          console.log("Dados de tecnologias carregados:", tecnologiasData.length);
          setTecnologias(tecnologiasData);
          
          sonnerToast("Tecnologias", {
            description: `${tecnologiasData.length} tecnologias carregadas`
          });
        }
        
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
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

    fetchAllData();
  }, [toast]);

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
              
              {projetosAntigos.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-white mb-4">Projetos Antigos</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projetosAntigos
                      .filter(p => p.destaque)
                      .slice(0, 6)
                      .map(projeto => (
                        <div key={projeto.id} className="bg-netflix-dark-gray rounded-md overflow-hidden shadow-lg">
                          <div className="h-48 bg-netflix-medium-gray flex items-center justify-center">
                            {projeto.imagens && projeto.imagens.length > 0 ? (
                              <img 
                                src={projeto.imagens[0]} 
                                alt={projeto.nome} 
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="text-white text-4xl">{projeto.nome.charAt(0)}</div>
                            )}
                          </div>
                          <div className="p-4">
                            <h3 className="text-lg font-semibold text-white">{projeto.nome}</h3>
                            <p className="text-sm text-gray-300 mt-2 line-clamp-3">{projeto.descricao}</p>
                            <div className="mt-3 flex justify-between items-center">
                              <span className="text-xs px-2 py-1 bg-netflix-red rounded-full text-white">
                                {projeto.tipo}
                              </span>
                              <a 
                                href={projeto.repositorio} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-netflix-red text-sm hover:underline"
                              >
                                Ver projeto
                              </a>
                            </div>
                          </div>
                        </div>
                    ))}
                  </div>
                </div>
              )}
              
              {tecnologias.length > 0 && (
                <div className="mt-16">
                  <h2 className="text-2xl font-bold text-white mb-6">Tecnologias</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {tecnologias
                      .filter(tech => tech.destaque)
                      .map(tech => (
                        <div key={tech.id} className="bg-netflix-dark-gray rounded-md p-4 flex flex-col items-center text-center">
                          <div className="w-16 h-16 mb-3">
                            <img 
                              src={tech.imagem} 
                              alt={tech.nome} 
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <h3 className="text-white font-medium">{tech.nome}</h3>
                        </div>
                    ))}
                  </div>
                </div>
              )}
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
