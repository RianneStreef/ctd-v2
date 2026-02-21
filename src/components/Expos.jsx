import React from "react";
import "../styles/Expos.css";
import veyrier from "../images/expo-veyrier.jpeg";
import caron from "../images/expo-caron.jpeg";

const Insta = () => {
  return (
    <>
      <div className="expos">
        <h1>Expos</h1>
        <div className="expos-container">
          <img src={veyrier} alt="Expo Veyrier" className="expo-flyer" />
          <img src={caron} alt="Expo Caron 3200" className="expo-flyer" />
        </div>
      </div>
    </>
  );
};

export default Insta;
