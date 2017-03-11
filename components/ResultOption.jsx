import React from 'react';

class ResultOption extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ResultOption">
        <div className="RestaurantAvatar">
          <img src="./fakeRestaurant.jpg"></img>
        </div>
        <div className="RestaurantInfo">
<<<<<<< HEAD
          <div className="RestaurantName restaurant">
=======
          <div className="RestaurantName">
>>>>>>> outline basic Results page and components
            {this.props.value.name}
          </div>

          <div className="RestaurantHours">
<<<<<<< HEAD
            <div className="RestaurantOpen restaurant">
              Open: {this.props.value.hours[0]}
            </div>
            <div className="RestaurantClose restaurant">
=======
            <div className="RestaurantOpen">
              Open: {this.props.value.hours[0]}
            </div>
            <div className="RestaurantClose">
>>>>>>> outline basic Results page and components
              Close: {this.props.value.hours[1]}
            </div>
          </div>

<<<<<<< HEAD
          <div className="RestaurantRating restaurant">
=======
          <div className="RestaurantRating">
>>>>>>> outline basic Results page and components
            {this.props.value.rating}
          </div>

          <div className="RestaurantTags">
            {this.props.value.tags.map(function(tag, index) {
              return <li key={index}>{tag}</li>
            })}
          </div>
        </div>

      </div>
    )
  }

}

module.exports = ResultOption;