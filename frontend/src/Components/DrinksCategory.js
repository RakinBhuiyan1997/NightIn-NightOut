import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { Link } from "react-router-dom";

const DrinksCategory = () => {
  const { id } = useParams();
  const [drinks, setDrinks] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`/api/drinks/categories/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDrinks(data.data.drinks);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading === true && <Loading />}
      {loading === false && (
        <>
          <Container>
            <Title>What you gonna whip up tonight?</Title>
            {drinks.map((val) => {
              return (
                <Card>
                  <StyledLink to={`/nightin/drinks/drink/${val.idDrink}`}>
                    <Image src={val.strDrinkThumb} alt={val.strDrink} />

                    <DrinkName>{val.strDrink}</DrinkName>
                  </StyledLink>
                </Card>
              );
            })}
          </Container>
        </>
      )}
    </div>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
  text-align: center;
  -webkit-animation: glow 1s ease-in-out infinite alternate;
  -moz-animation: glow 1s ease-in-out infinite alternate;
  animation: glow 1s ease-in-out infinite alternate;
  @keyframes glow {
    from {
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073,
        0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
    }
    to {
      text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6,
        0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
    }
  }
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;
const Image = styled.img`
  width: 30vh;
  height: 30vh;
  border-radius: 50px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;

const DrinkName = styled.h2`
  color: black;
  text-align: center;
`;

export default DrinksCategory;
