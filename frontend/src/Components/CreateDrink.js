import React, { useState, useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const CreateDrink = () => {
  const [createDrink, setCreateDrink] = useState({
    drink_name: "",
    alcoholic: true,
    ingredients: [],
    instructions: "",
  });
  const [userInput, setUserInput] = useState("");
  const [reviewDrink, setReviewDrink] = useState(false);

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const addDrink = await fetch("/api/drinks/addCreatedDrink", {
      method: "POST",
      body: JSON.stringify(createDrink),
      headers: { "Content-Type": "application/json" },
    });
    navigate("/nightin/drinks/createdDrinks");
  };

  const addItem = (e) => {
    e.preventDefault();
    let arr = createDrink.ingredients;
    arr.push(userInput);
    setCreateDrink({ ...createDrink, ingredients: arr });
    setUserInput("");
  };

  return (
    <div>
      {reviewDrink ? (
        <Container>
          <h1>{createDrink.drink_name}</h1>
          <span>
            Ingredients:{" "}
            {createDrink.ingredients.map((val) => {
              return (
                <ul>
                  <li>{val}</li>
                </ul>
              );
            })}
          </span>
          <span>{createDrink.instructions}</span>
          <ButtonEdit
            onClick={(e) => {
              e.preventDefault(e);
              setReviewDrink(false);
            }}
          >
            Edit Drink
          </ButtonEdit>

          <ButtonCreate
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Create Drink
          </ButtonCreate>
        </Container>
      ) : (
        <Container>
          <Form>
            <label>Enter drink name</label>
            <Input
              placeholder="drink name"
              type="text"
              onChange={(e) => {
                setCreateDrink({ ...createDrink, drink_name: e.target.value });
              }}
            />
            <label>Alcoholic?</label>
            <select
              name="choice"
              id="choose"
              onChange={(e) => {
                setCreateDrink({ ...createDrink, alcholic: e.target.value });
              }}
            >
              <option value={true}>yes</option>
              <option value={false}>no</option>
            </select>

            <label>Add list of ingredients needed!</label>
            <Input
              placeholder="enter item here"
              type="text"
              value={userInput}
              onChange={(e) => {
                setUserInput(e.target.value);
              }}
            />
            <Button onClick={addItem}>Add item</Button>

            <label>Instructions to make the drink</label>
            <Instructions
              placeholder="instructions here"
              type="text"
              onChange={(e) => {
                setCreateDrink({
                  ...createDrink,
                  instructions: e.target.value,
                });
              }}
            />
            <ButtonReview
              onClick={(e) => {
                e.preventDefault(e);
                setReviewDrink(true);
              }}
            >
              Reveiw Drink
            </ButtonReview>
          </Form>
          <ButtonBack onClick={() => navigate("/nightin/create")}>
            Back to Create Option
          </ButtonBack>
        </Container>
      )}
    </div>
  );
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 10%;
  left: 6.8%;
  gap: 10px;
  background: rgba(255, 255, 255, 0.3);
  padding: 3em;
  height: 550px;

  border-radius: 20px;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  transition: all 0.2s ease-in-out;
`;
const ButtonEdit = styled.button`
  width: 200px;
  height: 30px;
  margin-top: 50px;
`;
const ButtonCreate = styled.button`
  width: 200px;
  height: 30px;
  margin-top: 50px;
`;
const ButtonReview = styled.button`
  width: 200px;
  height: 50px;
`;

const ButtonBack = styled.button`
  width: 200px;
  height: 30px;
  margin-top: 50px;
`;

const Button = styled.button`
  width: 100px;
  height: 30px;
  margin-top: -20px;
  margin-bottom: 35px;
`;

const Input = styled.input`background: transparent;
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
&:hover {
margin: 4px;
}
}
::placeholder {
font-weight: 400;
color: #fff;
text-shadow: 2px 2px 4px rgba(0,0,0,0.4);
}`;

const Instructions = styled.textarea`background: transparent;
width: 200px;
height: 200px;
padding: 1em;
margin-bottom: 2em;
border: none;
border-left: 1px solid rgba(255, 255, 255, 0.3);
border-top: 1px solid rgba(255, 255, 255, 0.3);
border-radius: 10px;
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
export default CreateDrink;
