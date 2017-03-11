import React from 'react';

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restrictions: []
    };
    this.handleRestrictionSubmit = this.handleRestrictionSubmit.bind(this);
    console.log(this.state.restrictions);
  }

  handleRestrictionSubmit(e) {
    var currentRestrictions = this.state.restrictions.slice();
    currentRestrictions.push()
    this.setState({restrictions: this.state.restrictions})
  }

  render() {
    return (
      <div>
        <form>
          <form onSubmit={this.handleRestrictionSubmit}>
            <div> <input type="text" placeholder="Enter Restriction"/> </div>
            <button type="submit" name="restrictions"> Submit</button>
          </form>
          <div><input type="checkbox" /> Gluten Free </div>
          <div> <input type="checkbox" /> Vegan </div>
          <div><input type="checkbox" /> Vegetarian </div>
          <div><input type="checkbox" /> Paleolithic </div>

          <button type="submit" name="restaurants">Search Restaurants</button>
        </form>
      </div>
    );
  }
}

export default Options;