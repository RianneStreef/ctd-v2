import React from "react";

import { graphql } from "gatsby";

import Layout from "../../../components/Layout";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

import { content } from "../../../content/languages";
import { Helmet } from "react-helmet";

import "../../../styles/videos.css";

const en = (props) => {
  let { language, setLanguage, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  const { data } = props;

  console.log(data.allContentfulInstructionVideo.nodes[0].video.file.url);

  const video = data.allContentfulInstructionVideo.nodes[0].video.file.url;

  return (
    <div>
      <Header
        language={language}
        setLanguage={setLanguage}
        languageToUse={languageToUse}
      />
      <div className="instruction-video">
        <video id="background-video" autoPlay playsInline loop>
          <source src={video} type="video/mp4" />
        </video>
        <h2>Screen printing instruction video</h2>
      </div>
      <Footer
        language={language}
        setLanguage={setLanguage}
        languageToUse={languageToUse}
      />
    </div>
  );
};

export const coursesQuery = graphql`
  query videosQuery {
    allContentfulInstructionVideo(
      filter: { name: { eq: "screenprinting-en" } }
    ) {
      nodes {
        video {
          file {
            url
          }
        }
        name
      }
    }
  }
`;

en.Layout = Layout;
export default en;
