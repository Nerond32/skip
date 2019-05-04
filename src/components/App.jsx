import React from "react";
import { Route } from "react-router-dom";
import "./App.less";
import Header from "./Header/Header";
import Content from "./Content/Content";
import Login from "./Login/Login";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Route exact path="/" component={Content} />
      <Route path="/login" component={Login} />
    </React.Fragment>
  );
};

export default App;
