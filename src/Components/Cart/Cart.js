import React from "react";
import "./Cart.scss";
import image from "../../assets/images/homepage/salmon-desktop-tablet.jpg";
import { useEffect } from "react";

const Cart = (props) => {

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = props.isCartActive ? "hidden" : "auto";
    }
  }, [props.isCartActive]);

  return (
    <div className={ props.isCartActive? "cart-parent activated" :"cart-parent"}>
      <h2 className="cart-title">Your food cart</h2>
      <div className="food-cart-details">
        <div className="food-item">
          <div className="number">
            <span className="cart-plus">+</span>
            <span className="cart-item-amount">1</span>
            <span className="cart-minus">-</span>
          </div>
          <img src={image} alt="" className="cart-food" />
          <div className="food-details">
            <h2 className="cart-food-name">Spaghetti</h2>
            <p className="cart-food-price">$40.00</p>
            <p className="rating">⭐⭐⭐⭐</p>
          </div>
          <i className="fas fa-trash"></i>
        </div>
      </div>
    </div>
  );
};

export default Cart;
