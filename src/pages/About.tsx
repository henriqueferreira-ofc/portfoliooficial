import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { toast as sonnerToast } from '@/components/ui/sonner';
import profileImage from '@/assets/fotodeperfil.png';
import { Code2, Database, Globe, Palette, FileCode2, GitBranch, MonitorSmartphone, Figma, LayoutGrid, Binary, Briefcase, Users, ClipboardCheck, BarChart2, Calendar, UserRound, ListTodo, UserCog, Target, Award, PieChart, Presentation, GraduationCap, BookOpen, School } from 'lucide-react';
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

// Local data for skills
const localSkills = ['Gestão de Projetos', 'Metodologias Ágeis', 'Gestão de Pessoas', 'Liderança', 'Desenvolvimento de Equipes', 'Scrum', 'Análise de Dados', 'Planejamento Estratégico', 'React', 'TypeScript', 'Node.js', 'PMBOK', 'Kanban', 'Comunicação', 'Mentoria', 'Resolução de Conflitos'];
const AboutPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  return <div className="bg-netflix-black min-h-screen">
      <Navbar />
      
      <div className="pt-24 container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white text-center">SOBRE MIM</h1>
        </div>
        
        <div className="bg-netflix-dark-gray rounded-lg p-8 mb-12">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3 flex flex-col items-center md:pt-8">
              <div className="aspect-square overflow-hidden rounded-full border-4 border-netflix-red w-56 h-56">
                <img src={profileImage} alt="Foto de perfil" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-white mt-4 text-center">Henrique Ferreira</h3>
            </div>
            
            <div className="md:w-2/3 md:pl-4">
              <h2 className="text-2xl font-bold text-white mb-4">Graduado em Logística, MBA em Logística Empresarial e Gestão de Pessoas, Graduado em ADS (Análise e Desenvolvimentos de Sistemas ), Pós Graduado em Gerenciamentos de Projetos em TI, Gestão em Tecnologia, Gestão Pública e Gestão de Pessoas.</h2>
              <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                  
                </p>Olá! Sou graduado e especializado em Logística, com sólida experiência teórica e prática. Ao longo dos últimos 6 anos, atuei na supervisão e gestão de diferentes empresas do setor, adquirindo uma vivência ampla em processos operacionais e estratégicos. Essa trajetória me proporcionou conhecimento profundo sobre as demandas logísticas, além de uma capacidade comprovada de liderar equipes, otimizar fluxos de trabalho e garantir resultados consistentes.

Com a graduação em Análise e Desenvolvimento de Sistemas (ADS), agreguei ainda mais valor ao meu perfil profissional, unindo a expertise em gestão logística à visão tecnológica. Essa combinação fortalece minha atuação na criação de soluções inovadoras, que potencializam a eficiência operacional e a tomada de decisão estratégica.
                <p className="text-gray-300 leading-relaxed">
                  Me especializei em gestão de projetos de TI com foco em liderança e desenvolvimento de equipes. Com bastante experiência teórica e disposto a aprender inovações combinando habilidades técnicas e gerenciais, meu objetivo é construir soluções eficientes e equipes de alto desempenho.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Minha jornada inclui a gestão de projetos usando metodologias ágeis como Scrum e Kanban, além de abordagens tradicionais baseadas no PMBOK. Possuo experiência significativa em liderança, desenvolvimento de talentos e implementação de estratégias para melhorar o desempenho das equipes.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Quando não estou coordenando projetos, gosto de explorar novas tendências em gestão, contribuir para a comunidade e compartilhar conhecimento com outros profissionais da área.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">MINHAS HABILIDADES</h2>
          
          {isLoading ? <div className="flex justify-center items-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-netflix-red"></div>
            </div> : <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {localSkills.map((skill, index) => <div key={index} className="bg-netflix-dark-gray rounded-md p-4 flex flex-col items-center text-center hover:bg-netflix-medium-gray transition-colors">
                  <div className="w-16 h-16 mb-3 flex items-center justify-center">
                    {getTechIcon(skill)}
                  </div>
                  <h3 className="text-white font-medium">{skill}</h3>
                </div>)}
            </div>}
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">FORMAÇÃO ACADÊMICA</h2>
          <div className="space-y-6">
            <div className="bg-netflix-dark-gray p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-netflix-medium-gray p-3 rounded-full">
                  <GraduationCap className="w-6 h-6 text-netflix-red" />
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-white">Graduação Analise e Desenvolvimento de Sistemas</h3>
                    <span className="text-netflix-red text-sm">2022 - 2024</span>
                  </div>
                  <h4 className="text-gray-300 mb-3">Universidade - Uniceplac</h4>
                  <p className="text-gray-400">
                    Graduação em Análise e Desenvolvimento de Sistemas com foco em Gestão de Projetos.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-netflix-dark-gray p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-netflix-medium-gray p-3 rounded-full">
                  <GraduationCap className="w-6 h-6 text-netflix-red" />
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-white">Especialização em Gestão em Tecnologia</h3>
                    <span className="text-netflix-red text-sm">2023 - 2025</span>
                  </div>
                  <h4 className="text-gray-300 mb-3">Universidade - Faveni</h4>
                  <p className="text-gray-400">
                    Especialização de Gestão em tecnlogia com foco em Gestão de Projetos.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-netflix-dark-gray p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-netflix-medium-gray p-3 rounded-full">
                  <GraduationCap className="w-6 h-6 text-netflix-red" />
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-white">Especialização Gestão Pública e Gestão de Pessoas</h3>
                    <span className="text-netflix-red text-sm">2023 - 2025</span>
                  </div>
                  <h4 className="text-gray-300 mb-3">Universidade - Faveni</h4>
                  <p className="text-gray-400">
                    Especialização Gestão Pública e Gestão de Pessoas com foco em Gestão de Projetos.
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
                    <h3 className="text-xl font-semibold text-white">MBA e Gerenciamento de Projetos em TI</h3>
                    <span className="text-netflix-red text-sm">2023 - 2025</span>
                  </div>
                  <h4 className="text-gray-300 mb-3">Faculdade Unifaveni</h4>
                  <p className="text-gray-400">
                    MBA com ênfase em desenvolvimento de software e gestão de Projetos em TI.
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
                    <h3 className="text-xl font-semibold text-white">Graduação em Logística</h3>
                    <span className="text-netflix-red text-sm">2009 - 2011</span>
                  </div>
                  <h4 className="text-gray-300 mb-3">Universidade Unifaveni</h4>
                  <p className="text-gray-400">
                    Graduação em Logística com foco em Gestão Empresarial e desenvolvimento operacional.
                  </p>
                </div>
              </div>
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
                    <h3 className="text-xl font-semibold text-white">MBA em Logistica Empresarial e GP</h3>
                    <span className="text-netflix-red text-sm">2022 - 2024</span>
                  </div>
                  <h4 className="text-gray-300 mb-3">Faculdade Unifaveni</h4>
                  <p className="text-gray-400">
                    MBA em Logística Empresarial com ênfase em Gestão empresariale desenvolvimento operacional.
                  </p>
                </div>
              </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">CURSO DE CAPACITAÇÃO</h2>
          <div className="space-y-6">
            <div className="bg-netflix-dark-gray p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-netflix-medium-gray p-3 rounded-full">
                  <Award className="w-6 h-6 text-netflix-red" />
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-white">Administração da Informação - 240 Horas</h3>
                    <span className="text-netflix-red text-sm">2024</span>
                  </div>
                  <h4 className="text-gray-300 mb-3">Faveni</h4>
                  <p className="text-gray-400">
                    Capacitação intensiva com foco em métricas de produto, discovery contínuo e planejamento de roadmap orientado a dados.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-netflix-dark-gray p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-netflix-medium-gray p-3 rounded-full">
                  <Award className="w-6 h-6 text-netflix-red" />
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-white">Administração de Conflitos e Negociação - 240 Horas</h3>
                    <span className="text-netflix-red text-sm">2024</span>
                  </div>
                  <h4 className="text-gray-300 mb-3">Faveni</h4>
                  <p className="text-gray-400">
                    Curso voltado para implementação de frameworks ágeis com foco em facilitação de times, métricas de fluxo e melhoria contínua.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-netflix-dark-gray p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-netflix-medium-gray p-3 rounded-full">
                  <Award className="w-6 h-6 text-netflix-red" />
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-white">Coaching - 240 Horas</h3>
                    <span className="text-netflix-red text-sm">2024</span>
                  </div>
                  <h4 className="text-gray-300 mb-3">Faveni</h4>
                  <p className="text-gray-400">
                    Curso voltado para implementação de frameworks ágeis com foco em facilitação de times, métricas de fluxo e melhoria contínua.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-netflix-dark-gray p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-netflix-medium-gray p-3 rounded-full">
                  <Award className="w-6 h-6 text-netflix-red" />
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-white">Tecnologia da Informação - 120 Horas</h3>
                    <span className="text-netflix-red text-sm">2024</span>
                  </div>
                  <h4 className="text-gray-300 mb-3">Faveni</h4>
                  <p className="text-gray-400">
                    Formação prática em análise de dados, criação de dashboards e comunicação executiva baseada em insights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">EXPERIÊNCIAS PROFISSIONAIS</h2>
          <div className="space-y-6">
            <div className="bg-netflix-dark-gray p-6 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-white">Gestor de Projetos de TI</h3>
                <span className="text-netflix-red text-sm">2024 - Presente</span>
              </div>
              <h4 className="text-gray-300 mb-3">SEPD (Secretaria da Pessoa com Deficiência)</h4>
              <p className="text-gray-400">
                Lidero equipes de desenvolvimento para entrega de projetos de software, usando metodologias ágeis e práticas de gestão de pessoas. Responsável pelo planejamento estratégico, alocação de recursos e desenvolvimento profissional da equipe.
              </p>
            </div>
            
            <div className="bg-netflix-dark-gray p-6 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-white">Supervisor de Logística</h3>
                <span className="text-netflix-red text-sm">2020 - 2022</span>
              </div>
              <h4 className="text-gray-300 mb-3">Grupo Pão de Açucar</h4>
              <p className="text-gray-400">
                Coordenei uma equipe de Líderes, implementando processos operacionais e práticas de mentoria. Focado em melhorar a produtividade e qualidade das entregas através de gestão eficiente de pessoas.
              </p>
            </div>
            
            <div className="bg-netflix-dark-gray p-6 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-white">Gerente de Logística</h3>
                <span className="text-netflix-red text-sm">2009 - 2011</span>
              </div>
              <h4 className="text-gray-300 mb-3">Zangirolami ltda</h4>
              <p className="text-gray-400">
                Atuei Elaboração de projetos, entrada e saída de mercadoria revisionamento do CD, Melhoria no gerenciamento da equipe de trabalho e otimização do esforço/tempo..
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>;
};
export default AboutPage;
