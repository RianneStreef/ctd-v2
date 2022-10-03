import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "../styles/ShellsPage.css";

import promoVideo from "../images/promo.mp4";
import Huckleberry from "../images/huckleberry.jpg";

import { content } from "../content/languages";
import { Helmet } from "react-helmet";

const ShellsPage = (props) => {
  let { language, setLanguage, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);
  return (
    <div>
      <Helmet>
        <title>Shells and Shanties</title>
        <meta name="robots" content="index, follow" />
        <script
          src="https://cdn2.woxo.tech/a.js#60ca0c172d51e300159c2b7c"
          async
          data-usrc
        ></script>
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
        <h1>Shells and Shanties</h1>
        <div className="bunting-shells" />
        <div className="images-container-shells">
          <div className="hidden-mobile" />
          <div className="shells-video-container">
            <video controls autoplay className="shells-video">
              <source src={promoVideo} type="video/mp4" />
            </video>
          </div>
          <img src={Huckleberry} className="shells-drawing-desktop" />
        </div>
        <p className="shells-intro">{languageToUse.shellsIntro}</p>
        <img src={Huckleberry} className="shells-drawing-mobile" />

        <div
          className="insta"
          data-mc-src="9181c193-d5e2-450f-9fe7-cca8106b39a6#instagram"
        />
      </div>
      <Footer
        language={language}
        setLanguage={setLanguage}
        languageToUse={languageToUse}
      />
    </div>
  );
};

ShellsPage.Layout = Layout;
export default ShellsPage;
