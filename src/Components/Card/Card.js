import React from "react";
// import "./Card.scss";
import chef1 from '../../../src/assets/images/staff/chef-2.jpg'

const Card = (props) => {
  return (
    <div className="food-result">
      <div className="food-box">
        <img src={chef1} alt="" />
        <h2>{props.name}</h2>
      </div>
    </div>
  );
};

export default Card;
