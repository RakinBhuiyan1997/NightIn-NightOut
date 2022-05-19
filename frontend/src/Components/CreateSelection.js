import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CreateSelection = () => {
  return (
    <Container>
      <div>
        <StyledLink to="/nightin/create/drink">
          <Card>
            <Create>Create a drink</Create>
          </Card>
        </StyledLink>
        <StyledLink to="/nightin/create/game">
          <Card>
            <Create>Create a game</Create>
          </Card>
        </StyledLink>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  text-align: center;
  margin-top: 100px;
  height: 100vh;
`;
const Card = styled.div`
  width: 125px;
  height: 125px;
  border: solid 5px black;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.7);
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Create = styled.h2`
  color: black;
  margin-top: 35px;
`;
export default CreateSelection;
