import React, { useEffect, useRef, useState } from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Trustedby from './component/Trustedby'
import Services from './component/Services'
import OutWork from './component/OutWork'
import Teams from './component/Teams'
import ContectUs from './component/ContectUs'
import { Toaster } from 'react-hot-toast'
import Footer from './component/Footer'


const App = () => {

  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

  const dotRef = useRef(null)
  const outlineRef = useRef(null)

  // Refs for custom cursor position traking
  const mouse = useRef({x: 0, y: 0})
  const position = useRef({x: 0, y: 0})

  useEffect(()=>{
    const handleMouseMove = (e)=>{
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }

    document.addEventListener('mousemove', handleMouseMove)

    const animate = ()=>{
      position.current.x += (mouse.current.x - position.current.x) * 0.1
      position.current.y += (mouse.current.y - position.current.y) * 0.1

      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x - 6}px, ${mouse.current.y - 6}px, 0)`
        outlineRef.current.style.transform = `translate3d(${position.current.x - 20}px, ${position.current.y - 20}px, 0)`
      }

      requestAnimationFrame(animate)
    }

    animate();

    return()=>{
      document.removeEventListener('mousemove', handleMouseMove)
    }
  },[])

  return (
    <div className='dark:bg-black relative cursor-none'>
      <Toaster/>
       <Navbar theme={theme} setTheme={setTheme}/>
       <Hero />
       <Trustedby />
       <Services/>
       <OutWork/>
       <Teams/>
       <ContectUs/>
       <Footer theme={theme}/>

       {/* Custom Cursor Ring */}
       <div ref={outlineRef} className='w-10 h-10 fixed top-0 left-0 rounded-full border border-primary pointer-events-none z-[9999]' style={{transition: 'transform 0.1s ease-out'}}></div>
       {/* Custom Curosr Dot */}
       <div ref={dotRef} className='w-3 h-3 fixed top-0 left-0 rounded-full border bg-primary pointer-events-none z-[9999]'></div>
    </div>
  )
}

export default App
