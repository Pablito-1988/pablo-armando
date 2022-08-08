import React from "react";
import "./ProyectStyle.css";
import Proyect from "./Proyect";
import Avispa from "../../../Assets/Img/Avispa.png";
import Dog from "../../../Assets/Img/DogPNG.png";
import Jenny from "../../../Assets/Img/JennyPanichiLogo.png";

const Proyects = () => {
  const proyects = [
    {
      title: "Avispa Lab",
      web: "https://avispa-lab.netlify.app",
      image:  Avispa ,
    },

    {
      title: "Jenny Panichi",
      web: "https://jennypanichi.netlify.app",
      image:  Jenny ,
    },
    {
      title: "Dog Grow",
      web: "https://dog-grow.netlify.app",
      image:  Dog ,
    },
  ];

  return (
    <section>
      <div className="proyectsSeccion">
        <h2 className="proyectsTitle">Proyects</h2>
        <div className="proyectsWrapper">
          {proyects.map((proyect, index) => {
            console.log(proyect.image)
            return (
              <Proyect
                key={index}
                title={proyect.title}
                web={proyect.web}
                image={proyect.image}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Proyects;
