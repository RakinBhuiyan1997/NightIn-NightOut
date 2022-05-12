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
            setCreateDrink({ ...createDrink, game_name: e.target.value });
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
