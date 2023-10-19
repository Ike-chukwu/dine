import React, { useContext, useEffect, useState } from "react";
import "./Success.scss";
import { AuthContext } from "../context";
import { auth } from "../Firebase";
import Loader from "../Components/Loader/Loader";

const Success = () => {
  const [name, setName] = useState("");
  const { cartItmes, setCartItems } = useContext(AuthContext);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setName(user.displayName);
        setCartItems([]);
      } else {
      }
    });
    // Don't forget to unsubscribe when the component unmounts.
    return () => unsubscribe();
  }, []);

  if (!name) return <Loader />;
  return (
    <div className="success-wrapper">
      <div className="success-container">
        <div className="checkmark-div">
          <i className="fas fa-check"></i>
        </div>
        <span className="greeting">hi, {name}</span>
        <h2 className="big-text">Thanks for your purchase!</h2>
      </div>
    </div>
  );
};

export default Success;
