import React from "react";
import IntroClaire from "../images/IntroClaire.jpeg";

import { content } from "../content/languages";

import "../styles/Intro.css";

const Intro = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);
  return (
    <div className="intro" id="about">
      <div className="intro-inner-container">
        <div className="intro-text">
          <p>{languageToUse.intro1} </p>
          <p>{languageToUse.intro2} </p> <p>{languageToUse.intro3} </p>
        </div>
        <div className="intro-image-container">
          <img src={IntroClaire} alt="Claire" className="intro-claire" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
