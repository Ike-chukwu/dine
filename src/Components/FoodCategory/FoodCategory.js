import React from "react";
import "./FoodCategory.scss";
import chef1 from "../../assets/images/staff/chef-1.jpg";
import guard1 from "../../assets/images/staff/guard-1.jpg";
import Card from "../Card/Card";


const FoodCategory = () => {
  return (
    <div className="menu-parent">
      <section className="menu">
        <h1>
          What category does the food <br /> you want fall under?
        </h1>
        <div className="btn-categories">
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
          <div className="single-category">Beef</div>
          <div className="single-category">Beef</div>
        </div>
        <div className="food-result">
          <Card name="spaghetti" />

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
