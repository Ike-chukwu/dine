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

function App() {
  const [isCartActive, setCartActive] = useState(false);

  return (
    <div className="App">
      <Navbar setCartActive={setCartActive} isCartActive={isCartActive} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/:id" element={<Menu />} />
        <Route path="/search/:id" element={<Search />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
      <Cart isCartActive={isCartActive} setCartActive={setCartActive} />
    </div>
  );
}

export default App;
