import React, { useState, useContext } from "react";
import styled from "styled-components";

const CreatDrink = () => {
  return (
    <Container>
      <Form>
        <label>Name of the Drink</label>
        <input placeholder="enter name here" type="text" />
        <label>Ingredients</label>
        <ul>
          <li></li>
        </ul>
      </Form>
    </Container>
  );
};
