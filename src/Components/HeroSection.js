import React from "react";
import "../Css/Herosection.css";
import Heroimage from "../Assets/Heroimage.png";
import { Link } from "react-router-dom";
import CButton from "./Button";
import Resume from "../Assets/Resume.pdf";
import Button from "@material-ui/core/Button";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";

const HeroSection = () => {
  return (
    <div className="Hero_section" id="home">
      <div className="heroside">
        <div className="myheader">
          <div className="my_social_link">
            <Button>
              <a href="https://www.facebook.com/shoaibahmadsakib123">
                <FacebookIcon style={{ color: "#6156f9" }} />
              </a>
            </Button>
            <Button>
              <a href="https://www.linkedin.com/in/shoaib-ahmad-sakib-a0376a191">
                <LinkedInIcon style={{ color: "#1a129f" }} />
              </a>
            </Button>
            <Button>
              <a href="https://github.com/shoaibahmadsakib">
                <GitHubIcon style={{ color: "#1a129f" }} />
              </a>
            </Button>
            <Button>
              <TwitterIcon style={{ color: "#1a129f" }} />
            </Button>
          </div>
          <h1 className="header_style">Shoaib Ahmad Sakib</h1>
          <p className="header_title">
            A profesional Frontend <br /> developer
          </p>
          <div className="download">
            <CButton>
              <a href={Resume} download="resume.pdf">
                Download resume
              </a>
            </CButton>
          </div>
          <CButton>
            <Link to="/contact">Contact us</Link>
          </CButton>
        </div>
        <div className="firstimage">
          <img src={Heroimage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
