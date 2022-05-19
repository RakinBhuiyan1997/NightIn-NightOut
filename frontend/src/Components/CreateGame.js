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
        <Input
          placeholder="enter name here"
          type="text"
          onChange={(e) => {
            setCreateGame({ ...createGame, game_name: e.target.value });
          }}
        />
        <label>How many players</label>
        <Input
          placeholder="enter players here"
          type="text"
          onChange={(e) => {
            setCreateGame({ ...createGame, players: e.target.value });
          }}
        />

        <label>Add list of items needed!</label>
        <Input
          placeholder="enter item here"
          type="text"
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
          value={userInput}
        />
        <Button onClick={addItem}>Add item</Button>

        <label>How to play</label>
        <Instructions
          placeholder="write instructions"
          onChange={(e) => {
            setCreateGame({ ...createGame, instructions: e.target.value });
          }}
        />
        <ButtonSubmit type="submit">Create Game!</ButtonSubmit>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 10%;
  left: 6.8%;
  gap: 10px;
  background: rgba(255, 255, 255, 0.3);
  padding: 3em;
  height: 550px;
  border-radius: 20px;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  transition: all 0.2s ease-in-out;
`;

const ButtonSubmit = styled.button`
  width: 200px;
  height: 50px;
`;
const Button = styled.button`
  width: 100px;
  height: 30px;
  margin-top: -20px;
  margin-bottom: 35px;
`;

const Input = styled.input`background: transparent;
width: 200px;
padding: 1em;
margin-bottom: 2em;
border: none;
border-left: 1px solid rgba(255, 255, 255, 0.3);
border-top: 1px solid rgba(255, 255, 255, 0.3);
border-radius: 5000px;
backdrop-filter: blur(5px);
box-shadow: 4px 4px 60px rgba(0,0,0,0.2);
color: #fff;
font-weight: 500;
transition: all 0.2s ease-in-out;
text-shadow: 2px 2px 4px rgba(0,0,0,0.2);

&:hover {
  background: rgba(255,255,255,0.1);
  box-shadow: 4px 4px 60px 8px rgba(0,0,0,0.2);
}
&:hover {
margin: 4px;
}
}
::placeholder {
font-weight: 400;
color: #fff;
text-shadow: 2px 2px 4px rgba(0,0,0,0.4);
}`;

const Instructions = styled.textarea`background: transparent;
width: 200px;
height: 200px;
padding: 1em;
margin-bottom: 2em;
border: none;
border-left: 1px solid rgba(255, 255, 255, 0.3);
border-top: 1px solid rgba(255, 255, 255, 0.3);
border-radius: 10px;
backdrop-filter: blur(5px);
box-shadow: 4px 4px 60px rgba(0,0,0,0.2);
color: #fff;
font-weight: 500;
transition: all 0.2s ease-in-out;
text-shadow: 2px 2px 4px rgba(0,0,0,0.2);

&:hover {
  background: rgba(255,255,255,0.1);
  box-shadow: 4px 4px 60px 8px rgba(0,0,0,0.2);
}
  &:active {
    background: rgba(255,255,255,0.2);
  }
}
}
&:hover {
margin: 4px;
}
}
::placeholder {
font-weight: 400;
color: #fff;
text-shadow: 2px 2px 4px rgba(0,0,0,0.4);
}`;

export default CreateGame;
