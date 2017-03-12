import React from 'react';

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restrictions: [],
      newRestriction: '',
      location: ''
    };
    // this.handleRestaurantSubmit = this.handleRestaurantSubmit.bind(this);
    this.handleNewRestriction = this.handleNewRestriction.bind(this);
    this.handleRestrictionChange = this.handleRestrictionChange.bind(this);
    this.handleRestrictionSubmit = this.handleRestrictionSubmit.bind(this);
    this.configSubmitter = this.configSubmitter.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
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

  configSubmitter (e) {
    e.preventDefault();
    var config = {
      restrictions: this.state.restrictions,
      location: this.state.location
    };

    this.props.navigateToResults(e, config);
  }

  handleLocationChange(e) {
    e.preventDefault();
    this.setState({location: e.target.value});

  }

  render() {
    return (
      <div>
        <div>
          <form>
            <div> <input type="text" placeholder="Enter Restriction" onChange={this.handleNewRestriction}/> </div>
          </form>
        </div>
        <form>
          <div>
            <input type="text" placeholder="Location" onChange={this.handleLocationChange}/>
            <button onClick></button>
          </div>
          <div><input type="checkbox" onClick={this.handleRestrictionChange} name="keto"/> Keto </div>
          <div> <input type="checkbox" onClick={this.handleRestrictionChange} name="vegan"/> Vegan </div>
          <div><input type="checkbox" onClick={this.handleRestrictionChange} name="vegetarian"/> Vegetarian </div>
          <div><input type="checkbox" onClick={this.handleRestrictionChange} name="paleolithic"/> Paleo </div>
          <button onClick={this.configSubmitter} type="submit" name="restaurants">Search Restaurants</button>
        </form>
      </div>
    );
  }
}

export default Options;