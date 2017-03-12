import React from 'react';

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restrictions: [],
      newRestriction: ''
    };
    // this.handleRestaurantSubmit = this.handleRestaurantSubmit.bind(this);
    this.handleNewRestriction = this.handleNewRestriction.bind(this);
    this.handleRestrictionChange = this.handleRestrictionChange.bind(this);
    this.handleRestrictionSubmit = this.handleRestrictionSubmit.bind(this);
    // console.log(this.state.restrictions);
  }

  handleNewRestriction(e) {
    e.preventDefault();
    var newRestriction = e.target.value;
    this.setState({newRestriction: newRestriction});

  }

  handleRestrictionSubmit(e) {
    e.preventDefault();
    var currentRestrictions = this.state.restrictions.slice();
    if (currentRestrictions.indexOf(this.state.newRestriction) === -1) {
      currentRestrictions.push(this.state.newRestriction);
    }
    this.setState({restrictions: currentRestrictions});

  }

  handleRestrictionChange(e) {
    var currentRestrictions = this.state.restrictions.slice();

    if (e.target.checked) {
      currentRestrictions.push(e.target.name);
      this.setState({restrictions: currentRestrictions});

    } else {
      var index = currentRestrictions.indexOf(e.target.name);
      currentRestrictions.splice(index, 1);
      this.setState({restrictions: currentRestrictions});
    }
  }

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.handleRestrictionSubmit}>
            <div> <input type="text" placeholder="Enter Restriction" onChange={this.handleNewRestriction}/> </div>
            <button type="submit"> Submit</button>
          </form>
        </div>
        <form>
          <div><input type="checkbox" onClick={this.handleRestrictionChange} name="dairy-free"/> Dairy Free </div>
          <div> <input type="checkbox" onClick={this.handleRestrictionChange} name="vegan"/> Vegan </div>
          <div><input type="checkbox" onClick={this.handleRestrictionChange} name="vegetarian"/> Vegetarian </div>
          <div><input type="checkbox" onClick={this.handleRestrictionChange} name="paleolithic"/> Paleolithic </div>

          <button type="submit">Search Restaurants</button>
        </form>
      </div>
    );
  }
}

export default Options;