// import React, { useContext } from "react";
// import styled from "styled-components";
// import { NightContext } from "./NightContext";
// import { CgProfile } from "react-icons/cg";
// import "./CssFiles/Header.css";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const { currentUser } = useContext(NightContext);
//   console.log(currentUser);
//   let navigate = useNavigate();

//   const handleClick = (e) => {
//     e.preventDefault();
//     navigate("/profile");
//   };

//   const handleNavigate = (e) => {
//     e.preventDefault();
//     navigate("/users");
//   };
//   return (
//     <Container>
//       {Object.keys(currentUser).length > 0 ? (
//         <section className="p-menu1">
//           <nav id="navbar" className="navigation" role="navigation">
//             <input id="toggle1" type="checkbox" />
//             <label className="hamburger1" for="toggle1">
//               <div className="top"></div>
//               <div className="meat"></div>
//               <div className="bottom"></div>
//             </label>

//             <nav className="menu1">
//               <CgProfile
//                 size={40}
//                 color={"white"}
//                 className="link1"
//                 onClick={handleClick}
//               />

//               <Button onClick={handleNavigate} className="link1">
//                 Other Users on app!
//               </Button>
//               <Button className="link1">Go to drink</Button>
//               <Button className="link1">Go to night selection</Button>
//               <Button className="link1">Go to games</Button>
//               <Button className="link1">Go to favorites</Button>
//               <Button className="link1">Go to create</Button>
//             </nav>
//           </nav>
//         </section>
//       ) : (
//         <Box></Box>
//       )}
//     </Container>
//   );
// };

// const Container = styled.div`
//   /* background-color: transparent; */
// `;
// const Button = styled.button``;
// const Box = styled.div`
//   background-color: transparent;
// `;

// export default Header;
