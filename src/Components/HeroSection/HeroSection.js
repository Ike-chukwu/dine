import React from "react";
import "./HeroSection.scss";
import Button from "../Button/Button";

const HeroSection = () => {
  return (
    <div className="hero-imgae">
      <section className="hero">
        <h1 className="hero-title">
          Exquisite dining <br /> since 1989
        </h1>
        <p>
          Experience our seasonal menu in beautiful country surroundings. Eat
          the freshest produce from the comfort of our farmhouse.
        </p>
        <Button />
      </section>
    </div>
  );
};

export default HeroSection;
