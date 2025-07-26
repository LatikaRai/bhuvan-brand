import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React from 'react'

gsap.registerPlugin(ScrollTrigger)

const Video = () => {
  useGSAP(() => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.video-container',
        start: 'top top',
        end: 'bottom center',
        scrub: 2,
        pin: true,
      }
    });
    tl.to('.video-container video', {
      width: '100%',
      height: '100%',
    });
  });

  return (
    <div className='video-container relative w-full h-[100vh] bg-[#121212] flex items-center justify-center'>
      <video className='w-[25vw] h-[50vh] object-cover border-none' autoPlay loop muted playsInline>
        <source src="/videos/v1.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

export default Video
