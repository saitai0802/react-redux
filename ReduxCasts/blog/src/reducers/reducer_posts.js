import _ from "lodash";
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from "../actions";

export default function(state = {}, action) {

  // console.log(action.payload.data)  // We will get [post1, post2]
  // but we wanna trasnfrom it to {4:post, 5:post}
  switch (action.type) {
    case DELETE_POST:
      return _.omit(state, action.payload);
    case FETCH_POST:  // Add the posts we already featched to the posts state.
    /* Version 1: ES5 style
    const post = action.payload.data;
    const newState = { ...state };
    newState[post.id] = post;
    return newState
    */
      return { ...state, [action.payload.data.id]: action.payload.data }; // ES6 style
    case FETCH_POSTS:
      // It makes the data object becomes
      // {1:{title:"xxx", content:"abc"}, 2:{title:"abc", content:"efg"}}
      // then we can use state["4"] later
      return _.mapKeys(action.payload.data, "id");
    default:
      return state;
  }
}
