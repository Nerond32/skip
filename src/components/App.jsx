import React from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Header from "./Header/Header";
import Content from "./Content/Content";
import Auth from "../Auth/Auth";
import Callback from "./Callback/Callback";

class App extends React.Component {
  constructor({ darkMode, history }) {
    super();
    this.auth = new Auth(history);
  }

  render() {
    return (
      <div className={`mainApp ${this.props.darkMode ? "" : "darkTheme"}`}>
        <Header auth={this.auth} />
        <Route exact path="/" component={Content} />
        <Route
          path="/callback"
          render={props => <Callback {...props} auth={this.auth} />}
        />
      </div>
    );
  }
}

App.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

const mapStateToProps = state => {
  return { darkMode: state.darkMode };
};

export default withRouter(connect(mapStateToProps)(App));
