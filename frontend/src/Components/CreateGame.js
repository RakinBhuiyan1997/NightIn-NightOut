import React, { useState, useContext } from "react";
import styled from "styled-components";
import { NightContext } from "./NightContext";
import { useNavigate } from "react-router-dom";
const CreateGame = () => {
  const { currentUser } = useContext(NightContext);
  const [createGame, setCreateGame] = useState({
    game_name: "",
    players: "",
    items: [],
    instructions: "",
    createdBy: currentUser.firstName,
  });
  const [userInput, setUserInput] = useState("");
  console.log(currentUser);

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const addGame = await fetch("/api/games/addCreatedGame", {
      method: "POST",
      body: JSON.stringify(createGame),
      headers: { "Content-Type": "application/json" },
    });
    navigate("/nightin/games");
  };

  const addItem = (e) => {
    e.preventDefault();
    let arr = createGame.items;
    arr.push(userInput);
    setCreateGame({ ...createGame, items: arr });
    setUserInput("");
  };
  console.log(createGame);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <label>Name of the Game</label>
        <input
          placeholder="enter name here"
          type="text"
          onChange={(e) => {
            setCreateGame({ ...createGame, game_name: e.target.value });
          }}
        />
        <label>How many players</label>
        <input
          placeholder="enter players here"
          type="text"
          onChange={(e) => {
            setCreateGame({ ...createGame, players: e.target.value });
          }}
        />
        <div>
          <label>Add list of items needed!</label>
          <input
            placeholder="enter item here"
            type="text"
            onChange={(e) => {
              setUserInput(e.target.value);
            }}
            value={userInput}
          />
          <button onClick={addItem}>Add item</button>
        </div>

        <label>How to play</label>
        <textarea
          placeholder="write instructions"
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
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default CreateGame;
