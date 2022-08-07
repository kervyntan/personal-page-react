import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import cloud from "../assets/cloud.png";

const SiteLayout = () => {
  return (
    <div className="container">
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
