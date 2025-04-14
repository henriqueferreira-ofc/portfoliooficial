import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { supabase } from '@/integrations/supabase/client';
import { toast as sonnerToast } from '@/components/ui/sonner';
import { 
  Code2, Database, Globe, Palette, 
  FileCode2, GitBranch, MonitorSmartphone, 
  Figma, LayoutGrid, Binary,
  Briefcase, Users, ClipboardCheck,
  BarChart2, Calendar, UserRound,
  ListTodo, UserCog, Target,
  Award, PieChart, Presentation,
  GraduationCap, BookOpen, School
} from 'lucide-react';

interface Tecnologia {
  id: number;
  nome: string;
  descricao: string;
  imagem: string;
  destaque: boolean;
}

const getTechIcon = (techName: string) => {
  const iconMap: Record<string, React.ReactNode> = {
    'React': <Code2 className="w-8 h-8 text-blue-400" />,
    'TypeScript': <FileCode2 className="w-8 h-8 text-blue-600" />,
    'JavaScript': <FileCode2 className="w-8 h-8 text-yellow-400" />,
    'HTML5': <Globe className="w-8 h-8 text-orange-500" />,
    'CSS3': <Palette className="w-8 h-8 text-blue-500" />,
    'Node.js': <Binary className="w-8 h-8 text-green-500" />,
    'Git': <GitBranch className="w-8 h-8 text-red-500" />,
    'MongoDB': <Database className="w-8 h-8 text-green-600" />,
    'Figma': <Figma className="w-8 h-8 text-purple-500" />,
    'React Native': <MonitorSmartphone className="w-8 h-8 text-blue-400" />,
    'Tailwind CSS': <LayoutGrid className="w-8 h-8 text-teal-500" />,
    'Design UI/UX': <Palette className="w-8 h-8 text-pink-500" />,
    
    'Gestão de Projetos': <Briefcase className="w-8 h-8 text-indigo-500" />,
    'Metodologias Ágeis': <ClipboardCheck className="w-8 h-8 text-green-400" />,
    'Scrum': <ListTodo className="w-8 h-8 text-blue-500" />,
    'Kanban': <BarChart2 className="w-8 h-8 text-yellow-500" />,
    'PMBOK': <ClipboardCheck className="w-8 h-8 text-purple-400" />,
    'Planejamento Estratégico': <Target className="w-8 h-8 text-red-400" />,
    'Análise de Dados': <PieChart className="w-8 h-8 text-blue-300" />,

    'Gestão de Pessoas': <Users className="w-8 h-8 text-green-500" />,
    'Liderança': <UserCog className="w-8 h-8 text-orange-500" />,
    'Mentoria': <UserRound className="w-8 h-8 text-purple-500" />,
    'Desenvolvimento de Equipes': <Users className="w-8 h-8 text-blue-500" />,
    'Resolução de Conflitos': <Award className="w-8 h-8 text-yellow-600" />,
    'Gestão de Performance': <Target className="w-8 h-8 text-green-600" />,
    'Comunicação': <Presentation className="w-8 h-8 text-indigo-400" />,
    'Planejamento de Recursos': <Calendar className="w-8 h-8 text-teal-500" />
  };

  return iconMap[techName] || <Code2 className="w-8 h-8 text-netflix-red" />;
};

const AboutPage = () => {
  const [tecnologias, setTecnologias] = useState<Tecnologia[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTecnologias = async () => {
      try {
        setIsLoading(true);
        
        const { data: tecnologiasData, error: tecnologiasError } = await supabase
          .from('tecnologias')
          .select('*');

        if (tecnologiasError) {
          console.error('Erro ao buscar tecnologias:', tecnologiasError);
          sonnerToast("Erro ao carregar tecnologias", {
            description: tecnologiasError.message
          });
        }
        
        if (tecnologiasData && tecnologiasData.length > 0) {
          console.log("Dados de tecnologias carregados:", tecnologiasData.length);
          setTecnologias(tecnologiasData);
        }
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTecnologias();
  }, []);

  return (
    <div className="bg-netflix-black min-h-screen">
      <Navbar />
      
      <div className="pt-24 container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-white">Sobre Mim</h1>
          <span className="text-4xl font-bold text-netflix-light-gray">Henrique Ferreira</span>
        </div>
        
        <div className="bg-netflix-dark-gray rounded-lg p-8 mb-12">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="aspect-square overflow-hidden rounded-full border-4 border-netflix-red">
                <img 
                  src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                  alt="Foto de perfil" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold text-white mb-4">Gestor de Projetos em TI e Gestão de Pessoas</h2>
              <p className="text-gray-300 mb-4">
                Olá! Sou um profissional especializado em gestão de projetos de TI com foco em liderança e desenvolvimento de equipes. Com mais de 5 anos de experiência combinando habilidades técnicas e gerenciais, meu objetivo é construir soluções eficientes e equipes de alto desempenho.
              </p>
              <p className="text-gray-300 mb-4">
                Minha jornada profissional inclui a gestão de projetos usando metodologias ágeis como Scrum e Kanban, além de abordagens tradicionais baseadas no PMBOK. Possuo experiência significativa em liderança, desenvolvimento de talentos e implementação de estratégias para melhorar o desempenho das equipes.
              </p>
              <p className="text-gray-300">
                Quando não estou coordenando projetos, gosto de explorar novas tendências em gestão, contribuir para a comunidade e compartilhar conhecimento com outros profissionais da área.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Minhas Habilidades</h2>
          
          {isLoading ? (
            <div className="flex justify-center items-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-netflix-red"></div>
            </div>
          ) : (
            <>
              {tecnologias.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {tecnologias
                    .filter(tech => tech.destaque)
                    .map(tech => (
                      <div key={tech.id} className="bg-netflix-dark-gray rounded-md p-4 flex flex-col items-center text-center hover:bg-netflix-medium-gray transition-colors">
                        <div className="w-16 h-16 mb-3 flex items-center justify-center">
                          {tech.imagem ? (
                            <img 
                              src={tech.imagem} 
                              alt={tech.nome} 
                              className="w-full h-full object-contain"
                            />
                          ) : (
                            getTechIcon(tech.nome)
                          )}
                        </div>
                        <h3 className="text-white font-medium">{tech.nome}</h3>
                      </div>
                    ))}
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {[
                    'Gestão de Projetos', 
                    'Metodologias Ágeis', 
                    'Gestão de Pessoas', 
                    'Liderança', 
                    'Desenvolvimento de Equipes', 
                    'Scrum',
                    'Análise de Dados',
                    'Planejamento Estratégico',
                    'React',
                    'TypeScript',
                    'Node.js',
                    'PMBOK'
                  ].map((skill, index) => (
                    <div key={index} className="bg-netflix-dark-gray rounded-md p-4 flex flex-col items-center text-center hover:bg-netflix-medium-gray transition-colors">
                      <div className="w-16 h-16 mb-3 flex items-center justify-center">
                        {getTechIcon(skill)}
                      </div>
                      <h3 className="text-white font-medium">{skill}</h3>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Formação Acadêmica</h2>
          <div className="space-y-6">
            <div className="bg-netflix-dark-gray p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-netflix-medium-gray p-3 rounded-full">
                  <GraduationCap className="w-6 h-6 text-netflix-red" />
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-white">MBA em Gestão de Projetos</h3>
                    <span className="text-netflix-red text-sm">2020 - 2021</span>
                  </div>
                  <h4 className="text-gray-300 mb-3">Universidade de Tecnologia</h4>
                  <p className="text-gray-400">
                    Especialização com foco em metodologias ágeis e liderança de equipes de TI.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-netflix-dark-gray p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-netflix-medium-gray p-3 rounded-full">
                  <BookOpen className="w-6 h-6 text-netflix-red" />
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-white">Bacharelado em Sistemas de Informação</h3>
                    <span className="text-netflix-red text-sm">2015 - 2019</span>
                  </div>
                  <h4 className="text-gray-300 mb-3">Faculdade de Tecnologia</h4>
                  <p className="text-gray-400">
                    Formação com ênfase em desenvolvimento de software e gestão de TI.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-netflix-dark-gray p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-netflix-medium-gray p-3 rounded-full">
                  <School className="w-6 h-6 text-netflix-red" />
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-white">Certificação PMP</h3>
                    <span className="text-netflix-red text-sm">2022</span>
                  </div>
                  <h4 className="text-gray-300 mb-3">Project Management Institute</h4>
                  <p className="text-gray-400">
                    Certificação profissional em gestão de projetos reconhecida internacionalmente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Experiência</h2>
          <div className="space-y-6">
            <div className="bg-netflix-dark-gray p-6 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-white">Gestor de Projetos de TI Senior</h3>
                <span className="text-netflix-red text-sm">2022 - Presente</span>
              </div>
              <h4 className="text-gray-300 mb-3">Empresa Tech Inovação</h4>
              <p className="text-gray-400">
                Lidero equipes de desenvolvimento para entrega de projetos de software, usando metodologias ágeis e práticas de gestão de pessoas. Responsável pelo planejamento estratégico, alocação de recursos e desenvolvimento profissional da equipe.
              </p>
            </div>
            
            <div className="bg-netflix-dark-gray p-6 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-white">Líder de Equipe de Desenvolvimento</h3>
                <span className="text-netflix-red text-sm">2020 - 2022</span>
              </div>
              <h4 className="text-gray-300 mb-3">Agência Digital Criativa</h4>
              <p className="text-gray-400">
                Coordenei uma equipe de desenvolvedores front-end, implementando processos ágeis e práticas de mentoria. Focado em melhorar a produtividade e qualidade das entregas através de gestão eficiente de pessoas.
              </p>
            </div>
            
            <div className="bg-netflix-dark-gray p-6 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-white">Desenvolvedor Web e Analista</h3>
                <span className="text-netflix-red text-sm">2018 - 2020</span>
              </div>
              <h4 className="text-gray-300 mb-3">Startup Tech</h4>
              <p className="text-gray-400">
                Atuei no desenvolvimento web e gradualmente assumi responsabilidades de coordenação de pequenas equipes e gestão de projetos internos.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
