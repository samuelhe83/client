import React from 'react';
import ResultOption from './ResultOption.jsx'

class ResultContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var results = [
      {
        name: 'mcdonalds',
        hours: [1100, 1800],
        rating: 5,
        tags: ['paleo', 'keto']
      },
      {
        name: 'burger king',
        hours: [700, 1900],
        rating: 4,
        tags: ['atkins', 'fatty']
      },
      {
        name: 'izakaya',
        hours: [1500, 2000],
        rating: 5,
        tags: ['low-carb', 'paleo']
      },
      {
        name: 'sams food',
        hours: [800, 2000],
        rating: 3,
        tags: ['low-carb', 'vegitarian']
      },
    ]
    return (
      <div className="ResultContainer">
        {results.map(function(restaurant, index) {
          return <ResultOption value={restaurant} key={index}/>;
        })}
      </div>
    )
  }

}

module.exports = ResultContainer;