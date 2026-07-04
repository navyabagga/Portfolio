import React, { useState } from 'react';
import './NetflixTitle.css';
import netflixSound from './netflix-sound.mp3';
import { useNavigate } from 'react-router-dom';
import logoImage from './images/Navya Bagga Black.png';

const NetflixTitle = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [started, setStarted] = useState(false);
  const navigate = useNavigate();

  const start = () => {
    if (started) return;
    setStarted(true);
    const audio = new Audio(netflixSound);
    audio.play().catch(() => {});

    setTimeout(() => setIsClicked(true), 500);
    setTimeout(() => navigate('/browse'), 3500);
  };

  return (
    <div className="netflix-container" onClick={start}>
      {!started && (
        <div className="click-prompt">Click anywhere to begin</div>
      )}
      <img
        src={logoImage}
        alt="Custom Logo"
        className={`netflix-logo ${isClicked ? 'animate' : ''}`}
      />
    </div>
  );
};

export default NetflixTitle;
