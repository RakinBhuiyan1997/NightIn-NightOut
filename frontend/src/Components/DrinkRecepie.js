import React, { useState, useContext } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Loading from "./Loading";

const DrinkRecepie = () => {
  const { id } = useParams();
  const [ingredients, setIngredients] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`/api/drinks/drink/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setIngredients(data.data.drinks[0]);
        setLoading(false);
      });
  }, []);
  Object.keys(ingredients).forEach((key) => {
    if (ingredients[key] === null) {
      delete ingredients[key];
    }
  });
  console.log(ingredients);

  return (
    <>
      {loading === true && <Loading />}
      {loading === false && (
        <Container>
          <Card>
            <Receipe>{ingredients.strDrink}</Receipe>
          </Card>
        </Container>
      )}
    </>
  );
};

const Container = styled.div``;
const Card = styled.div``;
const Receipe = styled.div``;

export default DrinkRecepie;
