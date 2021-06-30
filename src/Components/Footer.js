import React from "react";
import "../Css/Footer.css";

import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import TextField from "@material-ui/core/TextField";


import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import scrollTo from "gatsby-plugin-smoothscroll";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className="Footer">
      <div className="footer_header">
        <h2>Subscribe Here</h2>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="standard-basic" label="Standard" />
        </form>
        <Button variant="contained" color="primary">
          Primary
        </Button>
      </div>
      <div className="footer_threepart">
        <div className="firstpart">
          <h2>Shoaib Ahmad</h2>
        </div>
        <div className="secondpart">
          <strong>Quicks Links</strong>
          <Link to="/" onClick={() => scrollTo("#home")}>
            Home
          </Link>
          <Link to="/" onClick={() => scrollTo("#about")}>
            About
          </Link>
          <Link to="/contact" onClick={() => scrollTo("#contact")}>
            Contact
          </Link>
          <Link to="/" onClick={() => scrollTo("#skill")}>
            my skill
          </Link>

          <Link to="/" onClick={() => scrollTo("#my_portfolio_here")}>
            my portfolio
          </Link>
        </div>
        <div className="thirdpart">
          <strong>Contact us</strong>
          <div className="quick_contact">
            <Button>
              <PhoneIcon className="button_Style" style={{ color: "white" }} />
              <span style={{ color: "white" }}>+8801763430682</span>
            </Button>
            <Button>
              <EmailIcon style={{ color: "white" }} />
              <span style={{ color: "white" }}>shoaibahmadsakib@gmail.com</span>
            </Button>
            <Button>
              <GitHubIcon style={{ color: "white" }} />
              <span style={{ color: "white" }}>github/shoaibahmad</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="my_social_link_footer">
        <Button>
          <a href="https://www.facebook.com/shoaibahmadsakib123">
            <FacebookIcon style={{ color: "#fff" }} />
          </a>
        </Button>
        <Button>
          <a href="https://www.linkedin.com/in/shoaib-ahmad-sakib-a0376a191">
            <LinkedInIcon style={{ color: "#fff" }} />
          </a>
        </Button>
        <Button>
          <a href="https://github.com/shoaibahmadsakib">
            <GitHubIcon style={{ color: "#fff" }} />
          </a>
        </Button>
        <Button>
          <TwitterIcon style={{ color: "#fff" }} />
        </Button>
      </div>
    </div>
  );
};

export default Footer;
