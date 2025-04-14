
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useProjectsData } from '@/hooks/useProjectsData';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, Award, Star, ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedProjects = () => {
  const { webProjects, mobileProjects, designProjects, isLoading } = useProjectsData();
  
  // Combine all projects and filter featured ones (using first 6 for demo purposes)
  const allProjects = [...webProjects, ...mobileProjects, ...designProjects];
  const featuredProjects = allProjects.slice(0, 6);

  return (
    <div className="bg-gradient-to-b from-netflix-black to-netflix-dark-gray min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-20 container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 text-center">
          <span className="text-netflix-red font-semibold mb-3 flex items-center">
            <Award className="mr-2" size={20} />
            PROJETOS SELECIONADOS
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Projetos em Destaque
          </h1>
          <p className="text-gray-300 max-w-2xl">
            Uma seleção dos meus melhores e mais recentes trabalhos, demonstrando minhas habilidades
            em design, desenvolvimento web e mobile.
          </p>
        </div>
        
        {/* Hero Featured Project */}
        {featuredProjects.length > 0 && (
          <div className="mb-24 overflow-hidden rounded-xl group relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-70 z-10"></div>
            <img 
              src={featuredProjects[0].imageUrl} 
              alt={featuredProjects[0].title}
              className="w-full h-[500px] object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
              <div className="flex items-center mb-3">
                <Star className="text-yellow-400 mr-2" size={20} />
                <span className="text-yellow-400 font-medium">Projeto Principal</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{featuredProjects[0].title}</h2>
              <p className="text-gray-200 mb-4 max-w-2xl">{featuredProjects[0].description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {featuredProjects[0].tags.map((tag, index) => (
                  <span key={index} className="bg-netflix-red/80 text-white text-sm px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <a 
                href={featuredProjects[0].link || "#"} 
                className="inline-flex items-center bg-netflix-red hover:bg-netflix-dark-red text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Ver Projeto <ExternalLink className="ml-2" size={16} />
              </a>
            </div>
          </div>
        )}
        
        {/* Carousel of Featured Projects */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Outros Projetos Destaques</h2>
          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {featuredProjects.slice(1).map((project) => (
                <CarouselItem key={project.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-netflix-dark-gray border-netflix-medium-gray hover:border-netflix-red transition-colors duration-300 overflow-hidden group">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={project.imageUrl} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-white">{project.title}</CardTitle>
                      <CardDescription className="text-gray-300 line-clamp-2">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {project.tags.slice(0, 3).map((tag, index) => (
                          <span key={index} className="bg-netflix-medium-gray text-gray-200 text-xs px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="text-gray-400 text-xs px-2 py-1">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <a 
                        href={project.link || "#"} 
                        className="text-netflix-red hover:text-white transition-colors flex items-center"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Ver projeto <ChevronRight size={16} className="ml-1" />
                      </a>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="bg-netflix-red/80 hover:bg-netflix-red text-white border-none" />
              <CarouselNext className="bg-netflix-red/80 hover:bg-netflix-red text-white border-none" />
            </div>
          </Carousel>
        </div>
        
        {/* Call to action */}
        <div className="bg-gradient-to-r from-netflix-dark-red to-netflix-red p-8 md:p-12 rounded-xl flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Quer ver mais projetos?</h3>
            <p className="text-white/80">Explore meu portfólio completo e descubra mais sobre meu trabalho.</p>
          </div>
          <Link to="/projects" className="mt-4 md:mt-0 bg-white hover:bg-gray-200 text-netflix-dark-red font-medium py-3 px-6 rounded-md transition-colors duration-300">
            Ver Todos os Projetos
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FeaturedProjects;
