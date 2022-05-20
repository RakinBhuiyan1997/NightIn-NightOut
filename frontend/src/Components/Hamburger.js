import React, { useContext } from "react";
import styled from "styled-components";
import "./CssFiles/Hamburger.css";
import { Link } from "react-router-dom";
import { NightContext } from "./NightContext";
import { useNavigate } from "react-router-dom";

const Hamburger = () => {
  const { currentUser, setCurrentUser } = useContext(NightContext);
  console.log(currentUser);
  return (
    <Container>
      {Object.keys(currentUser).length > 0 ? (
        <nav role="navigation">
          <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
              <li>
                <StyledLink to="/nightout">Night Out</StyledLink>
              </li>
              <li>
                <StyledLink to="/nightin">Night In</StyledLink>
              </li>
              <li>
                <StyledLink to="/nightin/drinks">Drinks</StyledLink>
              </li>
              <li>
                <StyledLink to="/nightin/games">Games</StyledLink>
              </li>
              <li>
                <StyledLink to="/nightin/create">Create</StyledLink>
              </li>
              <li>
                <StyledLink to="/user/favorites">Favorites</StyledLink>
              </li>
              <li>
                <StyledLink to="/profile"> Profile</StyledLink>
              </li>
              <li>
                <StyledLink to="/users">Users</StyledLink>
              </li>
            </ul>
          </div>
        </nav>
      ) : (
        <div></div>
      )}
    </Container>
  );
};
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-family: "Roboto Condensed", sans-serif;
  font-size: 25px;
`;
const Container = styled.div`
  height: 50px;
`;
export default Hamburger;
