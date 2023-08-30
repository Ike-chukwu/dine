import { Navbar } from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
