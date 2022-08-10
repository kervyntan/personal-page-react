import React, {useRef} from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import cloud from "../../assets/cloud.png";

const Sidebar = (props) => {
  // const dashboard = useRef('dashboard');
  // const contentManagement = useRef('contentManagement');
  // console.log(dashboard)
  useEffect( () => {
    const dashboard1 = document.querySelector('.home');
    const contentManagement1 = document.querySelector('.content-management');
    console.log(dashboard1)
    console.log(contentManagement1)

    if (props.home === "true") {
      dashboard1.style.background = "blue";
    } else if (props.contentManagement === "true") {
      contentManagement1.style.background = "blue";
    }
  }, [])

   return (
    <div className="sidebar">
      {/* add home icon on the left */}
      <div className="home sidebar__item">
      <img src={cloud} alt="cloud" class="cms-icon"/>
      <Link to="/personal-page-react/dashboard"> Home </Link>
      </div>

      {/* className to target specific tabs on sidebar to highlight */}
      <div className="content-management sidebar__item"> 
      <img src={cloud} alt="cloud" class="cms-icon"/>
      <Link to="/personal-page-react/content-management"> Content Management </Link>
      </div>
    </div>
  );
};

export default Sidebar;
