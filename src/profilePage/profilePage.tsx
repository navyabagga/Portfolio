import React from 'react';
import { useParams } from 'react-router-dom';
import './ProfilePage.css';
import backgroundImage from '../images/mountains.jpg';

import ProfileBanner from './ProfileBanner';
import TopPicksRow from './TopPicksRow';
import ContinueWatching from './ContinueWatching';
type ProfileType = 'recruiter' | 'developer' | 'stalker';

const ProfilePage: React.FC = () => {
  const { profileName } = useParams<{ profileName: string }>();

  const profile = ['recruiter', 'developer', 'stalker'].includes(profileName!)
    ? (profileName as ProfileType)
    : 'recruiter'; // adventurer and any unknown profile fall back to recruiter
  return (
    <>
      <div
        className="profile-page"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <ProfileBanner
        />
      </div>
      <TopPicksRow profile={profile} />
      {profileName !== 'adventurer' && <ContinueWatching profile={profile} />}
    </>
  );
};

export default ProfilePage;
