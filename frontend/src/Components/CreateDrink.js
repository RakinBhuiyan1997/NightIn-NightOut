import React, { useState, useContext } from "react";
import styled from "styled-components";

const CreateDrink = () => {
  const [createDrink, setCreateDrink] = useState({
    _id: "",
    drink_name: "",
    alcoholic: "",
    ingredients: [],
    instructions: "",
  });
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const addItem = (e) => {
    e.preventDeafult();

    let arr = createDrink.ingredients;
    arr.push(userInput);
    setCreateDrink({ ...createDrink, ingredients: arr });
    setUserInput("");
  };

  return (
    <Container>
      <Form>
        <label>Enter drink name</label>
        <input placeholder="drink name" type="text" />
        <label>Alcoholic?</label>
        <select name="choice" id="choose">
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
        <input placeholder="instructions here" type="text" />
        <button>Create Drink!</button>
      </Form>
    </Container>
  );
};

const Container = styled.div``;
const Form = styled.form``;

export default CreateDrink;
