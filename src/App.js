import { Navbar } from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Menu from "./Pages/Menu";
import SearchedResult from "./Components/SearchedResult/SearchedResult";
import Search from "./Pages/Search";
import Reservation from "./Pages/Reservation";
import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import ViewFoodPage from "./Components/ViewFoodPage/ViewFoodPage";
import Favourites from "./Pages/Favourites";
import SignIn from "./Components/SignIn/SignIn";
import Checkout from "./Components/Checkout/Checkout";
import Protected from "./Components/Protected/Protected";

function App() {
  const [isCartActive, setCartActive] = useState(false);

  return (
    <div className="App">
      <Navbar setCartActive={setCartActive} isCartActive={isCartActive} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/:id" element={<ViewFoodPage />} />
        <Route path="/search/:id" element={<Search />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route
          path="/favourites"
          element={
            <Protected>
              <Favourites />
            </Protected>
          }
        />
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="/checkout"
          element={
            <Protected>
              <Checkout />
            </Protected>
          }
        />
      </Routes>
      <Cart isCartActive={isCartActive} setCartActive={setCartActive} />
    </div>
  );
}

export default App;
