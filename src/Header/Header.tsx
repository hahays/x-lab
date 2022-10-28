import React from "react";
import "./Header.scss";
import LOGO from "./img/logo.svg";
import USER_LOGO from "./img/user-logo.svg";

function Header() {
  return (
    <header className="header">
      <div className="header-leftSide">
        <div className="logo">
          <img src={LOGO} alt="logo" />
        </div>
        <div>
          <span>Wrench CRM</span>
        </div>
      </div>
      <div className="header-rightSide">
        <div className="logo">
          <img src={USER_LOGO} alt="user-logo" />
        </div>
        <div>
          <span>Имя Фамилия</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
