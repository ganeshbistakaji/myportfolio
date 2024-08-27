import React from "react";
import "./css/Skills.scss";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { FaDebian } from "react-icons/fa6";
import { FaFigma } from "react-icons/fa";

const Skills = () => {
  function onResize() {
    const width = window.innerWidth;

    // if (width < 767) {
    //     document.querySelector('.skills').innerHTML = "<span title='HTML'><FaHtml5 /></span><span title='CSS'><FaCss3Alt /></span><span title='JAVASCRIPT'><FaJsSquare /></span><span title='SCSS'><FaSass /></span><span title='REACT'><FaReact /></span><span title='NODE'><FaNode /></span><span title='PHP'><FaPhp /></span><span title='PYTHON'><FaPython /></span><span title='MYSQL'><DiMysql /></span><span title='MONGO'><DiMongodb /></span><span title='DEBIAN LINU'><FaDebian/></span><span title='Figma'><FaFigma /></span>";
    // } else {
    //     document.querySelector('.skills').innerHTML = "<span title='HTML'><FaHtml5 /></span><span title='CSS'><FaCss3Alt /></span><span title='JAVASCRIPT'><FaJsSquare /></span><span title='SCSS'><FaSass /></span><span title='REACT'><FaReact /></span><span title='NODE'><FaNode /></span><span title='PHP'><FaPhp /></span><span title='PYTHON'><FaPython /></span><span title='MYSQL'><DiMysql /></span><span title='MONGO'><DiMongodb /></span><span title='DEBIAN LINU'><FaDebian/></span><span title='Figma'><FaFigma /></span>";
    // }
  }

  window.addEventListener("resize", onResize);
  window.addEventListener("load", onResize);
  return (
    <>
      <div className="skillspc" id="skillspc">
        <span title="HTML">
          <FaHtml5 />
        </span>
        <span title="CSS">
          <FaCss3Alt />
        </span>
        <span title="JAVASCRIPT">
          <FaJsSquare />
        </span>
        <span title="SCSS">
          <FaSass />
        </span>
        <span title="REACT">
          <FaReact />
        </span>
        <span title="NODE">
          <FaNode />
        </span>
        <span title="PHP">
          <FaPhp />
        </span>
        <span title="PYTHON">
          <FaPython />
        </span>
        <span title="MYSQL">
          <DiMysql />
        </span>
        <span title="MONGO">
          <DiMongodb />
        </span>
        <span title="DEBIAN LINU">
          <FaDebian />
        </span>
        <span title="Figma">
          <FaFigma />
        </span>
      </div>

      <div className="skillsmb" id="skillsmb">
        <div className="top">
          <span title="HTML">
            <FaHtml5 />
          </span>
          <span title="CSS">
            <FaCss3Alt />
          </span>
          <span title="JAVASCRIPT">
            <FaJsSquare />
          </span>
          <span title="SCSS">
            <FaSass />
          </span>
          <span title="REACT">
            <FaReact />
          </span>
          <span title="NODE">
            <FaNode />
          </span>
        </div>
        <div className="bottom">
          <span title="PHP">
            <FaPhp />
          </span>
          <span title="PYTHON">
            <FaPython />
          </span>
          <span title="MYSQL">
            <DiMysql />
          </span>
          <span title="MONGO">
            <DiMongodb />
          </span>
          <span title="DEBIAN LINU">
            <FaDebian />
          </span>
          <span title="Figma">
            <FaFigma />
          </span>
        </div>
      </div>
    </>
  );
};

export default Skills;
