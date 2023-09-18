import React, { useContext } from "react";
import "./Favourites.scss";
import { Link } from "react-router-dom";
import chef1 from "../../src/assets/images/staff/chef-2.jpg";
import { AuthContext } from "../context";
import Card from "../Components/Card/Card";

const Favourites = (props) => {
  const { favs, addToFavs } = useContext(AuthContext);

  return (
    <section className="favourites">
      <h1 className="fav-title">favourite meals</h1>
      <div className="food-result">
        {favs?.map((fav) => (
          <Card
            key={fav.id}
            imageSrc={fav.image}
            mealName={fav.name}
            id={fav.id}
          />
        ))}
        {/* <div className="food-box">
          <img src={chef1} alt="" />
          <h2 className="menuItem-name">Spaghetti</h2>
          <div className="btn-packs-action"></div>
          <Link to="/menu/1">
            <button className="view-meal">view meal</button>
          </Link>
          <button className="view-meal">remove</button>
        </div> */}
      </div>
    </section>
  );
};

export default Favourites;
