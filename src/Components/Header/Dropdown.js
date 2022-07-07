import React from "react";
import "./Dropdown.css";

const Dropdown = () => {
  return (
    <div className="dropDownContainer">
      <div className="dropDownLinks">
        <p className="dropDownLink">Mi trabajo</p>
        <p className="dropDownLink">About</p>
        <p className="dropDownLink">Contacto</p>
      </div>

      <div className="socialDropDown">
        <i id="socialMediaLogo" className="fab fa-instagram"></i>
        <i id="socialMediaLogo" className="fab fa-linkedin-in"></i>
      </div>
    </div>
  );
};

export default Dropdown;
