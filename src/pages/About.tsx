
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { supabase } from '@/integrations/supabase/client';
import { toast as sonnerToast } from '@/components/ui/sonner';

interface Tecnologia {
  id: number;
  nome: string;
  descricao: string;
  imagem: string;
  destaque: boolean;
}

const AboutPage = () => {
  const [tecnologias, setTecnologias] = useState<Tecnologia[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTecnologias = async () => {
      try {
        setIsLoading(true);
        
        // Fetch from tecnologias table
        const { data: tecnologiasData, error: tecnologiasError } = await supabase
          .from('tecnologias')
          .select('*');

        if (tecnologiasError) {
          console.error('Erro ao buscar tecnologias:', tecnologiasError);
          sonnerToast("Erro ao carregar tecnologias", {
            description: tecnologiasError.message
          });
        }
        
        // Process tecnologias data if available
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
        <h1 className="text-4xl font-bold text-white mb-8">Sobre Mim</h1>
        
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
              <h2 className="text-2xl font-bold text-white mb-4">Desenvolvedor Full Stack</h2>
              <p className="text-gray-300 mb-4">
                Olá! Sou um desenvolvedor apaixonado por criar experiências digitais incríveis. Com mais de 5 anos de experiência em desenvolvimento web e móvel, meu objetivo é construir aplicações que não apenas funcionem perfeitamente, mas que também sejam intuitivas e agradáveis de usar.
              </p>
              <p className="text-gray-300 mb-4">
                Minha jornada no desenvolvimento começou com HTML, CSS e JavaScript, mas rapidamente expandiu para incluir frameworks modernos como React e React Native. Também tenho experiência significativa com Node.js, MongoDB e SQL para o desenvolvimento de back-end.
              </p>
              <p className="text-gray-300">
                Quando não estou codificando, gosto de explorar novas tecnologias, contribuir para projetos de código aberto e compartilhar conhecimento com a comunidade de desenvolvedores.
              </p>
            </div>
          </div>
        </div>
        
        {/* Seção de Habilidades */}
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
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {['React', 'TypeScript', 'Node.js', 'MongoDB', 'React Native', 'Tailwind CSS'].map((skill, index) => (
                    <div key={index} className="bg-netflix-dark-gray rounded-md p-4 flex flex-col items-center text-center">
                      <div className="w-16 h-16 mb-3 flex items-center justify-center text-netflix-red">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h3 className="text-white font-medium">{skill}</h3>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
        
        {/* Experiência */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Experiência</h2>
          <div className="space-y-6">
            <div className="bg-netflix-dark-gray p-6 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-white">Desenvolvedor Full Stack Senior</h3>
                <span className="text-netflix-red text-sm">2022 - Presente</span>
              </div>
              <h4 className="text-gray-300 mb-3">Empresa Tech Inovação</h4>
              <p className="text-gray-400">
                Lidero o desenvolvimento de aplicações web e móveis usando React, React Native e Node.js. Implemento arquiteturas escaláveis, otimizo performance e mentoro desenvolvedores juniores.
              </p>
            </div>
            
            <div className="bg-netflix-dark-gray p-6 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-white">Desenvolvedor Front-end</h3>
                <span className="text-netflix-red text-sm">2020 - 2022</span>
              </div>
              <h4 className="text-gray-300 mb-3">Agência Digital Criativa</h4>
              <p className="text-gray-400">
                Desenvolvi interfaces de usuário usando React e TypeScript. Colaborei com designers para criar experiências de usuário intuitivas e responsivas.
              </p>
            </div>
            
            <div className="bg-netflix-dark-gray p-6 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-white">Desenvolvedor Web</h3>
                <span className="text-netflix-red text-sm">2018 - 2020</span>
              </div>
              <h4 className="text-gray-300 mb-3">Startup Tech</h4>
              <p className="text-gray-400">
                Trabalhei com HTML, CSS e JavaScript para criar sites responsivos. Integrei APIs e implementei funcionalidades interativas.
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
