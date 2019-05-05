import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import App from "./components/App";
import rootReducer from "./redux/rootReducer";
import "normalize.css";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById("root"));
