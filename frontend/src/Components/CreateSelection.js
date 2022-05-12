import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CreateSelection = () => {
  return (
    <Container>
      <div>
        <StyledLink to="/nightin/create/drink">
          <Card>
            <h2>Create a drink</h2>
          </Card>
        </StyledLink>
        <StyledLink to="/nightin/create/game">
          <Card>
            <h2>Create a game</h2>
          </Card>
        </StyledLink>
      </div>
    </Container>
  );
};

const Container = styled.div``;
const Card = styled.div``;
const StyledLink = styled(Link)``;

export default CreateSelection;
