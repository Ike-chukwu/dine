import React, { useContext, useEffect, useState } from "react";
import "./ViewFoodPage.scss";
import { Link, useParams } from "react-router-dom";
import guard1 from "../../assets/images/staff/guard-1.jpg";
import ReservationBanner from "../ReservationBanner/ReservationBanner";
import Footer from "../Footer/Footer";
import Loader from "../../Components/Loader/Loader";
import Error from "../../Components/Error/Error";
import { AuthContext } from "../../context";

const ViewFoodPage = () => {
  const { id } = useParams();
  let food;
  //state that stores the current food gotten from the id
  const [currentFood, setCurrentFood] = useState();
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState();
  const [itemAmount, setItemAmount] = useState(1);

  const {
    clearCart,
    removeFromCartHandler,
    addToCartHandler,
    amountOfFood,
    cartItems,
  } = useContext(AuthContext);

  //increase amount of food
  const increaseAmount = () => {
    setItemAmount(itemAmount + 1);
  };

  //decrease amount of food
  const decreaseAmount = () => {
    if (itemAmount <= 1) {
      setItemAmount(1);
      return;
    }
    setItemAmount(itemAmount - 1);
  };

  const fetchCurrentFoodWithId = async () => {
    try {
      const foodData = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      if (!foodData.ok) {
        throw "Api failed to fetched data";
      }
      const foodDataGotten = await foodData.json();
      const foodDetails = foodDataGotten.meals;
      setCurrentFood(foodDetails);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErrorMessage(error);
    }
  };

  useEffect(() => {
    fetchCurrentFoodWithId();
  }, [id]);

  if (loading) return <Loader />;
  if (errorMessage) return <Error>Sorry!You've reached a dead end</Error>;
  return (
    <div className="div view-peroduct-parent">
      <section className="view-product-container">
        <Link to="/menu">
          <span className="go-back">go back to menu</span>
        </Link>
        <div className="product-details">
          <div className="left-product-side">
            <img src={currentFood[0].strMealThumb} alt="" />
          </div>
          <div className="right-food-side">
            <h1 className="product-name">{currentFood[0].strMeal}</h1>
            <div className="product-category">
              <span className="category">price:</span>
              <span className="category-price">
                ${parseInt(currentFood[0].idMeal.slice(-2))}.00
              </span>
            </div>
            <div className="product-category">
              <span className="category">category:</span>
              <span className="category-name">
                {currentFood[0].strCategory}
              </span>
            </div>
            <div className="product-category">
              <span className="category">area:</span>
              <span className="category-name">{currentFood[0].strArea}</span>
            </div>
            <div className="product-category">
              <span className="category">main ingredients:</span>
              <span className="category-name">
                {currentFood[0].strTags
                  ? currentFood[0].strTags
                  : "No main ingredients"}
              </span>
            </div>
            <div className="btns">
              <div className="product-amount">
                <div className="subtract" onClick={decreaseAmount}>
                  -
                </div>
                <div className="amount">{itemAmount}</div>
                <div className="add" onClick={increaseAmount}>
                  +
                </div>
              </div>
              <button
                className="add-btn "
                onClick={() =>
                  addToCartHandler({
                    id: id,
                    name: currentFood[0].strMeal,
                    price: currentFood[0].idMeal.slice(-2),
                    amount: itemAmount,
                    image:currentFood[0].strMealThumb
                  })
                }
              >
                add to cart <i className="fas fa-shopping-cart"></i>
              </button>
              <button className="add-btn wishlist">
                Add to wishlist <i className="fas fa-heart"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <ReservationBanner />
      <Footer />
    </div>
  );
};

export default ViewFoodPage;
