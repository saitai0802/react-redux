// Rmember!!! State argument is not application state, only the state
// this reducer is responsible for

// state = null: It uses to init when the application redners at the first time.
export default function(state = null, action) {
  switch (action.type) {
    case "BOOK_SELECTED":
        console.log("testing");
        console.log(action);
      return action.payload;
  }

  return state; // return null at first time
}
