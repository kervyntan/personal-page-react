import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Button from "../../shared/Button";
import {db, auth} from "../../shared/firebase";
import {signOut} from "firebase/auth";
import { doc, getDoc } from 'firebase/firestore';
// import currentUser from "./currentUser";

const SignOutBtn = () => {
    const navigate = useNavigate();
    const userRef = doc(db, 'currentUser', 'currentUser');
    const [currentUser, setCurrentUser] = useState("");
    useEffect( () => {
        const username = getDoc(userRef);
        username.then( (doc) => {
            setCurrentUser(doc.data().user);
        })
    }, [])
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

    // const loggedInUser = currentUser();
    return (
        <div className="user">
        {/* user here will be replaced with email */}
        <p> Hello, {currentUser} </p>
        <Button text="Sign Out" className="btn btn-signOut" onClickHandler={signOutHandler} />
        </div>
    )
    
}

export default SignOutBtn