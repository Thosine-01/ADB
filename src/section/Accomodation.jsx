// eslint-disable-next-line no-unused-vars
import React from 'react'
import {accomodation_list} from '../assets'
import AccomodationCard from '../components/AccomodationCard'




function Accomodation() {
  return (
    <div className='md:px-[6em] px-[2em] pt-20 pb-12 bg-[#f2f6fc]'>
        <div className='mb-10'>
        <h3 className='text-3xl mb-5 font-bold text-[#212529]'>Accomodation</h3>
        <p className='text-xl'>Participants of the Africa Heads of State Energy Summit, may explore and choose accommodation of their preference from the list of hotels provided below:</p>
        </div>

        <div className='mx-auto grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 md:gap-10 sm:gap-14 gap-y-10 mb-20'>
            {accomodation_list.map((item) => (
              <AccomodationCard  
                key={item.accomodation_id} 
                id={item.accomodation_id} 
                name={item.accomodation_name} 
                rating={item.accomodation_rating} 
                price={item.accomodation_price} 
                distance={item.accomodation_distance} 
                phone={item.accomodation_phone} 
                message={item.accomodation_message} 
                website={item.accomodation_website} 
                image={item.accomodation_image} />

            ))}
        </div>



    </div>
  )
}

export default Accomodation