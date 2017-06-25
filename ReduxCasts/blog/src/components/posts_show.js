import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPost, deletePost } from "../actions";

class PostsShow extends Component {
  componentDidMount() {
    // You can check if the this.prop.post already here, then don't fetchPost()
    const { id } = this.props.match.params; // this.props.match.params = url's ID part
    this.props.fetchPost(id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params;

    this.props.deletePost(id, () => {
      this.props.history.push("/");
    });
  }

  render() {
    // 如果mapStateToProps唔用ownProps就會禁，寫勁多野...
    // this.props.posts[this.props.match.params.id];
    const { post } = this.props; //第一次ajax未行完個時會係 undefined

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back To Index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete Post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

// posts: all posts, ownProps: Is the state of props is going to our this component(尼個post)
// para 1: application state, para 2: ownProps (this.props === ownProps)
// 如果我地係尼面已經係posts入面搵左1個post 出黎，禁我地成個component唔使再寫水蛇春禁長既..
// this.props.posts[this.props.match.params.id];
function mapStateToProps({ posts }, ownProps) {
  // 第一次ajax未行完個時會係 { post:undefined }
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
