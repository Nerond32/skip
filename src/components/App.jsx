import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './Header/Header';
import Content from './Content/Content';
import { login } from '../redux/actions';

class App extends React.PureComponent {
  authCallback = () => {
    this.props.login(this.props.history);
  };

  render() {
    return (
      <div className={`mainApp ${this.props.darkMode ? 'darkTheme' : ''}`}>
        <Header history={this.props.history} />
        <Route exact path="/" component={Content} />
        <Route path="/callback" render={this.authCallback} />
      </div>
    );
  }
}

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
  login
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
