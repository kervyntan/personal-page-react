import React, {useState, useEffect} from "react";
import Button from "../shared/Button";
import {db} from "../shared/firebase";
import {
  doc,
  onSnapshot
} from "firebase/firestore";
import Loading from "../shared/Loading";

const Hero = (props) => {
  const onClickHandler = () => {};
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);
  const docRef = doc(db, 'hero', '3L9JUalhdDk00qWrQFAH');
  if (loading) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }
  
  useEffect(() => {
    onSnapshot(docRef, (doc) => {
      setText(doc.data().hero_text);
      setLoading(false);
    })
  }, []);
  return (
    <>
    {loading && <Loading />}
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
    </>
  );
};

export default Hero;
