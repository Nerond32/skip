import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './Header/Header';
import Content from './Content/Content';
import * as actions from '../redux/actions';

const App = ({ darkMode, history, login }) => {
  const authCallback = () => {
    login(history);
  };
  return (
    <div className={`mainApp ${darkMode ? 'darkTheme' : ''}`}>
      <Header history={history} />
      <Route exact path="/" component={Content} />
      <Route path="/callback" render={authCallback} />
    </div>
  );
};

App.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return { darkMode: state.app.darkMode };
};

const mapDispatchToProps = {
  login: actions.login
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
