import React from "react";
import "./ViewFoodPage.scss";
import { Link, useParams } from "react-router-dom";
import guard1 from "../../assets/images/staff/guard-1.jpg";
import ReservationBanner from "../ReservationBanner/ReservationBanner";
import Footer from "../Footer/Footer";

const ViewFoodPage = () => {
  const { id } = useParams();

  return (
    <div className="div view-peroduct-parent">
      <section className="view-product-container">
        <Link to='/menu'>
          <span className="go-back">go back</span>
        </Link>

        <div className="product-details">
          <div className="left-product-side">
            <img src={guard1} alt="" />
          </div>
          <div className="right-food-side">
            <h1 className="product-name">Sphagetti Bolognese</h1>
            <div className="product-category">
              <span className="category">price:</span>
              <span className="category-price">$20.00</span>
            </div>
            <div className="product-category">
              <span className="category">category:</span>
              <span className="category-name">beef</span>
            </div>
            <div className="product-category">
              <span className="category">area:</span>
              <span className="category-name">italian</span>
            </div>
            <div className="product-category">
              <span className="category">main ingredients:</span>
              <span className="category-name">pasta, meat</span>
            </div>
            <div className="btns">
              <div className="product-amount">
                <div className="subtract">-</div>
                <div className="amount">1</div>
                <div className="add">+</div>
              </div>
              <button className="add-btn ">
                add to cart <i className="fas fa-shopping-cart"></i>
              </button>
              <button className="add-btn wishlist">
                Add to wishlist <i className="fas fa-heart"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <ReservationBanner />
      <Footer />
    </div>
  );
};

export default ViewFoodPage;
