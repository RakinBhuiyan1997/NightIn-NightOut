import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { NightContext } from "./NightContext";

const Games = () => {
  const { currentUser, setCurrentUser } = useContext(NightContext);

  useEffect(() => {
    fetch("http://localhost:8000/api/games")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <Container>
      <Card></Card>
    </Container>
  );
};

const Container = styled.div``;
const Card = styled.div``;

export default Games;
