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
          <header>Choose a category</header>
          {category.map((val) => {
            return (
              <StyledLink to={`/nightin/drinks/${val.strCategory}`}>
                <Card>
                  <h4>{val.strCategory}</h4>
                </Card>
              </StyledLink>
            );
          })}
        </Container>
      )}
    </>
  );
};

const Container = styled.div``;
const Card = styled.div``;
const StyledLink = styled(Link)``;
export default Drinks;
