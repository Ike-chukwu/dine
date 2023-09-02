import { Navbar } from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./Pages/Home";
import About from "./Pages/About";
import Menu from "./Pages/Menu";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/menu" element={<Menu/>}/>
      </Routes>
    </div>
  );
}

export default App;
