import React, { useState, createContext } from "react";

export const NightContext = createContext();

export const NightContextProvider = ({ children }) => {
  const [addUser, setAddUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    friends: [],
    favoriteDrinks: [],
    favoriteGames: [],
  });
  const [currentUser, setCurrentUser] = useState({});
  return (
    <NightContext.Provider
      value={{ addUser, setAddUser, currentUser, setCurrentUser }}
    >
      {children}
    </NightContext.Provider>
  );
};
