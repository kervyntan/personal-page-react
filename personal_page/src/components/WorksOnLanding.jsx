import React from "react";
import react from "../assets/react-icon.png";
import webDev from "../assets/web-dev.png";
import CSS from "../assets/css.png";
import JS from "../assets/js.png";
import HTML from "../assets/html5.png";

const WorksOnLanding = ({ works }) => {
  const loopSkills = (item, index) => {
    return (
      <div key={item.skill} className="language">
        <img width="20" src={react} alt={item.skill} />
        <p className="languages__para"> {item.skill} </p>
      </div>
    );
  };

  const loopWork = (item, index) => {
    return (
      <div key={item.title} className="works__display__container">
        <div className="works__display__container__languages">
          {item.skills.map(loopSkills)}
        </div>
        <div className="works__display__container__title"> {item.title} </div>
        {/* <div className="works__img"> </div> */}
      </div>
    );
  };
  return (
    <div className="works fader">
      <div className="works__heading">
        <h2> Featured Works </h2>
      </div>
      <div className="works__display">{works.map(loopWork)}</div>
    </div>
  );
};

export default WorksOnLanding;
