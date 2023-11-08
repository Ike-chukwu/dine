import React, { useRef } from "react";
import "./EnjoyableSection.scss";
import hills from "../../assets/images/homepage/enjoyable-place-desktop.jpg";
import hillsT from "../../assets/images/homepage/enjoyable-place-tablet.jpg";
import hillsM from "../../assets/images/homepage/enjoyable-place-mobile.jpg";
import svgIcon from "../../assets/images/patterns/pattern-divide.svg";

const EnjoyableSection = () => {
  return (
    <section className="enjoyable">
      <img src={hills} alt="" className="left-image" />
      <img src={hills} alt="" className="left-image-tablet" />
      <img src={hillsT} alt="" className="left-image-m" />
      <img src={hillsM} alt="" className="left-image-m2" />
      <div className="right-content">
        <img src={svgIcon} alt="" />
        <h2 className="enjoyable-title">
          Enjoyable place <br /> for all the family
        </h2>
        <p>
          Our relaxed surroundings make dining with us a great experience for
          everyone. We can even arrange a tour of the farm before your meal.
        </p>
      </div>
    </section>
  );
};

export default EnjoyableSection;
