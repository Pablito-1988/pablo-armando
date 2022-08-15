import React , {useState , useEffect} from 'react';
import "./Home.css";

import Proyects from '../Home/Proyects/Proyects';
import Courses from './Courses/Courses';
import Profile from './Profile/Profile';

const Home = () => {
const [test , setTest] = useState('test');
const [background , setBackground] = useState('homeAnimation');
const [arrow , setArrow] = useState('arrow');
const [atribute , setAtribute] = useState('');
const at = ['Front end developer.', 'Dedicated.' , 'Passionate.', 'Gamer.' , 'Full Stack Developer.'];

useEffect(() => {
   const interval = setInterval(() => {
    setAtribute(at[Math.floor(Math.random() * at.length)]);
    } , 2500);
    return () => clearInterval(interval);

} );



    function change () {

        if(window.scrollY > 50){
           setTest("test1"); 
           setBackground("homeAnimation_active");
              setArrow("arrow_active");
        }else{
            setTest("test");
            setBackground("homeAnimation");
            setArrow("arrow");
        }  
    }
    window.addEventListener('scroll' , change)
    return (
        <div>
            <section>
                <div  className={background}>
                    <div className="homeAnimation__text">
                        <h1 className={test}>I'm </h1>
                        <h1 className={test} >{atribute}</h1>
                        <p >Bulding better webs</p>
                        <span className={arrow}></span>
                      </div>  
                </div>
            </section>
            <Profile/>
            <Proyects/>
            <Courses/>
        </div>
    );
};

export default Home;