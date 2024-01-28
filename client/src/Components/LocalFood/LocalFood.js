import React, { useEffect, useRef, useState } from "react";
import "./LocalFood.scss";
import lines from "../../assets/images/patterns/pattern-lines.svg";
import food from "../../assets/images/homepage/locally-sourced-desktop.jpg";
import foodTablet from "../../assets/images/homepage/locally-sourced-tablet.jpg";
import foodPhone from "../../assets/images/homepage/locally-sourced-mobile.jpg";
import svgIcon from "../../assets/images/patterns/pattern-divide.svg";
import { gsap } from "gsap";
const LocalFood = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const sectionInView = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0].isIntersecting;
        setIsIntersecting(entry);
      },
      {
        threshold: 0.6,
      }
    );
    observer.observe(sectionInView.current);
    return () => observer.disconnect();
  });

  useEffect(() => {
    const leftDiv = sectionInView.current.children[0];
    const svg = leftDiv.children[0];
    const headingText = leftDiv.children[1];
    const pText = leftDiv.children[2];
    const rightDiv = sectionInView.current.children[1];
    const lines = rightDiv.children[0];
    const pic_1 = rightDiv.children[1];
    const pic_2 = rightDiv.children[2];
    const pic_3 = rightDiv.children[3];
    const timeline = gsap.timeline();
    if (isIntersecting) {
      timeline
        .to(pic_1, {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 1.6,
          ease: "power2.easeInOut",
        })
        .to(
          pic_2,
          {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            duration: 1.6,
            ease: "power2.easeInOut",
          },
          "<"
        )
        .to(
          pic_3,
          {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            duration: 1.6,
            ease: "power2.easeInOut",
          },
          "<"
        )
        .to(lines, {
          autoAlpha: 1,
          x: 0,
          duration: 0.4,
        })
        .to(svg, {
          autoAlpha: 1,
          x: 0,
          duration: 0.4,
          ease: "power2",
        })
        .to(headingText, {
          autoAlpha: 1,
          x: 0,
          duration: 0.4,
        })
        .to(pText, {
          autoAlpha: 1,
          x: 0,
          duration: 0.4,
        });
    }
  }, [isIntersecting]);

  return (
    <section className="local-food" ref={sectionInView}>
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
        <img src={foodTablet} alt="" className="foodImgTablet" />
        <img src={foodPhone} alt="" className="foodImgPhone" />
      </div>
    </section>
  );
};

export default LocalFood;
