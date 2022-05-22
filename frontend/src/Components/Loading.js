import * as React from "react";
import { useState } from "react";
import { render } from "react-dom";
import { motion, MotionConfig } from "framer-motion";
import styled from "styled-components";

const Loading = () => {
  const [count, setCount] = useState(0);
  return (
    <Container>
      <div class="lds-grid">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  align-items: center;
`;
export default Loading;
