import React from 'react'
import { motion } from "motion/react"

const words = [
  "Unfiltered",
  "Authentic",
  "Bold",
  "Streetwise",
  "Fearless",
  "Desi"
];

const Marquee = () => {
  // Number of times to repeat the marquee content for smooth scrolling
  const repeatCount = 3;

  return (
    <div className='marq-section w-full h-[20vh] bg-[#CDFA18] flex items-center justify-between text-black whitespace-nowrap overflow-auto'>
      {[...Array(repeatCount)].map((_, idx) => (
        <div
          className="moving-txt whitespace-nowrap inline-block items-center justify-between"
          key={idx}
        >
          {words.map((word, i) => (
            <React.Fragment key={i}>
              <h1 className='inline-block text-6xl'>{word}</h1>
              <div className="circle"></div>
            </React.Fragment>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Marquee
