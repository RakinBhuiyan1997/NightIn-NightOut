import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/Homepage";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Selection from "./Components/Selection";
import NightIn from "./Components/NightIn";
import Drinks from "./Components/Drinks";
import DrinksCategory from "./Components/DrinksCategory";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/selection" element={<Selection />} />
        <Route path="/nightin" element={<NightIn />} />
        <Route path="/nightin/drinks" element={<Drinks />} />
        <Route path="/nightin/drinks/:id" element={<DrinksCategory />} />
        {/* <Route path="nightin/drinks/drink/:id" element={} /> */}
      </Routes>
    </Router>
  );
}

export default App;
