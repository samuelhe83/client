import React from 'react';
import ResultOption from './ResultOption.jsx'

class ResultContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var restaurants = [
        {
          name: 'Town',
          seats: 12,
          image: 'http://i.imgur.com/86LWno8.jpg'
        },
        {
          name: 'Madera - Rosewood',
          seats: 8,
          image: 'http://i.imgur.com/BUe9XTk.jpg'
        },
        {
          name: 'Evvia',
          seats: 4,
          image: 'http://i.imgur.com/a6TLfSa.jpg'
        },
        {
          name: 'Il Fornanio',
          seats: 11,
          image: 'http://i.imgur.com/KuwabnM.jpg'
        },
        {
          name: 'Chieftan',
          seats: 10,
          image: 'http://i.imgur.com/EPqtp24.jpg'
        },
        {
          name: 'Sam\'s Chowder House',
          seats: 3,
          image: 'http://i.imgur.com/zFjoNFM.jpg'
        },
        {
          name: 'The Village Pub',
          seats: 7,
          image: 'http://i.imgur.com/1DuM02o.jpg'
        },
        {
          name: 'Scratch',
          seats: 6,
          image: 'http://i.imgur.com/HBZi7yi.jpg'
        },
        {
          name: 'Reposado Restaurant',
          seats: 8,
          image: 'http://i.imgur.com/hgfSDsm.jpg'
        },
        {
          name: 'Benihana',
          seats: 11,
          image: 'http://i.imgur.com/uyYP60B.jpg'
        },
      ];
    return (
      <div className="ResultContainer">
        {restaurants.map(function(restaurant, index) {
          return <ResultOption value={restaurant} key={index}/>;
        })}
      </div>
    )
  }

}

module.exports = ResultContainer;