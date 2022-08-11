import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import cloud from "../assets/cloud.png";

const SiteLayout = () => {
  // adding loading icon and overlay
  return (
    <div className="container">
      {/* <div className="loading">
        <div className="loading-ring">
          <div></div>
        </div>
      </div> */}
      <Navbar
        img={cloud}
        firstItem="About"
        secondItem="Portfolio"
        thirdItem="Contact"
      />
      <Outlet />
      <Footer />
    </div>
  );
};

export default SiteLayout;
