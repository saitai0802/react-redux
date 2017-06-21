// import React from "react";   // Non-ES6 systnax
import React, { Component } from "react";  //  React, { Component }: const Component = React.Component;

// Functional compoent: 會有野return 返黎。
// class SearchBar extends React.Component {  // Non-ES6 systnax
class SearchBar extends Component {
  constructor(props) {
    super(props);

    // init state, term = searching term
    this.state = { term: "" };
  }

  render() { // <= Return function 每個Class都一定要有。
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }

  // our event handler
  onInputChange(term) {
    this.setState({ term }); //一定用尼個方法update state
    this.props.onSearchTermChange(term);
  }
}

// 由尼個.js 嘔返D咩出去
export default SearchBar;
