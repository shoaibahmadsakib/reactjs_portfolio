import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/Logo.png";
import "../Css/Navbar.css";
import scrollTo from "gatsby-plugin-smoothscroll";
import ToggleFunction from "./ToggleFunction";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [hamberger, setHambarger] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  // const [css, setCss] = useState({

  // })

  const clickHandler = () => {
    setShow(!show);
    setHambarger(!hamberger);
  };

  //////////////////
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 120) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // window.onResize = 
  });

  let navbarClasses = ["nav_bar"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }

  const containt = {
    hidden: { opacity: 1 },
    show: { rotate: 360, opacity: 1 },
  };



  // resize
 


  return (
    <div className={navbarClasses.join(" ")}>
      <div className="nav_part1">
        <Link to="/">
         
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <div className={show ? "nav_part2 close" : "nav_part2"}>
        <Link to="/" onClick={() => scrollTo("#home")}>
          Home
        </Link>
        <Link to="/" onClick={() => scrollTo("#about")}>
          About
        </Link>
        <Link to="/contact" onClick={() => scrollTo("#contact")}>
          Contact
        </Link>
        <Link to="/" onClick={() => scrollTo("#skill")}>my skill</Link>

        <Link to="/" onClick={() => scrollTo("#my_portfolio_here")}>
          my portfolio
        </Link>
        <ToggleFunction/>
      </div>
      <div
        className="hambarer"
        style={{
          zIndex: 1,
        }}
      >
        <i
          onClick={clickHandler}
          className={hamberger ?  "fas fa-hamburger":"fas fa-times" }
          style={{ fontSize: "29px", color:'#fff'}}
        ></i>
      </div>
    </div>
  );
};

export default Navbar;
