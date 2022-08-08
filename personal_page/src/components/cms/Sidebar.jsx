import React from "react";
import { Link } from "react-router-dom";
import cloud from "../../assets/cloud.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* add home icon on the left */}
      <div className="home">
      <img src={cloud} alt="cloud" class="cms-icon"/>
      <Link to="/dashboard"> Home </Link>
      </div>

      {/* className to target specific tabs on sidebar to highlight */}
      <div className="content-management"> 
      <img src={cloud} alt="cloud" class="cms-icon"/>
      <Link to="/content-management"> Content Management </Link>
      </div>
    </div>
  );
};

export default Sidebar;
