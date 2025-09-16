import React, { useState } from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Trustedby from './component/Trustedby'


const App = () => {

  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

  return (
    <div className='dark:bg-black relative'>
       <Navbar theme={theme} setTheme={setTheme}/>
       <Hero />
       <Trustedby />
    </div>
  )
}

export default App
