import React, { useState } from "react";
import Button from "./Button";
import wifi from "../assets/network-icon.png";
import { send } from "emailjs-com";
import Modal from "./Modal";

const ReachMe = () => {
  const [showCompleteModal, setShowCompleteModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
  });
  const serviceId = "service_ub6b22m";
  const templateId = "template_kkga2jv";
  const pubKey = "bZWDrA0RrWLv7nLvZ";
  const formFields = document.querySelectorAll(
    ".reachme__section__form__input"
  );
  const onSubmit = (e) => {
    // prevent form submission from refreshing page
    e.preventDefault();

    // check if any of the fields are empty
    // formFields.forEach((item) => {
    //   console.log(item);
    //   if (item.value === "") {
    //     setIsEmpty(true);
    //   } else {
    //     setIsEmpty(false);  
    //   }
    // });

    send(serviceId, templateId, toSend, pubKey)
      .then((res) => {
        console.log("Success!", res.text, res.status);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const showModalComplete = () => {
    // if (isEmpty) {
    //   setShowErrorModal(true);
    // } else {
      setShowCompleteModal(true);
      document.body.style.overflow = "hidden";
  };

  const closeModalComplete = () => {
    setShowCompleteModal(false);
    document.body.style.overflow = "auto";
  };

  // const closeModalError = () => {
  //   setShowErrorModal(false);
  // };

  return (
    <div className="reachme__section">
      <h2 className="reachme__section__heading"> Reach Me </h2>
      <img width="50" src={wifi} alt="wifi-icon" />

      <form className="reachme__section__form" onSubmit={onSubmit}>
        <input
          type="text"
          name="from_name"
          placeholder="Name"
          value={toSend.from_name}
          onChange={handleChange}
          className="reachme__section__form__input"
          required
        />
        <input
          type="text"
          name="to_name"
          placeholder="Email Address"
          value={toSend.to_name}
          onChange={handleChange}
          className="reachme__section__form__input"
          required
        />
        <input
          type="textarea"
          name="message"
          placeholder="Message"
          value={toSend.message}
          onChange={handleChange}
          className="reachme__section__form__input last-input"
          required
        />
        {/* <input
          type="text"
          name="reply_to"
          placeholder="Your email"
          value={toSend.reply_to}
          onChange={handleChange}
        /> */}
        {showCompleteModal && (
          <Modal
            className="modal modal__email"
            heading="Congrats! You've submitted the email!"
            para="Click the button below to carry on viewing the page"
            closeModal={closeModalComplete}
          />
        )}

        {/* {showErrorModal && (
          <Modal
            className="modal modal__error"
            heading="Please ensure all fields are filled up."
            para="Click the button below to carry on viewing the page"
            closeModal={closeModalError}
          />
        )} */}
        <Button
          type="submit"
          className="btn btn-form"
          text="Send Email!"
          onClickHandler={showModalComplete}
        />
      </form>
    </div>
  );
};

export default ReachMe;
