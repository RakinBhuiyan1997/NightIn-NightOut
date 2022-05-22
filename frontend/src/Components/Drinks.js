import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Loading from "./Loading";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Drinks = () => {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/drinks/categories")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCategory(data.data.drinks);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading === true && <Loading />}
      {loading === false && (
        <Container>
          {category.map((val) => {
            return (
              <StyledLink
                to={`/nightin/drinks/${val.strCategory}`}
                key={val.strCategory}
              >
                <Card>
                  <Category>{val.strCategory}</Category>
                </Card>
              </StyledLink>
            );
          })}
          <CardCreate>
            <StyledLink to={"/nightin/drinks/createdDrinks"}>
              <Category>Created Drinks!</Category>
            </StyledLink>
          </CardCreate>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
`;

const CardCreate = styled.div`
  width: 125px;
  height: 125px;
  border: solid 5px black;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.7);
`;

const Card = styled.div`
  width: 125px;
  height: 125px;
  border: solid 5px black;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.7);
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;
const Category = styled.h3`
  margin-top: 45px;
  text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    #231557 0%,
    #44107a 29%,
    #ff1361 67%,
    #fff800 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
  display: inline-block;
  @keyframes textclip {
    to {
      background-position: 200% center;
    }
  }
`;
export default Drinks;
