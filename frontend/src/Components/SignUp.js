import React, { useContext } from "react";
import styled from "styled-components";
import { NightContext } from "./NightContext";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { addUser, setAddUser, currentUser, setCurrentUser } =
    useContext(NightContext);
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const addPerson = await fetch("/api/signup/adduser", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addUser),
    });

    const response = await addPerson.json();

    setCurrentUser(response.data);

    navigate("/selection");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Label>Email</Label>
        <Input
          type="email"
          placeholder="example@hotmail.com"
          onChange={(e) => {
            setAddUser({ ...addUser, email: e.target.value });
          }}
        />
        <Label>First Name</Label>
        <Input
          type="text"
          placeholder="Name"
          onChange={(e) => {
            setAddUser({ ...addUser, firstName: e.target.value });
          }}
        />
        <Label>Last Name</Label>
        <Input
          type="text"
          placeholder="Last Name"
          onChange={(e) => {
            setAddUser({ ...addUser, lastName: e.target.value });
          }}
        />
        <Label>Password</Label>
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setAddUser({ ...addUser, password: e.target.value });
          }}
        />
        <Button type="submit">Submit</Button>
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
  margin-top: 100px;
  left: 7.5%;
  gap: 10px;
  background: rgba(255, 255, 255, 0.3);
  padding: 3em;
  height: 450px;
  border-radius: 20px;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);

  transition: all 0.2s ease-in-out;
`;
const Label = styled.label``;
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
const Button = styled.button`
  width: 200px;
  height: 30px;
`;
export default SignUp;
