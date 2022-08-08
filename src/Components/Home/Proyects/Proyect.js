import React from 'react';


const Proyect = (props) => {
    const { title, web, image } = props;
    
    return (
        <div className='proyectContainer'>
                <p className= 'proyectTitle'>{title}</p>
                <a href={web}><img src={image} alt="imagen" className='proyectImg' /></a>
        </div>
    );
};

export default Proyect;