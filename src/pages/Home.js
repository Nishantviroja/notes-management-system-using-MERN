import React from "react";
import "./Home.css";
import Home1 from "../Images/home1.png";
import Home2 from "../Images/home2.png";
import Home3 from "../Images/home3.png";
import Home4 from "../Images/home4.png";

export const Home = (props) => {
  return (
    <>
   
    <div className='d-flex flex-row justify-content-center align-items-center ' id="hello">
                    <div className='w-100'>
                        <img className="w-100 " src={Home1} />
                    </div>
                    
            </div>
            <div className='d-flex flex-row justify-content-center align-items-center '>
                    <div className='w-100'>
                        <img className="w-100 " src={Home2} />
                    </div>
                    
            </div>
            <div className='d-flex flex-row justify-content-center align-items-center '>
                    <div className='w-100'>
                        <img className="w-100 " src={Home3} />
                    </div>
                    
            </div>
            <div className='d-flex flex-row justify-content-center align-items-center ' id="hello4">
                    <div className='w-100'>
                        <img className="w-100 " src={Home4} />
                    </div>
                    
            </div>
    </>
  );
};
