import React, { useState } from "react";

import "../Css/MyPortfolio.css";
import Button from "@material-ui/core/Button";
import ProjectData from "../Data/ProjectData.js";

import Lightbox from "react-awesome-lightbox";

import "react-awesome-lightbox/build/style.css";

const MyPortfolio = () => {
  const [BlogData, setBlogData] = useState(ProjectData);

  const projectFilterItem = (name) => {
    const arrProject = ProjectData.filter((p) => p.girls.includes(name));
    setBlogData(arrProject);
  };

  return (
    <div className="my_portfolio" id="my_portfolio_here">
      <h1 className="portfolio_header">Portfolio project</h1>
      <div className="project_nav">
        <div className="project_item" onClick={() => projectFilterItem("all")}>
          All
        </div>
        <div className="project_item" onClick={() => projectFilterItem("html")}>
          Html
        </div>

        <div
          className="project_item"
          onClick={() => projectFilterItem("JavaScript")}
        >
          JavaScript
        </div>
        <div
          className="project_item"
          onClick={() => projectFilterItem("Reactjs")}
        >
          Reactjs
        </div>
      </div>
      <div className="portfolio_boxs">
        {BlogData.map((data) => (
          <div className="portfolio_box">
            <img src={data.image} alt="" />
            {/* <Lightbox image={data.image} title="Image Title"/> */}
            <h2 className="portfolio_details"></h2>
            <Button variant="contained" color="primary">
              More
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPortfolio;
