
import { useState } from 'react';
import ProjectModal from './ProjectModal';

interface ProjectCardProps {
  imageUrl: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

const ProjectCard = ({ imageUrl, title, description, tags, link }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        className="netflix-card w-full h-[180px] md:h-[200px] relative overflow-hidden rounded-md shadow-lg transition-all duration-300 ease-in-out cursor-pointer hover:scale-105"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsModalOpen(true)}
      >
        <div 
          className="w-full h-full bg-cover bg-center transition-all duration-300"
          style={{ 
            backgroundImage: `url(${imageUrl})`,
            filter: isHovered ? 'brightness(60%)' : 'brightness(80%)',
          }}
        />
        <div className={`absolute inset-0 p-4 flex flex-col justify-end transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <h3 className="font-bold text-lg text-white drop-shadow-lg">{title}</h3>
        </div>
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageUrl={imageUrl}
        title={title}
        description={description}
        tags={tags}
        link={link}
      />
    </>
  );
};

export default ProjectCard;
