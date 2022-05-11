import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { NightContext } from "./NightContext";
import Loading from "./Loading";
import FavoriteButton from "./FavoriteButton";
const Games = () => {
  const { currentUser, setCurrentUser } = useContext(NightContext);
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [favoriteGame, setFavoriteGame] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/api/games")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.data);
        setGames(data.data);
        setLoading(false);
      });
  }, []);

  const saveGame = async (e) => {
    e.preventDefault();
    // const game = await fetch("/api/user/favorites/addDrink", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     ingredients: ingredients,
    //     currentUser: currentUser,
    //   }),
    // });
    console.log(e.target.value);
  };

  return (
    <Container>
      {loading === true && <Loading />}
      {loading === false && (
        <Box>
          <Card>
            {games.map((val) => {
              return (
                <div key={val._id}>
                  <h2>Name: {val.game_name}</h2>
                  <h3>Players: {val.players}</h3>
                  <h3>
                    Items Needed:
                    {val.items.map((itm) => {
                      return (
                        <ul>
                          <li>{itm}</li>
                        </ul>
                      );
                    })}
                  </h3>
                  <p>Instructions: {val.instructions}</p>
                  <p>
                    Save this game: <FavoriteButton />
                  </p>
                </div>
              );
            })}
          </Card>
        </Box>
      )}
    </Container>
  );
};

const Container = styled.div``;
const Card = styled.div``;
const Box = styled.div``;
export default Games;
