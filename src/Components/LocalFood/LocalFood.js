import React from "react";
import "./LocalFood.scss";
import lines from "../../assets/images/patterns/pattern-lines.svg";
import food from "../../assets/images/homepage/locally-sourced-desktop.jpg";
import svgIcon from "../../assets/images/patterns/pattern-divide.svg";

const LocalFood = () => {
  return (
    <section className="local-food">
      <div className="content-local-food">
        <img src={svgIcon} alt="" />
        <h2 className="enjoyable-title">
          The most locally <br /> sourced food
        </h2>
        <p>
          All our ingredients come directly from our farm or local fishery. So
          you can be sure that you’re eating the freshest, most sustainable
          food.
        </p>
      </div>
      <div className="right-food-content">
        <img src={lines} alt="" className="right-local-food-img" />
        <img src={food} alt="" className="foodImg" />
      </div>
    </section>
  );
};

export default LocalFood;