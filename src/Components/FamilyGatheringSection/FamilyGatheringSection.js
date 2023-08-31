import React, { useEffect, useState } from "react";
import "./FamilyGatheringSection.scss";
import lines from "../../assets/images/patterns/pattern-lines.svg";
import gathering from "../../assets/images/homepage/family-gathering-desktop.jpg";
import specialEvents from "../../assets/images/homepage/special-events-desktop.jpg";
import socialEvents from "../../assets/images/homepage/social-events-desktop.jpg";
import svgIcon from "../../assets/images/patterns/pattern-divide.svg";
import Button from "../Button/Button";

const FamilyGatheringSection = () => {
  const [index, setIndex] = useState(0);
  let distance;
  const data = [
    {
      id: 0,
      heading: "Family Gathering",
      text: "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.",
      img: gathering,
    },
    {
      id: 1,
      heading: "Special Events",
      text: "Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.",
      img: specialEvents,
    },
    {
      id: 2,
      heading: "Social Events",
      text: "Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.",
      img: socialEvents,
    },
  ];

  const categories = ["family gathering", "special events", "social events"];

  useEffect(() => {
    if (index > data.length - 1) {
      setIndex(0);
    }
  }, [index]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(index + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <section className="family-gathering">
      {data.map((item, position) => {
        if (index == position) {
          if (index == 0) {
            distance = 74;
          } else if (index == 1) {
            distance = 83;
          } else if (index == 2) {
            distance = 92;
          }
          return (
            <>
              <div className="left-family-gathering" key={position}>
                <img src={lines} className="lines" alt="" />
                <img src={data[index].img} className="main-picture" alt="" />
                <img
                  src={svgIcon}
                  className="svg"
                  style={{ top: `${distance}%` }}
                  alt=""
                />
              </div>
              <div className="right-family-gathering">
                <div className="inner-top">
                  <h2 className="enjoyable-title">{data[index].heading}</h2>
                  <p>{data[index].text}</p>
                  <Button />
                </div>
                <div className="inner-bottom">
                  {categories.map((cat, number) => {
                    if (number == index) {
                      return <p className="category active">{cat}</p>;
                    }
                    return <p className="category">{cat}</p>;
                  })}
                </div>
              </div>
            </>
          );
        }
      })}
    </section>
  );
};

export default FamilyGatheringSection;
