import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import Profile from './Profile.jsx'
import ResultPage from './ResultPage.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'Profile',
      restaurants: [],
      restrictions: []
    };
    this.navigateToProfile = this.navigateToProfile.bind(this);
    this.navigateToResults = this.navigateToResults.bind(this);
  }



  navigateToProfile(e) {
    this.setState({current: 'Profile'});
  }

  navigateToResults(e, config) {
    console.log(config, 'in config');


    this.setState({current: 'Results', restrictions: config.restrictions});
  }



  render() {
        {if (this.state.current === 'Profile') {
          return <Profile navigateToResults={this.navigateToResults}/>
        } else if (this.state.current === 'Results') {
          return <ResultPage navigateToProfile={this.navigateToProfile} restrictions={this.state.restrictions}/>
        }
      }
  }
}

export default App;
