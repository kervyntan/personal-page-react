import React from "react";
import sun from "../assets/sun.png";
import Button from "../shared/Button";
import CloudAndSun from "../shared/CloudAndSun";

const AboutOnLanding = () => {
  const onClickHandler = () => {};
  return (
    <div className="about__landing fader fade-left">
      <CloudAndSun />
      <div className="about__landing__heading">
        <h2> About Me </h2>
      </div>
      <div className="about__landing__image-with-text">
        <div className="about__landing__image">
          <img src={sun} alt="sun" />
        </div>
        <div className="about__landing__text">
          <h3 className="about__landing__text__heading">
            Lorem ipsum dolor sit amet.{" "}
          </h3>
          <p className="about__landing__text__para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            laboriosam ullam perferendis inventore ducimus, delectus commodi
            voluptatibus rem culpa, quo assumenda iure voluptate possimus
            necessitatibus aut repellat molestiae dicta cumque?
          </p>
        </div>
      </div>
      <div className="about__landing__btn">
        <Button
          type="submit"
          className="btn btn-about"
          onClickHandler={onClickHandler}
          text="Lorem ipsum"
        />
      </div>
    </div>
  );
};

export default AboutOnLanding;
