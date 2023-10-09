import React from "react";
import "./Footer.scss";
import logo from "../../assets/images/logo.svg";

const Footer = () => {
  return (
    <div className="footer-parent">
      <section className="footer" >
        <img src={logo} alt="" />
        <div className="right-footer-content">
          <div className="first-footer-content">
            <p>MARTHWAITE, SEDBERGH</p>
            <p>CUMBRIA</p>
            <p>+00 44 123 4567</p>
          </div>
          <div className="second-footer-content">
            <p>OPEN TIMES</p>
            <p>MON - FRI: 09:00 AM - 10:00 PM</p>
            <p>SAT - SUN: 09:00 AM - 11:30 PM</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
