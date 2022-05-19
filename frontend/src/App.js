import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/Homepage";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Selection from "./Components/Selection";
import NightIn from "./Components/NightIn";
import Drinks from "./Components/Drinks";
import DrinksCategory from "./Components/DrinksCategory";
import DrinkRecepie from "./Components/DrinkRecepie";
import Games from "./Components/Games";
import CreateSelection from "./Components/CreateSelection";
import CreateDrink from "./Components/CreateDrink";
import CreateGame from "./Components/CreateGame";
import Profile from "./Components/UserInteraction/Profile";
import Header from "./Components/Header";
import Users from "./Components/UserInteraction/Users";
import UserProfile from "./Components/UserInteraction/UserProfile";
import GlobalStyles from "./Components/GlobalStyles";
function App() {
  return (
    <Router>
      <GlobalStyles />
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/selection" element={<Selection />} />
          <Route path="/nightin" element={<NightIn />} />
          <Route path="/nightin/drinks" element={<Drinks />} />
          <Route path="/nightin/drinks/:id" element={<DrinksCategory />} />
          <Route path="/nightin/drinks/drink/:id" element={<DrinkRecepie />} />
          <Route path="/nightin/games" element={<Games />} />
          <Route path="/nightin/create" element={<CreateSelection />} />
          <Route path="/nightin/create/drink" element={<CreateDrink />} />
          <Route path="/nightin/create/game" element={<CreateGame />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/userprofile/:_id" element={<UserProfile />} />
        </Routes>
      </Container>
    </Router>
  );
}

const Container = styled.div`
  background-image: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  height: 100vh;
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export default App;
