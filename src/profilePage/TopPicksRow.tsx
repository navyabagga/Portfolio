import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopPicksRow.css';
import { FaCode, FaBriefcase, FaEnvelope, FaHeart } from 'react-icons/fa';
import guitarImg from '../images/guitar.jpg';
import sunsetRoadImg from '../images/sunset road.jpg';
// import libraryImg from '../images/library.jpg';
import lightHouseImg from '../images/light house.jpeg';
import backyardImg from '../images/backyard.jpg';

type ProfileType = 'recruiter' | 'developer' | 'stalker';

interface TopPicksRowProps {
  profile: ProfileType;
}

const topPicksConfig = {
  recruiter: [
    { title: "Skills", imgSrc: guitarImg, icon: <FaCode />, route: "/skills" },
    { title: "Experience", imgSrc: sunsetRoadImg, icon: <FaBriefcase />, route: "/work-experience" },
    // { title: "Certifications", imgSrc: libraryImg, icon: <FaCertificate />, route: "/certifications" },
    { title: "Hobbies", imgSrc: backyardImg, icon: <FaHeart />, route: "/hobbies" },
    { title: "Contact Me", imgSrc: lightHouseImg, icon: <FaEnvelope />, route: "/contact-me" }
  ],
  developer: [
    { title: "Skills", imgSrc: guitarImg, icon: <FaCode />, route: "/skills" },
    { title: "Experience", imgSrc: sunsetRoadImg, icon: <FaBriefcase />, route: "/work-experience" },
    // { title: "Certifications", imgSrc: libraryImg, icon: <FaCertificate />, route: "/certifications" },
    { title: "Hobbies", imgSrc: backyardImg, icon: <FaHeart />, route: "/hobbies" },
    { title: "Contact Me", imgSrc: lightHouseImg, icon: <FaEnvelope />, route: "/contact-me" }
  ],
  stalker: [
    { title: "Skills", imgSrc: guitarImg, icon: <FaCode />, route: "/skills" },
    { title: "Experience", imgSrc: sunsetRoadImg, icon: <FaBriefcase />, route: "/work-experience" },
    // { title: "Certifications", imgSrc: libraryImg, icon: <FaCertificate />, route: "/certifications" },
    { title: "Hobbies", imgSrc: backyardImg, icon: <FaHeart />, route: "/hobbies" },
    { title: "Contact Me", imgSrc: lightHouseImg, icon: <FaEnvelope />, route: "/contact-me" }
  ],
};


const TopPicksRow: React.FC<TopPicksRowProps> = ({ profile }) => {
  const navigate = useNavigate();
  const topPicks = topPicksConfig[profile];

  return (
    <div className="top-picks-row">
      <h2 className="row-title">Today's Top Picks for {profile}</h2>
      <div className="card-row">
      {topPicks.map((pick, index) => (
          <div 
            key={index} 
            className="pick-card" 
            onClick={() => navigate(pick.route)}
            style={{ animationDelay: `${index * 0.2}s` }} // Adding delay based on index
          >
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" loading="lazy" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicksRow;
