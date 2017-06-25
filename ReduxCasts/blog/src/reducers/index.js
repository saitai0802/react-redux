import { combineReducers } from "redux";
// { reducer as formReducer }: renaming the reducer property to formReducer。
//  Avoiding we use reducer object name some where else
import { reducer as formReducer } from "redux-form";
import PostsReducer from "./reducer_posts"; //Save up time to create action creator

const rootReducer = combineReducers({
  posts: PostsReducer,

   // Import a reducer from a redux-form library and hook it up to combineReducers call
   // All the froms in compontents will assume the formReducer is being applied to from state
  form: formReducer
});

export default rootReducer;
