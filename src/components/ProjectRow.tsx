
import ProjectCard from './ProjectCard';

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

  if (projects.length === 0) {
    return null;
  }

  return (
    <section className="mb-12">
      <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">{title}</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
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
    </section>
  );
};

export default ProjectRow;
