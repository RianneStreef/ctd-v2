import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";

import stamp from "../images/stamp.jpg";

import { graphql } from "gatsby";

import "../styles/CoursesPage.css";

import { content } from "../content/languages";
import { Helmet } from "react-helmet";

import ReactMarkdown from "react-markdown";

const ProductsPage = (props) => {
  let { language, setLanguage, languageToUse } = props;

  const { data } = props;

  let courses = data.allContentfulCourse.nodes;
  console.log(courses);
  console.log(courses);
  console.log(courses[0].description.description);

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  const coursesList = courses
    .filter((course) => course.language === languageToUse.language)
    .map((course) => {
      return (
        <div
          className="course-description"
          key={course.id}
          // style={{
          //   backgroundImage: `url(${course.image.file.url})`,
          //   backgroundSize: "contain",
          //   backgroundRepeat: "no-repeat",
          //   backgroundPosition: "center",
          //   height: "30vw",
          //   width: "20vw",
          // }}
        >
          {/* <div className={`full-banner ${!course.full ? "hidden" : ""}`}>
            {languageToUse.full}
          </div> */}
          <div className="class-card">
            <div className="class-card-header">
              <h3>{course.title}</h3>
              {course.full ? (
                <span className="full">{languageToUse.full}</span>
              ) : null}
            </div>
            <div className="inner-class-card">
              <div className="course-info">
                <h4>{languageToUse.dates}:</h4>
                <p>{course.dates}</p>
                <h4>{languageToUse.price}:</h4>

                <p>{course.price}</p>
                {/* {course.description && (
                  <ReactMarkdown>
                    <div>
                      <h4>{languageToUse.description}</h4>
                      {course.description.description}
                    </div>
                  </ReactMarkdown>
                )} */}

                {course.description && (
                  <>
                    <h4>{languageToUse.description}:</h4>
                    <ReactMarkdown children={course.description.description} />
                  </>
                )}
              </div>
              <div className="course-flyer-container">
                <img
                  src={course.image.file.url}
                  alt="course flyer"
                  className="course-flyer"
                />
              </div>
            </div>
          </div>
        </div>
      );
    });

  return (
    <>
      <Helmet>
        <title>{languageToUse.courses}</title>
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
      <Header language={language} languageToUse={languageToUse} />
      <div className="course-contact-container">
        <div className="stamp-container">
          <img src={stamp} className="stamp" />
        </div>
        <h2>{languageToUse.inscriptionRequest}</h2>

        <div className="class-form">
          <form
            name="art-class"
            method="post"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <input
              className="class-input"
              type="hidden"
              name="contact"
              value="contact"
            />
            <p className="hidden">
              <label>
                Don’t fill this out if you’re human: <input name="bot-field" />
              </label>
            </p>
            <input type="hidden" name="form-name" value="class" />
            <p className="form-items">
              <label htmlFor="name">{languageToUse.name}:</label> <br />
              <input
                className="input"
                type="text"
                id="name"
                name="name"
                required
              />
            </p>
            <p className="form-items">
              <label htmlFor="age">{languageToUse.age}:</label> <br />
              <input
                className="input"
                type="number"
                id="age"
                name="age"
                required
              />
            </p>
            <p className="form-items">
              <label htmlFor="class">{languageToUse.class}:</label> <br />
              <input className="input" type="text" id="class" name="class" />
            </p>
            <p className="form-items">
              <label htmlFor="email">{languageToUse.email}:</label> <br />
              <input
                className="input"
                type="email"
                id="email"
                name="email"
                required
              />
            </p>
            <p className="form-items">
              <label htmlFor="message">{languageToUse.message}:</label> <br />
              <textarea
                id="message"
                name="message"
                required
                rows="8"
              ></textarea>
            </p>
            <div className="button-container">
              <button
                className="custom_button"
                type="submit"
                value="Submit message"
              >
                {languageToUse.send}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="courses-list">{coursesList}</div>
      <Footer
        language={language}
        setLanguage={setLanguage}
        languageToUse={languageToUse}
      />
    </>
  );
};
export const coursesQuery = graphql`
  query coursesQuery {
    allContentfulCourse(sort: { fields: startDate }) {
      nodes {
        id
        dates
        description {
          description
        }
        full
        image {
          file {
            url
          }
        }
        language
        location
        title
        price
      }
    }
  }
`;

ProductsPage.Layout = Layout;
export default ProductsPage;
