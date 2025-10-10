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
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)',
          maskImage: 'linear-gradient(to bottom, black 0%, black 82%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 82%, transparent 100%)'
        }}
      />
      
      {/* Text overlay */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 lg:px-32">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 leading-tight">
          Desenvolvedor Full-Stack e Logístico
        </h1>
        <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-netflix-red mb-6">
          Criando Experiências Digitais espetaculares
        </p>
        <p className="text-white text-lg md:text-xl lg:max-w-2xl mb-8 opacity-80">
          Eu crio sites e aplicativos impressionantes que combinam design bonito com funcionalidade impecável.
          Especializado em React, TypeScript e tecnologias web modernas. Sou profissional em Logística Empresarial
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
        viewBox="0 0 1920 200" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ height: '72px' }}
      >
        <defs>
          <linearGradient id="curveFill" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#050505" />
            <stop offset="35%" stopColor="#0A1E3F" stopOpacity="0.45" />
            <stop offset="50%" stopColor="#1E3A8A" stopOpacity="0.6" />
            <stop offset="65%" stopColor="#0A1E3F" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#050505" />
          </linearGradient>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E50914" />
            <stop offset="25%" stopColor="#DB2777" />
            <stop offset="50%" stopColor="#9333EA" />
            <stop offset="75%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
        <path 
          d="M0 136 Q960 32 1920 136 L1920 200 L0 200 Z" 
          fill="url(#curveFill)"
        />
        <path 
          d="M0 130 Q960 6 1920 130 L1920 136 Q960 32 0 136 Z" 
          fill="url(#gradient)"
        />
      </svg>
    </section>
  );
};

export default Hero;
