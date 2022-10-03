import React from "react";

import "../styles/Footer.css";

import Subscribe from "../components/Subscribe";
import Copyright from "./Copyright";

import { content } from "../content/languages";

import flagEn from "../images/icon-en.png";
import flagFr from "../images/icon-fr.png";
// import instagram from "../images/instagram.svg";
// import facebook from "../images/facebook.svg";
import footerLogo from "../images/footerLogo.png";

const Footer = (props) => {
  let { language, setLanguage, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  function handleSetLanguage(language) {
    setLanguage(language);
    localStorage.setItem("languageInStorage", language);
  }

  return (
    <div className="footer">
      <div className="footer-links-total">
        <img src={footerLogo} alt="Logo" className="footer-logo" />
        <Subscribe language={language} languageToUse={languageToUse} />
        <div className="social-links">
          {/* <a
            href="https://www.facebook.com/Claire-Turner-Design-726633950744427/"
            target="_blank"
          >
            <img src={facebook} alt="facebook link" className="social-link" />
          </a>
          <a
            href="https://www.instagram.com/claireturnerdesign/"
            target="_blank"
          >
            <img src={instagram} alt="instagram link" className="social-link" />
          </a> */}
          <p>
            {languageToUse.visit}
            <a href="https://claireturnerdesign.patternbyetsy.com/">
              Etsy Shop!{" "}
            </a>
          </p>
          <div className="set-language-footer">
            <button
              onClick={() => handleSetLanguage("english")}
              onKeyPress={() => handleSetLanguage("english")}
              className="invisible-button"
            >
              <img
                src={flagEn}
                alt="english"
                className={`flag ${
                  languageToUse.language === "english" ? "opaque" : "fade"
                } `}
              />
            </button>
            <button
              onClick={() => handleSetLanguage("french")}
              onKeyPress={() => handleSetLanguage("french")}
              className="invisible-button"
            >
              <img
                src={flagFr}
                alt="français"
                className={`flag ${
                  languageToUse.language === "french" ? "opaque" : "fade"
                } `}
              />
            </button>
          </div>
        </div>
      </div>

      <Copyright language={language} languageToUse={languageToUse} />
    </div>
  );
};

export default Footer;
