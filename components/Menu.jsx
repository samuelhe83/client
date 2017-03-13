import React from 'react';
import MenuListEntry from './MenuListEntry.jsx';

class Menu extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    console.log(this.props);
    return(
      <div>
        {this.props.menu.map((menuItem) => {
          return <MenuListEntry item={menuItem} />
        })}
      </div>
    )
  }
}
export default Menu;