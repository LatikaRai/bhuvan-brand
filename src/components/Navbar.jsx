import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import gsap from 'gsap';

const Navbar = () => {
  useEffect(() => {
    const imgBg = document.querySelector('.img-bg');
    const links = document.querySelectorAll('.brand-links a');
    const bgClasses = ['home-bg', 'collections-bg', 'raised-bg', 'story-bg'];

    const bgImages = [
      "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80')",
      "url('https://youthiapa.com/cdn/shop/files/1_85f9448b-9edb-4ea0-b8db-ade741d9e9fc.jpg?v=1749984626&width=660')",
      "url('https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80')",
      "url('https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80')"
    ];

    const crossfadeTo = (idx) => {
      const after = imgBg;
      after.classList.add('fading');
      after.style.setProperty('--fade-img', bgImages[idx]);
      after.querySelector('style[data-fade]')?.remove();
      const style = document.createElement('style');
      style.setAttribute('data-fade', '');
      style.innerHTML = `.img-bg.fading::after { background-image: ${bgImages[idx]}; }`;
      document.head.appendChild(style);

      setTimeout(() => {
        imgBg.classList.remove(...bgClasses);
        imgBg.classList.add(bgClasses[idx]);
        after.classList.remove('fading');
        style.remove();
      }, 400);
    };

    links.forEach((link, idx) => {
      link.addEventListener('mouseenter', () => {
        crossfadeTo(idx);
        gsap.to(imgBg, {
          duration: 0.5,
          ease: 'expo.out',
        });
        gsap.to(link, {
          '--underline-scale': 1,
          duration: 0.3,
          ease: 'power3.out',
          overwrite: true
        });
      });

      link.addEventListener('mouseleave', () => {
        crossfadeTo(0);
        gsap.to(imgBg, {
          duration: 0.5,
          ease: 'expo.inOut',
        });
        gsap.to(link, {
          '--underline-scale': 0,
          duration: 0.3,
          ease: 'power3.in',
          overwrite: true
        });
      });
    });

    const menuSection = document.querySelector('.menu-section');
    const closeBtn = document.querySelector('.logo .close');
    const menuBtn = document.querySelector('nav .ryt');

    closeBtn?.addEventListener('click', () => {
      gsap.to(menuSection, {
        top: '-100%',
        duration: 0.7,
        ease: 'expo.inOut',
      });
    });

    menuBtn?.addEventListener('click', () => {
      gsap.to(menuSection, {
        top: '0%',
        duration: 0.7,
        ease: 'expo.inOut',
      });
    });
  }, []);

  return (
    <>
      <nav className="w-full h-[10vh] flex justify-between items-center bg-[#121212]">
        <div className="lft">
          <img
            src="https://youthiapa.com/cdn/shop/files/Logo.png?v=1615319725&width=600"
            alt=""
            className="h-[3vh] object-cover absolute"
          />
        </div>
        <div className="ryt bg-[#CDFA18] rounded-full flex items-center gap-[0.7vw] cursor-default">
          <h4 className="text-black font-bold text-[0.7vw] uppercase">Menu</h4>
          <div className="w-[0.5vw] h-[0.5vw] bg-black rounded-full ml-2"></div>
        </div>
      </nav>

      <div className="menu-section w-full h-screen bg-black absolute top-[-100%] left-0 transition-all ease-in-out duration-700">
        <div className="logo flex justify-between items-center w-full">
          <img
            src="https://youthiapa.com/cdn/shop/files/Logo.png?v=1615319725&width=600"
            alt=""
            className="h-[3vh]"
          />
          <div className="close bg-[#CDFA18] text-[1.5vw] flex items-center justify-center rounded-full cursor-pointer hover:scale-110 hover:shadow-[0_4px_24px_0_#fdd60055] transition-all">
            x
          </div>
        </div>

        <div className="menu-items flex justify-center items-center gap-[10vw]">
          <div className="img-cont relative h-[50vh] w-[40vh] overflow-hidden">
            <div className="img-bg home-bg absolute w-full h-full top-0 left-0 bg-cover bg-center z-0"></div>
          </div>

          <div className="links flex flex-col gap-10">
            <div className="brand-links flex flex-col text-white text-[4vw] font-medium">
              <NavLink className={(e)=> e.isActive ? "text-[#CDFA18]" : ""} to="/">Home</NavLink>
              <NavLink className={(e)=> e.isActive ? "text-[#CDFA18]" : ""} to="/collections">Collections</NavLink>
              <NavLink className={(e)=> e.isActive ? "text-[#CDFA18]" : ""} to="/raised-right">Raised Right</NavLink>
              <NavLink className={(e)=> e.isActive ? "text-[#CDFA18]" : ""} to="/our-story">Our Story</NavLink>
            </div>
            <div className="social-links flex flex-col gap-2 text-gray-600">
              <a href="#">X</a>
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
              <a href="#">YouTube</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
