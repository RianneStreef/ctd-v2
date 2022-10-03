import React from "react";

import { content } from "../content/languages.js";
import stamp from "../images/stamp.jpg";
import signature from "../images/signature.jpg";

import "../styles/Contact.css";

function Contact(props) {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  return (
    <div id="contact">
      <h2 className="contact-header">{languageToUse.contact}</h2>
      <div className="contact-container">
        <div className="stamp-container">
          <img src={stamp} className="stamp" />
        </div>
        <div className="contact">
          <div className="contact-form">
            <form
              name="contact"
              method="post"
              data-netlify="true"
              netlify-honeypot="bot-field"
            >
              <input
                className="contact-input"
                type="hidden"
                name="contact"
                value="contact"
              />
              <p className="hidden">
                <label>
                  Don’t fill this out if you’re human:{" "}
                  <input name="bot-field" />
                </label>
              </p>
              <input type="hidden" name="form-name" value="contact" />
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
          <div className="contact-text-container">
            <p className="contact-form-text"> {languageToUse.contactMessage}</p>
            <div className="signature-container">
              <img src={signature} className="signature" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
