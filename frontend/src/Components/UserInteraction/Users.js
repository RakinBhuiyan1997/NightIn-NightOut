import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Loading from "../Loading";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:8000/api/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setUsers(data.data);
        setLoading(false);
      });
  }, []);

  const handleNavigate = (e, val) => {
    e.preventDefault();
    navigate(`/users/userprofile/${val._id}`);
  };

  console.log(users);
  return (
    <Container>
      {loading === true && <Loading />}
      {loading === false && (
        <div>
          {users.map((val) => {
            return (
              <Card
                onClick={(e) => {
                  handleNavigate(e, val);
                }}
              >
                <Name>{val.firstName}</Name>
              </Card>
            );
          })}
        </div>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: space-evenly;
  text-align: center;
  margin-top: 50px;
  height: 100vh;
`;

const Card = styled.div`
  width: 125px;
  height: 125px;
  border: solid 5px black;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.7);
`;
const Name = styled.h2`
  margin-top: 45px;
  text-transform: uppercase;
`;
const FavoriteDrinks = styled.div``;
const FavoriteGames = styled.div``;

export default Users;
