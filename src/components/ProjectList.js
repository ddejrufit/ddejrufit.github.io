import React from 'react';
import './ProjectList.css'; 
import Button from 'react-bootstrap/Button';


function ProjectItem({ project }) {
  return (
    <div className="project-item">
      {project.imageUrl && <img src={project.imageUrl} alt={project.title} className="project-image" />}
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-techstacks">
        {project.techStacks.map((tech, index) => (
          <span key={index} className="tech-badge">{tech}</span>
        ))}
      </div>
      <div className="project-links">
        <Button href={project.githubUrl} variant="secondary" target="_blank" rel="noopener noreferrer">GitHub</Button>
        {project.deployUrl && <Button href={project.deployUrl} target="_blank" rel="noopener noreferrer">Demo</Button>}
      </div>
    </div>
  );
}


function ProjectList({ projects }) { 
  return (
    <div className="project-list">
      {projects.map(project => (
        <ProjectItem key={project.id} project={project} /> 
      ))}
    </div>
  );
}

export default ProjectList;