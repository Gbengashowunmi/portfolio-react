import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import LandingPage from "./LandingPage";
import {  IoMoon, IoSunny } from "react-icons/io5";


function App() { 
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    console.log(darkMode);
    setDarkMode(!darkMode);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>

      <div className="dark_mode" onClick={toggleDarkMode}>
      {darkMode && (
        <style>
          {`
            :root {
              --clr-primary: rgb(11, 0, 14);
              --clr-secondary: #c2c4c5;
  --clr-grey: rgba(34, 33, 33, 0.178);
  --clr-primary-light: rgba(87, 83, 83, 0.178);
  --clr-white-2:rgb(15, 1, 19);
            

            }
          `}
        </style>
              )}

        {darkMode?<IoMoon className="react_icon" /> : <IoSunny className="react_icon"/>}
      </div>
    </div>
  );
}

export default App;
