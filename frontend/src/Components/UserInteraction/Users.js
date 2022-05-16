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
    <div>
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
    </div>
  );
};

const Card = styled.div`
  background-color: white;
`;
const Name = styled.h4``;
const FavoriteDrinks = styled.div``;
const FavoriteGames = styled.div``;

export default Users;
