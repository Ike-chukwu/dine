import React, { useEffect, useRef, useState } from "react";
import "./Highlights.scss";
import svgIcon from "../../assets/images/patterns/pattern-divide.svg";
import salmon from "../../assets/images/homepage/salmon-desktop-tablet.jpg";
import beef from "../../assets/images/homepage/beef-desktop-tablet.jpg";
import chocolate from "../../assets/images/homepage/chocolate-desktop-tablet.jpg";
import salmonM from "../../assets/images/homepage/salmon-mobile.jpg";
import beefM from "../../assets/images/homepage/beef-mobile.jpg";
import chocolateM from "../../assets/images/homepage/chocolate-mobile.jpg";
import { gsap } from "gsap";

const Highlights = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const currentSection = useRef(null);
  const firstFoodBoxRef = useRef(null);
  const secondFoodBoxRef = useRef(null);
  const thirdFoodBoxRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0].isIntersecting;
        console.log(entry);
        setIsIntersecting(entry);
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(currentSection.current);
    return () => observer.disconnect();
  });

  useEffect(() => {
    const tl = gsap.timeline();
    const firstDiv = currentSection.current.children[0];
    const svg = firstDiv.children[0];
    const headingTxt = firstDiv.children[1];
    const pText = firstDiv.children[2];
    const secondDiv = currentSection.current.children[1];
    const rightContainerParentRef_1 = secondDiv.children[0];
    const rightContainerParentRef_2 = secondDiv.children[1];
    const rightContainerParentRef_3 = secondDiv.children[2];
    const foodBoxLeftSection = firstFoodBoxRef.current.children[0];
    const foodBoxLeftSectionfirstImg = foodBoxLeftSection.children[0];
    const foodBoxLeftSectionSecondImg = foodBoxLeftSection.children[1];
    const foodBoxLeftSectionThirdImg = foodBoxLeftSection.children[2];
    const foodBoxRightSection = firstFoodBoxRef.current.children[1];
    const foodBoxRightSectionHTxt = foodBoxRightSection.children[0];
    const foodBoxRightSectionPTxt = foodBoxRightSection.children[1];

    const secondBoxLeftSection = secondFoodBoxRef.current.children[0];
    const secondFoodBoxLeftSectionfirstImg = secondBoxLeftSection.children[0];
    const secondFoodBoxLeftSectionSecondImg = secondBoxLeftSection.children[1];
    const secondFoodBoxLeftSectionThirdImg = secondBoxLeftSection.children[2];
    const secondFoodBoxRightSection = secondFoodBoxRef.current.children[1];
    const secondFoodBoxRightSectionHTxt = secondFoodBoxRightSection.children[0];
    const secondFoodBoxRightSectionPTxt = secondFoodBoxRightSection.children[1];

    const thirdBoxLeftSection = thirdFoodBoxRef.current.children[0];
    const thirdFoodBoxLeftSectionfirstImg = thirdBoxLeftSection.children[0];
    const thirdFoodBoxLeftSectionSecondImg = thirdBoxLeftSection.children[1];
    const thirdFoodBoxLeftSectionThirdImg = thirdBoxLeftSection.children[2];
    const thirdFoodBoxRightSection = thirdFoodBoxRef.current.children[1];
    const thirdFoodBoxRightSectionHTxt = thirdFoodBoxRightSection.children[0];
    const thirdFoodBoxRightSectionPTxt = thirdFoodBoxRightSection.children[1];

    if (isIntersecting) {
      tl.to(
        svg,
        {
          autoAlpha: 1,
          x: -0,
          duration: 0.4,
          ease: "power2",
        },
        "-=0.2"
      )
        .to(headingTxt, {
          autoAlpha: 1,
          x: 0,
          duration: 0.4,
        })
        .to(pText, {
          autoAlpha: 1,
          x: 0,
          duration: 0.4,
        })
        .to(rightContainerParentRef_1, {
          autoAlpha: 1,
          x: 0,
          duration: 0.4,
        })
        .to(foodBoxLeftSectionfirstImg, {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          ease: "power3.easeInOut",
          duration: 0.8,
          scale: 1,
        })
        .to(
          foodBoxLeftSectionSecondImg,
          {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            ease: "power3.easeInOut",
            duration: 0.8,
            scale: 1,
          },
          "<"
        )
        .to(foodBoxLeftSectionThirdImg, {
          autoAlpha: 1,
          x: 0,
          duration: 0.4,
          ease: "power2",
        })
        .to(foodBoxRightSectionHTxt, {
          autoAlpha: 1,
          x: 0,
          duration: 0.4,
        })
        .to(foodBoxRightSectionPTxt, {
          autoAlpha: 1,
          x: 0,
          duration: 0.4,
        })
        .to(rightContainerParentRef_2, {
          autoAlpha: 1,
          x: 0,
          duration: 0.4,
        })
        .to(secondFoodBoxLeftSectionfirstImg, {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          ease: "power3.easeInOut",
          duration: 0.8,
          scale: 1,
        })
        .to(
          secondFoodBoxLeftSectionSecondImg,
          {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            ease: "power3.easeInOut",
            duration: 0.8,
            scale: 1,
          },
          "<"
        )
        .to(secondFoodBoxLeftSectionThirdImg, {
          autoAlpha: 1,
          x: 0,
          duration: 0.4,
          ease: "power2",
        })
        .to(secondFoodBoxRightSectionHTxt, {
          autoAlpha: 1,
          x: 0,
          duration: 0.4,
        })
        .to(secondFoodBoxRightSectionPTxt, {
          autoAlpha: 1,
          x: 0,
          duration: 0.4,
        })
        .to(rightContainerParentRef_3, {
          autoAlpha: 1,
          x: 0,
          duration: 0.4,
        })
        .to(thirdFoodBoxLeftSectionfirstImg, {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          ease: "power3.easeInOut",
          duration: 0.8,
          scale: 1,
        })
        .to(
          thirdFoodBoxLeftSectionSecondImg,
          {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            ease: "power3.easeInOut",
            duration: 0.8,
            scale: 1,
          },
          "<"
        )
        .to(thirdFoodBoxLeftSectionThirdImg, {
          autoAlpha: 1,
          x: 0,
          duration: 0.4,
          ease: "power2",
        })
        .to(thirdFoodBoxRightSectionHTxt, {
          autoAlpha: 1,
          x: 0,
          duration: 0.4,
        })
        .to(thirdFoodBoxRightSectionPTxt, {
          autoAlpha: 1,
          x: 0,
          duration: 0.4,
        });
    }
  }, [isIntersecting]);

  return (
    <div className="highlights-parent">
      <section className="highlights" ref={currentSection}>
        <div className="left-content-highlight">
          <img src={svgIcon} alt="" />
          <h2 className="highlight-title">
            A few highlights <br /> from our menu
          </h2>
          <p>
            We cater for all dietary requirements, but here’s a glimpse at some
            of our diner’s favourites. Our menu is revamped every season.
          </p>
        </div>
        <div className="right-content-highlight">
          <div className="right-container-parent">
            <div className="food-box" ref={firstFoodBoxRef}>
              <div className="left">
                <img src={salmon} className="food-img" alt="" />
                <img src={salmonM} className="food-img-mobile" alt="" />
                <img src={svgIcon} className="s-icon" alt="" />
              </div>
              <div className="right">
                <h3>seared salmon fillet</h3>
                <p>
                  Our locally sourced salmon served with a refreshing buckwheat
                  summer salad.
                </p>
              </div>
            </div>
          </div>
          <div className="right-container-parent">
            <div className="food-box" ref={secondFoodBoxRef}>
              <div className="left">
                <img src={beef} className="food-img" alt="" />
                <img src={beefM} className="food-img-mobile" alt="" />
                <img src={svgIcon} className="s-icon" alt="" />
              </div>
              <div className="right">
                <h3>Rosemary Filet Mignon</h3>
                <p>
                  Our prime beef served to your taste with a delicious choice of
                  seasonal sides.
                </p>
              </div>
            </div>
          </div>
          <div className="right-container-parent">
            <div className="food-box" ref={thirdFoodBoxRef}>
              <div className="left">
                <img src={chocolate} className="food-img" alt="" />
                <img src={chocolateM} className="food-img-mobile" alt="" />
                <img src={svgIcon} className="s-icon" alt="" />
              </div>
              <div className="right">
                <h3>Summer Fruit Chocolate Mousse</h3>
                <p>
                  Creamy mousse combined with summer fruits and dark chocolate
                  shavings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Highlights;
