import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import thunk from "redux-thunk";

import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";

import personListReducer from "./store/reducer/personList";
import userReducer from "./store/reducer/user";
import { loadState, saveState } from "./store/storeService";

const rootReducer = combineReducers({
  personList: personListReducer,
  user: userReducer,
});

const logger1 = (store) => {
  return (next) => {
    return (action) => {
      console.log("[middleware 1]", action);
      console.log("[state]", store.getState());
      next(action);
    };
  };
};

const logger2 = (store) => (next) => (action) => {
  console.log("[middleware 2]", action);

  next(action);
  console.log("[after next in middleware 2]");
};

const persisState = loadState();

const store = createStore(rootReducer, persisState, applyMiddleware(thunk));

store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
