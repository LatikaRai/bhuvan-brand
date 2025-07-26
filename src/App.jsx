import Bestsellers from './components/Bestsellers'
import Home from './components/Home'
import Marquee from './components/Marquee'
import Para from './components/Para'
import Video from './components/Video'
import Collections from './components/Collections'
import Navbar from './components/Navbar'
import About from './components/About'
import React, { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import Footer from './components/Footer'

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // custom ease
      smooth: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className='overflow-hidden'>
      <Navbar/>
      <Home/>
      <Marquee/>
      <Bestsellers/>
      <Para/>
      <Collections/>
      <Video/>
      <About/>
      <Footer/>
    </div>
  )
}

export default App

