import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import Error from "../Error/Error";

const FavCard = (props) => {
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState();
  const [favInfo, setFavInfo] = useState();

  //function that fetches food from api with the id of the food
  const fetchCurrentFoodWithId = async () => {
    try {
      const foodData = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${props.id}`
      );
      if (!foodData.ok) {
        throw "Api failed to fetched data";
      }
      const foodDataGotten = await foodData.json();
      const foodDetails = foodDataGotten.meals;
      setFavInfo(foodDetails);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErrorMessage(error);
    }
  };

  useEffect(() => {
    fetchCurrentFoodWithId();
  }, [props.id]);

  if (loading) return <Loader />;
  if (errorMessage) return <Error>Sorry!You've reached a dead end</Error>;
  return (
    <div className="food-result">
      <div className="food-box">
        <img src={favInfo[0].strMealThumb} alt="" />
        <h2 className="menuItem-name">{favInfo[0].mealName}</h2>
        <Link to={`/menu/${favInfo[0].idMeal}`}>
          <button className="view-meal">view meal</button>
        </Link>
      </div>
    </div>
  );
};

export default FavCard;
