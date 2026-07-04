import React from 'react';
import './ProfileCard.css';
import placeholder from '../images/placeholder.svg';

interface ProfileCardProps {
  name: string;
  image: string;
  onClick: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, image, onClick }) => {
  return (
    <div className="profile-card" onClick={onClick}>
      <div className="image-container">
        <img src={image || placeholder} alt={`${name} profile`} className="profile-image" onError={e => { (e.target as HTMLImageElement).src = placeholder; }} />
      </div>
      <h3 className="profile-name">{name}</h3>
    </div>
  );
};

export default ProfileCard;
