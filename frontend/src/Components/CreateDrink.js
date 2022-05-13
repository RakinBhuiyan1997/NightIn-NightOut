import React, { useState, useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const CreateDrink = () => {
  const [createDrink, setCreateDrink] = useState({
    drink_name: "",
    alcoholic: true,
    ingredients: [],
    instructions: "",
  });
  const [userInput, setUserInput] = useState("");
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const addDrink = await fetch("/api/drinks/addCreatedDrink", {
      method: "POST",
      body: JSON.stringify(createDrink),
      headers: { "Content-Type": "application/json" },
    });
  };

  const addItem = (e) => {
    e.preventDefault();
    let arr = createDrink.ingredients;
    arr.push(userInput);
    setCreateDrink({ ...createDrink, ingredients: arr });
    setUserInput("");
  };

  console.log(createDrink);
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <label>Enter drink name</label>
        <input
          placeholder="drink name"
          type="text"
          onChange={(e) => {
            setCreateDrink({ ...createDrink, drink_name: e.target.value });
          }}
        />
        <label>Alcoholic?</label>
        <select
          name="choice"
          id="choose"
          onChange={(e) => {
            console.log(e.target.value);
            setCreateDrink({ ...createDrink, alcholic: e.target.value });
          }}
        >
          <option value={true}>yes</option>
          <option value={false}>no</option>
        </select>
        <div>
          <label>Add list of ingredients needed!</label>
          <input
            placeholder="enter item here"
            type="text"
            value={userInput}
            onChange={(e) => {
              setUserInput(e.target.value);
            }}
          />
          <button onClick={addItem}>Add item</button>
        </div>
        <label>Instructions to make the drink</label>
        <input
          placeholder="instructions here"
          type="text"
          onChange={(e) => {
            setCreateDrink({ ...createDrink, instructions: e.target.value });
          }}
        />
        <button type="submit">Create Drink!</button>
      </Form>
    </Container>
  );
};

const Container = styled.div``;
const Form = styled.form``;

export default CreateDrink;
