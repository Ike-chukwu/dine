import React from "react";
import FoodCategory from "../Components/FoodCategory/FoodCategory";
import Footer from "../../src/Components/Footer/Footer";
import ReservationBanner from "../Components/ReservationBanner/ReservationBanner";

const Menu = () => {
  return (
    <div>
      <FoodCategory />
      <ReservationBanner />
      <Footer />
    </div>
  );
};

export default Menu;
