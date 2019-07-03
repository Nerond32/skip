import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as actions from '../../redux/actions';
import Auth from '../Assets/Auth';
import Button from '../Assets/Button';

const Header = ({ changeDarkMode, history }) => {
  return (
    <header>
      <Link to="/">
        <div className="title">SKIP</div>
      </Link>
      <h2 className="details">Windows after-install script generator</h2>
      <Auth history={history} />
      <Button className="dark-theme-button" onClick={changeDarkMode} />
    </header>
  );
};

Header.propTypes = {
  changeDarkMode: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func }).isRequired
};

const mapDispatchToProps = {
  changeDarkMode: actions.changeDarkMode
};

export default connect(
  null,
  mapDispatchToProps
)(Header);
