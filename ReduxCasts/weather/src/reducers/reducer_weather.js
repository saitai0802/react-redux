import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action) {

  // Only handle FETCH_WEATHER action type, cuz redux 應該次次都會call哂所有既 reducer
  switch (action.type) {
    case FETCH_WEATHER:
      // state.push(action.payload.data) <=======Never do that!!! cuz we can't change state directly!
      
      // We needa return a completely new instance of state
      // state.concat([action.payload.data]); // Create a new array contains everything
      return [action.payload.data, ...state]; // ES6 sytnax of above code.
  }
  return state;
}
