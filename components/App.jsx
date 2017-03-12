import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import Profile from './Profile.jsx'
import ResultPage from './ResultPage.jsx';
import Profile from './Profile.jsx';
import Options from './Options.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'Profile'
    };
    this.navigateToProfile = this.navigateToProfile.bind(this);
    this.navigateToResults = this.navigateToResults.bind(this);
  }

  navigateToProfile(e) {
    this.setState({current: 'Profile'});
  }

  navigateToResults(e) {
    this.setState({current: 'Results'});
  }

  render() {
        {if (this.state.current === 'Profile') {
          return <Profile navigateToResults={this.navigateToResults}/>
        } else if (this.state.current === 'Results') {
          return <ResultPage navigateToProfile={this.navigateToProfile}/>
        }
      }
  }
}

export default App;
