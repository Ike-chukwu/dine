import React from "react";
import "./SearchedResult.scss";
import Card from "../Card/Card";
import { useContext } from "react";
import { AuthContext } from "../../context";

const SearchedResult = (props) => {

  const {
    searchedResultLoading,
    setSearchedResult,
    searchedFood,
    setSearchedFood,
  } = useContext(AuthContext);


  let foodResultRender;

  if (props.foodResult) {
    foodResultRender = props.foodResult.map((food) => (
      <Card
        name={food.strMeal}
        key={food.idMeal}
        id={food.idMeal}
        picture={food.strMealThumb}
      />
    ));
  } else {
    foodResultRender = <p>No results found</p>;
  }

  return (
    <section className="search-section">
      <div className="search-bar">
        <input type="text" />
        <button className="search-btn">Search</button>
      </div>
      <div className="food-result">
        {foodResultRender}
      </div>
    </section>
  );
};

export default SearchedResult;
