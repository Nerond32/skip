import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import DarkThemeButton from "./DarkModeButton/DarkThemeButton";
import { changeDarkMode } from "../../redux/actions";
import Auth from "../../Auth/Auth";

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
          {" "}
          <div className="title">SKIP</div>
        </Link>
        <div className="details">Windows after-install script generator</div>
        <button type="button" onClick={() => this.props.auth.login()}>
          LOGIN
        </button>
        <DarkThemeButton onClick={this.changeDarkMode} />{" "}
      </header>
    );
  }
}

Header.propTypes = {
  changeDarkMode: PropTypes.func.isRequired,
  auth: PropTypes.instanceOf(Auth).isRequired
};

const mapDispatchToProps = {
  changeDarkMode
};

export default connect(
  null,
  mapDispatchToProps
)(Header);
