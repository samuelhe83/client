import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './Profile.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Profile />
      </div>
    );
  }
}

export default App;
