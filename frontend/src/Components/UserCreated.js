import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const UserCreated = () => {
  return (
    <Container>
      <Card>
        <StyledLink>UserCreatedDrinks</StyledLink>
      </Card>
    </Container>
  );
};

const StyledLink = styled(Link)``;
const Card = styled.div``;

export default UserCreated;
