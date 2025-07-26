import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Para = () => {
   useEffect(() => {
        AOS.init({
          duration: 500,
          delay: 200,   
          once: true       
        });
      }, []);
  return (
    <div data-aos="fade-up" className='para-cont h-[60vh] flex items-center justify-center w-full bg-white '>
        <p className='text-4xl'>Raised Right by Youthiapa is more than everyday wear—it’s a statement. Built for comfort and clean style, it stands for respect, responsibility, and resilience. Wear what matters. No noise. No drama. Just purpose-driven fashion.</p>
    </div>
  )
}

export default Para