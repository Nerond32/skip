import React from "react";
import { Link } from "react-router-dom";
import "./Header.less";

const Header = () => {
  return (
    <header>
      <Link to="/">
        {" "}
        <div className="title">SKIP</div>
      </Link>
      <Link to="/login">
        <div className="details">Windows after-install script generator</div>
      </Link>
    </header>
  );
};

export default Header;
