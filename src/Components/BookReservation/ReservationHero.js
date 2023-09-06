import React, { useState } from "react";
import "./ReservationHero.scss";
import Input from "../Input/Input";

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
      [name]: value,
    });
  };

  const personDetails = [
    {
      id: 0,
      type: "name",
      placeholder: "Name",
      name: "Name",
      required: true,
      errorMessage: "This field cannot be empty",
      pattern: "^.{6,}$",
    },
    {
      id: 1,
      type: "email",
      placeholder: "Email",
      name: "Email",
      required: true,
      errorMessage: "This email is incorrect",
    },
  ];

  const dateDetails = [
    {
      id: Math.random(),
      type: "text",
      placeholder: "MM",
      name: "Month",
      required: true,
      errorMessage: "Please fill in a correct month",
      pattern: "^[0-9]+$",
    },
    {
      id: Math.random(),
      type: "text",
      placeholder: "DD",
      name: "Day",
      required: true,
      errorMessage: "Please fill in a correct day",
      pattern: "^[0-9]+$",
    },
    {
      id: Math.random(),
      type: "text",
      placeholder: "YY",
      name: "Year",
      required: true,
      errorMessage: "Please fill in a correct year",
      pattern: "^[0-9]+$",
    },
  ];

  const dropdownOptions = [
    { id: 0, value: "AM" },
    { id: 1, value: "PM" },
  ];

  const submitHandler = (e) => {
    e.preventDefault();
  };

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
        <form action="" className="reservation-form" onSubmit={submitHandler}>
          <div className="personal-details">
            {personDetails.map((item) => {
              return (
                <>
                  <Input
                    className="fullDetails"
                    key={item.id}
                    type={item.type}
                    onchange={inputChange}
                    value={inputData[item.name]}
                    {...item}
                  />
                </>
              );
            })}
            {/* <input type="text" className="fullDetails" placeholder="Name" />
            <input type="text" className="fullDetails" placeholder="Email" /> */}
          </div>
          <div className="reservation-date">
            <h3 className="duration-title">Pick a date</h3>
            <div className="date-in-numbers">
              {dateDetails.map((item) => {
                return (
                  <Input
                    key={item.id}
                    type={item.type}
                    onchange={inputChange}
                    value={inputData[item.name]}
                    {...item}
                  />
                );
              })}
              {/* <input type="number" maxLength={2} />
              <input type="text" maxLength={2} />
              <input type="text" maxLength={4} /> */}
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

          <button className="reservation-booking-btn">
            make a reservation
          </button>
        </form>
      </section>
    </div>
  );
};

export default ReservationHero;
