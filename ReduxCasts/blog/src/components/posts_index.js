import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";  // Imagine this is <a /> HTML
import { fetchPosts } from "../actions";

class PostsIndex extends Component {

  // This is a React compontent method, it is a function of Component Class
  // Call fetchPosts() after the compontent show up on the screen.
  // 點解要show 完之後先出? 因為React 無concept 叫component 等完ajax call 之後先renderPost
  // 次序: render() > componentDidMount() > Ajax completed > render()
  componentDidMount() {
    this.props.fetchPosts(); // We can call it becuase  connect(mapStateToProps, { fetchPosts })(PostsIndex)
  }

  renderPosts() {
    // Why we don't use native javascript map, because it works only for array.
    // We use lodash.map to loop through our object instand
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`/posts/${post.id}`}>
            {post.title}
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          // The reason to use it because it helps to block the action like http call from server.
          <Link className="btn btn-primary" to="/posts/new">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

// Get an action creator to this component
function mapStateToProps(state) {
  return { posts: state.posts };
}

// Version 1: export default connect(null, { fetchPosts:fetchPosts })(PostsIndex);

// Version2 : we can do some computation on how we call the action creator ahead of time
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
