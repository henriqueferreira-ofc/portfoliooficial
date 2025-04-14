
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useProjectsData } from '@/hooks/useProjectsData';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, Award, Star, ExternalLink, Github, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from "sonner";

const FeaturedProjects = () => {
  const { webProjects, mobileProjects, designProjects, isLoading } = useProjectsData();
  const isMobile = useIsMobile();
  
  // Combine all projects and filter featured ones (using first 6 for demo purposes)
  const allProjects = [...webProjects, ...mobileProjects, ...designProjects];
  const [featuredProjects, setFeaturedProjects] = useState(allProjects.slice(0, 6));

  // Set the first project as the main featured one initially
  const [mainFeaturedProject, setMainFeaturedProject] = useState(featuredProjects[0]);
  
  // Function to promote a project to main feature
  const promoteToMainFeature = (project) => {
    // Find current index of the project
    const currentIndex = featuredProjects.findIndex(p => p.id === project.id);
    
    if (currentIndex === -1) return;
    
    // Set the clicked project as the main featured project
    setMainFeaturedProject(project);
    
    // Show success message
    toast.success(`${project.title} agora é o projeto em destaque principal!`);
  };

  // Determine basis for carousel items based on screen size
  const getCarouselItemBasis = () => {
    if (isMobile) {
      return "basis-full"; // Full width on mobile
    } else {
      return "md:basis-1/2 lg:basis-1/3"; // Half width on tablet, one-third on desktop
    }
  };

  return (
    <div className="bg-gradient-to-b from-netflix-black to-netflix-dark-gray min-h-screen">
      <Navbar />
      
      <div className="pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-20 container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-8 md:mb-12 text-center">
          <span className="text-netflix-red font-semibold mb-2 md:mb-3 flex items-center text-sm md:text-base">
            <Award className="mr-2" size={isMobile ? 16 : 20} />
            PROJETOS SELECIONADOS
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Projetos em Destaque
          </h1>
          <p className="text-gray-300 max-w-2xl text-sm md:text-base lg:text-lg">
            Uma seleção dos meus melhores e mais recentes trabalhos, demonstrando minhas habilidades
            em design, desenvolvimento web e mobile.
          </p>
        </div>
        
        {/* Hero Featured Project - Responsive */}
        {mainFeaturedProject && (
          <div className="mb-12 md:mb-16 lg:mb-24 overflow-hidden rounded-lg md:rounded-xl group relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-70 z-10"></div>
            <img 
              src={mainFeaturedProject.imageUrl} 
              alt={mainFeaturedProject.title}
              className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-8 z-20">
              <div className="flex items-center mb-2 md:mb-3">
                <Star className="text-yellow-400 mr-2" size={isMobile ? 16 : 20} />
                <span className="text-yellow-400 font-medium text-sm md:text-base">Projeto Principal</span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-3">{mainFeaturedProject.title}</h2>
              <p className="text-gray-200 mb-3 md:mb-4 max-w-2xl text-sm md:text-base line-clamp-2 md:line-clamp-3">{mainFeaturedProject.description}</p>
              <div className="flex flex-wrap gap-1 md:gap-2 mb-4 md:mb-6">
                {mainFeaturedProject.tags.map((tag, index) => (
                  <span key={index} className="bg-netflix-red/80 text-white text-xs md:text-sm px-2 md:px-3 py-0.5 md:py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <a 
                href={mainFeaturedProject.link || "#"} 
                className="inline-flex items-center bg-netflix-red hover:bg-netflix-dark-red text-white font-medium py-2 md:py-3 px-4 md:px-6 rounded-md transition-colors duration-300 text-sm md:text-base"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Ver Projeto <ExternalLink className="ml-2" size={isMobile ? 14 : 16} />
              </a>
            </div>
          </div>
        )}
        
        {/* Carousel of Featured Projects - Responsive */}
        <div className="mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Outros Projetos Destaques</h2>
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {featuredProjects.filter(project => project.id !== mainFeaturedProject?.id).map((project) => (
                <CarouselItem key={project.id} className={`pl-2 md:pl-4 ${getCarouselItemBasis()}`}>
                  <Card className="bg-netflix-dark-gray border-netflix-medium-gray hover:border-netflix-red transition-colors duration-300 overflow-hidden group relative">
                    <div className="h-36 md:h-48 overflow-hidden">
                      <img 
                        src={project.imageUrl} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute top-2 right-2">
                      <button 
                        onClick={() => promoteToMainFeature(project)}
                        className="bg-netflix-red/80 hover:bg-netflix-red text-white p-1.5 md:p-2 rounded-full transition-colors"
                        title="Promover para destaque principal"
                      >
                        <ArrowUp size={isMobile ? 14 : 16} />
                      </button>
                    </div>
                    <CardHeader className="p-3 md:p-4 lg:p-6">
                      <CardTitle className="text-white text-base md:text-lg lg:text-xl">{project.title}</CardTitle>
                      <CardDescription className="text-gray-300 text-xs md:text-sm line-clamp-2">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-3 md:p-4 lg:p-6 pt-0">
                      <div className="flex flex-wrap gap-1 mt-2">
                        {project.tags.slice(0, 3).map((tag, index) => (
                          <span key={index} className="bg-netflix-medium-gray text-gray-200 text-xs px-2 py-0.5 rounded">
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="text-gray-400 text-xs px-2 py-0.5">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between p-3 md:p-4 lg:p-6 pt-0">
                      <a 
                        href={project.link || "#"} 
                        className="text-netflix-red hover:text-white transition-colors flex items-center text-xs md:text-sm"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Ver projeto <ChevronRight size={14} className="ml-1" />
                      </a>
                      <button 
                        onClick={() => promoteToMainFeature(project)}
                        className="text-netflix-red hover:text-white transition-colors flex items-center text-xs md:text-sm"
                      >
                        Destacar <ArrowUp size={14} className="ml-1" />
                      </button>
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
        
        {/* Call to action - Responsive */}
        <div className="bg-gradient-to-r from-netflix-dark-red to-netflix-red p-4 md:p-8 lg:p-12 rounded-lg md:rounded-xl flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 text-center md:text-left">Quer ver mais projetos?</h3>
            <p className="text-white/80 text-sm md:text-base text-center md:text-left">Explore meu portfólio completo e descubra mais sobre meu trabalho.</p>
          </div>
          <Link to="/projects" className="mt-4 md:mt-0 bg-white hover:bg-gray-200 text-netflix-dark-red font-medium py-2 md:py-3 px-4 md:px-6 rounded-md transition-colors duration-300 text-sm md:text-base">
            Ver Todos os Projetos
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FeaturedProjects;
