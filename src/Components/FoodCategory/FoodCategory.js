import React, { useEffect, useState } from "react";
import "./FoodCategory.scss";
import chef1 from "../../assets/images/staff/chef-1.jpg";
import guard1 from "../../assets/images/staff/guard-1.jpg";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";

const FoodCategory = () => {
  //state that stores current rendered category
  const [currentCategory, setCategory] = useState();
  const [data, setData] = useState();
  const [foodData, setFoodData] = useState();
  const [categoryLoadingState, setCategoryLoadingState] = useState(false);
  const [foodInCategoryLoadingState, setFoodInCategoryLoadingState] =
    useState(false);
  const [categoryErrorMessage, setCategoryErrorMessage] = useState(null);
  const [foodInCategoryErrorMessage, setFoodInCategoryErrorMessage] =
    useState(null);

  let btns;
  let foods;

  //fetch all meal categories
  const fetchCategory = async () => {
    setCategoryLoadingState(true);
    try {
      const newData = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const result = await newData.json();
      const listOfCategories = result.categories;
      setData(listOfCategories);
      setCategory(listOfCategories[0].strCategory);
      fetchFoodInCategory(listOfCategories[0].strCategory);
      setCategoryLoadingState(false);
      setCategoryErrorMessage(null);
    } catch (error) {
      setCategoryLoadingState(true);
      setCategoryErrorMessage(error);
    }
  };

  const fetchFoodInCategory = async (food) => {
    setFoodInCategoryLoadingState(true);
    try {
      const foodData = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${food}`
      );
      const result = await foodData.json();
      const meals = result.meals;
      setFoodData(meals);
      setFoodInCategoryLoadingState(false);
      setFoodInCategoryErrorMessage(null);
    } catch (error) {
      setFoodInCategoryLoadingState(true);
      setFoodInCategoryErrorMessage(error);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  if (categoryLoadingState || foodInCategoryLoadingState) {
    if (categoryErrorMessage || foodInCategoryErrorMessage) {
      return <Error>Sorry!You've reached a dead end</Error>;
    } else {
      return (
        <>
          <Loader />
        </>
      );
    }
  } else {
    //render btns when data exists
    if (data) {
      btns = data.map((category) => {
        return (
          <div
            onClick={() => {
              setCategory(category.strCategory);
              console.log(currentCategory);
              fetchFoodInCategory(category.strCategory);
            }}
            className={
              category.strCategory == currentCategory
                ? "single-category clicked"
                : "single-category"
            }
          >
            {category.strCategory}
          </div>
        );
      });
    }

    ////render food options when food data exists
    if (foodData) {
      foods = foodData.map((food) => {
        return (
          <Card
            key={food.idMeal}
            imageSrc={food.strMealThumb}
            mealName={food.strlMeal}
            id={food.idMeal}
          />
        );
      });
    }
    return (
      <div className="menu-parent">
        <section className="menu">
          <h1>
            What category does the food <br /> you want fall under?
          </h1>
          <div className="btn-categories">
            {btns}
          </div>
          <div className="food-result">
            {foods}
          </div>
        </section>
      </div>
    );
  }
};

export default FoodCategory;

//alighn result to the left if array contains less than 4 foods
