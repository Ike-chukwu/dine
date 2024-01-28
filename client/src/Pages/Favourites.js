import React, { useContext, useEffect, useState } from "react";
import "./Favourites.scss";
import { Link } from "react-router-dom";
import chef1 from "../../src/assets/images/staff/chef-2.jpg";
import { AuthContext } from "../context";
import Card from "../Components/Card/Card";
import { auth, db } from "../Firebase";
import { doc, getDoc } from "firebase/firestore";
import FavCard from "../Components/FavCard/FavCard";
import Loader from "../Components/Loader/Loader";
import Error from "../Components/Error/Error";
const Favourites = (props) => {
  const { favs, addToFavs } = useContext(AuthContext);
  const [fbFavs, setFbFavs] = useState();
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const userId = user.uid;
        const docRef = doc(db, "users", userId);

        getDoc(docRef)
          .then((docSnapshot) => {
            if (docSnapshot.exists()) {
              const userData = docSnapshot.data();
              if (userData.likes) {
                setFbFavs(userData.likes);
              }
            }
            setLoading(false);
          })
          .catch((error) => {
            setLoading(false);
            setErrorMessage(error.message);
          });
      } else {
        // Handle the case where the user is not authenticated (e.g., redirect or show login UI).
        setLoading(false);
      }
    });

    // Don't forget to unsubscribe when the component unmounts.
    return () => unsubscribe();
  }, []);

  if (loading) return <Loader />;
  if (errorMessage) return <Error>Sorry!You've reached a dead end</Error>;

  return (
    <>
      <section className="favourites">
        <h1 className="fav-title">favourite meals</h1>
        <div className="food-result">
          {fbFavs.length < 1 ? (
            <p className="empty-state">
              You currently do not have any favourite meal
            </p>
          ) : (
            fbFavs.map((favId) => (
              <>
                <FavCard id={favId} />
              </>
            ))
          )}
        </div>
      </section>
    </>
  );
};

export default Favourites;
