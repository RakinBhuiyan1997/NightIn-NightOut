import React, { useContext } from "react";
import styled from "styled-components";
import { NightContext } from "./NightContext";

const Profile = () => {
  const { currentUser } = useContext(NightContext);
};

export default Profile;
