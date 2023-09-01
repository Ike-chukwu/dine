import React from "react";
import "./ReservationBanner.scss";
import Button from "../Button/Button";



const ReservationBanner = () => {
  return (
    <div className="section-banner-parent">
      <section className="section-banner">
        <h1>Ready to make a reservation?</h1>
        <Button />
      </section>
    </div>
  );
};

export default ReservationBanner;
