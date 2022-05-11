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
            <h1>What you gonna whip up tonight?</h1>
            {drinks.map((val) => {
              return (
                <Card>
                  <StyledLink to={`/nightin/drinks/drink/${val.idDrink}`}>
                    <Image src={val.strDrinkThumb} alt={val.strDrink} />

                    <h4>{val.strDrink}</h4>
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
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40vh;
  height: 40vh;
  border: 2px black solid;
  margin: 10px;
`;
const Image = styled.img`
  width: 30vh;
  height: 30vh;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default DrinksCategory;
