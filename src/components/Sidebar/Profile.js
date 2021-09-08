import React from 'react';
import ProfileImage from '../../assets/images/profile1.png';
const Profile = () => {
  return (
    <div className="sidebar__profile d-flex ">
      <div className="img">
        <img src={ProfileImage} alt="profile" />
      </div>
      <div className="profile-desc">
        <h3>Sultan Mahmud</h3>
        <span>React Developer</span>
      </div>
    </div>
  );
};

export default Profile;
