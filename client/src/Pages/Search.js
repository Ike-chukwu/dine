import React, { useContext, useEffect, useState } from "react";
import SearchedResult from "../Components/SearchedResult/SearchedResult";
import ReservationBanner from "../Components/ReservationBanner/ReservationBanner";
import Footer from "../Components/Footer/Footer";
import { AuthContext } from "../context";

const Search = () => {
  const {
    searchedResultLoading,
    setSearchedResult,
    searchedFood,
    setSearchedFood,
  } = useContext(AuthContext);

  //state that stores result of searched data from api acll
  const [foodResult, setFoodResult] = useState(null)

  //function that fetches the value a user entered in the input field
  const fetchSearchedValue = async () => {
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchedFood}`)
    const result = await data.json()
    const foodDetail = result.meals
    setFoodResult(foodDetail)
    setSearchedFood("");
  }

  useEffect(() => {
    fetchSearchedValue()
  }, [])



  return (
    <div>
      <SearchedResult foodResult={foodResult} />
      <ReservationBanner />
      <Footer />
    </div>
  );
};

export default Search;
