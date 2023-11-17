import React, { useEffect, useRef, useState } from "react";
import "./HeroSection.scss";
import Button from "../Button/Button";
import { gsap } from "gsap";

const HeroSection = () => {
  const heroContainerRef = useRef();
  const [isIntersecting, setIsIntersecting] = useState(false);
  const btn = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entry) => {
        const entries = entry[0].isIntersecting;
        setIsIntersecting(entries);
      },
      { threshold: 0.2 }
    );

    observer.observe(heroContainerRef.current);
    return () => observer.disconnect();
  });

  useEffect(() => {
    const heroTL = gsap.timeline();
    const headerTitle = heroContainerRef.current.firstElementChild.children;
    const pText =
      heroContainerRef.current.firstElementChild.nextSibling.children;
    if (isIntersecting) {
      heroTL
        .to(headerTitle, {
          y: 0,
          duration: 1,
          ease: "power3",
          delay: 2,
        })
        .to(
          pText,
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: "power3",
          },
          "-=0.4"
        )
        .to(
          btn.current,
          {
            autoAlpha: 1,
            duration: 1,
            ease: "power3",
          },
          "-=0.3"
        );
    }
  }, [isIntersecting]);

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
        <Button ref={btn} />
      </section>
    </div>
  );
};

export default HeroSection;
