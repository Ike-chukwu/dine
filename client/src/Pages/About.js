import React from "react";
import { RestaurantInfo } from "../Components/RestaurantInfo/RestaurantInfo";
import ReservationBanner from "../Components/ReservationBanner/ReservationBanner";
import Footer from "../Components/Footer/Footer";
import { gsap } from "gsap";
import Transition from "../Components/Transition/Transition";

const About = () => {
  const aboutTl = gsap.timeline();

  return (
    <div>
      <Transition timeline={aboutTl} />
      <RestaurantInfo />
      <ReservationBanner />
      <Footer />
    </div>
  );
};

export default About;
