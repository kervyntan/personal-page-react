import React, { useRef, useState } from "react";
import Button from "./Button";
import Modal from "./Modal";
import { send } from "emailjs-com";
import {db} from "./firebase";
import {
    collection,
    addDoc,
    serverTimestamp
  } from "firebase/firestore"

const ContactForm = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
  });
  const [showCompleteModal, setShowCompleteModal] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const reachMeForm = useRef("reachMeForm");
  const serviceId = "service_ub6b22m";
  const templateId = "template_kkga2jv";
  const pubKey = "bZWDrA0RrWLv7nLvZ";
  const colRef = collection(db, 'about');
  const onSubmit = (e) => {
    // prevent form submission from refreshing page
    e.preventDefault();

    send(serviceId, templateId, toSend, pubKey)
      .then((res) => {
        console.log("Success!", res.text, res.status);
      })
      .catch((err) => {
        console.log(err);
      });

    addDoc(colRef, {
      name: reachMeForm.current.to_name.value,
      test: reachMeForm.current.from_name.value,
      createdAt: serverTimestamp(),
    })
      .then(() => {
        console.log("entry added");
      })
      .catch(() => {
        console.log("check syntax");
      });

    setToSend({
      from_name: "",
      to_name: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    // check if any of the fields are empty
    if (
      toSend.from_name === "" ||
      toSend.message === "" ||
      toSend.to_name === "" ||
      !toSend.to_name.includes("@")
    ) {
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
    }

    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const showModalComplete = () => {
    // if (isEmpty) {
    //   setShowErrorModal(true);
    // } else {
    setTimeout(() => {
      setShowCompleteModal(true);
      document.body.style.overflow = "hidden";
    }, 1000);
  };

  const closeModalComplete = () => {
    setShowCompleteModal(false);
    document.body.style.overflow = "auto";
  };

  return (
    <form
      ref={reachMeForm}
      className="reachme__section__form"
      onSubmit={onSubmit}
    >
      <input
        type="text"
        name="from_name"
        placeholder="Name"
        value={toSend.from_name}
        onChange={handleChange}
        className="reachme__section__form__input"
        text=""
        required
      />
      <input
        type="email"
        name="to_name"
        placeholder="Email Address"
        value={toSend.to_name}
        onChange={handleChange}
        className="reachme__section__form__input"
        text=""
        required
      />
      <input
        type="textarea"
        name="message"
        placeholder="Message"
        value={toSend.message}
        onChange={handleChange}
        className="reachme__section__form__input last-input"
        text=""
        required
      />
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
      {btnDisabled ? (
        <Button
          type="submit"
          className="btn btn-disabled"
          text="Send Email!"
          disabled
        />
      ) : (
        <Button
          type="submit"
          className="btn btn-form"
          text="Send Email!"
          onClickHandler={showModalComplete}
        />
      )}
    </form>
  );
};

export default ContactForm;
