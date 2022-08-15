import React from "react";
import "./Profile.css";
import imagen from "../../../Assets/Img/Pablo.jpg";

const Profile = () => {
  return (
    <div className="profileContainer">
      <div className="profile">
        <div className="profileTitle">
          <h2 className="profilemainTitle">Profile</h2>
          <p> I´m a creative webdeveloper </p>
        </div>
        <div className="profileContent">
          <div>
            <h2>About me</h2>
            <p>
              I’m a Jr Web Full Stack Developer with FrontEnd orientation.
              Dynamic, proactive, with ability to resolve problems and
              communicative.
            </p>
          </div>
          <div className="profileImgContainer">
            <img src={imagen} alt="Pablo Armando" className="profileImage" />
          </div>
          <h2>Details</h2>
          <p className="profileDetails">Name:</p>
          <p className="profileInfo">Pablo Armando</p>
          <p className="profileDetails">Age:</p>
          <p className="profileInfo">34 years</p>
          <p className="profileDetails">Location:</p>
          <p className="profileInfo">Buenos Aires, Argentina</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
