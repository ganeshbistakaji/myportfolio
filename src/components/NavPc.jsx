import { React, Link } from "react";
import ProfilePic from "../assets/profile.webp";
import "./css/NavPc.scss";

const NavPc = () => {
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
  return (
    <div className="NavPc">
      <div className="left">
        <div className="profile">
          <img
            src={ProfilePic}
            alt="Error loading image"
            className="profilepic"
          />
        </div>
        <div className="lists">
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
        </div>
      </div>
      <div className="contact">
        <p className="button" onClick={(e) => handleClick(e)}>
          Contact Me
        </p>
      </div>
    </div>
  );
};

export default NavPc;
