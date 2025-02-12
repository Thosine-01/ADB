// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FaLocationPin } from "react-icons/fa6";


function Maps() {
  return (
    <div className='md:px-[6em] px-[2em] pt-16'>  
            <div>
                <h1 className='text-2xl font-bold'>Find Us</h1>
                <div className='flex items-center md:gap-2 mb-5'><FaLocationPin /> <h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1></div>
            </div>
            <div className='w-full h-[500px] bg-[#212529] flex items-center justify-center text-white'>
                <h1 className='text-xl md:text-4xl'>The Map Will be Here</h1>
            </div>
    </div>
  )
}

export default Maps