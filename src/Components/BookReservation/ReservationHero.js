import React, { useState } from "react";
import "./ReservationHero.scss";

const ReservationHero = () => {
  const [inputData, setInputData] = useState({
    Name: "",
    Email: "",
    Month: "",
    Day: "",
    Year: "",
  });

  const inputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setInputData({
      ...inputData,
      name: value,
    });
  };

  const personDetails = [
    {
      id: 0,
      type: "name",
      placeholder: "Name",
      name: "Name",
      required:true,
      errorMessage: "This field cannot be empty",
      pattern: "/^s*$/",
    },
    {
      id: 1,
      type: "email",
      placeholder: "Email",
      name: "Email",
      required:true,
      errorMessage: "This field cannot be empty",
      pattern: "/^s*$/",
    },
  ];

  const dateDetails = [
    {
      id: 0,
      type: "number",
      placeholder: "MM",
      name: "Month",
      required:true,
      errorMessage: "Please fill in a correct month",
      pattern: "/^(1[3-9]|[2-9]d|d{3,})$/",
      maxLength: "2",
    },
    {
      id: 1,
      type: "number",
      placeholder: "DD",
      name: "Day",
      required:true,
      errorMessage: "Please fill in a correct day",
      pattern: "/^(3[2-9]|[4-9]d|d{3,})$/",
      maxLength: "2",
    },
    {
      id: 2,
      type: "number",
      placeholder: "YY",
      name: "Year",
      required:true,
      errorMessage: "Please fill in a correct year",
      maxLength: "4",
    },
  ];

  const dropdownOptions = [
    { id: 0, value: "AM" },
    { id: 1, value: "PM" },
  ];

  return (
    <div className="reservation-parent">
      <section className="reservation-container">
        <div className="left-reservation">
          <h1 className="reservation-title">reservations</h1>
          <p className="reservation-testContent">
            We can’t wait to host you. If you have any special requirements
            please feel free to call on the phone number below. We’ll be happy
            to accommodate you.
          </p>
        </div>
        <form action="" className="reservation-form">
          <div className="personal-details">
            <input type="text" className="fullDetails" placeholder="Name" />
            <input type="text" className="fullDetails" placeholder="Email" />
          </div>
          <div className="reservation-date">
            <h3 className="duration-title">Pick a date</h3>
            <div className="date-in-numbers">
              <input type="text" maxLength={2} />
              <input type="text" maxLength={2} />
              <input type="text" maxLength={4} />
            </div>
          </div>
          <div className="reservation-timee">
            <h3 className="duration-title">Pick a time</h3>
            <div className="date-in-numbers">
              <div className="time">
                <input type="text" maxLength={2} />
                <input type="text" maxLength={2} />
              </div>
              <select name="" className="selection" id="">
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </div>
          </div>

          <div className="no-of-people">
            <span className="minus">-</span>
            <span className="amount-of-people">1 people</span>
            <span className="plus">+</span>
          </div>


          <button className="reservation-booking-btn">make a reservation</button>
        </form>
      </section>
    </div>
  );
};

export default ReservationHero;
