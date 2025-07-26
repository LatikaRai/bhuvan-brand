import React, { useState, useCallback, memo } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const collections = [
  {
    id: "oversized-tees",
    name: "Oversized T-Shirts",
    role: "Laid-back Streetwear Vibe",
    image: "/images/oversized-tees.jpg",
  },
  {
    id: "cargos",
    name: "Utility Cargos",
    role: "Relaxed Fit • Tactical Look",
    image: "/images/cargos.jpg",
  },
  {
    id: "coord",
    name: "Coord Fits",
    role: "Two-Piece. One Statement.",
    image: "/images/coord.jpg",
  },
  {
    id: "hoodies",
    name: "Oversized Hoodies",
    role: "Winter-Ready, BB-Approved",
    image: "/images/hoodies.png",
  },
  {
    id: "keychains",
    name: "Accessories",
    role: "Mini Drops of Personality",
    image: "/images/accessories.jpg",
  },
];

const CollectionItem = memo(function CollectionItem({
  collection,
  idx,
  hoveredIdx,
  setHoveredIdx,
}) {
  return (
    <>
      <div
        className="flex items-center justify-between py-8 px-24 transition-colors duration-300 cursor-pointer group"
        onMouseEnter={() => setHoveredIdx(idx)}
        onMouseLeave={() => setHoveredIdx(null)}
      >
        <h1
          className={`text-[5vw] font-normal transition-colors duration-300 select-none ${
            hoveredIdx === idx ? "text-[#CDFA18]" : ""
          }`}
        >
          {collection.name}
        </h1>
        <p className="text-base text-gray-300 select-none">{collection.role}</p>
      </div>
      <div className="flex justify-center w-full">
        <div className="w-full h-px bg-gray-500 my-8" />
      </div>
    </>
  );
});

const Collections = () => {
  useEffect(() => {
      AOS.init({
        duration: 500,
        delay: 200,   
        once: true       
      });
    }, []);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [showSlide, setShowSlide] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    setMouse({ x: e.clientX, y: e.clientY });
  }, []);

  const getMarginTop = useCallback(() => {
    if (hoveredIdx === null) return "0%";
    return `-${hoveredIdx * 120}%`;
  }, [hoveredIdx]);

  return (
    <section className="collection-section relative w-full min-h-[100vh] bg-[#121212] text-[#FFFEFE]">
      <h2 data-aos="fade-up" className="text-center text-[1.8vw] font-semibold mb-8 tracking-widest uppercase">Collections</h2>
      <div data-aos="fade-up"
        className="w-full eff-area"
        onMouseEnter={() => setShowSlide(true)}
        onMouseLeave={() => {
          setShowSlide(false);
          setHoveredIdx(null);
        }}
        onMouseMove={handleMouseMove}
      >
        {collections.map((collection, idx) => (
          <CollectionItem
            key={collection.id}
            collection={collection}
            idx={idx}
            hoveredIdx={hoveredIdx}
            setHoveredIdx={setHoveredIdx}
          />
        ))}
      </div>

      {/* Floating Slide Photo Box */}
      <div
        className={`fixed z-[999] overflow-hidden pointer-events-none transition-all duration-[2000ms] ease-[cubic-bezier(0.19,1,0.22,1)] slidephoto ${
          showSlide ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
        style={{
          top: mouse.y,
          left: mouse.x,
          width: "25vw",
          height: "30vw",
          transform: `translate(${-mouse.x * 0.21}px, ${-mouse.y * 0.7}px)`,
        }}
      >
        <div
          className="w-full h-[400%] flex flex-col transition-all duration-[2000ms] ease-[cubic-bezier(0.19,1,0.22,1)] slidephotos"
          style={{ marginTop: getMarginTop() }}
        >
          {collections.map((collection, idx) => (
            <div
              key={collection.id}
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${collection.image})`,
                minHeight: "30vw",
              }}
            ></div>
          ))}
        </div>
        <div
          className="absolute top-1/2 left-1/2 w-20 h-20 rounded-full bg-[#CDFA18] z-[9999] flex justify-center items-center view-btn"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <h1 className="text-[1.2vw] font-normal tracking-wider text-black">View</h1>
        </div>
      </div>
    </section>
  );
};

export default Collections;