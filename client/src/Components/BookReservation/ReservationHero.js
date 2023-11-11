import React, { useEffect, useState } from "react";
import "./ReservationHero.scss";
import Input from "../Input/Input";
import emailjs from "@emailjs/browser";
import logo from "../../assets/images/logo.svg";
import { useNavigate } from "react-router-dom";

const ReservationHero = () => {
  const navigate = useNavigate();
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

  //monitor network error in booking
  const [isThereNetworkError, setNetworkError] = useState(false);

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

  //state that monitors the overlay message
  const [isOverlayActive, setOverlayActive] = useState(false);

  //stores data to be rendred in name and email input fields
  const personDetails = [
    {
      id: 0,
      type: "name",
      placeholder: "Name",
      name: "Name",
      required: true,
      errorMessage: "This field cannot be empty",
      pattern: "^(?!s*$).+",
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
    const formattedDate = userDate.toGMTString();

    const currentDate = new Date();
    const emailData = {
      Email: inputData.Email,
      Name: inputData.Name,
      formattedDate: formattedDate,
      number: noOfPeople,
      // Add other form fields as needed
    };

    if (new Date(formattedDate) <= new Date(currentDate)) {
      setError(true);
      console.log(error);
      return;
    } else {
      emailjs
        .send(
          "service_1i3c82l",
          "template_q1vt0hp",
          emailData,
          "1Pq9nLSwNG0YDaXgn"
        )
        .then(
          (response) => {
            setError(false);
            setNetworkError(false);
            setOverlayActive(true);
            console.log("Email sent successfully:", response);
            // You can also provide feedback to the user here
          },
          (error) => {
            setError(false);
            setNetworkError(true);
            setOverlayActive(true);
            console.error("Email could not be sent:", error);
            // Handle the error and provide feedback to the user
          }
        );
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

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = isOverlayActive ? "hidden" : "auto";
    }
  }, [isOverlayActive]);

  return (
    <div className="reservation-parent">
      {isOverlayActive && (
        <div className="confirm-reservation">
          <img src={logo} className="reserve-logo" alt="" />
          {isThereNetworkError ? (
            <p className="reserve-title">
              Email could not be sent😒. <br />
              Please try again
            </p>
          ) : (
            <p className="reserve-title">Email sent successfully😊!</p>
          )}
          {isThereNetworkError ? (
            <button
              onClick={() => {
                setOverlayActive(false);
                const html = document.querySelector("html");
                html.style.overflow = "auto";
              }}
            >
              Book reservation again
            </button>
          ) : (
            <button
              onClick={() => {
                setOverlayActive(false);
                navigate("/");
                const html = document.querySelector("html");
                html.style.overflow = "auto";
              }}
            >
              back to home
            </button>
          )}
        </div>
      )}
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
            <span className="amount-of-people">
              {noOfPeople == 1
                ? `${noOfPeople} person`
                : `${noOfPeople} people`}
            </span>
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
              Some details you've entered are incorrect! <br />
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
