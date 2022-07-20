import React from "react";
import Button from "../shared/Button";

const Hero = (props) => {
  const onClickHandler = () => {};
  return (
    <div className="hero fader">
      <div className="hero__text">
        <h2> Lorem ipsum dolor sit amet. </h2>
        <Button
          type="submit"
          className="btn btn-hero"
          onClickHandler={onClickHandler}
          text="Lorem ipsum"
        />
      </div>
      <div className="hero__img">
        <img alt="technology-icon" src={props.img} />
      </div>
    </div>
  );
};

export default Hero;
