import React, { useContext, useEffect, useRef, useState } from "react";
import logo from "../../assets/images/logo.svg";
import logoBlack from "../../assets/images/logoBlack.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.scss";
import { AuthContext } from "../../context";

export const Navbar = (props) => {
  const [touched, setTouched] = useState(false);
  const [isSearchBarActive, setSearchbar] = useState(false);
  const { searchedFood, setSearchedFood } = useContext(AuthContext);
  const [foodResult, setFoodResult] = useState(null);
  const inputRef = useRef();

  const navigate = useNavigate();

  // function that handles input change
  const foodInput = (e) => {
    const inputValue = e.target.value;
    setSearchedFood(inputValue); // Update searchedFood immediately

    // Use the updated searchedFood value in the API request
    const fetchData = async () => {
      try {
        const data = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`
        );
        const result = await data.json();
        const foodDetail = result.meals;
        setFoodResult(foodDetail);
      } catch (error) {
        console.log(error);
      }
    };
    if (inputValue === "") {
      // If the input is empty, clear the results
      setFoodResult([]);
      console.log(foodResult);
    } else {
      // Otherwise, fetch the data
      fetchData();
    }

  };

  //function that sarches for a particular food
  const clickedFoodHandler = async (e, id) => {
    // const data = await fetch(
    //   `https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`
    // );
    // const result = await data.json();
    // const foodDetail = result.meals;
    navigate(`/menu/${id}`);
    // setSearchbar(false);
  };

  // const fetchSearchedValue = async () => {
  //   const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchedFood}`)
  //   const result = await data.json()
  //   const foodDetail = result.meals
  //   console.log(foodDetail);
  //   // setFoodResult(foodDetail)
  //   // setSearchedFood("");
  // }

  // useEffect(() => {

  // }, [se])

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = touched ? "hidden" : "auto";
    }
  }, [touched]);

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
            onClick={() => {
              setSearchbar(true);
              setTouched(true);
            }}
          ></i>
          <div
            className={
              isSearchBarActive ? "searchGroup toggled" : "searchGroup"
            }
            onClick={() => {
              setSearchbar(false);
              setTouched(false);
              setSearchedFood("");
              setFoodResult([]);
            }}
          >
            <div className="searchContent">
              <Link to="/">
                <img src={logo} alt="" className="logo" />
              </Link>
              <div className="main-search">
                <i
                  className="fas fa-search"
                  onClick={(e) => {
                    setSearchbar(false);
                    setTouched(false);
                    setSearchedFood("");
                    setFoodResult([]);
                  }}
                ></i>
                <input
                  type="text"
                  onChange={(e) => foodInput(e)}
                  ref={inputRef}
                  value={searchedFood}
                  onClick={(e) => e.stopPropagation()}
                />
                <ul className="searched-results">
                  {foodResult?.map((result) => (
                    <li
                      key={result.idMeal}
                      onClick={(e) => clickedFoodHandler(e, result.idMeal)}
                    >
                      {result.strMeal}
                    </li>
                  ))}
                  {/* <li>me</li>
                  <li>me</li>
                  <li>me</li> */}
                </ul>
              </div>
              <i
                className="fas fa-close"
                onClick={() => {
                  setSearchbar(false);
                  setTouched(false);
                  setSearchedFood("");
                  setFoodResult([]);
                }}
              ></i>
            </div>
          </div>
          <i
            className="fas fa-shopping-cart"
            onClick={() => props.setCartActive(!props.isCartActive)}
          ></i>
          <div className="menu-bar-icon"></div>
        </div>
      </div>
    </div>
  );
};
