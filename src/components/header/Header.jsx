import React from "react";
import "../header/Header.scss";
import logo_img from "../../assets/logo.svg";

const Header = () => {
  return (
    <section className="header">
      <div className="container">
        <div className="header-wrapper">
          <img src={logo_img} alt="logo-img" />
          <ul>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
          </ul>
          <p>send lorem</p>
          <button>eng</button>
        </div>
      </div>
    </section>
  );
};

export default Header;
