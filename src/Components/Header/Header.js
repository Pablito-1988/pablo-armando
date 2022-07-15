import React from "react";
import "./Header.css";
import {useState } from "react";
import { Link } from "react-router-dom";
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
       <Link to={"/"}><img src={logo} alt="logoPablo" className="logoPablo" /></Link> 
        <span onClick={change} className="material-symbols-outlined">{isOpen}</span>
      </div>
      {isOpen === "close" ?<Dropdown close={()=> change()}/> : null}
    </header>
  );
};

export default Header;
