import React, {useState} from "react";
import Button from "../shared/Button";
import {db} from "../shared/firebase";
import {
  doc,
  getDoc
} from "firebase/firestore";

const Hero = (props) => {
  const onClickHandler = () => {};
  const [text, setText] = useState("");
  // setting text dynamically
  const docRef = doc(db, 'hero', '3L9JUalhdDk00qWrQFAH');
  getDoc(docRef)
  .then( (doc) => {
    setText(doc.data().hero_text);
  })
  .catch( (err) => {
    console.log(err.message);
  })
  return (
    <div className="hero fader">
      <div className="hero__text">
        <h2> {text} </h2>
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
