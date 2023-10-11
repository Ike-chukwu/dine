import React from "react";
import "./Highlights.scss";
import svgIcon from "../../assets/images/patterns/pattern-divide.svg";
import salmon from "../../assets/images/homepage/salmon-desktop-tablet.jpg";
import beef from "../../assets/images/homepage/beef-desktop-tablet.jpg";
import chocolate from "../../assets/images/homepage/chocolate-desktop-tablet.jpg";
import salmonM from "../../assets/images/homepage/salmon-mobile.jpg";
import beefM from "../../assets/images/homepage/beef-mobile.jpg";
import chocolateM from "../../assets/images/homepage/chocolate-mobile.jpg";

const Highlights = () => {
  
  return (
    <div className="highlights-parent">
      <section className="highlights">
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
            <div className="food-box">
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
            <div className="food-box">
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
            <div className="food-box">
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
