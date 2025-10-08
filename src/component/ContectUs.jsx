import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import toast from 'react-hot-toast';
import { motion } from "motion/react"

const ContectUs = () => {

    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "7021f49f-73ff-462b-9187-4ca5e57afb21");

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
    });

    const data = await response.json();

    if (data.success) {
      toast.success('Thank you for your submission!')
      event.target.reset();
    } else {
      toast.error(data.message)
    }
    } catch (error) {
        toast.error(error.message)
    }
  };

  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    transition={{staggerChildren: 0.2}}
    viewport={{once: true}}
    id='contact-us' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-500 dark:text-white'>
        <Title title='Reach out to us' desc='Ready to grow your brand? Let’s connect and build something exceptional together.'/>

        <motion.form
        initial={{opacity: 0, y: 30}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.4}}
        viewport={{once: true}}
        onSubmit={onSubmit} className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'>

            <div>
                <p className='font-medium text-sm mb-2'>Your Name</p>
                <div className='flex pl-3 border border-gray-300 rounded-lg dark:border-gray-600'>
                    <img src={assets.person_icon} alt="icon" />
                    <input type="text" name='name' placeholder='Enter Your Name' className='w-full p-3 text-sm outline-none' required/>
                </div>
            </div>

            <div>
                <p className='font-medium text-sm mb-2'>Email</p>
                <div className='flex pl-3 border border-gray-300 rounded-lg dark:border-gray-600'>
                    <img src={assets.email_icon} alt="icon" />
                    <input type="email" name='email' placeholder='Enter Your Email' className='w-full p-3 text-sm outline-none' required/>
                </div>
            </div>

            <div className='sm:col-span-2'>
                <p className='font-medium text-sm mb-2'>Message</p>
                <textarea rows={8} name='message' placeholder='Enter Your Message' className='w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600' required/>
            </div>

            <button type='submit' className='flex w-max bg-primary text-sm text-white gap-2 px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all'>
                Submit <img src={assets.arrow_icon} alt="arrow" className='w-4'/>
            </button>
        </motion.form>
    </motion.div>
  )
}

export default ContectUs