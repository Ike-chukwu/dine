import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/images/logo.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.scss";

export const Navbar = (props) => {
  const [isSearchBarActive, setSearchbar] = useState(false);
  const [searchedFood, setSearchedFood] = useState();
  const inputRef = useRef();

  const navigate = useNavigate();

  // function that handles input change
  const foodInput = (e) => {
    setSearchedFood(e.target.value);
  };

  //function that sarches for a particular food
  const searchFoodHandler = (e) => {
    e.preventDefault();
    if (searchedFood == "" || searchedFood == null) {
      console.log("yes");
      inputRef.current.style.border = "0.2rem solid red";
    } else {
      inputRef.current.style.border = "unset";
      navigate(`/search/${searchedFood}`);
      setSearchbar(false);
      setSearchedFood("");
    }
  };

  return (
    <div className="nav-parent">
      <div className="nav">
        <Link to="/">
          <img src={logo} alt="" className="logo" />
        </Link>

        <div className="middle">
          <div className="nav-wrapper">
            <Link className="nav-link" to="/">
              home
            </Link>
          </div>
          <div className="nav-wrapper">
            <Link className="nav-link" to="/about">
              about
            </Link>
          </div>
          <div className="nav-wrapper">
            <Link className="nav-link" to="/menu">
              menu
            </Link>
          </div>
          <div className="nav-wrapper">
            <Link className="nav-link" to="/favourites">
              favourites
            </Link>
          </div>
          {/* <div className="nav-wrapper">
            <Link className="nav-link" to="/account">
              sign-in/registration
            </Link>
          </div> */}
        </div>

        <div className="icons">
          <i
            className="fas fa-search"
            onClick={() => setSearchbar(!isSearchBarActive)}
          ></i>
          <i
            className="fas fa-shopping-cart"
            onClick={() => props.setCartActive(!props.isCartActive)}
          ></i>
          <div className="menu-bar-icon"></div>
        </div>

        <div
          className={isSearchBarActive ? "search-bar clicked" : "search-bar"}
        >
          <input
            type="text"
            onChange={foodInput}
            ref={inputRef}
            value={searchedFood}
          />
          <button onClick={searchFoodHandler} className="search-btn">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};
