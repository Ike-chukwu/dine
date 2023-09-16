import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [searchedFood, setSearchedFood] = useState();
  const [searchedResultLoading, setSearchedResult] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  //function that adds food to cart
  const addToCartHandler = (addedFood) => {
    const isFoodInCart = cartItems.some((food) => food.id == addedFood.id);
    console.log(isFoodInCart);
    if (isFoodInCart) {
      const newArray = cartItems.map((item) => {
        if (item.id == addedFood.id) {
          return { ...item, amount: addedFood.amount };
        }
        return item;
      });
      setCartItems(newArray);
      return;
    }
    setCartItems([...cartItems, { ...addedFood, amount: addedFood.amount }]);
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

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  //function that clears cart
  const clearCart = () => setCartItems([]);


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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
