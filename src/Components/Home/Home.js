import React , {useState } from 'react';
import "./Home.css";
import Proyects from '../Home/Proyects/Proyects';

const Home = () => {
const [test , setTest] = useState('test');
const [background , setBackground] = useState('homeAnimation');
const [arrow , setArrow] = useState('arrow');

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
                        <h1 className={test} >Front end developer.</h1>
                        <p >Bulding better webs</p>
                        <span className={arrow}></span>
                      </div>  
                </div>
            </section>
            <Proyects/>
        </div>
    );
};

export default Home;