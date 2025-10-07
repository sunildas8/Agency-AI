import React, { useState } from 'react'
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

  return (
    <div className='dark:bg-black relative'>
      <Toaster/>
       <Navbar theme={theme} setTheme={setTheme}/>
       <Hero />
       <Trustedby />
       <Services/>
       <OutWork/>
       <Teams/>
       <ContectUs/>
       <Footer theme={theme}/>
    </div>
  )
}

export default App
