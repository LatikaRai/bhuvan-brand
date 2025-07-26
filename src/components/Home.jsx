import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 100,   
      once: true       
    });
  }, []);
  return (
    <div>
      <div className='home-section relative w-full h-[90vh] -z-[11] p-[2vw] bg-[#121212] flex flex-col items-center justify-center'>
        <h1 data-aos="fade-up" className='brand-name text-white text-[27vw] -bottom-[70%] absolute'>Youthiapa</h1>
        <div className="model-cont w-[60vw] h-full flex items-center justify-center text-white">
          <div className="model-1"></div>
        </div>
      </div>
    </div>
  )
}

export default Home
