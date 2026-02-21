import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Expos from "../components/Expos";

import { content } from "../content/languages";
import { Helmet } from "react-helmet";

const ExposPage = (props) => {
  let { language, setLanguage, languageToUse } = props;

  languageToUse = content.english;

  return (
    <div>
      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
      >
        <title>Expos</title>
        <meta name="robots" content="index, follow" />

        <meta
          name="description"
          content="Children's Illustrations for all ages made by Claire Turner, in Talloires, France."
        />
        <meta
          name="keywords"
          content="children's illustrations, animal illustrations, Talloires, France, Shell and Shanties, watercolors, digital prints, ink drawing, acrylic, bunting"
        />
        <link rel="canonical" href="https://www.claireturner-design.com/" />
      </Helmet>
      <div className="shells">
        <Header
          language={language}
          setLanguage={setLanguage}
          languageToUse={languageToUse}
        />
        <Expos
          language={language}
          setLanguage={setLanguage}
          languageToUse={languageToUse}
        />
        <Footer
          language={language}
          setLanguage={setLanguage}
          languageToUse={languageToUse}
        />
      </div>
    </div>
  );
};

ExposPage.Layout = Layout;
export default ExposPage;
