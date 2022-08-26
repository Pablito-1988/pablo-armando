import React , {useRef} from "react";
import "./ProyectStyle.css";
import Proyect from "./Proyect";
import Avispa from "../../../Assets/Img/Avispa.png";
/* import Dog from "../../../Assets/Img/DogPNG.png"; */
import Jenny from "../../../Assets/Img/JennyLogo.png";

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
/*     {
      title: "Dog Grow",
      web: "https://dog-grow.netlify.app",
      image:  Dog ,
    }, */
  ];

  const changeColor = useRef()

 function diferentColor(name){
    
    if(name === "Avispa Lab"){
        changeColor.current.style.backgroundColor='rgb(56, 182, 255)'
    }else if(name === "Jenny Panichi"){
        changeColor.current.style.backgroundColor='red'
    }/* else if(name === "Dog Grow"){
        changeColor.current.style.backgroundColor='rgb(49, 218, 73)'
    } */
 }
 function normalColor(){
    changeColor.current.style.backgroundColor='black'
 }
  return (
    <section>
      <div ref={changeColor} className="proyectsSeccion">
        <h2 className="proyectsTitle">Proyects</h2>
        <div  className="proyectsWrapper">
          {proyects.map((proyect, index) => {
            return (
              <Proyect
                color={diferentColor} 
                backToBlack={normalColor}
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
