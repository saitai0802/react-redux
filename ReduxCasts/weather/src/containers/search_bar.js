import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };

    // Blind funtion to make it this.onInputChange to have "this" which is instance of SearchBar
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  // If there is a "this" inside an event handler(call back), we needa use blind()
  // Javasciprt behavior: Please check on the internet later
  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    // We need to go and fetch weather data
    this.props.fetchWeather(this.state.term);
    this.setState({ term: "" });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

// Step 1: 將Action blind 左入 dispatch
// Blind up action creator(Ajax) to dispatch to make sure
// action(Ajax) flow down into the middleware and then reducer inside of our redux application.
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

// Step 2: 將function blind 左入 SearchBar's props
// para 1: connect function(mapStateToProps), We don't have one this time, so passing null
// para 2: connecting Class(mapDispatchToProps)
export default connect(null, mapDispatchToProps)(SearchBar);
