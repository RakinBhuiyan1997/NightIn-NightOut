import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { NightContext } from "../NightContext";
import Loading from "../Loading";
const UserProfile = () => {
  const { _id } = useParams();
  const { currentUser } = useContext(NightContext);
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("Add Friend");
  useEffect(() => {
    fetch(`http://localhost:8000/api/users/${_id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUserInfo(data.data);
        setLoading(false);
      });
  }, []);

  const handleClick = async (e) => {
    e.preventDefault();
    setText("Friends");
  };
  return (
    <div>
      {loading === true && <Loading />}
      {loading === false && (
        <div>
          <h2>{userInfo.firstName}</h2>

          <h4>
            Favorite Drinks:{" "}
            {userInfo.favoriteDrinks.map((val) => {
              return (
                <ul>
                  <li>{val.strDrink}</li>
                </ul>
              );
            })}
          </h4>
          <h4>
            Favorite Games:{" "}
            {userInfo.favoriteGames.map((val) => {
              return (
                <ul>
                  <li>{val.game_name}</li>
                </ul>
              );
            })}
          </h4>

          <div>
            <button onClick={handleClick}>{text}</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
