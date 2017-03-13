import React from 'react';

class MenuListEntry extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <div> {this.props.item.name} </div>
        <div> Ingredients: {this.props.item.ingredients.toString()} </div>
      </div>
    )
  }
}

export default MenuListEntry;