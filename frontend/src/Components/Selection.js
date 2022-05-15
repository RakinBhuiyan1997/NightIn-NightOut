import React, { useContext, useState } from "react";
import styled from "styled-components";
import { NightContext } from "./NightContext";
import { Link } from "react-router-dom";
import Header from "./Header";
const Selection = () => {
  const { currentUser } = useContext(NightContext);

  return (
    <Container>
      <Question>Choose the vibe</Question>
      <StyledLink to="/nightin">
        <Button>Night In</Button>
      </StyledLink>
      <Button>Night Out</Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* height: 100vh; */
  /* background-image: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
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
  } */
`;

const Button = styled.button`
  width: 220px;
  height: 30px;
  border: none;
  outline: none;
  margin-top: 20px;
  top: 30%;
  color: #fff;
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  :before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }
  :active {
    color: #000;
  }
  :active:after {
    background: transparent;
  }
  :hover:before {
    opacity: 1;
  }
  :after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: black;
    left: 0;
    top: 0;
    border-radius: 10px;
  }
  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
`;

const Question = styled.p`
  font-size: 30px;
  text-align: center;
  position: relative;
  top: 10%;
`;

const StyledLink = styled(Link)``;

export default Selection;
