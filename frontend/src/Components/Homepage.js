import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div>
      <TitleContainer>
        <NightIn>Night In</NightIn>
        <NightOut>Night Out</NightOut>
      </TitleContainer>

      <ChoiceContainer>
        <StyledLink to="/signin">
          <Button>Sign In</Button>
        </StyledLink>
        <StyledLink to="/signup">
          <Button>Sign up</Button>
        </StyledLink>
      </ChoiceContainer>
    </div>
  );
};

const TitleContainer = styled.div`
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;
const ChoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  bottom: 30%;
  margin-top: 100px;
`;

const NightIn = styled.p`
  color: white;
  position: relative;
  font-size: 30px;
  margin-bottom: -40px;
  margin-top: 10px;
  margin-left: 50px;
  -webkit-animation: glow 1s ease-in-out infinite alternate;
  -moz-animation: glow 1s ease-in-out infinite alternate;
  animation: glow 1s ease-in-out infinite alternate;
  @keyframes glow {
    from {
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073,
        0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
    }
    to {
      text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6,
        0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
    }
  }
`;

const NightOut = styled.p`
  position: relative;
  font-size: 30px;
  text-align: right;
  margin-right: 50px;
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

const Button = styled.button`
  width: 220px;
  height: 30px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

export default HomePage;
