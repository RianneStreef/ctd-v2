import React from "react";

import { Link } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

import { content } from "../content/languages";

import "../styles/Copyright.css";

const Copyright = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);
  return (
    <div className="copyright">
      <p>
        Copyright
        <sup>
          {" "}
          <FontAwesomeIcon icon={faCopyright} size="1x" />
        </sup>{" "}
        {languageToUse.copyright}
      </p>
      <p>
        <Link to="/legal">{languageToUse.mentionsLegal}</Link>
      </p>
      <p className="vts">
        {languageToUse.copyright3}
        <a href="http://www.vts-webdesign.com" target="blank">
          <b>Rianne - VTS-WebDesign</b>
        </a>
      </p>
    </div>
  );
};

export default Copyright;
