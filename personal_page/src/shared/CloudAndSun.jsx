import React from "react";
import cloud from "../assets/cloud.png";
import sun from "../assets/sun.png";

const CloudAndSun = () => {
  return (
    <div className="cloud-and-sun center">
      <img className="cloud" src={cloud} alt="cloud" />
      <img className="sun" src={sun} alt="sun" />
    </div>
  );
};

export default CloudAndSun;
