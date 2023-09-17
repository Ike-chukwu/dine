import React, { useState } from "react";
import "./Checkout.scss";
import hills from "../../assets/images/homepage/enjoyable-place-desktop.jpg";


const Checkout = () => {
  const [inputDetails, setInputDetails] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phoneNumber: "",
  });

  const inputChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputDetails({
      ...inputDetails,
      [name]: value,
    });
  };

  const details = [
    {
      id: 1,
      name: "firstName",
      required: true,
      placeholder: "first name",
      pattern: "^(?!s*$).+",
      errorMessage: "This field cannot be empty",
      type: "text",
    },
    {
      id: 2,
      name: "lastName",
      placeholder: "last name",
      pattern: "^(?!s*$).+",
      type: "text",
    },
    {
      id: 3,
      name: "address",
      required: true,
      placeholder: "address",
      pattern: "^(?!s*$).+",
      errorMessage: "This field cannot be empty",
      type: "text",
    },
    {
      id: 4,
      name: "phoneNumber",
      required: true,
      placeholder: "phone number",
      pattern: "/^[0-9]+$/",
      errorMessage: "This field should only contain numbers",
      type: "number",
    },
  ];

  return (
    <section className="checkout-parent">
      <h1 className="checkout-title">checkout</h1>
      <div className="checkout-form-parent">
        <form action="" className="checkout-form">
          <h3>personal details</h3>
          <div className="name-part">
            <input type="text" />
            <input type="text" />
          </div>
          <input type="text" className="address" />
          <div className="more-personal-details">
            <input type="text" />
            <input type="text" />
          </div>
        </form>
        <div className="in-my-bag">
          <h3>in your cart</h3>
          <div className="more-shipping-details">
            <div className="good-subtitle">
              <span>subtotal</span>
              <span>$380.00</span>
            </div>
            <div className="good-subtitle">
              <span>estimated delivery</span>
              <span>$3.00</span>
            </div>
            <div className="good-subtitle">
              <span>total</span>
              <span>$380.00</span>
            </div>
          </div>

          <div className="foods">
            <h4>Food list</h4>
            <div className="food-items">
              <div className="food-pack">
                <img src={hills} alt="" />
                <div className="food-details-in-checkout">
                  <p className="food-name">fish</p>
                  <span>price:</span>
                </div>
              </div>
              <div className="food-pack">
                <img src={hills} alt="" />
                <div className="food-details-in-checkout">
                  <p className="food-name">fish</p>
                  <span>price:</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
