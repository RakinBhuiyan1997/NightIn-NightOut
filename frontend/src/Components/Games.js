import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { NightContext } from "./NightContext";
import Loading from "./Loading";
import FavoriteButton from "./FavoriteButton";
import { Link } from "react-router-dom";
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
        setGames(data.data);
        setLoading(false);
      });
  }, []);

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
        setCurrentUser(data.data);
      });
  };

  const handleClick = (e, game) => {
    e.preventDefault();
    const isFavorite = currentUser.favoriteGames.some(
      (val) => val._id === game._id
    );

    if (isFavorite) {
      deleteGame(game);
      return;
    }
    saveGame(game);
  };

  return (
    <div>
      {loading && <Loading />}
      {!loading && (
        <div>
          <StyledLink to="/nightin">
            <Button>Back to category</Button>
          </StyledLink>
          {games.map((val) => {
            //?. shorthand ternary. If it has the value, continue, if it doesnt, it just stops.
            const isFavorited = currentUser?.favoriteGames?.some(
              (x) => x._id === val._id
            );
            return (
              <CardBox key={val._id}>
                <GameTitle>Name: {val.game_name}</GameTitle>
                <h3>Players: {val.players}</h3>
                <h3>
                  Items Needed:
                  {val.items.map((itm, index) => {
                    return (
                      <ul key={index}>
                        <li>{itm}</li>
                      </ul>
                    );
                  })}
                </h3>
                <Instructions>Instructions: {val.instructions}</Instructions>
                <Span>
                  <FavoriteButton
                    isFavorited={isFavorited}
                    handleClick={(e) => handleClick(e, val)}
                  />
                </Span>
              </CardBox>
            );
          })}
        </div>
      )}
    </div>
  );
};

const GameTitle = styled.h2`
  color: white;
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

const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const Span = styled.span`
  text-align: center;
  margin-left: 180px;
  margin-bottom: 50px;
`;

const Instructions = styled.p`
  padding: 10px;
  font-size: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  position: relative;
  left: 70%;

  width: 10px;
  height: 30px;
`;

const Button = styled.button`
  background-color: transparent;
  width: 100px;
`;
export default Games;
