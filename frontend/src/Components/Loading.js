import * as React from "react";
import { useState } from "react";
import { render } from "react-dom";
import { motion, MotionConfig } from "framer-motion";
import { Refresh } from "./Refresh";

import "./styles.css";

const Loading = () => {
  const [count, setCount] = useState(0);
  return (
    <MotionConfig reducedMotion="user">
      <Refresh onClick={() => setCount(count + 1)} />
      <Container>
        <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
      </Container>
    </MotionConfig>
  );
};

const Container = styled.div`
  background: white;
  border-radius: 30px;
  width: 150px;
  height: 150px;
`;

export default Loading;
