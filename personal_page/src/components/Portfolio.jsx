import React from "react";
import bulb from "../assets/bulb-icon.png";
import PortfolioItem from "../shared/PortfolioItem";
const Portfolio = () => {
  return (
    <div className="portfolio">
      <img class="bulb" src={bulb} alt="" />
      <h1 class="portfolio-title"> Portfolio </h1>
      <div className="grid">
        <div className="grid-item">
          <PortfolioItem name="Project Name" />
        </div>
        <div className="grid-item">
        <PortfolioItem name="Project Name" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
