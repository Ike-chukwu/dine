import React, { useContext, useEffect, useRef, useState } from "react";
import logo from "../../assets/images/logo.svg";
import logoBlack from "../../assets/images/logoBlack.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.scss";
import { AuthContext } from "../../context";

export const Navbar = (props) => {
  const [touched, setTouched] = useState(false);
  const [isSearchBarActive, setSearchbar] = useState(false);
  const {
    searchedFood,
    setSearchedFood,
    cartItems,
    logOut,
    user,
    setCartItems,
  } = useContext(AuthContext);
  const [foodResult, setFoodResult] = useState(null);
  const inputRef = useRef();
  const [isMenuActive, setMenuActive] = useState(false);

  //variable that stores the total number of foods a user has in his cart
  const totalAmountofGoods = cartItems.reduce((totalAmount, item) => {
    return totalAmount + item.amount;
  }, 0);

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
      setFoodResult(null);
      console.log(inputValue);
    } else {
      // Otherwise, fetch the data
      fetchData();
    }
  };

  //function that sarches for a particular food
  const clickedFoodHandler = async (e, id) => {
    navigate(`/menu/${id}`);
  };

  //function that handles sign out

  const handleSignOut = async () => {
    setCartItems([]);
    try {
      localStorage.removeItem("cart");
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = touched ? "hidden" : "auto";
    }
  }, [touched]);

  useEffect(() => {
    const html = document.querySelector("html");

    if (html) {
      if (isMenuActive) {
        html.style.overflow = "hidden";
      } else {
        html.style.overflow = "auto";
      }
    }
  }, [isMenuActive]);

  return (
    <div className="nav-parent">
      <div className="nav">
        <Link to="/">
          <img src={logo} alt="" className="logo" />
        </Link>

        <div className={isMenuActive ? "middle opened" : "middle"}>
          <div className="nav-wrapper">
            <Link
              className={isMenuActive ? "nav-link show" : "nav-link"}
              to="/"
              style={{
                display: "block",
                transitionDelay: isMenuActive ? "1.2s" : "0s",
              }}
            >
              home
            </Link>
          </div>
          <div className="nav-wrapper">
            <Link
              className={isMenuActive ? "nav-link show" : "nav-link"}
              to="/about"
              style={{
                display: "block",
                transitionDelay: isMenuActive ? "1.4s" : "0s",
              }}
            >
              about
            </Link>
          </div>
          <div className="nav-wrapper">
            <Link
              className={isMenuActive ? "nav-link show" : "nav-link"}
              to="/menu"
              style={{
                display: "block",
                transitionDelay: isMenuActive ? "1.6s" : "0s",
              }}
            >
              menu
            </Link>
          </div>
          {user && (
            <div className="nav-wrapper">
              <Link
                className={isMenuActive ? "nav-link show" : "nav-link"}
                to="/favourites"
                style={{
                  display: "block",
                  transitionDelay: isMenuActive ? "1.8s" : "0",
                }}
              >
                favourites
              </Link>
            </div>
          )}
          {user?.displayName ? (
            <div className="nav-wrapper">
              <Link
                className={isMenuActive ? "nav-link show" : "nav-link"}
                to="/signIn"
                onClick={handleSignOut}
                style={{
                  display: "block",
                  transitionDelay: isMenuActive ? "2.0s" : "0",
                }}
              >
                sign out
              </Link>
            </div>
          ) : (
            <div className="nav-wrapper">
              <Link
                className={isMenuActive ? "nav-link show" : "nav-link"}
                to="/signIn"
                style={{
                  display: "block",
                  transitionDelay: isMenuActive ? "2.2s" : "0s",
                }}
              >
                sign-in/registration
              </Link>
            </div>
          )}
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
              <Link to="/" className="logo">
                <img src={logo} alt="" />
              </Link>
              <div className="main-search">
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
          <div className="icon-cart">
            {totalAmountofGoods > 0 && (
              <div className="number">{totalAmountofGoods}</div>
            )}
            <i
              className="fas fa-shopping-cart"
              onClick={() => props.setCartActive(!props.isCartActive)}
            ></i>
          </div>
          <div
            className="menu-bar-icon"
            onClick={() => setMenuActive(!isMenuActive)}
          >
            <div
              style={{ background: isMenuActive ? "black" : "white" }}
              className={isMenuActive ? "burger-line open" : "burger-line"}
            ></div>
            <div
              style={{ background: isMenuActive ? "black" : "white" }}
              className={isMenuActive ? "burger-line open" : "burger-line"}
            ></div>
            <div
              style={{ background: isMenuActive ? "black" : "white" }}
              className={isMenuActive ? "burger-line open" : "burger-line"}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
