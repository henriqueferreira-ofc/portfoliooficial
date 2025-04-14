
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
      className="netflix-card min-w-[280px] md:min-w-[320px] h-[180px] md:h-[180px] flex-shrink-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="w-full h-full bg-cover bg-center transition-transform duration-300"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className={`netflix-card-info ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm text-gray-300 line-clamp-2 mt-1">{description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <span key={index} className="text-xs px-2 py-1 bg-netflix-medium-gray rounded-full">{tag}</span>
          ))}
        </div>
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-3 text-netflix-red text-sm font-medium inline-block hover:underline"
          >
            View Project
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
