import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {

  useEffect(() => {
    gsap.to(".slide", {
      xPercent: -320, 
      ease: "power4.out",
      scrollTrigger: {
        trigger: '.about-section',
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        pin: true
      }
    });
  }, []);
  return (
    <div className="about-section relative w-full h-[250vh]">
      <div className="slides overflow-hidden sticky top-0 left-0 flex gap-20 w-full h-[100vh]">
        <div className="slide w-full flex items-center justify-center h-screen flex-shrink-0">
          <div className="text font-[PP_Neue_Machina_Inktrap_Medium]">
            <h1 className="text-8xl ">Curious how it all started?</h1>
          </div>
          <div className="image absolute top-1/2 rounded-full overflow-hidden -translate-y-1/2 right-[-10%] w-[22rem] h-[22rem]">
            <img
              className="w-full h-full object-cover "
              src="https://youthiapa.com/cdn/shop/files/bb-modified.jpg?v=1750000289&width=1100"
              alt=""
            />
          </div>
        </div>
        <div className="slide w-full flex items-center justify-center h-screen flex-shrink-0">
          <div className="absolute top-[10%] left-[15%]">
            <h1 className="text-5xl ">From friends to founders, <br /> our journey began with a spark.</h1>
          </div>
          <div className="image absolute top-[10%] right-0 rounded-full overflow-hidden -translate-y-1/2 right-[-10%] w-[22rem] h-[22rem]">
            <img
              className="w-full h-full object-cover "
              src="https://i3.wp.com/www.thetalentedindian.com/wp-content/uploads/2021/12/bhuvan-bam-1200-1.jpeg"
              alt=""
            />
          </div>
          <div className="absolute bottom-[15%] right-[15%]">
            <h1 className="text-5xl ">Youthiapa started as merch, <br /> but became a movement.</h1>
          </div>
          <div className="image absolute bottom-[-5%] left-[15%] rounded-full overflow-hidden -translate-y-1/2 right-[-10%] w-[12rem] h-[12rem]">
            <img
              className="w-full h-full object-cover "
              src="https://i.cdn.newsbytesapp.com/images/l75220240526124446.png"
              alt=""
            />
          </div>
        </div>
        <div className="slide w-full flex items-center justify-center h-screen flex-shrink-0">
          <div className="absolute top-[5%] left-[15%] w-[18vw]">
            <h1 className="text-xl ">We wanted more than trends—we wanted purpose.</h1>
          </div>
          <div className="image absolute top-[23%] right-0 rounded-full overflow-hidden -translate-y-1/2 right-[-10%] w-[22rem] h-[22rem]">
            <img
              className="w-full h-full object-cover "
              src="https://i.pinimg.com/474x/27/f7/c3/27f7c3750d25b7b25c685692e13a031a.jpg"
              alt=""
            />
          </div>
          <div className="absolute bottom-[55%] right-[15%]">
            <h1 className="text-5xl ">That’s how Raised Right was born.</h1>
          </div>
          <div className="image absolute bottom-[10%] left-[15%] rounded-full overflow-hidden -translate-y-1/2 right-[-10%] w-[17rem] h-[17rem]">
            <img
              className="w-full h-full object-cover "
              src="https://upload.wikimedia.org/wikipedia/commons/6/64/Bhuvan_Bam_at_Myntra%27s_Creator_Fest_2023_event_%28cropped%29.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="slide w-full flex items-center justify-center h-screen flex-shrink-0">
          <div className="image absolute top-[23%] right-0 rounded-full overflow-hidden -translate-y-1/2 right-[-10%] w-[22rem] h-[22rem]">
            <img
              className="w-full h-full object-cover "
              src="https://youthiapa.com/cdn/shop/products/TheComicTeetransbg.png?v=1681817400&width=480"
              alt=""
            />
          </div>
          <div className="absolute bottom-[55%] right-[25%]">
            <h1 className="text-5xl ">Not just what you wear, <br /> but what you stand for.</h1>
          </div>
          <div className="image absolute bottom-[10%] left-[15%] rounded-full overflow-hidden -translate-y-1/2 right-[-10%] w-[17rem] h-[17rem]">
            <img
              className="w-full h-full object-cover "
              src="https://youthiapa.com/cdn/shop/files/WhatsApp_Image_2025-07-15_at_20.27.58.jpg?v=1752603412&width=720"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
