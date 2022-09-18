import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Button from "../../shared/Button";
import { db } from "../../shared/firebase";
import { updateDoc, doc } from "firebase/firestore";
import SignOutBtn from "./SignOutBtn";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ContentManagement = () => {
  const docRef = doc(db, "hero", "3L9JUalhdDk00qWrQFAH");
  const docRefAbout = doc(db, "about", "about");
  const docRefSkills = doc(db, "about", "skills");

  const [heroInputValues, setHeroInputValues] = useState({
    hero_text: "",
    reachme_text: "",
  });
  const [aboutInputValues, setAboutInputValues] = useState({
    main_para_one: "",
    main_para_two: "",
    main_para_three: "",
    html_text: "",
    react_text: "",
    sql_text: "",
    node_text: "",
  });
  const handleChangeHero = (e) => {
    setHeroInputValues({ ...heroInputValues, [e.target.name]: e.target.value });
  };
  const handleChangeAbout = (e) => {
    setAboutInputValues({
      ...aboutInputValues,
      [e.target.name]: e.target.value,
    });
  };

  const submitFormHero = (e) => {
    e.preventDefault();
    setHeroInputValues({
      hero_text: "",
      reachme_text: "",
    });
    updateDoc(docRef, {
      hero_text: heroInputValues.hero_text,
    });

    console.log("Data has been changed.");
  };
  const submitFormAbout = (e) => {
    e.preventDefault();
    setHeroInputValues({
      main_para_one: "",
      main_para_two: "",
      main_para_three: "",
      html_text: "",
      react_text: "",
      sql_text: "",
      node_text: ""
    });
    updateDoc(docRefAbout, {
      para_one: aboutInputValues.main_para_one,
      para_two: aboutInputValues.main_para_two,
      para_three: aboutInputValues.main_para_three
    });

    updateDoc(docRefSkills, {
      htm: aboutInputValues.html_text,
      nod: aboutInputValues.react_text,
      reac: aboutInputValues.sql_text,
      sq: aboutInputValues.node_text
    });

    console.log("Data has been changed.");
  };

  return (
    <>
      <Sidebar contentManagement="true" />
      <SignOutBtn />
      <div class="container-cms">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Hero Page</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <form
              className="content-management__form"
              onSubmit={submitFormHero}
            >
              <label htmlFor="hero_text"> Hero Text: </label>
              <input
                className="content-management__form__input"
                name="hero_text"
                onChange={handleChangeHero}
                value={heroInputValues.hero_text}
              />
              <Button
                type="submit"
                text="Click Here"
                className="content-management-btn"
              />
              {/* add input for about single page + about landing page */}
            </form>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>About Page</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <form
              className="content-management__form"
              onSubmit={submitFormAbout}
            >
              <label htmlFor="main_para_one"> Main Text (Para One): </label>
              <input
                className="content-management__form__input"
                name="main_para_one"
                onChange={handleChangeAbout}
                value={aboutInputValues.main_para_one}
              />
              <Button
                type="submit"
                text="Click Here"
                className="content-management-btn"
              />
              <label htmlFor="main_para_two"> Main Text (Para Two): </label>
              <input
                className="content-management__form__input"
                name="main_para_two"
                onChange={handleChangeAbout}
                value={aboutInputValues.main_para_two}
              />
              <Button
                type="submit"
                text="Click Here"
                className="content-management-btn"
              />
              <label htmlFor="main_para_three"> Main Text (Para Three): </label>
              <input
                className="content-management__form__input"
                name="main_para_three"
                onChange={handleChangeAbout}
                value={aboutInputValues.main_para_three}
              />
              <Button
                type="submit"
                text="Click Here"
                className="content-management-btn"
              />
              <label htmlFor="html_text"> HTML Skill: </label>
              <input
                className="content-management__form__input"
                name="sql_text"
                onChange={handleChangeAbout}
                value={aboutInputValues.html_text}
              />
              <Button
                type="submit"
                text="Click Here"
                className="content-management-btn"
              />
              <label htmlFor="react_text"> React Skill: </label>
              <input
                className="content-management__form__input"
                name="react_text"
                onChange={handleChangeAbout}
                value={aboutInputValues.react_text}
              />
              <Button
                type="submit"
                text="Click Here"
                className="content-management-btn"
              />
              <label htmlFor="sql_text"> SQL Skill: </label>
              <input
                className="content-management__form__input"
                name="sql_text"
                onChange={handleChangeAbout}
                value={aboutInputValues.sql_text}
              />
              <Button
                type="submit"
                text="Click Here"
                className="content-management-btn"
              />
              <label htmlFor="node_text"> Node Skill: </label>
              <input
                className="content-management__form__input"
                name="node_text"
                onChange={handleChangeAbout}
                value={aboutInputValues.node_text}
              />
              <Button
                type="submit"
                text="Click Here"
                className="content-management-btn"
              />
              {/* add input for about single page + about landing page */}
            </form>
          </AccordionDetails>
        </Accordion>
        {/* <form className="content-management__form" onSubmit={submitFormAbout}>
        <label htmlFor="hero_text"> Hero Text: </label>
        <input
          className="content-management__form__input"
          name="hero_text"
          onChange={handleChangeAbout}
          value={aboutInputValues.hero_text}
        />
        <Button type="submit" text="Click Here"/>
        {/* add input for about single page + about landing page */}
      </div>
    </>
  );
};

export default ContentManagement;
