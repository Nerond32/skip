import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import DarkModeButton from "./DarkModeButton/DarkModeButton";
import { changeDarkMode } from "../../redux/actions";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.changeDarkMode = this.changeDarkMode.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
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
        <Link to="/login">
          <div className="details">Windows after-install script generator</div>
        </Link>
        <DarkModeButton onClick={this.changeDarkMode} />{" "}
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
