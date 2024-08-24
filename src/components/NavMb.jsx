import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import ProfilePic from "../assets/profile.webp";
import "./css/NavMb.scss";

const NavMb = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    var email = "ganeshbistakaji@gmail.com";
    var subject = "Regarding Web Design/Development";

    var gmailUrl =
      "https://mail.google.com/mail/?view=cm&fs=1&to=" +
      email +
      "&su=" +
      encodeURIComponent(subject);
    window.open(gmailUrl, "_blank");
  };
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`NavMb ${isOpen ? "open" : ""}`}>
      <div className="top">
        <div className="profile">
          <img
            src={ProfilePic}
            alt="Error loading image"
            className="profilepic"
          />
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          {!isOpen ? <FiMenu className="icon" /> : <CgClose className="icon" />}
        </div>
      </div>
      <div className="bottom">
        <a href="#about" className="list">
          About
        </a>
        <a href="#works" className="list">
          Work
        </a>
        <a href="#skills" className="list">
          Skills
        </a>
        <div className="line"></div>
        <a href="https://github.com/ganeshbistakaji" className="list">
          Github(ganeshbistakaji)
        </a>
        <a href="https://github.com/deadbushmc" className="list">
          Github(deadbushmc)
        </a>
        <p className="button" onClick={(e) => handleClick(e)}>
          Contact Me
        </p>
      </div>
    </div>
  );
};

export default NavMb;
