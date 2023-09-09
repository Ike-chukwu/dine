import React, { useEffect, useState } from "react";
import "./FoodCategory.scss";
import chef1 from "../../assets/images/staff/chef-1.jpg";
import guard1 from "../../assets/images/staff/guard-1.jpg";
import Card from "../Card/Card";
import { Link } from "react-router-dom";

const FoodCategory = () => {
  //state that stores current rendered category
  const [currentCategory, setCategory] = useState();
  const [data, setData] = useState();
  const [foodData, setFoodData] = useState();

  let btns;
  let foods;

  //fetch all meal categories
  const fetchCategory = async () => {
    const newData = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    const result = await newData.json();
    const listOfCategories = result.categories;
    setData(listOfCategories);
    setCategory(listOfCategories[0].strCategory);
    fetchFoodInCategory(listOfCategories[0].strCategory);
  };

  const fetchFoodInCategory = async (food) => {
    const foodData = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${food}`
    );
    const result = await foodData.json();
    const meals = result.meals;
    setFoodData(meals);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

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
    console.log(foodData);
    foods = foodData.map((food) => {
      return <Card key={food.idMeal} imageSrc={food.strMealThumb} mealName={food.strlMeal} id={food.idMeal} />;
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
          {/* <div className="single-category">Beef</div>
          <div className="single-category">Beef</div>
          <div className="single-category">Beef</div>
          <div className="single-category">Beef</div>
          <div className="single-category">Beef</div>
          <div className="single-category">Beef</div>
          <div className="single-category">Beef</div>
          <div className="single-category">Beef</div>
          <div className="single-category">Beef</div>
          <div className="single-category">Beef</div>
          <div className="single-category">Beef</div>
          <div className="single-category">Beef</div>
          <div className="single-category">Beef</div>
          <div className="single-category">Beef</div>
          <div className="single-category">Beef</div> */}
        </div>
        <div className="food-result">
          {/* <Card name="spaghetti" /> */}
          {foods}
          {/* <div className="food-box">
            <img src={chef1} alt="" />
            <h2>Food name</h2>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default FoodCategory;

//alighn result to the left if array contains less than 4 foods
