import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import Loading from "./Loading";
import FavoriteButton from "./FavoriteButton";
import { NightContext } from "./NightContext";
const CreatedDrinks = () => {
  const [createdDrinks, setCreatedDrinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { currentUser, setCurrentUser } = useContext(NightContext);
  useEffect(() => {
    fetch("http://localhost:8000/api/drinks/createdDrinks")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCreatedDrinks(data.data);
        setLoading(false);
      });
  }, []);

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Box>
            <Card>
              {createdDrinks.map((val) => {
                //?. shorthand ternary. If it has the value, continue, if it doesnt, it just stops.
                const isFavorited = currentUser?.favoriteDrinks?.some(
                  (x) => x._id === val._id
                );
                return (
                  <div key={val._id}>
                    <h2>Name: {val.drink_name}</h2>
                    <h3>Alcholic: {val.alcoholic ? "yes" : "no"}</h3>
                    <h3>
                      Items Needed:
                      {val.ingredients.map((itm) => {
                        return (
                          <ul>
                            <li>{itm}</li>
                          </ul>
                        );
                      })}
                    </h3>
                    <p>Instructions: {val.instructions}</p>
                    <p>
                      Save this drink:{" "}
                      <FavoriteButton isFavorited={isFavorited} />
                    </p>
                  </div>
                );
              })}
            </Card>
          </Box>
        </div>
      )}
    </Container>
  );
};
const Container = styled.div`
  height: 100vh;
`;
const Card = styled.div``;
const Box = styled.div``;
export default CreatedDrinks;
