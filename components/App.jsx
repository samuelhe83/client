import React from 'react';
import ReactDOM from 'react-dom';
import ResultPage from './ResultPage.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ResultPage />
      </div>
    );
  }
}

export default App;
