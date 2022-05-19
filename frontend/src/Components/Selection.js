import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Selection = () => {
  return (
    <Container>
      <Question>Choose the vibe</Question>
      <Link to="/nightin">
        <Button>Night In</Button>
      </Link>
      <Button>Night Out</Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 140px;
  height: 100vh;
`;

const Button = styled.button`
  width: 220px;
  height: 30px;
  margin-top: 80px;
`;

const Question = styled.p`
  color: whitesmoke;
  font-size: 30px;
  text-align: center;
  -webkit-animation: glow 1s ease-in-out infinite alternate;
  -moz-animation: glow 1s ease-in-out infinite alternate;
  animation: glow 1s ease-in-out infinite alternate;
  @keyframes glow {
    from {
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073,
        0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
    }
    to {
      text-shadow: 0 0 20px #fff, 0 0 30px #fd1c03, 0 0 40px #fd1c03,
        0 0 50px #fd1c03, 0 0 60px #fd1c03, 0 0 70px #fd1c03, 0 0 80px #fd1c03;
    }
  }
`;

export default Selection;
