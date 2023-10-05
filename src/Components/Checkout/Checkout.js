import React, { useContext, useState } from "react";
import "./Checkout.scss";
import hills from "../../assets/images/homepage/enjoyable-place-desktop.jpg";
import CheckoutInput from "./CheckoutInput/CheckoutInput";
import { AuthContext } from "../../context";

const Checkout = () => {
  const { user, cartItems } = useContext(AuthContext);
  const [inputDetails, setInputDetails] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phoneNumber: "",
  });
  const totalPrice = cartItems.reduce((price, item) => {
    return price + parseInt(item.amount) * parseInt(item.price);
  }, 0);

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
      name: "email",
      placeholder: "email",
      type: "email",
    },
    {
      id: 5,
      name: "phoneNumber",
      required: true,
      placeholder: "phone number",
      pattern: "^[0-9]+$",
      errorMessage: "This field should only contain numbers",
      type: "text",
    },
  ];

  return (
    <section className="checkout-parent">
      <h1 className="checkout-title">checkout</h1>
      <div className="checkout-form-parent">
        <form action="" className="checkout-form">
          <h3>personal details</h3>
          <div className="name-part">
            <CheckoutInput
              name={details[0].name}
              required={details[0].required}
              placeholder={details[0].placeholder}
              pattern={details[0].pattern}
              errorMessage={details[0].errorMessage}
              type={details[0].type}
              value={inputDetails.firstName}
              onChange={inputChangeHandler}
              className="focusedInput"
              pClassName="c-input-pack"
            />
            <CheckoutInput
              name={details[1].name}
              placeholder={details[1].placeholder}
              type={details[1].type}
              value={inputDetails.lastName}
              onChange={inputChangeHandler}
              className="focusedInput"
              pClassName="c-input-pack"
            />
          </div>
          <CheckoutInput
            name={details[2].name}
            required={details[2].required}
            placeholder={details[2].placeholder}
            pattern={details[2].pattern}
            errorMessage={details[2].errorMessage}
            type={details[2].type}
            value={inputDetails.address}
            onChange={inputChangeHandler}
            className="address"
            pClassName="address-parent"
          />
          <div className="name-part">
            <CheckoutInput
              name={details[3].name}
              placeholder={details[3].placeholder}
              type={details[3].type}
              readOnly="true"
              value={user.email}
              // onChange={inputChangeHandler}
              className="focusedInput"
              pClassName="c-input-pack"
            />
            <CheckoutInput
              name={details[4].name}
              required={details[4].required}
              placeholder={details[4].placeholder}
              pattern={details[4].pattern}
              errorMessage={details[4].errorMessage}
              type={details[4].type}
              value={inputDetails.phoneNumber}
              onChange={inputChangeHandler}
              className="focusedInput"
              pClassName="c-input-pack"
            />
          </div>
          <button className="check-continue">continue</button>
        </form>
        <div className="in-my-bag">
          <h3>in your cart</h3>
          <div className="more-shipping-details">
            <div className="good-subtitle">
              <span>subtotal</span>
              <span>${totalPrice}</span>
            </div>
            <div className="good-subtitle">
              <span>estimated delivery</span>
              <span>${((5 / 100) * totalPrice).toFixed(2)}</span>
            </div>
            <div className="good-subtitle">
              <span>tax</span>
              <span>${((3 / 100) * totalPrice).toFixed(2)}</span>
            </div>
            <div className="good-subtitle">
              <span>total</span>
              <span>
                ${(3 / 100) * totalPrice + (5 / 100) * totalPrice + totalPrice}
              </span>
            </div>
          </div>

          <div className="foods">
            <h4>Food list</h4>
            <div className="food-items">
              {cartItems.map((item) => (
                <div className="food-pack">
                  <img src={item.image} alt="" />
                  <div className="food-details-in-checkout">
                    <p className="food-name">{item.name}</p>
                    <span>price:${item.price}.00</span>
                  </div>
                </div>
              ))}
              {/* <div className="food-pack">
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
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
