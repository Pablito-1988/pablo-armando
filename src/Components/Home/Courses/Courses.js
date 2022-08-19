import React from 'react';
import './Courses.css';

const Courses = () => {
const cursos = [
    {
        id: 1,
        name: '• React Js',
        fecha:'10/2021 - 12/2021',
        instituto: 'Coderhouse',
        web: 'https://www.coderhouse.com/',

    },
    {
        id: 2,
        name: '• Full Stack Web Developer',
        fecha:'03/2021 - 09/2021',
        instituto: 'Digital House',
        web: 'https://www.digitalhouse.com/',
    }

]

    return (
       <>
            <div className='coursesContainer'>
                <h1 className='proyectsTitle'>Studies</h1>
                <div className='courses'>
                    {cursos.map(curso => (
                        <div className='course' key={curso.id}>
                            <h2 className='courseTitle'>{curso.name}</h2>
                            <p className='courseFecha'>{curso.fecha}</p>
                            <a href={curso.web} className='courseInstituto' target='_blank'  rel="noreferrer">{curso.instituto}</a>
                            </div>
                    ))}
                </div>  
            </div>
       </>
    );
};

export default Courses;