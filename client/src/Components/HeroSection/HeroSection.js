import React, { useEffect, useRef } from "react";
import "./HeroSection.scss";
import Button from "../Button/Button";
import { gsap } from "gsap";

const HeroSection = () => {
  const heroContainerRef = useRef();

  useEffect(() => {
    const heroTL = gsap.timeline();
    const headerTitle = heroContainerRef.current.firstElementChild.children;
    const pText = heroContainerRef.current.firstElementChild.nextSibling.children
    const btn = heroContainerRef.current.children[2]

    const ctx = gsap.context(() => {
      heroTL.from(headerTitle, {
        y: 150,
        duration: 1,
        ease: "power3",
        delay: 2,
      })
      .from(pText, {
        autoAlpha:0,
        y: 100,
        duration: 1,
        ease: "power3",
      }, '-=0.6')
      .from(btn, {
        autoAlpha:0,
        duration: 1,
        ease: "power3",
      }, '-=0.4')
    });

    return () => ctx.revert();
  });

  return (
    <div className="hero-imgae">
      <section className="hero" ref={heroContainerRef}>
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
