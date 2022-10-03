import React from "react";
import styled from "styled-components";

import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Link } from "gatsby";

import { content } from "../../content/languages";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: flex-end;
  z-index: 10;
  background-color: #fff;
  margin-top: 0;
  padding-left: 0;
  li {
    padding-right: 25px;
  }
  @media (min-width: 1200px) {
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
    background-color: transparent;
  }
  li {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #000;
    font-family: "Andalemo";
    font-size: 20px;
    margin: 20px;
    padding-right: 0;
    a {
      color: #000;
      transition: color 500ms ease-in;
      text-decoration: none;
    }
    a:visited {
      color: #000;
      text-decoration: none;
    }
    a:hover {
      color: var(--color-highlight);
      transition: color 500ms ease-in;
    }
    p {
      margin-top: 0;
    }
    justify-content: center;
    align-items: center;
    img {
      width: 30px;
    }
  }
  @media (max-width: 1200px) {
    flex-flow: column nowrap;
    background-color: #dddbdb;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 5rem;
    transition: transform 0.3s ease-in-out;
  }
`;

const Dash = styled.span`
  width: 30px;
  margin: 0 20px;
  text-align: center;
  @media (max-width: 1200px) {
    display: none;
  }
`;

const RightNav = (props) => {
  let { open, setOpen } = props;
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  return (
    <Ul open={open}>
      <li className="menu-item" onClick={() => setOpen(!open)}>
        <AnchorLink to="/#about" title="About me">
          <span className="menu-item-text">{languageToUse.about}</span>
        </AnchorLink>
      </li>
      <Dash>-</Dash>

      <li className="menu-item" onClick={() => setOpen(!open)}>
        <AnchorLink to="/#contact" title="Contact">
          <span>{languageToUse.contact}</span>
        </AnchorLink>
      </li>
      <Dash>-</Dash>

      <li>
        <Link to="/products" onClick={() => setOpen(!open)}>
          {languageToUse.products}
        </Link>
      </li>
      <Dash>-</Dash>

      <li className="menu-item" onClick={() => setOpen(!open)}>
        <AnchorLink to="/courses" title="Pictures">
          <span>{languageToUse.courses}</span>
        </AnchorLink>
      </li>
      <Dash>-</Dash>
      <li>
        <Link to="/shells" onClick={() => setOpen(!open)}>
          Shells and Shanties
        </Link>
      </li>
    </Ul>
  );
};

export default RightNav;
