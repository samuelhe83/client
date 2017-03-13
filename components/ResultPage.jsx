import React from 'react';
import CurrentFilterBar from './CurrentFilterBar.jsx';
import ResultContainer from './ResultContainer.jsx';
import axios from 'axios';

class ResultPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: []
    }
  }

  // componentDidMount() {
  //   axios.get('/api/restaurants')
  //   .then(function(restaurantObj) {
  //     this.setState({restaurants: restaurantObj.data});
  //   }.bind(this))
  //   .catch(function(err) {
  //     if (err) {
  //       console.log(err);
  //     }
  //   });
  // }

  render() {
    return (
      <div>
        <CurrentFilterBar navigateToProfile={this.props.navigateToProfile}/>
        <ResultContainer restaurants={this.state.restaurants} restrictions={this.props.restrictions}/>
      </div>
    )
  }

}

module.exports = ResultPage;