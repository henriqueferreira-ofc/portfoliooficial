
import ProjectCard from './ProjectCard';

interface Project {
  id: number;
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
  return (
    <div className="mb-12">
      <h2 className="netflix-section-title">{title}</h2>
      <div className="netflix-row">
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
    </div>
  );
};

export default ProjectRow;
