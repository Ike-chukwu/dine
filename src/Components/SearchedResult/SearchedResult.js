import React from "react";
import "./SearchedResult.scss";
import Card from "../Card/Card";

const SearchedResult = () => {
  return (
    <section className="search-section">
      <div className="search-bar">
        <input type="text" />
        <button className="search-btn">Search</button>
      </div>
      <div className="food-result">
        <Card name="spaghetti" />
        {/* <p>No results found</p> */}
      </div>
    </section>
  );
};

export default SearchedResult;
