import React from "react";
import "./Header.css";
import {useState } from "react";
import Dropdown from "./Dropdown";

const Header = () => {
const [isOpen , setIsOpen] = useState("menu");

   const change = () => {
    setIsOpen(isOpen === "menu" ? "close" : "menu");

    }

  return (
    <header>
      <div className="headerContainer">
        <span className="space"></span>
        <h1 className="headerTitle">PA</h1>
        <span onClick={change} className="material-symbols-outlined">{isOpen}</span>
      </div>
      {isOpen === "close" ?<Dropdown/> : null}
    </header>
  );
};

export default Header;
