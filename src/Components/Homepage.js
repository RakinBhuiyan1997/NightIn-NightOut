import React from "react";
import styled from "styled-components";

const HomePage = () => {
  return (
    <>
      <Container>
        <TitleContainer>
          <NightIn>Night In</NightIn>
          <NightOut>Night Out</NightOut>
        </TitleContainer>

        <ChoiceContainer>
          <span>Choose The Vibe</span>
          <span>Night In</span>
          <span>Night Out</span>
        </ChoiceContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TitleContainer = styled.div`
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 20%;
  width: 80%;
  height: 10%;
  border: 5px solid black;
  background-image: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
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
  }
`;
const ChoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 30%;
`;

const NightIn = styled.p`
  position: relative;
  font-size: 30px;
  margin-bottom: -40px;
  margin-top: 10px;
  margin-left: 5px;
`;

const NightOut = styled.p`
  position: relative;
  font-size: 30px;
  text-align: right;
  margin-right: 5px;
`;

export default HomePage;
