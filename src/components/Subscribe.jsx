import addToMailchimp from "gatsby-plugin-mailchimp";
import React, { useState } from "react";

import { content } from "../content/languages";

import "../styles/Subscribe.css";

function Subscribe(props) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  function errorHandling(data) {
    // your error handling
  }

  const handleSubmit = () => {
    addToMailchimp(email).then((data) => {
      if (data.result === "error") {
        errorHandling(data);
      } else {
        setSubmitted(true);
      }
    });
  };

  return (
    <>
      {submitted ? (
        <form>
          <div className="subscribe-text">
            <h2>{languageToUse.subscribed}</h2>
            <p>{languageToUse.subscribedMessage}</p>
          </div>
        </form>
      ) : (
        <form>
          <div>
            <p className="subscribe-text">
              {languageToUse.subscribeNewsletter}
            </p>
          </div>
          <div className="subscribe-input-container">
            <input
              type="email"
              name="email"
              id="mail"
              label="email-input"
              placeholder=""
              onChange={(e) => setEmail(e.target.value)}
              className="subscribe-input"
            />
          </div>
          <div>
            <div className="button-container">
              <button
                className="subscribe-button"
                type="button"
                aria-label="Subscribe"
                onClick={() => handleSubmit()}
              >
                {languageToUse.subscribe}
              </button>
            </div>
          </div>
        </form>
      )}
    </>
  );
}

export default Subscribe;
