import React, { useEffect, useRef } from "react";
import "./HeroSection.scss";
import Button from "../Button/Button";
import { gsap } from "gsap";

const HeroSection = () => {
  return (
    <div className="hero-imgae">
      <section className="hero">
        <span className="hiden-container">
          <h1 className="hero-title">
            Exquisite dining <br /> since 1989
          </h1>
        </span>
        <span className="hiden-container">
          <p>
            Experience our seasonal menu in beautiful country surroundings. Eat
            the freshest produce from the comfort of our farmhouse.
          </p>
        </span>
        <Button />
      </section>
    </div>
  );
};

export default HeroSection;
