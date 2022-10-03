import React from "react";
import "../styles/Insta.css";

import { Helmet } from "react-helmet";

const Insta = () => {
  return (
    <>
      <Helmet>
        <script
          src="https://cdn2.woxo.tech/a.js#60ca0c172d51e300159c2b7c"
          async
          data-usrc
        />
      </Helmet>
      <div
        className="insta"
        id="insta"
        data-mc-src="8aac3812-8087-474e-9259-73b5b65b3b85#instagram"
      />
    </>
  );
};

export default Insta;
