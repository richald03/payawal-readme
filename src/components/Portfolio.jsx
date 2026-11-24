import { useCallback, useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import './Portfolio.css';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const closeProject = useCallback(() => setSelectedProject(null), []);

  return (
    <section
      className="portfolio-section"
      id="portfolio"
      aria-labelledby="portfolio-title"
    >
      <header className="portfolio-header">
        <h2 className="portfolio-heading" id="portfolio-title">
          <span className="portfolio-heading-dash" aria-hidden="true" />
          PROJECTS
        </h2>
        <p className="portfolio-subtitle">
          A few projects I’ve built and contributed to.
        </p>
      </header>

      <div className="portfolio-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.number}
            project={project}
            onShowDetails={setSelectedProject}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeProject} />
      )}
    </section>
  );
}
