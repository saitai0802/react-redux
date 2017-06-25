import React, { Component } from "react";
import { connect } from "react-redux"; // Using this to connect React and Redux
import { selectBook } from "../actions/index";
import { bindActionCreators } from "redux";

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li
          key={book.title} //每個list item 都一定要有個key id
          // () => { statements }: A function with no parameters should be written with a couple of parentheses.
          onClick={() => this.props.selectBook(book)} //mapDispatchToProps pass this function props to this class
          className="list-group-item"
        >
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

// ******************Important! A gule between Redux and React*********************
// Take application state as a argument (array of book, active book)
// 將老豆(Application)既state放入黎BookList Class之後當props 禁用。
// mapStateToProps 的功能如名，就是把 store 的資料，一一對應成 container 的 props
function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside of BookList
  return {
    books: state.books
  };
}


/*
這段程式碼的意思是，把action creator 直接綁在我們的 props 上。當我們這樣寫之後，
我們就可以直接呼叫 action creator 來直接 dispatch action 了，
因為這些 action creator 已經綁了 dispatch。
*/
// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {  // dispatch = 特派
  // Whenever selectBook is called, the result shoudl be passed
  // to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop.
// para 1: connect function, para 2: connecting Class
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
