import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* add home icon on the left */}
      <Link to="/dashboard"> Home </Link>
      <Link to="/content-management"> Content Management </Link>
    </div>
  );
};

export default Sidebar;
