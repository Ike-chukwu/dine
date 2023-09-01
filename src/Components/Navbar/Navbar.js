import React, { useRef, useState } from "react";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import "./Navbar.scss";

export const Navbar = () => {
  const [isSearchBarActive, setSearchbar] = useState(false);
  return (
    <div className="nav-parent">
      <div className="nav">
        <Link to='/'>
          <img src={logo} alt="" className="logo" />
        </Link>

        <div className="middle">
          <div className="nav-wrapper">
            <Link className="nav-link" to='/about'>about</Link>
          </div>
          <div className="nav-wrapper">
            <Link className="nav-link" to='/menu'>menu</Link>
          </div>
          <div className="nav-wrapper">
            <Link className="nav-link" to='/account'>sign-in/registration</Link>
          </div>
          <div className="nav-wrapper">
            <Link className="nav-link">wishlist</Link>
          </div>
        </div>

        <div className="icons">
          <i
            className="fas fa-search"
            onClick={() => setSearchbar(!isSearchBarActive)}
          ></i>
          <i className="fas fa-shopping-cart"></i>
          <div className="menu-bar-icon"></div>
        </div>

        <input
          type="text"
          className={isSearchBarActive ? "search-bar clicked" : "search-bar"}
        />
      </div>
    </div>
  );
};
