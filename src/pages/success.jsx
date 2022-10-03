import React from "react";
import { Helmet } from "react-helmet";

import "../styles/success.css";

import { content } from "../content/languages";
import intakeInfo from "../content/intake";

const IndexPage = function (props) {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  console.log(languageToUse);
  console.log(languageToUse.metaKeywords);
  return (
    <div className="success">
      <Helmet>
        <title>{languageToUse.indexTitle}</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content={languageToUse.metaDescription} />
        <meta name="keywords" content={languageToUse.metaKeywords} />
        <link rel="canonical" href={intakeInfo.domainName} />
      </Helmet>
      <div className="header-placeholder" />
      <p>{languageToUse.thanks}</p>
    </div>
  );
};

export default IndexPage;
