import React, { useEffect, useState } from "react";
import "./FamilyGatheringSection.scss";
import lines from "../../assets/images/patterns/pattern-lines.svg";
import gathering from "../../assets/images/homepage/family-gathering-desktop.jpg";
import specialEvents from "../../assets/images/homepage/special-events-desktop.jpg";
import socialEvents from "../../assets/images/homepage/social-events-desktop.jpg";
import gatheringT from "../../assets/images/homepage/family-gathering-tablet.jpg";
import specialEventsT from "../../assets/images/homepage/special-events-tablet.jpg";
import socialEventsT from "../../assets/images/homepage/social-events-tablet.jpg";
import gatheringM from "../../assets/images/homepage/family-gathering-mobile.jpg";
import specialEventsM from "../../assets/images/homepage/special-events-mobile.jpg";
import socialEventsM from "../../assets/images/homepage/social-events-mobile.jpg";
import svgIcon from "../../assets/images/patterns/pattern-divide.svg";
import Button from "../Button/Button";

const FamilyGatheringSection = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [index, setIndex] = useState(0);
  let distance;
  const fullScreenData = [
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

  const midScreenData = [
    {
      id: 0,
      heading: "Family Gathering",
      text: "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.",
      img: gatheringT,
    },
    {
      id: 1,
      heading: "Special Events",
      text: "Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.",
      img: specialEventsT,
    },
    {
      id: 2,
      heading: "Social Events",
      text: "Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.",
      img: socialEventsT,
    },
  ];

  const smallScreenData = [
    {
      id: 0,
      heading: "Family Gathering",
      text: "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.",
      img: gatheringM,
    },
    {
      id: 1,
      heading: "Special Events",
      text: "Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.",
      img: specialEventsM,
    },
    {
      id: 2,
      heading: "Social Events",
      text: "Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.",
      img: socialEventsM,
    },
  ];

  const categories = ["family gathering", "special events", "social events"];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]); // Include windowWidth in the dependency array

  useEffect(() => {
    if (index > fullScreenData.length - 1) {
      setIndex(0);
    }
  }, [index]);

  useEffect(() => {
    if (index > midScreenData.length - 1) {
      setIndex(0);
    }
  }, [index]);

  useEffect(() => {
    if (index > smallScreenData.length - 1) {
      setIndex(0);
    }
  }, [index]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(index + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [index]);

  if (windowWidth <= 730) {
    return (
      <section className="family-gathering">
        {smallScreenData.map((item, position) => {
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
                  <img
                    src={smallScreenData[index].img}
                    className="main-picture"
                    alt=""
                  />
                  <img
                    src={svgIcon}
                    className="svg"
                    style={{ top: `${distance}%` }}
                    alt=""
                  />
                </div>
                <div className="right-family-gathering">
                  <div className="inner-top">
                    <h2 className="enjoyable-title">
                      {smallScreenData[index].heading}
                    </h2>
                    <p>{smallScreenData[index].text}</p>
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
  } else if (windowWidth <= 1060) {
    return (
      <section className="family-gathering">
        {midScreenData.map((item, position) => {
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
                  <img
                    src={midScreenData[index].img}
                    className="main-picture"
                    alt=""
                  />
                  {/* <div
                    src={svgIcon}
                    className="cream-line"
                    // style={{ top: `${''}}%` }}
                    alt=""
                  ></div> */}
                </div>
                <div className="right-family-gathering">
                  <div className="inner-top">
                    <h2 className="enjoyable-title">
                      {midScreenData[index].heading}
                    </h2>
                    <p>{midScreenData[index].text}</p>
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
  }

  return (
    <section className="family-gathering">
      {fullScreenData.map((item, position) => {
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
                <img
                  src={fullScreenData[index].img}
                  className="main-picture"
                  alt=""
                />
                <img
                  src={svgIcon}
                  className="svg"
                  style={{ top: `${distance}%` }}
                  alt=""
                />
              </div>
              <div className="right-family-gathering">
                <div className="inner-top">
                  <h2 className="enjoyable-title">
                    {fullScreenData[index].heading}
                  </h2>
                  <p>{fullScreenData[index].text}</p>
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
