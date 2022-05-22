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
  console.log("this is the current user", currentUser);

  const saveGame = async (gameVal) => {
    await fetch("http://localhost:8000/api/user/favorites/addGame", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ game: gameVal, currentUser }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.data);
        setCurrentUser(data.data);
      });
  };

  const deleteGame = async (gameVal) => {
    const game = await fetch(
      "http://localhost:8000/api/users/favorites/deleteGame",
      {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ game: gameVal, currentUser }),
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.data);
        setCurrentUser(data.data);
      });
  };

  const handleClick = (e, game) => {
    e.preventDefault();
    const isFavorite = currentUser.favoriteGames.some(
      (val) => val._id === game._id
    );
    console.log("this is the game data", game);
    console.log("this is the favorite boolean data", isFavorite);
    if (isFavorite) {
      deleteGame(game);
      return;
    }
    saveGame(game);
  };
  console.log(currentUser);
  return (
    <Container>
      {loading && <Loading />}
      {!loading && (
        <Box>
          <Card>
            {games.map((val) => {
              //?. shorthand ternary. If it has the value, continue, if it doesnt, it just stops.
              const isFavorited = currentUser?.favoriteGames?.some(
                (x) => x._id === val._id
              );
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
                    Save this game:{" "}
                    <FavoriteButton
                      isFavorited={isFavorited}
                      handleClick={(e) => handleClick(e, val)}
                    />
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
