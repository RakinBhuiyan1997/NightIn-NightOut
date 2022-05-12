import React, { useState, useContext } from "react";
import styled from "styled-components";

const CreateGame = () => {
  const [createGame, setCreateGame] = useState({
    game_name: "",
    players: "",
    items: [],
    instructions: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <label>Name of the Drink</label>
        <input
          placeholder="enter name here"
          type="text"
          onChange={(e) => {
            setCreateGame({ ...createGame, game_name: e.target.value });
          }}
        />
        <label>Ingredients</label>
        <ul>
          <li>
            <input placeholder="ingredient 1" type="text" />{" "}
          </li>
          <li>
            <input placeholder="ingredient 2" type="text" />{" "}
          </li>
          <li>
            <input placeholder="ingredient 3" type="text" />{" "}
          </li>
          <li>
            <input placeholder="ingredient 4" type="text" />{" "}
          </li>
        </ul>

        <label>Instructions</label>
        <input
          placeholder="write intructions here"
          type="textarea"
          onChange={(e) => {
            setCreateGame({ ...createGame, instructions: e.target.value });
          }}
        />

        <button type="submit">Create Game!</button>
      </Form>
    </Container>
  );
};

const Container = styled.div``;
const Form = styled.form``;

export default CreateGame;
