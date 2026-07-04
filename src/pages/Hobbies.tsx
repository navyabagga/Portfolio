import React from 'react';
import './Hobbies.css';
import { FaMusic, FaBook, FaTableTennis, FaPaintBrush, FaPlane, FaMountain, FaDumbbell } from 'react-icons/fa';

const hobbies = [
  { label: 'Listening to Songs', icon: <FaMusic /> },
  { label: 'Reading', icon: <FaBook /> },
  { label: 'Badminton', icon: <FaTableTennis /> },
  { label: 'Painting', icon: <FaPaintBrush /> },
  { label: 'Travelling', icon: <FaPlane /> },
  { label: 'Adventure Sports', icon: <FaMountain /> },
  { label: 'Gym', icon: <FaDumbbell /> },
];

const Hobbies: React.FC = () => {
  return (
    <div className="hobbies-container">
      <h2 className="hobbies-title">Hobbies & Interests</h2>
      <div className="hobbies-grid">
        {hobbies.map((hobby, index) => (
          <div className="hobby-card" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="hobby-icon">{hobby.icon}</div>
            <p className="hobby-label">{hobby.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hobbies;
