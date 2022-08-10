import React from 'react';
import {useNavigate} from 'react-router-dom';
import Button from "../../shared/Button";
import {auth} from "../../shared/firebase";
import {signOut} from "firebase/auth";

const SignOutBtn = () => {
    const navigate = useNavigate();
    const signOutHandler = () => {
        signOut(auth)
        .then ( () => {
            console.log("User has been signed out!")
            setTimeout( () => {
                navigate('/personal-page-react/login');
            }, 1000)
        })
        .catch( (err) => {
            console.log(err)
        })
    }
    return (
        <div className="user">
        {/* user here will be replaced with email */}
        <p> Hello, user </p>
        <Button text="Sign Out" onClickHandler={signOutHandler} />
        </div>
    )
    
}

export default SignOutBtn