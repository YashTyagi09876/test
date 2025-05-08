import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from './Component/Navbar';
import Footer  from './Component/Footer'
import Product from './Component/HomeComponent/Product'
import Product2 from './Component/HomeComponent/Product2'
const App = () => { 
  return (
    <Router>
          <Navbar/>
      <Routes>
        {/* Route Definitions */}
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product/>} />
        <Route path="/product2" element={<Product2/>} />
        </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
