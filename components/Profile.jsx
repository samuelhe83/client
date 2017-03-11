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
<<<<<<< HEAD
        <div className="background">
          <ProfilePic/>
          <ProfileInfo/>
        </div>
=======
        <ProfilePic/>
        <ProfileInfo/>
>>>>>>> profile componenets and styling setup
      </div>
    );
  }
}

export default Profile;