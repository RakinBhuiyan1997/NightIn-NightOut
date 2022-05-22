import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
body{
    font-family: 'Roboto Condensed', sans-serif;
margin: 0;
}
button{
    font-family: 'Roboto Condensed', sans-serif;
  border: none;
  outline: none;
  margin-top: 20px;
  color: #fff;
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  :before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }
  :active {
    color: #000;
  }
  :active:after {
    background: transparent;
  }
  :hover:before {
    opacity: 1;
  }
  :after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: black;
    left: 0;
    top: 0;
    border-radius: 10px;
  }
  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
}
.lds-grid {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-grid div {
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #cef;
  animation: lds-grid 1.2s linear infinite;
}
.lds-grid div:nth-child(1) {
  top: 8px;
  left: 8px;
  animation-delay: 0s;
}
.lds-grid div:nth-child(2) {
  top: 8px;
  left: 32px;
  animation-delay: -0.4s;
}
.lds-grid div:nth-child(3) {
  top: 8px;
  left: 56px;
  animation-delay: -0.8s;
}
.lds-grid div:nth-child(4) {
  top: 32px;
  left: 8px;
  animation-delay: -0.4s;
}
.lds-grid div:nth-child(5) {
  top: 32px;
  left: 32px;
  animation-delay: -0.8s;
}
.lds-grid div:nth-child(6) {
  top: 32px;
  left: 56px;
  animation-delay: -1.2s;
}
.lds-grid div:nth-child(7) {
  top: 56px;
  left: 8px;
  animation-delay: -0.8s;
}
.lds-grid div:nth-child(8) {
  top: 56px;
  left: 32px;
  animation-delay: -1.2s;
}
.lds-grid div:nth-child(9) {
  top: 56px;
  left: 56px;
  animation-delay: -1.6s;
}
@keyframes lds-grid {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

`;
