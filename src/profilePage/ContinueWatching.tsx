import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaTimes } from 'react-icons/fa';
import './ContinueWatching.css';
import { Project } from '../types';
import { getProjects } from '../queries/getProjects';
import placeholder from '../images/placeholder.svg';

type ProfileType = 'recruiter' | 'developer' | 'stalker';

interface ContinueWatchingProps {
  profile: ProfileType;
}

interface WatchItem {
  title: string;
  imgSrc: string;
  link: string;
}

const continueWatchingConfig: Record<ProfileType, WatchItem[]> = {
  recruiter: [],
  developer: [],
  stalker: [],
};

const ContinueWatching: React.FC<ContinueWatchingProps> = ({ profile }) => {
  const continueWatching = continueWatchingConfig[profile];
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (profile === 'recruiter' || profile === 'developer') {
      getProjects().then(setProjects);
    }
  }, [profile]);

  if (profile === 'stalker') return null;

  return (
    <div className="continue-watching-row">
      <h2 className="row-title">Continue Watching for {profile}</h2>
      <div className="card-row">
        {continueWatching.map((pick, index) => (
          <Link to={pick.link} key={index} className="pick-card">
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" loading="lazy" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </Link>
        ))}

        {(profile === 'recruiter' || profile === 'developer') && projects.map((project, index) => (
          <div
            key={`project-${index}`}
            className="pick-card project-pick-card"
            onClick={() => setSelectedProject(project)}
          >
            <img src={project.image?.url || placeholder} alt={project.title} className="pick-image" loading="lazy" onError={e => { (e.target as HTMLImageElement).src = placeholder; }} />
            <div className="overlay">
              <div className="pick-label">{project.title}</div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="project-modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="project-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedProject(null)}>
              <FaTimes />
            </button>
            <img src={selectedProject.image?.url || placeholder} alt={selectedProject.title} className="modal-image" onError={e => { (e.target as HTMLImageElement).src = placeholder; }} />
            <div className="modal-content">
              <h2 className="modal-title">{selectedProject.title}</h2>
              <p className="modal-description">
                {selectedProject.description.split('\n').map((line, i) => (
                  <span key={i}>{line}<br /></span>
                ))}
              </p>
              <div className="modal-tech">
                {selectedProject.techUsed.split(', ').map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
              {selectedProject.githubLink && (
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-github-link"
                >
                  <FaGithub /> View on GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContinueWatching;
