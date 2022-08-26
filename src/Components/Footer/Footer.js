import React from "react";
import "./Footer.css";
import logo from "../../Assets/Img/1.png";

const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <div className="mailAndPhone">
          <p className="mail">
            <a className="mailAndPhoneInfo" href="mailto:pabloar24.7@gmail.com">
              pabloar24.7@gmail.com
            </a>
          </p>
          <a
            className="mailAndPhoneInfo"
            href="https://wa.me/5491134284190"
            target={"_blank"}
            rel="noreferrer"
          >
            (54)911 34284190
          </a>
        </div>
        <div className="logoFooter">
        <img src={logo} alt="logoPablo" className="logoPabloFooter" />
        </div>
        <div className="socialMedia">
          <a href="https://www.instagram.com/pablito67_25" target="_blank" rel="noreferrer" ><i id="socialMediaLogo" className="fab fa-instagram"></i></a>
          <a href="https://www.linkedin.com/in/pablo-armando/" target="_blank" rel="noreferrer"><i id="socialMediaLogo" className="fab fa-linkedin-in"></i></a>
        </div>
        <div className="copy">
          <p className="copyInfo">
            &copy; 2022 Pablo Armando. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
