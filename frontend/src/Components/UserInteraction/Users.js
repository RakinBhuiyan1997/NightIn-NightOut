import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = true;

  useEffect(() => {
    fetch("http://localhost:8000/api/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setUsers(data);
        setLoading(true);
      });
  }, []);
};
