import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/Homepage";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Selection from "./Components/Selection";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/selection" element={<Selection />} />
      </Routes>
    </Router>
  );
}

export default App;
