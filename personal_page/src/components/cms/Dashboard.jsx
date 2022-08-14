import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Button from "../../shared/Button";
import { signOut, updateCurrentUser } from "firebase/auth";
import { db } from "../../shared/firebase";
import { doc, getDoc } from "firebase/firestore";
import SignOutBtn from "./SignOutBtn";
import Loading from "../../shared/Loading";

const Dashboard = (props) => {
  const userRef = doc(db, "currentUser", "currentUser");
  const [currentUser, setCurrentUser] = useState("");
  const [loading, setLoading] = useState(true);
  if (loading) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }
  useEffect(() => {
    const username = getDoc(userRef);
    username.then((doc) => {
      setCurrentUser(doc.data().user);
      setLoading(false);
    });
  }, []);
  return (
    <div className="dashboard">
      {loading && <Loading />}
      {!loading && (
        <>
          <Sidebar home="true" />
          <SignOutBtn />
          <div className="container-cms">
            <h2 className="dashboard__heading">
              Welcome to {currentUser}'s personal page dashboard!
            </h2>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
