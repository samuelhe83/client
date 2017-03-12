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
          <div className="RestaurantName restaurant">
            {this.props.value.name}
          </div>

          <div className="RestaurantHours">
            <div className="RestaurantOpen restaurant">
              Open: {this.props.value.hours[0]}
            </div>
            <div className="RestaurantClose restaurant">
              Close: {this.props.value.hours[1]}
            </div>
          </div>


          <div className="RestaurantRating restaurant">
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