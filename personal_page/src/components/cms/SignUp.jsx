import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { db, auth } from "../../shared/firebase";
import Button from "../../shared/Button";
import Modal from "../../shared/Modal";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const [creds, setCreds] = useState({
    email: "",
    password: "",
    confirm_password: "",
  });
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [showCompleteModal, setShowCompleteModal] = useState({
    success: false,
    open: false,
  });
  const [errorMsg, setErrorMsg] = useState("");
  const signupForm = useRef("signupForm");

  const showPassword = () => {
    const password = document.querySelector(".password");
    if (password.type === "password") {
      password.type = "text";
    }

    if (password.type === "text") {
      password.type = "password";
    }
  };

  const signupFormHandler = (e) => {
    e.preventDefault();
    const email = signupForm.current.email.value;
    const password = signupForm.current.password.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((creds) => {
        // console.log(email + " is signed up!");
        // console.log(creds.user);
        setErrorMsg("");
        setTimeout(() => {
            setShowCompleteModal({
              success: true,
              open: true,
            });
            document.body.style.overflow = "hidden";
          }, 2000);
      })
      .catch((err) => {
        // show modal that there is an error
        // console.log(err.message);
        setErrorMsg(err.message);
        setTimeout(() => {
            setShowCompleteModal({
              success: false,
              open: true,
            });
            document.body.style.overflow = "hidden";
          }, 2000);
      });
  };

  const handleChange = (e) => {
    // if (creds.email === "" || creds.password === "" || creds.confirm_password === "") {
    //     setBtnDisabled(true);
    // }

    setCreds({ ...creds, [e.target.name]: e.target.value });
  };

//   const showModal = () => {
//     if (errorMsg === "") {
//       setTimeout(() => {
//         setShowCompleteModal({
//           success: true,
//           open: true,
//         });
//         document.body.style.overflow = "hidden";
//       }, 2000);
//     } else {
//       setTimeout(() => {
//         setShowCompleteModal({
//           success: false,
//           open: true,
//         });
//         document.body.style.overflow = "hidden";
//       }, 2000);
//     }
//   };

  const closeModal = () => {
    setShowCompleteModal({
      ...showCompleteModal,
      open: false,
    });
    document.body.style.overflow = "auto";
  };

  return (
    <div className="signup">
      <h2 className="signup__heading">Sign Up: </h2>
      <form
        ref={signupForm}
        className="signup__form"
        onSubmit={signupFormHandler}
      >
        <label htmlFor="email"> Email: </label>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={creds.email}
          onChange={handleChange}
          className="signup__form__input"
          text=""
          required
        />

        {/* can add the eye icon to allow for the password to be visible */}
        <label htmlFor="password"> Password: </label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={creds.password}
          onChange={handleChange}
          className="signup__form__input password"
          text=""
          required
        />

        {/* add condition to check that both passwords match */}
        <label htmlFor="password"> Confirm Password: </label>
        <input
          type="password"
          name="confirm_password"
          placeholder="Retype Password"
          value={creds.confirm_password}
          onChange={handleChange}
          className="signup__form__input confirm_password"
          text=""
          required
        />

        {showCompleteModal.success && showCompleteModal.open && (
          <Modal
            className="modal modal__signup"
            heading="Congrats on Signing up!"
            para="Click the button below to carry on viewing the page"
            closeModal={closeModal}
          />
        )}

        {!showCompleteModal.success && showCompleteModal.open && (
          <Modal
            className="modal modal__signup error"
            heading={`Error Signing up ${errorMsg}`}
            para="Click the button below to carry on viewing the page"
            closeModal={closeModal}
          />
        )}
        {btnDisabled ? (
          <Button
            type="submit"
            className="btn btn-disabled"
            text="Sign Up"
            disabled
          />
        ) : (
          <Button
            type="submit"
            className="btn btn-signup"
            text="Sign Up"
            // onClickHandler={showModal}
          />
        )}

        {/* <Button text="click here" onClickHandler={showPassword} /> */}
        <Link to="/login">Login</Link>
      </form>
    </div>
  );
};

export default SignUp;
