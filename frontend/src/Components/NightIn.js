import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const NightIn = () => {
  return (
    <Container>
      <StyledLink to="/nightin/drinks">
        <Drinks>
          <p>Drinks</p>
        </Drinks>
      </StyledLink>
      <StyledLink to="/nightin/games">
        <Games>
          <p>Games</p>
        </Games>
      </StyledLink>
      <StyledLink to="/nightin/favorites">
        <Favorites>
          <p>Favorites</p>
        </Favorites>
      </StyledLink>
      <StyledLink to="/nightin/create">
        <Create>
          <p>Create</p>
        </Create>
      </StyledLink>
    </Container>
  );
};

const Container = styled.div``;
const Drinks = styled.div``;
const Games = styled.div``;
const Favorites = styled.div``;
const Create = styled.div``;
const StyledLink = styled(Link)``;

export default NightIn;
