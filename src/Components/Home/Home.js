import React , {useState } from 'react';
import "./Home.css";

const Home = () => {
const [test , setTest] = useState('test');
const [background , setBackground] = useState('homeAnimation');

    function change () {

        if(window.scrollY > 50){
           setTest("test1"); 
           setBackground("homeAnimation_active");
        }else{
            setTest("test");
            setBackground("homeAnimation");
        }  
    }
    window.addEventListener('scroll' , change)
    return (
        <div>
            <section>
                <div  className={background}>
                    <div className="homeAnimation__text">
                        <h1  className={test}>Front end developer</h1>
                        <p>bulding better worlds</p>
                      </div>  

                </div>

            </section>
        </div>
    );
};

export default Home;