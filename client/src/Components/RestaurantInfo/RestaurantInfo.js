import React from "react";
import "./RestaurantInfo.scss";
import picture from "../../assets/images/../../assets/images/homepage/beef-mobile@2x.jpg";
import pictureMobile from "../../assets/images/../../assets/images/homepage/chocolate-mobile.jpg";
import food from "../../assets/images/homepage/locally-sourced-tablet.jpg";
import foodMobile from "../../assets/images/homepage/locally-sourced-mobile.jpg";
import Button from "../Button/Button";
import Staff from "../Staff/Staff";

export const RestaurantInfo = () => {
  return (
    <div className="restaurant-info-parent">
      <div className="restaurant-info">
        <div className="restaurant-info-img">
          <img src={food} alt="" />
        </div>
        <div className="restaurant-info-text">
          <div className="content">
            <h1>Who are we?</h1>
            <p>
              We are an independent restaurant located in the community of
              Munich.North Germany. We are passionate about sustainably fresh
              dishes and our aim is to deliver the highest quality food and
              service in a relaxed, welcoming yet vibrant environment.
            </p>
            <p>
              Food fans will love our kitchen’s offbeat and creative approach to
              ingredients. Redmeat are firmly under the spotlight here at diner
              restaurant.Freshly made to your taste
            </p>
            <p>
              Our restaurant keeps thing unfussy yet classily comfortable, with
              muted green banquettes, wooden floors and a white marble bar.
            </p>
          </div>
        </div>
      </div>
      <div className="restaurant-info">
        <div className="restaurant-info-text">
          <div className="content">
            <h1>Our food</h1>
            <p>
              We showcase sustainable food mostly sourced from the American
              Isles with dishes that are designed to be shared. Red meat is
              served either classically or dressed with specific garnish to
              compliment the texture and flavours of the individual oysters.
            </p>
            <p>
              There are also a selection of snacks, smaller and larger plates
              which always features a whole chargrilled fish and at least one
              meat dish.
            </p>
            <p>
              We source the freshest fish possible and respect the quality of
              ingredients by letting the produce sing. Desserts are a short line
              up of cheese and two sweet treats.
            </p>
          </div>
        </div>
        <div className="restaurant-info-img">
          <img src={picture} alt="" />
        </div>
      </div>
      <Staff />
    </div>
  );
};
