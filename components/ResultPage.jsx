import React from 'react';
import CurrentFilterBar from './CurrentFilterBar.jsx';
import ResultContainer from './ResultContainer.jsx';

class ResultPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <CurrentFilterBar />
        <ResultContainer />
      </div>
    )
  }

}

module.exports = ResultPage;