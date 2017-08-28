import { combineReducers } from "redux";
import BooksReducer from "./reducer_books";
import ActiveBook from "./reducer_active_book";

// Any key to the object that we provide to combine reducers ends up a key on our global state.
const rootReducer = combineReducers({
  books: BooksReducer,  // Only static valuable return.
  activeBook: ActiveBook // Will get the dynamic valuable of different action type.
});

export default rootReducer;
