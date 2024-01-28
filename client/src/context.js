import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./Firebase";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  let cartItemsFromLocalStorage = JSON.parse(
    localStorage.getItem("cart") || "[]"
  );

  const [searchedFood, setSearchedFood] = useState();
  const [cartItems, setCartItems] = useState(cartItemsFromLocalStorage);
  const [searchedResultLoading, setSearchedResult] = useState(false);
  const [favs, addToFavs] = useState([]);
  const [isPreloaderShowing, setPreloader] = useState(true);
  //function that adds food to cart
  const addToCartHandler = (addedFood) => {
    const isFoodInCart = cartItems.some((food) => food.id == addedFood.id);
    if (isFoodInCart) {
      const newArray = cartItems.map((item) => {
        if (item.id == addedFood.id) {
          return {
            ...item,
            amount: addedFood.amount,
            rating: addedFood.rating,
          };
        }
        return item;
      });
      setCartItems(newArray);
      return;
    }
    setCartItems([...cartItems, { ...addedFood, amount: addedFood.amount }]);
    console.log(cartItems);
  };

  //function that remove food from cart
  const reduceAmountInCart = (addedFood) => {
    if (addedFood.amount <= 1) {
      const newCartArray = cartItems.filter((food) => food.id !== addedFood.id);
      setCartItems(newCartArray);
      return;
    }
    const newArray = cartItems.map((food) => {
      if (food.id == addedFood.id) {
        return { ...addedFood, amount: food.amount - 1 };
      }
      return food;
    });
    setCartItems(newArray);
  };

  //increase amount in cart
  const increaseAmountInCart = (food) => {
    const newArray = cartItems.map((item) => {
      if (item.id == food.id) {
        return { ...food, amount: food.amount + 1 };
      }
      return item;
    });
    setCartItems(newArray);
  };

  //remove item from cart
  const removeItemFromCart = (addedFood) => {
    const filteredArray = cartItems.filter((item) => item.id !== addedFood.id);
    setCartItems(filteredArray);
  };

  //function that clears cart
  const clearCart = () => setCartItems([]);

  ///authentication
  const [user, setUser] = useState({});

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    // signInWithPopup(auth, provider)
    signInWithPopup(auth, provider);
  };
  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <AuthContext.Provider
      value={{
        searchedFood,
        setSearchedFood,
        clearCart,
        reduceAmountInCart,
        addToCartHandler,
        cartItems,
        increaseAmountInCart,
        removeItemFromCart,
        googleSignIn,
        logOut,
        user,
        favs,
        addToFavs,
        setCartItems,
        isPreloaderShowing,
        setPreloader,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
