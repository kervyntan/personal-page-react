import React, { useState, useEffect, useRef } from "react";
// import {Outlet} from "react-router-dom";
import AboutOnLanding from "./AboutOnLanding";
import Hero from "./Hero";
import WorksOnLanding from "./WorksOnLanding";
import ReachMe from "../shared/ReachMe";
import technology from "../assets/technology.png";

const Home = () => {
  let path = "./data/data.json";
  const works = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(path)
      .then((res) => res.json())
      .then((json) => {
        works.current = json;
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Hero img={technology} />
      <AboutOnLanding />
      {!loading && <WorksOnLanding works={works.current} />}
      <ReachMe />
    </>
  );
};

export default Home;
