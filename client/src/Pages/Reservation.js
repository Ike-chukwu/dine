import React from "react";
import ReservationHero from "../Components/BookReservation/ReservationHero";
import Footer from "../Components/Footer/Footer";
import Curve from "../Components/Curve/Curve";
import { gsap } from "gsap";
import Transition from "../Components/Transition/Transition";

const Reservation = () => {
  const reservationTl = gsap.timeline();

  return (
    <div>
      <Transition timeline={reservationTl} />
      <ReservationHero />
      <Curve />
      <Footer />
    </div>
  );
};

export default Reservation;
