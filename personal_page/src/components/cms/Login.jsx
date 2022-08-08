import React, { useRef, useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { db, auth } from "../../shared/firebase";
import Button from "../../shared/Button";
import Modal from "../../shared/Modal";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });

  // probably need redux here to set a global variable/state
  // update the currentUser information
  const [credsProp, setCredsProp] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [showCompleteModal, setShowCompleteModal] = useState({
    success: false,
    open: false,
  });
  const [errorMsg, setErrorMsg] = useState("");
  const loginForm = useRef("loginForm");
  const navigate = useNavigate();

  const loginFormHandler = (e) => {
    e.preventDefault();
    const email = loginForm.current.email.value;
    const password = loginForm.current.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((creds) => {
        // console.log(email + " is logged in!");
        // console.log(creds.user);
        setCredsProp(creds.user);
        setErrorMsg("");
        setTimeout(() => {
          navigate('/dashboard')
        }, 1000)
        // setTimeout(() => {
        //   setShowCompleteModal({
        //     success: true,
        //     open: true,
        //   });
        //   document.body.style.overflow = "hidden";
        // }, 1000);
      })
      .catch((err) => {
        console.log(err.message);
        setErrorMsg(err.message);
        setTimeout(() => {
          setShowCompleteModal({
            success: false,
            open: true,
          });
          document.body.style.overflow = "hidden";
        }, 1000);
      });
  };

  const handleChange = (e) => {
    //   if (creds.email === "" || creds.password === "") {
    //     setBtnDisabled(true);
    // }
    setCreds({ ...creds, [e.target.name]: e.target.value });
  };

  const showModalComplete = () => {
    // if (isEmpty) {
    //   setShowErrorModal(true);
    // } else {
    setTimeout(() => {
      setShowCompleteModal({
        ...showCompleteModal,
        open: false
      });
      document.body.style.overflow = "hidden";
    }, 1000);
  };

  const closeModal = () => {
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
        {showCompleteModal.success && showCompleteModal.open && (
          <Modal
            className="modal modal__login"
            heading="Congrats on Signing up!"
            para="Click the button below to carry on viewing the page"
            closeModal={closeModal}
          />
        )}

        {!showCompleteModal.success && showCompleteModal.open && (
          <Modal
            className="modal modal__login error"
            heading={`Error Signing up ${errorMsg}`}
            para="Click the button below to carry on viewing the page"
            closeModal={closeModal}
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
        <Link to="/signup">Sign Up</Link>
      </form>
    </div>
  );
};

export default Login;
