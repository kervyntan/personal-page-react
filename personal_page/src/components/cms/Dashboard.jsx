import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from "./Sidebar";
import Button from "../../shared/Button";
import {signOut, updateCurrentUser} from "firebase/auth"
import {auth} from "../../shared/firebase";

const Dashboard = (props) => {
    let { dashboard } = useParams();
    let navigate = useNavigate();
    const signOutHandler = () => {
        console.log(updateCurrentUser);
        signOut(auth)
        .then( () => {
            console.log("User has been successfully signed out.")
            setTimeout(() => {
                navigate('/personal-page-react/login')
              }, 1000)
        })
        .catch( () => {
            console.log("Error signing out. Please try again.")
        })
    }   
    
    return (
        <div className="dashboard">
            <Sidebar />
            <div className="user">
                {/* user here will be replaced with email */}
                <p> Hello, user </p>
                <Button text="Sign Out" onClickHandler={signOutHandler} />
            </div>
        </div>
    )
}

export default Dashboard;