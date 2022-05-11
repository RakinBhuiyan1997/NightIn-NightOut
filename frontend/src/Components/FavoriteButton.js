import React, { useState } from "react";
import styled from "styled-components";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

//This is the favorite button component.
const FavoriteButton = ({ handleClick }) => {
  const [liked, setLiked] = useState(false);

  const like = (e) => {
    if (liked === false) {
      setLiked(true);
    } else {
      setLiked(false);
    }
    handleClick(e);
  };
  return (
    <Button onClick={like}>
      {/* When the user clicks like, the heart Icon is switched to a filled in heart icon. This will switch back when the user clicks on the filled heart again. */}
      {liked && (
        <>
          <AiFillHeart color="red" size={20} />
        </>
      )}
      {!liked && (
        <>
          <AiOutlineHeart size={20} />
        </>
      )}
    </Button>
  );
};

const Button = styled.button`
display: flex;
flex-direction: row;

  cursor: pointer;
  border: none;
  background: linear-gradient(to right, #ffffff, #ece9e6)
  position: relative;
 
`;

const Like = styled.p`
  margin-top: 10px;
`;
const Liked = styled.p`
  margin-top: 10px;
`;

export default FavoriteButton;
