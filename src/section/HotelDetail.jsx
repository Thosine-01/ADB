// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import { accomodation_list } from '../assets'
import HotelDetailCard from '../components/HotelDetailCard'
import PopUpForm from '../components/PopUpForm'


function HotelDetail() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState(null);

  const openModal = (hotel) => {
    setSelectedHotel(hotel);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedHotel(null);
  };
  return (
    <div>
      <div className='px-[2em] md:px-[6em] pt-20 pb-12 bg-[#f2f6fc]'>
        <div className='mb-10'>
        <h3 className='text-3xl mb-5 font-bold text-[#212529]'>Hotel Rooms</h3>
        <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, aut.</p>
        </div>

        <div className='mx-auto grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 md:gap-10 sm:gap-14 gap-y-10 mb-20'>
            {accomodation_list.length > 0 &&
              accomodation_list[0].hotel_bed_list.map((hotel) => (
                <HotelDetailCard  
                  key={hotel.hotel_bed_id} 
                  id={hotel.hotel_bed_id} 
                  text={hotel.hotel_bed_text} 
                  bath={hotel.hotel_bed_bath} 
                  price={hotel.hotel_bed_price} 
                  number={hotel.hotel_bed_number} 
                  guest={hotel.hotel_bed_quest} 
                  image={hotel.hotel_bed_image}
                  onBook={() => openModal(hotel)}
                  /> 
              ))
            }
        </div>
      </div>
            {/* Show Modal Only When Open */}
            {isModalOpen && <PopUpForm hotel={selectedHotel} onClose={closeModal} />}
    </div>
  )
}

export default HotelDetail