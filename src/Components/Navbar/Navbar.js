import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/images/logo.svg";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";

export const Navbar = () => {
  const [isSearchBarActive, setSearchbar] = useState(false);

  const location = useLocation()
  const ref = useRef()
  let inputStyle;

  useEffect(() => {
    if(location.pathname == '/menu'){
      console.log(ref.current.style);
      ref.current.style.backgroundColor =  "black"
      ref.current.style.color =  "white"
      ref.current.style.border =  "0.2rem solid white"
    }
    else{
      ref.current.style.backgroundColor =  "white"
      ref.current.style.color =  "black"
      ref.current.style.border =  "0.2rem solid black"
    }
  }, [
    location
  ])


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
          ref = {ref}
          className={isSearchBarActive ? "search-bar clicked" : "search-bar"}
        />
      </div>
    </div>
  );
};
