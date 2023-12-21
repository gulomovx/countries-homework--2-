import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleCountry from "./pages/SingleCountry";

const App = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path=":slug" element={<SingleCountry/>}/> */}
            <Route path="/" element={<Home />}/>
            <Route path="/country/:slug" element={<SingleCountry />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
