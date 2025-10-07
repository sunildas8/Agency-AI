import React from 'react'
import assets from '../assets/assets'

const Footer = ({theme}) => {
  return (
    <div className='bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40'>
        {/* footer top */}
        <div className='flex justify-between lg:items-center max-lg:flex-col gap-10'>
            <div className='space-y-5 text-gray-700 text-sm dark:text-gray-400'>
                <img src={theme === 'dark' ? assets.logo_dark : assets.logo} alt="logo" className='w-32 sm:w-44'/>
                <p className='max-w-md'>From strategy to execution, we craft digital solutions that move your business forward.</p>

                <ul className='flex gap-8'>
                    <li><a className='hover:text-primary' href="#hero">Home</a></li>
                    <li><a className='hover:text-primary' href="#services">Services</a></li>
                    <li><a className='hover:text-primary' href="#Our-work">Our Work</a></li>
                    <li><a className='hover:text-primary' href="#contact-us">Contact Us</a></li>
                </ul>
            </div>
            <div className='text-gray-600 dark:text-gray-400'>
              <h3 className='font-semibold'>Subscribe to our newsletter</h3>
              <p className='text-sm mt-2 mb-6'>The latest news, articles, and resources, sent to your inbox weekly.</p>

              <div className='flex gap-2 text-sm'>
                <input type="text" placeholder='Enter you email' className='w-full text-sm p-3 outline-none rounded-lg dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500'/>
                <button className='bg-primary text-white rounded-lg px-6'>Susbcribe</button>
              </div>
            </div>
        </div>
        <hr className='border-gray-300 dark:border-gray-600 my-6'/>
        
        {/* copyright */}
        <div className='flex justify-center sm:justify-between pb-6 text-sm text-gray-500 flex-wrap gap-4'>
          <p>Copyright 2025 © agency.ai  -  All Right Reserved.</p>
          <div className='flex items-center justify-between gap-4'>
            <img src={assets.facebook_icon} alt="facebook_icon" />
            <img src={assets.twitter_icon} alt="twitter_icon" />
            <img src={assets.instagram_icon} alt="instagram_icon" />
            <img src={assets.linkedin_icon} alt="linkedin_icon" />
          </div>
        </div>
    </div>
  )
}

export default Footer