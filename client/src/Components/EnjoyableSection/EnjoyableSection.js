import React, { useEffect, useRef, useState } from "react";
import "./EnjoyableSection.scss";
import hills from "../../assets/images/homepage/enjoyable-place-desktop.jpg";
import hillsT from "../../assets/images/homepage/enjoyable-place-tablet.jpg";
import hillsM from "../../assets/images/homepage/enjoyable-place-mobile.jpg";
import svgIcon from "../../assets/images/patterns/pattern-divide.svg";
import { gsap } from "gsap";

const EnjoyableSection = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);
  const mainRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0].isIntersecting;
        setIsIntersecting(entry);
      },
      { threshold: 0.6 }
    );
    observer.observe(mainRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const pic_1 = mainRef.current.children[0];
    const pic_2 = mainRef.current.children[1];
    const pic_3 = mainRef.current.children[2];
    const pic_4 = mainRef.current.children[3];
    // console.log(pic);
    const svg = ref.current.children[0];
    const tilte = ref.current.children[1];
    const pText = ref.current.children[2];
    const timeline = gsap.timeline();
    // console.log(pic);
    if (isIntersecting) {
      timeline
        .to(
          pic_1,
          {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            duration: 1.6,
            ease: "power2.easeInOut",
          },
          "<"
        )
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
        .to(
          pic_4,
          {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            duration: 1.6,
            ease: "power2.easeInOut",
          },
          "<"
        )
        .to(
          svg,
          {
            autoAlpha: 1,
            x: 0,
            duration: 0.4,
            ease: "power2",
          },
          "-=0.2"
        )
        .to(tilte, {
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
    <section className="enjoyable" ref={mainRef}>
      <img src={hills} alt="" className="left-image" />
      <img src={hills} alt="" className="left-image-tablet" />
      <img src={hillsT} alt="" className="left-image-m" />
      <img src={hillsM} alt="" className="left-image-m2" />
      <div className="right-content" ref={ref}>
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
