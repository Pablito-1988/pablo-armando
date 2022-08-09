import React from "react";

const Proyect = (props) => {
  const { title, web, image } = props;

  return (
    <div className="proyectContainer">
      <div className="card">
        <div className="imageContainer">
          <a href={web}>
            <img src={image} alt="imagen" className="proyectImg" />
          </a>
        </div>
        <div className="proyectTitle">
          <h3 className="title">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default Proyect;
