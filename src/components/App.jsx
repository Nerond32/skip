import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import Header from "./Header/Header";
import Content from "./Content/Content";
import Login from "./Login/Login";

const App = ({ darkMode }) => {
  // console.log(darkMode);
  return (
    <React.Fragment>
      <Header />
      <Route exact path="/" component={Content} />
      <Route path="/login" component={Login} />
    </React.Fragment>
  );
};

App.propTypes = {
  darkMode: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  return { darkMode: state.darkMode };
};

export default connect(mapStateToProps)(App);
