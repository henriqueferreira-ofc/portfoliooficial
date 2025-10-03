import { Play, MessageSquare, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative h-screen">
      {/* Hero background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)' 
        }}
      />
      
      {/* Text overlay */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 lg:px-32">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 leading-tight">
          Desenvolvedor Criativo
        </h1>
        <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-netflix-red mb-6">
          Criando Experiências Digitais
        </p>
        <p className="text-white text-lg md:text-xl lg:max-w-2xl mb-8 opacity-80">
          Eu crio sites e aplicativos impressionantes que combinam design bonito com funcionalidade impecável.
          Especializado em React, TypeScript e tecnologias web modernas.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <Link 
            to="/featured-projects"
            className="flex items-center gap-2 bg-netflix-red hover:bg-netflix-dark-red text-white py-2 px-6 rounded transition-colors duration-300 font-medium"
          >
            <Play size={20} />
            Projeto em Destaque
          </Link>
          <Link 
            to="/contact"
            className="flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 text-white py-2 px-6 rounded transition-colors duration-300 font-medium"
          >
            <MessageSquare size={20} />
            Contate-me
          </Link>
          <a 
            href="https://github.com/henriqueferreira-ofc" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 text-white py-2 px-6 rounded transition-colors duration-300 font-medium"
          >
            <Github size={20} />
            GitHub
          </a>
        </div>
      </div>

      {/* Red curved line at bottom */}
      <svg 
        className="absolute bottom-0 left-0 w-full z-10" 
        viewBox="0 0 1920 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ height: '25px' }}
      >
        <path 
          d="M0 20 Q480 0 960 20 T1920 20 L1920 40 L0 40 Z" 
          fill="#E50914"
        />
      </svg>
    </section>
  );
};

export default Hero;
