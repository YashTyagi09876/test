import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from './Component/Navbar';
import Footer  from './Component/Footer'

const App = () => { 
  return (
    <Router>
          <Navbar/>
      <Routes>
        {/* Route Definitions */}
        <Route path="/" element={<Home />} />
      
        </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
