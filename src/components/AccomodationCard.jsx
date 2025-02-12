// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { Link } from 'react-router-dom';
function AccomodationCard({
        // eslint-disable-next-line react/prop-types
    id,
        // eslint-disable-next-line react/prop-types
    name, 
       // eslint-disable-next-line react/prop-types
    rating,
        // eslint-disable-next-line react/prop-types
    price,
        // eslint-disable-next-line react/prop-types
    distance,
        // eslint-disable-next-line react/prop-types
    phone,
        // eslint-disable-next-line react/prop-types
    message,
        // eslint-disable-next-line react/prop-types
    website,
        // eslint-disable-next-line react/prop-types
    image
}) {
  return (
    <Link to={`/hotel/${id}`} state={{ image }}>
    <div className='bg-white rounded-lg'>
        <div className='relative'>
            <img src={image} alt="" className='h-[320px] w-full rounded-lg'  />
            <div className='absolute z-20 top-0 right-0 flex bg-white/9.5 px-4 items-center gap-3 font-bold'><h1 className='text-[#f6fe00] '><FaStar /></h1>{rating}</div>
        </div>
        <div className='px-8 py-8'>
            <div><h1 className='text-xl font-bold mb-3'>{name}</h1></div>
            <div className='md:flex block items-center justify-between mb-3
'>
                <div>
                    <h1 className='flex items-center gap-2 mt-2'><FaLocationPin />{distance}</h1>
                    <h1 className='flex items-center gap-2 text-sm mt-2'> <FaPhoneAlt />{phone}</h1>
                    <h1 className='flex items-center gap-2 text-sm mt-2'><MdOutlinePhoneIphone />
                    {message}</h1>
                </div>
                <div><h1 className='text-[23px] font-bold border-4 px-2 mt-8 border-[#ff6e00]'>{price}</h1></div>
            </div>
            <div className='text-center'><h1 className='flex items-center gap-2'><TbWorld /> {website}</h1></div>
        </div>

    </div>
    </Link>

  )
}

export default AccomodationCard