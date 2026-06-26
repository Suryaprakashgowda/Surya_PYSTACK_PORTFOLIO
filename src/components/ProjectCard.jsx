import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="v-card">          
      <div className="card-image-box">
        <img src={project.image} alt={`${project.title} cover`} />
      </div>

      <div className="card-details">
        <h3>{project.title}</h3>

        <p className="card-description">{project.description}</p>
        
        {/* Simple text rendering of languages with no anchor tags */}
        {project.languages && (
          <p className="card-tech-text">
            {project.languages.join(' • ')}
          </p>
        )}

        <div className="card-action-bar">
          {project.tag && (
            <span className="status-pill">{project.tag}</span>
          )}
          
          <div className="card-nav-links">
            {project.sourceCode && (
              <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">Code</a>
            )}
            {project.liveDemo && (
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">Demo</a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;