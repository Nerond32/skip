import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './Header/Header';
import Content from './Content/Content';

class App extends React.PureComponent {
  render() {
    return (
      <div className={`mainApp ${this.props.darkMode ? 'darkTheme' : ''}`}>
        <Header history={this.props.history} location={this.props.location} />
        <Route exact path="/" component={Content} />
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
  return { darkMode: state.app.darkMode };
};

export default withRouter(connect(mapStateToProps)(App));
