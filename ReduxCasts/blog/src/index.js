import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

 // BrowserRouter: Interact with history library, decide what to do beside the change of URL
 // Route: Core - Provde a config which URL show which component.
 // Route: Switch - It take in different collections of route.
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";

import reducers from "./reducers";
import PostsIndex from "./components/posts_index";
import PostsNew from "./components/posts_new";
import PostsShow from "./components/posts_show";

// import promise module then add it as a middle ware to our redux.
// Version 1: const createStoreWithMiddleware = applyMiddleware()(createStore);
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

// 1.  component={PostsNew}: URL match that path shows component {PostsNew}
// 2. <Route path="/" component={PostsIndex} /> Default  Home page!!!!!!!!!!!!!!
// 如果唔用switch "/posts/new" 入面都有"/"，所以佢會係new page show 埋 Posts Index.
// 用左switch 會由上到下禁睇邊個係第一個match URL 就唔會發生 host/post/new 都會出 host/既事
// 3. "/posts/:id" is a wildcard, Like regular expression /posts/*
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
      <h1>Sai is testing header!</h1> //A common area
        <Switch>
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/posts/:id" component={PostsShow} />
          <Route path="/" component={PostsIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector(".container")
);
