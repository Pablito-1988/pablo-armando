import React from "react";
import "./Header.css";
import {useState } from "react";
import Dropdown from "./Dropdown";
import logo from "../../Assets/Img/1.png";

const Header = () => {
const [isOpen , setIsOpen] = useState("menu");

   const change = () => {
    setIsOpen(isOpen === "menu" ? "close" : "menu");

    }

  return (
    <header>
      <div className="headerContainer">
        <span className="space"></span>
        <img src={logo} alt="logoPablo" className="logoPablo" />
        <span onClick={change} className="material-symbols-outlined">{isOpen}</span>
      </div>
      {isOpen === "close" ?<Dropdown/> : null}
    </header>
  );
};

export default Header;
