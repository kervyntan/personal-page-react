import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from "./Sidebar";
import Button from "../../shared/Button";
import {signOut, updateCurrentUser} from "firebase/auth"
import {auth} from "../../shared/firebase";
import SignOutBtn  from './SignOutBtn';

const Dashboard = (props) => {
    let { dashboard } = useParams();
    return (
        <div className="dashboard">
            <Sidebar home="true" />
            <SignOutBtn />
            <div className="container-cms">
                <h2 className="dashboard__heading">
                    Welcome to User's personal page dashboard!
                </h2>
            </div>
        </div>
    )
}

export default Dashboard;