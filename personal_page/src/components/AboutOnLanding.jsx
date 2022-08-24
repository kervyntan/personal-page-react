import React, {useState} from "react";
import sun from "../assets/sun.png";
import Button from "../shared/Button";
import CloudAndSun from "../shared/CloudAndSun";
import {db} from "../shared/firebase";
import { doc, onSnapshot } from "firebase/firestore";

const AboutOnLanding = () => {
  const [aboutText, setAboutText] = useState( {
    heading : "",
    para : ""
  }); 

  const onClickHandler = () => {}
  
  const docRef = doc(db, 'aboutOnLanding', 'aboutOnLanding');
  onSnapshot(docRef, (doc) => {
    setAboutText({ 
      heading : doc.data().heading, 
      para : doc.data().para
    })
  })
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
            {aboutText.heading}
          </h3>
          <p className="about__landing__text__para">
            {aboutText.para}
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
