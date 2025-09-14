import React, { useEffect } from 'react'
import assets from '../assets/assets'

const ThemeToggleBtn = ({theme, setTheme}) => {

  useEffect(()=>{
    const prepersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(theme || (prepersDarkMode ? 'dark' : 'light'))
  })

  useEffect(()=>{
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    }else{
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  },[theme])

  return (
    <>
      <button className='cursor-pointer'>
        {theme === 'dark' ? (
            <img onClick={()=> setTheme('light')} src={assets.sun_icon} alt="sun" className='size-8.5 p-1.5 border border-gray-500 rounded-full'/>
        ) : (
            <img onClick={()=> setTheme('dark')} src={assets.moon_icon} alt="moon" className='size-8.5 p-1.5 border border-gray-500 rounded-full'/>
        )}
      </button>
    </>
  )
}

export default ThemeToggleBtn
