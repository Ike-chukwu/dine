import React from "react";
import SearchedResult from "../Components/SearchedResult/SearchedResult";
import ReservationBanner from "../Components/ReservationBanner/ReservationBanner";
import Footer from "../Components/Footer/Footer";

const Search = () => {
  return (
    <div>
      <SearchedResult />
      <ReservationBanner />
      <Footer />
    </div>
  );
};

export default Search;
