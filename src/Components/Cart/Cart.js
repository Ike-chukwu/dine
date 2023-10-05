import React, { useContext } from "react";
import "./Cart.scss";
import image from "../../assets/images/homepage/salmon-desktop-tablet.jpg";
import { useEffect } from "react";
import { AuthContext } from "../../context";
import { useNavigate } from "react-router-dom";

const Cart = (props) => {
  const {
    clearCart,
    reduceAmountInCart,
    addToCartHandler,
    amountOfFood,
    cartItems,
    increaseAmountInCart,
    removeItemFromCart,
    user,
  } = useContext(AuthContext);

  const totalPrice = cartItems.reduce((price, item) => {
    return price + parseInt(item.amount) * parseInt(item.price);
  }, 0);

  const navigate = useNavigate();

  //functions that navigates a user to checkout
  const handleCheckOut = () => {
    props.setCartActive(false);
    if (!user) {
      return navigate("/signin");
    }
    return navigate("/checkout");
  };

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = props.isCartActive ? "hidden" : "auto";
    }
  }, [props.isCartActive]);

  return (
    <div
      className={props.isCartActive ? "cart-parent activated" : "cart-parent"}
    >
      <h2 className="cart-title">Your food cart</h2>
      <div className="food-cart-details">
        {cartItems.map((item) => (
          <div className="food-item" key={item.name}>
            <div className="number">
              <span
                className="cart-plus"
                onClick={() => increaseAmountInCart(item)}
              >
                +
              </span>
              <span className="cart-item-amount">{item.amount}</span>
              <span
                className="cart-minus"
                onClick={() => reduceAmountInCart(item)}
              >
                -
              </span>
            </div>
            <img src={item.image} alt="" className="cart-food" />
            <div className="food-details">
              <h2 className="cart-food-name">{item.name}</h2>
              <p className="cart-food-price">${parseInt(`${item.price}`)}.00</p>
              <p className="rating">⭐⭐⭐⭐</p>
            </div>
            <i
              className="fas fa-trash"
              onClick={() => removeItemFromCart(item)}
            ></i>
          </div>
        ))}
        {/* <div className="food-item">
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
        </div> */}
        {totalPrice ? (
          <>
            <div className="total-price">
              <p className="total-title">total:</p>
              <span className="total-price">${totalPrice}.00</span>
            </div>
            <div className="checkout" onClick={handleCheckOut}>
              checkout
            </div>
          </>
        ) : (
          <p className="empty-cart">Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
