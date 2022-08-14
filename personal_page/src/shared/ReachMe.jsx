import React from "react";
import wifi from "../assets/network-icon.png";
import ContactForm from "./ContactForm";
const ReachMe = () => {

  return (
    <div className="reachme__section">
      <h2 className="reachme__section__heading"> Reach Me </h2>
      <img width="50" src={wifi} alt="wifi-icon" />
      <ContactForm />
    </div>
    
  );
};

export default ReachMe;
