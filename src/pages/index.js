import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Contact from "../components/Contact";
import Insta from "../components/Insta";
import Footer from "../components/Footer";

import "../styles/IndexPage.css";

import { content } from "../content/languages";
import { Helmet } from "react-helmet";

const IndexPage = (props) => {
  let { language, setLanguage, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  return (
    <div>
      <Helmet>
        <title>Claire Turner Design</title>
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
      <div className="landing">
        <Header
          language={language}
          setLanguage={setLanguage}
          languageToUse={languageToUse}
        />
        <h1>Children's Illustrations for all ages</h1>
        <div className="bunting" />
      </div>
      <Intro language={language} languageToUse={languageToUse} />
      <Contact language={language} languageToUse={languageToUse} />
      <Insta language={language} languageToUse={languageToUse} />
      <Footer
        language={language}
        setLanguage={setLanguage}
        languageToUse={languageToUse}
      />
    </div>
  );
};

IndexPage.Layout = Layout;
export default IndexPage;
