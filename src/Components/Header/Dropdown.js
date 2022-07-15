import React from "react";
import "./Dropdown.css";
import { Link } from "react-router-dom";

const Dropdown = (props) => {
  const { close } = props;
  const closeDropdown = () => {
    close();
  }

  return (
    <div className="dropDownContainer">
      <div className="dropDownLinks">
        <Link to={"/work"}><p onClick={closeDropdown} className="dropDownLink">Mi trabajo</p></Link>
       <p className="dropDownLink">About</p>
       <Link to={"/contact"}><p onClick={closeDropdown} className="dropDownLink">Contacto</p></Link>
      </div>

      <div className="socialDropDown">
        <i id="socialMediaLogo" className="fab fa-instagram"></i>
        <i id="socialMediaLogo" className="fab fa-linkedin-in"></i>
      </div>
    </div>
  );
};

export default Dropdown;
