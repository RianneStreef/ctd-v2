import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

import stamp from "../images/stamp.jpg";
import "../styles/CoursesPage.css";

import { content } from "../content/languages";
// import ReactMarkdown from "react-markdown";
// import { graphql } from "gatsby";

const CoursesPage = ({ language, setLanguage }) => {
  // Choose language (adjust later if needed)
  const languageToUse = content.french;

  /*
  ============================
  FUTURE COURSES SETUP (OFF)
  ============================

  When courses are added back:
  1. Uncomment the GraphQL query at the bottom
  2. Uncomment this block
  3. Run: gatsby clean
  */

  // const courses = data?.allContentfulCourse?.nodes ?? [];
  // const hasCourses = courses.length > 0;

  // const coursesList = hasCourses
  //   ? courses
  //       .filter(course => course.language === languageToUse.language)
  //       .map(course => (
  //         <div className="course-description" key={course.id}>
  //           <div className="class-card">
  //             <div className="class-card-header">
  //               <h3>{course.title}</h3>
  //               {course.full && (
  //                 <span className="full">{languageToUse.full}</span>
  //               )}
  //             </div>

  //             <div className="inner-class-card">
  //               <div className="course-info">
  //                 <h4>{languageToUse.dates}:</h4>
  //                 <p>{course.dates}</p>

  //                 <h4>{languageToUse.price}:</h4>
  //                 <p>{course.price}</p>

  //                 {course.description?.description && (
  //                   <>
  //                     <h4>{languageToUse.description}:</h4>
  //                     <ReactMarkdown>
  //                       {course.description.description}
  //                     </ReactMarkdown>
  //                   </>
  //                 )}
  //               </div>

  //               {course.image?.file?.url && (
  //                 <div className="course-flyer-container">
  //                   <img
  //                     src={course.image.file.url}
  //                     alt={course.title}
  //                     className="course-flyer"
  //                   />
  //                 </div>
  //               )}
  //             </div>
  //           </div>
  //         </div>
  //       ))
  //   : null;

  return (
    <>
      <Helmet htmlAttributes={{ lang: "fr" }}>
        <title>{languageToUse.courses}</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Children's Illustrations for all ages made by Claire Turner, in Talloires, France."
        />
        <link rel="canonical" href="https://www.claireturner-design.com/" />
      </Helmet>

      <Header language={language} languageToUse={languageToUse} />

      <main className="course-contact-container">
        <div className="stamp-container">
          <img src={stamp} className="stamp" alt="stamp" />
        </div>

        <h2>{languageToUse.inscriptionRequest}</h2>

        {/* FUTURE COURSES RENDER */}
        {/* {hasCourses && (
          <section className="courses-list">{coursesList}</section>
        )} */}

        <div className="class-form">
          <form
            name="class"
            method="post"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="class" />

            <p className="hidden">
              <label>
                Don’t fill this out if you’re human:
                <input name="bot-field" />
              </label>
            </p>

            <p className="form-items">
              <label htmlFor="name">{languageToUse.name}:</label>
              <input
                className="input"
                type="text"
                id="name"
                name="name"
                required
              />
            </p>

            <p className="form-items">
              <label htmlFor="age">{languageToUse.age}:</label>
              <input
                className="input"
                type="number"
                id="age"
                name="age"
                required
              />
            </p>

            <p className="form-items">
              <label htmlFor="class">{languageToUse.class}:</label>
              <input className="input" type="text" id="class" name="class" />
            </p>

            <p className="form-items">
              <label htmlFor="email">{languageToUse.email}:</label>
              <input
                className="input"
                type="email"
                id="email"
                name="email"
                required
              />
            </p>

            <p className="form-items">
              <label htmlFor="message">{languageToUse.message}:</label>
              <textarea
                id="message"
                name="message"
                rows="8"
                required
              ></textarea>
            </p>

            <div className="button-container">
              <button className="custom_button" type="submit">
                {languageToUse.send}
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer
        language={language}
        setLanguage={setLanguage}
        languageToUse={languageToUse}
      />
    </>
  );
};

CoursesPage.Layout = Layout;
export default CoursesPage;

/*
====================================
FUTURE GRAPHQL QUERY (OFF)
====================================

Uncomment ONLY when ContentfulCourse
and its fields exist again.

export const query = graphql`
  query CoursesPageQuery {
    allContentfulCourse {
      nodes {
        id
        title
        dates
        price
        full
        language
        description {
          description
        }
        image {
          file {
            url
          }
        }
      }
    }
  }
`;
*/
