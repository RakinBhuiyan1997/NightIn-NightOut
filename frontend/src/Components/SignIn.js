import React, { useContext, useState } from "react";
import styled from "styled-components";
import { NightContext } from "./NightContext";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const { currentUser, setCurrentUser } = useContext(NightContext);
  const [signIn, setSignIn] = useState({ email: "", password: "" });

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("test");
    const findUser = await fetch("/api/signin/getUser", {
      method: "POST",
      body: JSON.stringify(signIn),
      headers: { "Content-Type": "application/json" },
    });

    const result = await findUser.json();
    setCurrentUser(result.data);

    navigate("/selection");
  };
  console.log(currentUser);
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="email"
          type="email"
          onChange={(e) => {
            setSignIn({ ...signIn, email: e.target.value });
          }}
        />
        <Input
          placeholder="password"
          type="password"
          onChange={(e) => {
            setSignIn({ ...signIn, password: e.target.value });
          }}
        />
        <button type="submit">Submit</button>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 20%;
  left: 7.5%;
  gap: 10px;
  background: rgba(255, 255, 255, 0.3);
  padding: 3em;
  height: 170px;
  border-radius: 20px;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  box-shadow: 20px 20px 40px -6px;
  transition: all 0.2s ease-in-out;
`;
const Input = styled.input` background: transparent;
width: 200px;
padding: 1em;
margin-bottom: 2em;
border: none;
border-left: 1px solid rgba(255, 255, 255, 0.3);
border-top: 1px solid rgba(255, 255, 255, 0.3);
border-radius: 5000px;
backdrop-filter: blur(5px);
box-shadow: 4px 4px 60px rgba(0,0,0,0.2);
color: #fff;
font-weight: 500;
transition: all 0.2s ease-in-out;
text-shadow: 2px 2px 4px rgba(0,0,0,0.2);

&:hover {
  background: rgba(255,255,255,0.1);
  box-shadow: 4px 4px 60px 8px rgba(0,0,0,0.2);
}

&[type="email"],
&[type="password"] {
  
  &:focus {
    background: rgba(255,255,255,0.1);
    box-shadow: 4px 4px 60px 8px rgba(0,0,0,0.2);
  }
}

&[type="button"] {
  margin-top: 10px;
  width: 150px;
  font-size: 1rem;
  
  &:hover {
    cursor: pointer;
  }
  
  &:active {
    background: rgba(255,255,255,0.2);
  }
}
}

&:hover {
margin: 4px;
}
}

::placeholder {

font-weight: 400;
color: #fff;
text-shadow: 2px 2px 4px rgba(0,0,0,0.4);
}`;

export default SignIn;
