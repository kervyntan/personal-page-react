import React, { useRef, useState } from "react";
import {Link} from "react-router-dom";
import { db, auth } from "../../shared/firebase";
import Button from "../../shared/Button";
import Modal from "../../shared/Modal";
import {
    signInWithEmailAndPassword
  } from "firebase/auth"
  

const Login = () => {
  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [showCompleteModal, setShowCompleteModal] = useState(false);

  const loginForm = useRef("loginForm");

  const loginFormHandler = () => {
    const email = loginForm.current.email.value;
    const password = loginForm.current.password.value;
    signInWithEmailAndPassword(auth, email, password)
    .then( (creds) => {
        console.log(email + " is logged in!")
        console.log(creds.user);
    })
    .catch( (err) => {
        console.log(err.message);
    })
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setCreds({ ...creds, [e.target.name]: e.target.value });
  };

  const showModalComplete = () => {
    // if (isEmpty) {
    //   setShowErrorModal(true);
    // } else {
    setTimeout(() => {
      setShowCompleteModal(true);
      document.body.style.overflow = "hidden";
    }, 1000)
  };

  const closeModalComplete = () => {
    setShowCompleteModal(false);
    document.body.style.overflow = "auto";
  };
  return (
    <div className="login">
        <h2 className="login__heading">Login: </h2>
      <form ref={loginForm} className="login__form" onSubmit={loginFormHandler}>
        <label htmlFor="email"> Email: </label>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={creds.email}
          onChange={handleChange}
          className="login__form__input"
          text=""
          required
        />
        <label htmlFor="password"> Password: </label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={creds.password}
          onChange={handleChange}
          className="login__form__input"
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
        {btnDisabled ? (
          <Button
            type="submit"
            className="btn btn-disabled"
            text="Login"
            disabled
          />
        ) : (
          <Button
            type="submit"
            className="btn btn-login"
            text="Login"
            onClickHandler={showModalComplete}
          />
        )}
        <Link to="/signup">
          Sign Up
        </Link>
      </form>
    </div>
  );
};

export default Login;
