import React from 'react';
import ResultOption from './ResultOption.jsx';
import RestaurantProfile from './RestaurantProfile.jsx';

class ResultContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      current: 'List',
      clickedProfile: {}
    }
    this.restaurants = [{
          name: 'Town',
          seats: 12,
          image: 'http://i.imgur.com/86LWno8.jpg',
          diet: 'Vegan'

        },
        {
          name: 'Madera - Rosewood',
          seats: 8,
          image: 'http://i.imgur.com/BUe9XTk.jpg',
          diet: 'Vegan'

        },
        {
          name: 'Evvia',
          seats: 4,
          image: 'http://i.imgur.com/a6TLfSa.jpg',
          diet: 'Vegan'

        },
        {
          name: 'Il Fornanio',
          seats: 11,
          image: 'http://i.imgur.com/KuwabnM.jpg',
          diet: 'Vegan'

        },
        {
          name: 'Chieftan',
          seats: 10,
          image: 'http://i.imgur.com/EPqtp24.jpg',
          diet: 'Keto'
        },
        {
          name: 'Sam\'s Chowder House',
          seats: 3,
          image: 'http://i.imgur.com/zFjoNFM.jpg',
          diet: 'Keto'

        },
        {
          name: 'The Village Pub',
          seats: 7,
          image: 'http://i.imgur.com/1DuM02o.jpg',
          diet: 'Keto'
        },
        {
          name: 'Scratch',
          seats: 6,
          image: 'http://i.imgur.com/HBZi7yi.jpg',
          diet: 'Keto'
        },
        {
          name: 'Reposado Restaurant',
          seats: 8,
          image: 'http://i.imgur.com/hgfSDsm.jpg',
          diet: 'Keto'
        },
        {
          name: 'Benihana',
          seats: 11,
          image: 'http://i.imgur.com/uyYP60B.jpg',
          diet: 'Keto'
        },
      ];

    this.handleRestaurantClick = this.handleRestaurantClick.bind(this);
  }

  handleRestaurantClick(e, config) {
    this.setState({current: 'Profile', clickedProfile: config});
  }

  render() {
    if (this.state.current === 'List') {
        return (
          <div className="ResultContainer">
            {this.restaurants.map(function(restaurant, index) {
              return <ResultOption  click={this.handleRestaurantClick} value={restaurant} key={index}/>;
            }.bind(this))}
          </div>
        )
      } else if (this.state.current === 'Profile') {
        return (<RestaurantProfile config={this.state.clickedProfile} />)
      }
    }

}

module.exports = ResultContainer;