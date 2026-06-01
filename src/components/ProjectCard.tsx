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
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="group relative block w-full h-[220px] sm:h-[190px] md:h-[210px] overflow-hidden rounded-lg cursor-pointer shadow-lg transition-all duration-500 ease-out text-left hover:scale-[1.04] hover:shadow-[0_20px_50px_-12px_rgba(229,9,20,0.55)] hover:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-netflix-red"
        onClick={() => setIsModalOpen(true)}
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Red glow border on hover */}
        <div className="absolute inset-0 rounded-lg ring-0 ring-netflix-red/0 group-hover:ring-2 group-hover:ring-netflix-red/70 transition-all duration-500" />

        {/* Shine sweep effect */}
        <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 p-4 flex flex-col justify-end">
          <h3 className="font-bold text-base md:text-lg text-white drop-shadow-lg translate-y-0 md:translate-y-2 md:group-hover:translate-y-0 transition-transform duration-500 leading-tight">
            {title}
          </h3>
          <div className="flex flex-wrap gap-1.5 mt-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 translate-y-0 md:translate-y-2 md:group-hover:translate-y-0 transition-all duration-500">
            {tags.slice(0, 3).map((tag, i) => (
              <span key={i} className="text-[10px] md:text-xs px-2 py-0.5 rounded-full bg-netflix-red/80 text-white font-semibold uppercase tracking-wide backdrop-blur">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </button>

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
