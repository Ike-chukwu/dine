import React from "react";
import "./Curve.scss";
import curve from "../../assets/images/patterns/pattern-curve-bottom-right.svg";
import lines from "../../assets/images/patterns/pattern-lines.svg";

const Curve = () => {
  return (
    <div className="parent-curve">
      <img src={curve} alt="" className="curve-img" />
      <img src={lines} className="lines" alt="" />
    </div>
  );
};

export default Curve;
