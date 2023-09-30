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
  const [categoryLoadingState, setCategoryLoadingState] = useState(true);
  const [foodInCategoryLoadingState, setFoodInCategoryLoadingState] =
    useState(true);
  const [categoryErrorMessage, setCategoryErrorMessage] = useState(null);
  const [foodInCategoryErrorMessage, setFoodInCategoryErrorMessage] =
    useState(null);

  let btns;
  let foods;

  //fetch all meal categories
  const fetchCategory = async () => {
    try {
      const newData = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const result = await newData.json();
      const listOfCategories = result.categories;
      setData(listOfCategories);
      console.log(listOfCategories);
      setCategory(listOfCategories[0].strCategory);
      fetchFoodInCategory(listOfCategories[0].strCategory);
      setCategoryLoadingState(false);
    } catch (error) {
      setCategoryLoadingState(false);
      setCategoryErrorMessage(error);
    }
  };

  const fetchFoodInCategory = async (food) => {
    try {
      const foodData = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${food}`
      );
      const result = await foodData.json();
      const meals = result.meals;
      setFoodData(meals);
      console.log(meals);
      setFoodInCategoryLoadingState(false);
    } catch (error) {
      setFoodInCategoryLoadingState(false);
      setFoodInCategoryErrorMessage(error);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  //show loader if any of the apis havent gotten a result
  if (categoryLoadingState || foodInCategoryLoadingState) {
    return <Loader />;
  }
  //show error if any of the api calls failed
  if (categoryErrorMessage || foodInCategoryErrorMessage) {
    return <Error>Sorry!You've reached a dead end</Error>;
  }
  //return the data from the two api calls
    return (
      <div className="menu-parent">
        <section className="menu">
          <h1>
            What category does the food <br /> you want fall under?
          </h1>
          <div className="btn-categories">
            {data.map((category) => {
              return (
                <div
                  onClick={() => {
                    setCategory(category.strCategory);
                    setFoodInCategoryLoadingState(true);
                    console.log(foodInCategoryLoadingState);
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
            })}
          </div>
          <div className="food-result">
            {foodData.map((food) => {
              return (
                <Card
                  key={food.idMeal}
                  imageSrc={food.strMealThumb}
                  mealName={food.strMeal}
                  id={food.idMeal}
                />
              );
            })}
          </div>
        </section>
      </div>
    );
  }
;

export default FoodCategory;
