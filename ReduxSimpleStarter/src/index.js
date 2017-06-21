// Go find the library called react installed in my application dependency which is installed node modules folder.
import React from 'react'; // 'react' knows how to react to components. Create and manage our compontents
import ReactDOM from 'react-dom'; // 'react-dom' knows how to take the compoent and render it into DOM
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

// Create new component.
// const: ES6 systnax to represent constant value
const createStoreWithMiddleware = applyMiddleware()(createStore);

// Generating HTML and put it on the page
// 每次你用JSX 其實背後都係call 緊 React.createElement(xxxx)
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));  // document.querySelector('.container'); Target Dom node
