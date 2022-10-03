import React, { useEffect } from "react";
import Burger from "./nav/Burger";
import banner from "../images/banner.jpg";

import { content } from "../content/languages";

import "../styles/Header.css";

const Header = (props) => {
  let { language, setLanguage, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  const [isHeaderSticky, setIsHeaderSticky] = React.useState(false);
  const [isHeaderStickyPlaceholder, setIsHeaderStickyPlaceholder] =
    React.useState(false);

  useEffect(() => {
    document.addEventListener("scroll", function () {
      const banner = document.getElementById("banner");
      const bannerHeight = banner.clientHeight;
      const bannerPosition = window.scrollY;
      if (!isHeaderSticky && bannerPosition <= bannerHeight) {
        setIsHeaderSticky(false);
        setIsHeaderStickyPlaceholder(false);
      }
      if (!isHeaderSticky && bannerPosition > bannerHeight) {
        setIsHeaderSticky(true);
        setIsHeaderStickyPlaceholder(true);
      }
    });
  });

  return (
    <div className="header">
      <img src={banner} alt="Zebra Logo" className="banner" id="banner" />
      <nav
        id="navbar"
        className={`nav ${isHeaderSticky ? " fixed-navbar" : ""}`}
      >
        <Burger language={language} languageToUse={languageToUse} />
      </nav>
      <div
        className={` ${isHeaderStickyPlaceholder ? "navbar-placeholder" : ""}`}
      />
    </div>
  );
};

export default Header;
