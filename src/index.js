import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { createStore } from "redux";

import "./styles.css";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const increment = () => {
  return {
    type: INCREMENT
  };
};

const decrement = () => {
  return {
    type: DECREMENT
  };
};

//reducer
const counter = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

let store = createStore(
  counter,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => console.log(store.getState()));
//dispatch
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(decrement());

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
