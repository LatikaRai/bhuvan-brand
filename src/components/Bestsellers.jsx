import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Bestsellers = () => {
  useEffect(() => {
          AOS.init({
            duration: 500,
            delay: 200,   
            once: true       
          });
        }, []);
  
  return (
    <div className='bestsellers relative w-full h-[300vh] flex flex-col justify-center items-center gap-[1vw]'>
      <h1 data-aos="fade-left" className='w-full absolute top-[5%] right-[3%] text-[5vw] text-right leading-none'>Our Bestsellers Define <br /> the Culture</h1>
      <div className="best-cloths relative flex items-end justify-between w-full h-[70vh] mt-10">
        <div data-aos="fade-up" className="cloth-item absolute -top-[80%] w-[23vw] h-full">
          <video className='w-full h-full object-cover border-none' autoPlay loop muted playsInline>
            <source src="/videos/b1.mp4" type="video/mp4" />
          </video>
          <div className="cloth-desc h-[8vh] w-[90%] left-[1.2vw] bottom-[5%] shadow-black/70 flex items-center justify-between absolute">
            <img className='h-[6vh] object-cover rounded-sm' src="https://youthiapa.com/cdn/shop/files/7_1.jpg?v=1749401298&width=720" alt="" />
            <div className="leafing-none text-right">
              <h4 className='font-semibold '>VTG Cargo</h4>
              <h5 className='text-[0.9vw] font-semibold'>Rs. 2,499.00</h5>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="cloth-item absolute right-0 -top-[20%] w-[23vw] h-full">
          <video className='w-full h-full object-cover border-none' autoPlay loop muted playsInline>
            <source src="/videos/b3.mp4" type="video/mp4" />
          </video>
          <div className="cloth-desc h-[8vh] w-[90%] left-[1.2vw] bottom-[5%] shadow-black/70 flex items-center justify-between absolute">
            <img className='h-[6vh] object-cover rounded-sm' src="https://youthiapa.com/cdn/shop/files/4_4.jpg?v=1749384189&width=660" alt="" />
            <div className="leafing-none text-right">
              <h4 className='font-semibold '>Twin Koi Tee</h4>
              <h5 className='text-[0.9vw] font-semibold'>Rs. 2,499.00</h5>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="cloth-item absolute left-[15%] top-[80%] w-[23vw] h-full">
          <video className='w-full h-full object-cover border-none' autoPlay loop muted playsInline>
            <source src="/videos/b2.mp4" type="video/mp4" />
          </video>
          <div className="cloth-desc h-[8vh] w-[90%] left-[1.2vw] bottom-[5%] shadow-black/70 flex items-center justify-between absolute">
            <img className='h-[6vh] object-cover rounded-sm' src="https://youthiapa.com/cdn/shop/files/10_fa91bb15-3fd1-47b6-be6f-5225e33d30f6.jpg?v=1749379522&width=660" alt="" />
            <div className="leafing-none text-right">
              <h4 className='font-semibold '>Sand Cargo</h4>
              <h5 className='text-[0.9vw] font-semibold'>Rs. 2,499.00</h5>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="cloth-item absolute top-[150%] right-[10%] w-[23vw] h-full">
          <video className='w-full h-full object-cover border-none' autoPlay loop muted playsInline>
            <source src="/videos/b4.mp4" type="video/mp4" />
          </video>
          <div className="cloth-desc h-[8vh] w-[90%] left-[1.2vw] bottom-[5%] shadow-black/70 flex items-center justify-between absolute">
            <img className='h-[6vh] object-cover rounded-sm' src="https://youthiapa.com/cdn/shop/files/4_3.jpg?v=1749383692&width=720" alt="" />
            <div className="leafing-none text-right">
              <h4 className='font-semibold '>Summer time-happiness</h4>
              <h5 className='text-[0.9vw] font-semibold'>Rs. 1,999.00</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bestsellers
