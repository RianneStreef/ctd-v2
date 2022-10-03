import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";

const StyledBurger = styled.div`
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  width: 2rem;
  height: 2rem;
  margin: 20px;
  z-index: 999;

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#ffffff" : "#373737")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    z-index: 999;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      margin: ${({ open }) => (open ? 0 : "0")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      margin: ${({ open }) => (open ? 0 : "0")};
    }
  }
`;

const Burger = (props) => {
  const [open, setOpen] = useState(false);

  let { language, setLanguage, languageToUse } = props;

  return (
    <div className="hidden-desktop">
      <Navbar
        open={open}
        setOpen={setOpen}
        language={language}
        setLanguage={setLanguage}
        languageToUse={languageToUse}
      />
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
    </div>
  );
};

export default Burger;
