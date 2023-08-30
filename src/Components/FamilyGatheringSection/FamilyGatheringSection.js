import React from "react";
import "./FamilyGatheringSection.scss";
import lines from "../../assets/images/patterns/pattern-lines.svg";
import gathering from "../../assets/images/homepage/family-gathering-desktop.jpg";
import svgIcon from "../../assets/images/patterns/pattern-divide.svg";
import Button from "../Button/Button";

const FamilyGatheringSection = () => {
  return (
    <section className="family-gathering">
      <div className="left-family-gathering">
        <img src={lines} className="lines" alt="" />
        <img src={gathering} className="main-picture" alt="" />
        <img src={svgIcon} className="svg" alt="" />
      </div>
      <div className="right-family-gathering">
        <div className="inner-top">
          <h2 className="enjoyable-title">
            The most locally <br /> sourced food
          </h2>
          <p>
            All our ingredients come directly from our farm or local fishery. So
            you can be sure that you’re eating the freshest, most sustainable
            food.
          </p>
          <Button />
        </div>
        <div className="inner-bottom">
          <p className="category">family gathering</p>
          <p className="category">special events</p>
          <p className="category">social events</p>
        </div>
      </div>
    </section>
  );
};

export default FamilyGatheringSection;
