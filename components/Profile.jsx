import React from 'react';
import ReactDOM from 'react-dom';
import ProfilePic from './ProfilePic.jsx';
import ProfileInfo from './ProfileInfo.jsx';


class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="profile">
        <div className="background">
          <ProfilePic/>
          <ProfileInfo/>
        </div>
      </div>
    );
  }
}

export default Profile;