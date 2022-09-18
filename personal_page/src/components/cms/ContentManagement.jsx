import React, {useState} from "react";
import Sidebar from "./Sidebar";
import Button from "../../shared/Button";
import {db} from "../../shared/firebase";
import {updateDoc, doc} from "firebase/firestore";
import SignOutBtn  from './SignOutBtn';
import { Accordion } from '@mui/material';


const ContentManagement = () => {
    const docRef = doc(db, 'hero', '3L9JUalhdDk00qWrQFAH');
    const [inputValues, setInputValues] = useState({
        hero_text :  "",
        reachme_text : ""
    })
    const handleChange = (e) => {
        setInputValues({...inputValues, [e.target.name] : e.target.value})
    }

    const submitFormHandler = (e) => {
        e.preventDefault();
        setInputValues({
            hero_text :  "",
            reachme_text : ""
        })
        updateDoc(docRef, {
            hero_text : inputValues.hero_text
        })

        console.log("Data has been changed.")
    }

  return (
    <>
      <Sidebar contentManagement="true" />
      <SignOutBtn />
      <div class="container-cms">
      <form className="content-management__form" onSubmit={submitFormHandler}>
        <label htmlFor="hero_text"> Hero Text: </label>
        <input
          className="content-management__form__input"
          name="hero_text"
          onChange={handleChange}
          value={inputValues.hero_text}
        />
        <Button type="submit" text="Click Here"/>
        {/* add input for about single page + about landing page */}
      </form>
    </div>
    </>
  );
};

export default ContentManagement;
