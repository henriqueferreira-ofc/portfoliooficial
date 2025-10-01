
import ProjectCard from './ProjectCard';
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

interface ProjectRowProps {
  title: string;
  projects: Project[];
}

const ProjectRow = ({ title, projects }: ProjectRowProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [autoScroll, setAutoScroll] = useState(true);

  // Verificar se os projetos são visíveis no carregamento inicial
  useEffect(() => {
    if (scrollContainerRef.current) {
      const { scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowRightArrow(scrollWidth > clientWidth);
    }
  }, [projects]);

  // Carrossel automático estilo Netflix
  useEffect(() => {
    if (!autoScroll || !scrollContainerRef.current) return;

    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const { scrollLeft, scrollWidth, clientWidth } = container;
        
        if (scrollLeft + clientWidth >= scrollWidth) {
          // Volta ao início quando chega ao fim
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Avança um projeto
          container.scrollBy({ left: 320, behavior: 'smooth' });
        }
      }
    }, 3000); // Muda a cada 3 segundos

    return () => clearInterval(interval);
  }, [autoScroll, projects]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth * 0.8;
      
      if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
      
      // Check scroll position after animation
      setTimeout(() => {
        if (scrollContainerRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
          setShowLeftArrow(scrollLeft > 0);
          setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 5);
        }
      }, 300);
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  if (projects.length === 0) {
    return null;
  }

  return (
    <div className="mb-12 relative">
      <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
      
      <div className="relative group">
        {showLeftArrow && (
          <button 
            onClick={() => scroll('left')} 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Rolar para a esquerda"
          >
            <ChevronLeft size={24} />
          </button>
        )}
        
        <div 
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide" 
          onScroll={handleScroll}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              imageUrl={project.imageUrl}
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
            />
          ))}
        </div>
        
        {showRightArrow && (
          <button 
            onClick={() => scroll('right')} 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transform translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Rolar para a direita"
          >
            <ChevronRight size={24} />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectRow;
