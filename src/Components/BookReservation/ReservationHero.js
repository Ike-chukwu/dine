import React, { useState } from "react";
import "./ReservationHero.scss";
import Input from "../Input/Input";

const ReservationHero = () => {
  //state that saves all values from all input fields
  const [inputData, setInputData] = useState({
    Name: "",
    Email: "",
    Month: "",
    Day: "",
    Year: "",
    Hour: "",
    Minutes: "",
    DropDown: "AM",
  });

  //state that holds the number of people
  const [noOfPeople, setNoOfPeople] = useState(1);

  //monitor error in input field
  const [error, setError] = useState(false);

  //function is triggered when any input field's value is changed
  const inputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  //function that triggers the dropdown option when its clicked
  const dropDownHandler = (e) => {
    setInputData({
      ...inputData,
      DropDown: e.target.value,
    });
  };

  //stores data to be rendred in name and email input fields
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

  //stores data to be rendered in the date section
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

  //stores data to be rendered in the time section
  const timeDetails = [
    {
      id: Math.random(),
      type: "text",
      placeholder: "09",
      name: "Hour",
      required: true,
      errorMessage: "Please fill in a correct time",
      pattern: "^[0-9]+$",
    },
    {
      id: Math.random(),
      type: "text",
      placeholder: "00",
      name: "Minutes",
      required: true,
      errorMessage: "Please fill in a correct time",
      pattern: "^[0-9]+$",
    },
  ];

  //stores data to be rendered in the dropdown section
  const dropdownOptions = [
    { id: Math.random(), value: "AM" },
    { id: Math.random(), value: "PM" },
  ];

  //function that is trigerred when submit button is clicked
  const submitHandler = (e) => {
    e.preventDefault();
    const userDate = new Date(
      inputData.Year,
      inputData.Month - 1,
      inputData.Day,
      inputData.Hour,
      inputData.Minutes,
      inputData.Minutes
    );
    const currentDate = new Date();

    if (userDate <= currentDate) {
      setError(true);
    } else {
      setError(false);
    }
  };

  //function that increases the number of people
  const increament = () => {
    setNoOfPeople(noOfPeople + 1);
  };

  //function that reduces the number of people
  const decreament = () => {
    if (noOfPeople <= 1) {
      setNoOfPeople(1);
    } else {
      setNoOfPeople(noOfPeople - 1);
    }
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
                    key={item.name}
                    type={item.type}
                    onchange={inputChange}
                    value={inputData[item.name]}
                    {...item}
                    id={item.name}
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
                    key={item.name}
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
                {timeDetails.map((item) => {
                  return (
                    <Input
                      key={item.name}
                      type={item.type}
                      onchange={inputChange}
                      value={inputData[item.name]}
                      {...item}
                    />
                  );
                })}
                {/* <input type="text" maxLength={2} />
                <input type="text" maxLength={2} /> */}
              </div>
              <select
                name=""
                className="selection"
                id=""
                onClick={(e) => dropDownHandler(e)}
              >
                {dropdownOptions.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.value}
                  </option>
                ))}

                {/* <option value="PM">PM</option> */}
              </select>
            </div>
          </div>

          <div className="no-of-people">
            <span
              className="minus"
              onClick={decreament}
              style={{ cursor: "pointer" }}
            >
              -
            </span>
            <span className="amount-of-people">{noOfPeople} of people</span>
            <span
              className="plus"
              onClick={increament}
              style={{ cursor: "pointer" }}
            >
              +
            </span>
          </div>
          {error && (
            <p className="errorMessage">
              The details entered are incorrect! <br />
              Please check again!
            </p>
          )}
          <button className="reservation-booking-btn">
            make a reservation
          </button>
        </form>
      </section>
    </div>
  );
};

export default ReservationHero;