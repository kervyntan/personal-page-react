import React, {useRef} from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import cloud from "../../assets/cloud.png";

const Sidebar = (props) => {
  // const dashboard = useRef('dashboard');
  // const contentManagement = useRef('contentManagement');
  // console.log(dashboard)
  useEffect( () => {
    const dashboard = document.querySelector('.home');
    const contentManagement = document.querySelector('.content-management');
    // console.log(dashboard1)
    // console.log(contentManagement1)
    const color = "linear-gradient(#2fb5c8, #286ede)";
    if (props.home === "true") {
      dashboard.style.background = color;
    } else if (props.contentManagement === "true") {
      contentManagement.style.background = color;
    }
  }, [])

  const showHamburger = () => {
    let x = document.getElementById("container-nav-hamb");
    let user = document.querySelector('.user');
    if (x.style.display === "block") {
      x.style.display = "none";
      user.style.display = "block";
      // document.body.style.overflow = "hidden";
    } else {
      x.style.display = "block";
      user.style.display = "none";
      // document.body.style.overflow = "unset";
    }
  };

   return (
    <>
    <div className="sidebar">
      {/* add home icon on the left */}
      
      <div className="home sidebar__item">
      <img src={cloud} alt="cloud" className="cms-icon"/>
      <Link to="/personal-page-react/dashboard"> Home </Link>
      </div>

      {/* className to target specific tabs on sidebar to highlight */}
      <div className="content-management sidebar__item"> 
      <img src={cloud} alt="cloud" className="cms-icon"/>
      <Link to="/personal-page-react/content-management"> Content Management </Link>
      </div>
    </div>

      <div className="hamburger-cms">
      <div className="hamburger" onClick={showHamburger}>
        <div className="hamb"></div>
        <div className="hamb"></div>
        <div className="hamb"></div>

        <div id="container-nav-hamb">
          <ul className="nav-list-hamb">
            {/* <div className="hamburger-inside" onClick={showHamburger}>
              <div className="hamb"></div>
              <div className="hamb"></div>
              <div className="hamb"></div>
            </div> */}
            <li className="nav-list-hamb-item">
              <Link to="/personal-page-react/dashboard"> Home </Link>
            </li>
            <li className="nav-list-hamb-item">
            <Link to="/personal-page-react/content-management"> Content Management </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    </>
  );
};

export default Sidebar;
