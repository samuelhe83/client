import React from 'react';
import ReactDOM from 'react-dom';


class ProfileInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="info">
        <div className="name">Cindy Cheung</div>
        <div className="points">Points</div>
        <div className="points">Your points: 10000000000 PTS</div>
      </div>
    );
  }
}

export default ProfileInfo;