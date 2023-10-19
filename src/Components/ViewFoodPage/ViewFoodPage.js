import React, { useContext, useEffect, useState } from "react";
import "./ViewFoodPage.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import guard1 from "../../assets/images/staff/guard-1.jpg";
import ReservationBanner from "../ReservationBanner/ReservationBanner";
import Footer from "../Footer/Footer";
import Loader from "../../Components/Loader/Loader";
import Error from "../../Components/Error/Error";
import { AuthContext } from "../../context";
import { auth, db } from "../../Firebase";
import {
  FieldValue,
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";

const ViewFoodPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  let food;
  //state that stores the current food gotten from the id
  const [currentFood, setCurrentFood] = useState();
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState();
  const [itemAmount, setItemAmount] = useState(1);
  const [isInFav, setIsInFav] = useState(false);

  //genearting an array that has a lenth between 1 and 5
  const randomLength = Math.floor(Math.random() * 5) + 1; // Random length between 1 and 5
  const initialArray = Array(randomLength).fill(null); // Create an array of the random length
  const [rating, setRating] = useState(initialArray);

  const {
    clearCart,
    removeFromCartHandler,
    addToCartHandler,
    amountOfFood,
    cartItems,
    user,
    favs,
    addToFavs,
  } = useContext(AuthContext);

  //increase amount of food
  const increaseAmount = () => {
    setItemAmount(itemAmount + 1);
  };

  //decrease amount of food
  const decreaseAmount = () => {
    if (itemAmount <= 1) {
      setItemAmount(1);
      return;
    }
    setItemAmount(itemAmount - 1);
  };

  //function that adds food to favs
  const addToFavsHandler = async (food) => {
    //navigates a user to the sign in page if user isnt logged in
    if (user == null) {
      navigate("/signin");
      return;
    }

    const userId = user.uid;
    const docRef = doc(db, "users", userId);

    // Get the current data of the user's document
    const docSnapshot = await getDoc(docRef);
    if (docSnapshot.exists()) {
      const userData = docSnapshot.data();

      // Check if "likes" array exists, if not, create it
      if (!userData.likes) {
        userData.likes = [];
      }

      // Check if the food.id is not already in the "likes" array
      if (!userData.likes.includes(food.id)) {
        // Add the new item to the "likes" array using arrayUnion
        await updateDoc(docRef, {
          likes: arrayUnion(food.id),
        });

        // Update your local state accordingly
        addToFavs([...favs, food]);
        setIsInFav(true);
      } else {
        // The item is already in the "likes" array
        // You can handle this case as needed, e.g., show a message
        console.log("Item already in favorites");
      }
    } else {
      const initialUserData = {
        likes: [food.id], // You can initialize with the first liked item
        // Add other user data fields as needed
      };

      // Set the initial user data in Firestore
      await setDoc(docRef, initialUserData);

      // Update your local state accordingly
      addToFavs([...favs, food]);
      setIsInFav(true);

      console.log("User document created with initial data");
    }

    addToFavs([...favs, food]);
    setIsInFav(true);
  };

  //function that removes food from favs
  const removeFromFavsHandler = async (food) => {
    const userId = user.uid;
    const docRef = doc(db, "users", user.uid);
    await updateDoc(docRef, {
      likes: arrayRemove(food.id),
    });
    const newFavsArray = favs.filter((item) => item.id !== food.id);
    addToFavs(newFavsArray);
    setIsInFav(false);
  };

  //function that fetches food from api with the id of the food
  const fetchCurrentFoodWithId = async () => {
    try {
      const foodData = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      if (!foodData.ok) {
        throw "Api failed to fetched data";
      }
      const foodDataGotten = await foodData.json();
      const foodDetails = foodDataGotten.meals;
      setCurrentFood(foodDetails);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErrorMessage(error);
    }
  };

  useEffect(() => {
    fetchCurrentFoodWithId();
  }, [id]);

  useEffect(() => {
    const user = auth.currentUser;

    // If the user is authenticated, check if the item is in their favorites
    if (user) {
      const userId = user.uid;
      const userDocRef = doc(db, "users", userId);

      getDoc(userDocRef)
        .then((docSnapshot) => {
          if (docSnapshot.exists()) {
            const userData = docSnapshot.data();
            if (userData.likes && userData.likes.includes(id)) {
              setIsInFav(true);
            } else {
              setIsInFav(false);
            }
          }
        })
        .catch((error) => {
          console.error("Error checking user favorites:", error);
        });
    } else {
      // User is not authenticated, so always display "Add to Favorites"
      setIsInFav(false);
    }
  }, [isInFav]);

  if (loading) return <Loader />;
  if (errorMessage) return <Error>Sorry!You've reached a dead end</Error>;
  return (
    <div className="div view-peroduct-parent">
      <section className="view-product-container">
        <Link to="/menu">
          <span className="go-back">go back to menu</span>
        </Link>
        <div className="product-details">
          <div className="left-product-side">
            <img src={currentFood[0].strMealThumb} alt="" />
          </div>
          <div className="right-food-side">
            <h1 className="product-name">{currentFood[0].strMeal}</h1>
            <div className="product-category">
              <span className="category">price:</span>
              <span className="category-price">
                ${parseInt(currentFood[0].idMeal.slice(-2))}.00
              </span>
            </div>
            <div className="product-category">
              <span className="category">category:</span>
              <span className="category-name">
                {currentFood[0].strCategory}
              </span>
            </div>
            <div className="product-category">
              <span className="category">area:</span>
              <span className="category-name">{currentFood[0].strArea}</span>
            </div>
            <div className="product-category">
              <span className="category">main ingredients:</span>
              <span className="category-name">
                {currentFood[0].strTags
                  ? currentFood[0].strTags
                  : "No main ingredient"}
              </span>
            </div>
            <div className="product-category">
              <span className="category">Rating:</span>
              <span className="category-name">
                {rating.map((start) => (
                  <span>⭐</span>
                ))}
              </span>
            </div>
            <div className="btns">
              <div className="btn-inner">
                <div className="product-amount">
                  <div className="subtract" onClick={decreaseAmount}>
                    -
                  </div>
                  <div className="amount">{itemAmount}</div>
                  <div className="add" onClick={increaseAmount}>
                    +
                  </div>
                </div>
                <button
                  className="add-btn "
                  onClick={() =>
                    addToCartHandler({
                      id: id,
                      name: currentFood[0].strMeal,
                      price: currentFood[0].idMeal.slice(-2),
                      amount: itemAmount,
                      image: currentFood[0].strMealThumb,
                      rating,
                    })
                  }
                >
                  add to cart <i className="fas fa-shopping-cart"></i>
                </button>
              </div>
              {isInFav ? (
                <button
                  className="add-btn wishlist"
                  onClick={() =>
                    removeFromFavsHandler({
                      id: id,
                      name: currentFood[0].strMeal,
                      price: currentFood[0].idMeal.slice(-2),
                      amount: itemAmount,
                      image: currentFood[0].strMealThumb,
                      
                    })
                  }
                >
                  Remove from favourites <i className="fas fa-thumbs-down"></i>
                </button>
              ) : (
                <button
                  className="add-btn wishlist"
                  onClick={() =>
                    addToFavsHandler({
                      id: id,
                      name: currentFood[0].strMeal,
                      price: currentFood[0].idMeal.slice(-2),
                      amount: itemAmount,
                      image: currentFood[0].strMealThumb,
                    })
                  }
                >
                  Add to favourites <i className="fas fa-heart"></i>
                </button>
              )}
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
