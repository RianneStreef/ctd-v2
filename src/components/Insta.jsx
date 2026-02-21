import React from "react";
import "../styles/Insta.css";

import { Helmet } from "react-helmet";

const Insta = () => {
  return (
    <>
      <Helmet>
        <script src="https://elfsightcdn.com/platform.js" async></script>
      </Helmet>
      <div className="insta">
        <div
          class="elfsight-app-8e62119a-b7c4-4138-b8a4-bfcea1d8a82f"
          data-elfsight-app-lazy
        ></div>
      </div>
    </>
  );
};

export default Insta;
