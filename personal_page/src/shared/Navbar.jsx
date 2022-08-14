import React from "react";
import {Link} from "react-router-dom";

const Navbar = (props) => {
  const showHamburger = () => {
    var x = document.getElementById("container-nav-hamb");
    if (x.style.display === "block") {
      x.style.display = "none";
      // document.body.style.overflow = "hidden";
    } else {
      x.style.display = "block";
      // document.body.style.overflow = "unset";
    }
  };

  return (
    <div className="navbar">
      <div className="logo">
        {/* props.img in the future */}
        {/* <h1> KERVYN </h1> */}
        <Link to="/">
          <img className="cloud" src={props.img} alt="logo" />
        </Link>
      </div>

      <ul className="nav-list">
        {/* change to routes  */}
        <li className="nav-list-item">
          <Link to="/personal-page-react/about"> {props.firstItem} </Link>
        </li>
        <li className="nav-list-item">
          <Link to="/personal-page-react/portfolio"> {props.secondItem} </Link>
        </li>
        <li className="nav-list-item">
          <Link to="/personal-page-react/contact"> {props.thirdItem} </Link>
        </li>
      </ul>

      <div className="hamburger" onClick={showHamburger}>
        <div className="hamb"></div>
        <div className="hamb"></div>
        <div className="hamb"></div>

        <div id="container-nav-hamb">
          <ul className="nav-list-hamb">
            {/* change to routes  */}
            <div className="hamburger-inside" onClick={showHamburger}>
              <div className="hamb"></div>
              <div className="hamb"></div>
              <div className="hamb"></div>
            </div>
            <li className="nav-list-hamb-item">
              <Link to="/personal-page-react/about"> {props.firstItem} </Link>
            </li>
            <li className="nav-list-hamb-item">
              <Link to="/personal-page-react/portfolio"> {props.secondItem} </Link>
            </li>
            <li className="nav-list-hamb-item">
              <Link to="/personal-page-react/contact"> {props.thirdItem} </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
