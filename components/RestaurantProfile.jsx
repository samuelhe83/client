import React from 'react';
import Menu from './Menu.jsx';

class RestaurantProfile extends React.Component {
  constructor(props) {
    super(props);
    this.menu = [
      {
        name: 'Mac and Cheese',
        ingredients: ['cheese', 'macaroni', 'butter']
      },
      {
        name: 'Bread Pudding',
        ingredients: ['bread', 'milk', 'butter', 'raisins']
      },
      {
        name: 'Caesar Salad',
        ingredients: ['cheese', 'tomatoes', 'lettuce', 'caesar dressing']
      },
      {
        name: 'Creamy Cheesy La Brea Garlic Bread',
        ingredients: ['cheese', 'bread', 'butter']
      }
    ]
  }

  //ComponentDidMount




  render() {
    return (
      <div>
        <div>{this.props.config.name}</div>
        <div>{this.props.config.seats} seats available!</div>
        <img src={this.props.config.image} />
        <Menu menu={this.menu} />
      </div>
    )
  }
}

export default RestaurantProfile;