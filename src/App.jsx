import React, { useState } from 'react'
import Navbar from './component/Navbar'


const App = () => {

  const [theme, setTheme] = useState('light')

  return (
    <div className='dark:bg-light relative'>
       <Navbar theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App
