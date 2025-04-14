
import { useState } from 'react';

interface ProjectCardProps {
  imageUrl: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

const ProjectCard = ({ imageUrl, title, description, tags, link }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="netflix-card min-w-[280px] md:min-w-[320px] h-[180px] md:h-[180px] flex-shrink-0 relative overflow-hidden rounded-md shadow-lg transition-all duration-300 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
    >
      <div 
        className="w-full h-full bg-cover bg-center transition-transform duration-300"
        style={{ 
          backgroundImage: `url(${imageUrl})`,
          filter: isHovered ? 'brightness(30%)' : 'brightness(80%)',
          transition: 'filter 0.3s ease-in-out'
        }}
      />
      <div className={`absolute inset-0 p-4 flex flex-col justify-between transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <h3 className="font-bold text-lg text-white">{title}</h3>
        <div>
          <p className="text-sm text-gray-300 line-clamp-2 mb-2">{description}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.slice(0, 3).map((tag, index) => (
              <span key={index} className="text-xs px-2 py-1 bg-netflix-medium-gray rounded-full">{tag}</span>
            ))}
            {tags.length > 3 && (
              <span className="text-xs px-2 py-1 bg-netflix-medium-gray rounded-full">+{tags.length - 3}</span>
            )}
          </div>
          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-3 text-netflix-red text-sm font-medium inline-block hover:underline"
            >
              Ver Projeto
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
