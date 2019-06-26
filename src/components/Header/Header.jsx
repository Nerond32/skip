import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { changeDarkMode } from '../../redux/actions';
import Auth from './Auth/Auth';
import Button from '../Assets/Button';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.changeDarkMode = this.changeDarkMode.bind(this);
  }

  changeDarkMode() {
    this.props.changeDarkMode();
  }

  render() {
    return (
      <header>
        <Link to="/">
          {' '}
          <div className="title">SKIP</div>
        </Link>
        <div className="details">Windows after-install script generator</div>
        <Auth history={this.props.history} location={this.props.location} />
        <Button className="dark-theme-button" onClick={this.changeDarkMode} />
      </header>
    );
  }
}

Header.propTypes = {
  changeDarkMode: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  changeDarkMode
};

export default connect(
  null,
  mapDispatchToProps
)(Header);
