import React from 'react';

class ResultOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    var config = {
      name: this.props.value.name,
      image: this.props.value.image,
      seats: this.props.value.seats
    }

    this.props.click(e, config);

  }

  render() {
    return (
      <div className="ResultOption">
        <div className="RestaurantAvatar">
          <img src={this.props.value.image} onClick={this.handleClick}></img>
        </div>
        <div className="RestaurantInfo">
          <div className="RestaurantName restaurant">
            {this.props.value.name}
          </div>
        </div>
        <div className="RestaurantInfo">
          <div className="RestaurantSeats restaurant">
            {this.props.value.seats} chairs available!
          </div>
        </div>
      </div>
    )
  }

}

module.exports = ResultOption;