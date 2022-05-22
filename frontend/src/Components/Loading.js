import * as React from "react";

import styled from "styled-components";

const Loading = () => {
  return (
    <Container>
      <div className="lds-grid">
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
