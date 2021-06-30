import React from "react";
import Aboutpic from "../Assets/Aboutpic.png";
import MyPhoto from "../Assets/my_photo.jpg";
import "../Css/About.css";
import TButton from "./Button";
import Button from "@material-ui/core/Button";
import { AboutMyself } from "../Data/AllData";
import { Link } from "react-router-dom";

const Aboutme = () => {
  return (
    <div className="about_me" id="about">
      <h1>about me</h1>
      <div className="About_twosection">
        <div className="about_image">
          <img src={MyPhoto} alt="" />
        </div>
        <div className="about_myself">
          {AboutMyself.map((data) => (
            <p>{data.details}</p>
          ))}

          <Link to="/about">
            <Button variant="contained" color="primary">
             
              Click for more
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
