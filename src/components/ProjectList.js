import React from 'react';
import './ProjectList.css'; // 스타일을 위한 CSS 파일

// 각 프로젝트 아이템을 보여줄 컴포넌트 (선택 사항, ProjectList 안에 바로 구현해도 됨)
function ProjectItem({ project }) {
  return (
    <div className="project-item">
      {project.imageUrl && <img src={project.imageUrl} alt={project.title} className="project-image" />}
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-techstacks">
        {project.techStacks.map((tech, index) => (
          <span key={index} className="tech-badge">{tech}</span> // 기술 스택 뱃지 스타일링 필요
        ))}
      </div>
      <div className="project-links">
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
        {project.deployUrl && <a href={project.deployUrl} target="_blank" rel="noopener noreferrer">Demo</a>}
      </div>
    </div>
  );
}

// 프로젝트 목록 전체를 보여줄 컴포넌트
function ProjectList({ projects }) { // 부모로부터 projects 데이터를 props로 받음
  return (
    <div className="project-list">
      {projects.map(project => (
        <ProjectItem key={project.id} project={project} /> // 각 프로젝트 정보를 ProjectItem 컴포넌트에 전달
      ))}
    </div>
  );
}

export default ProjectList;