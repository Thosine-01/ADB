// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import { useLocation } from 'react-router-dom';
import { LiaBedSolid } from "react-icons/lia";
import { FaUser } from "react-icons/fa";
import { FaBath } from "react-icons/fa6";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import PopUpForm from './PopUpForm';

function RoomComponent() {
      const { state } = useLocation();
    const [showPopup, setShowPopup] = useState(false);
  return (
    <div>
              <div className="max-w-2xl mx-auto py-10 px-10">
      {/* Large Image */}
      <div className="mb-2">
        <img
          src={state.image[0]} // Replace with actual image URL
          alt="Main Room"
          className="w-full h-72 object-cover rounded-lg"
        />
      </div>

      {/* Small Image Grid */}
      <div className="grid grid-cols-4 gap-2">
        <img
          src={state.image[1]} // Replace with actual image URL
          alt="Room Detail 1"
          className="w-full h-20 object-cover rounded-lg"
        />
        <img
          src={state.image[2]} // Replace with actual image URL
          alt="Room Detail 2"
          className="w-full h-20 object-cover rounded-lg"
        />
        <img
          src={state.image[3]} // Replace with actual image URL
          alt="Room Detail 3"
          className="w-full h-20 object-cover rounded-lg"
        />
        <img
          src={state.image[4]} // Replace with actual image URL
          alt="Room Detail 4"
          className="w-full h-20 object-cover rounded-lg"
        />
      
    </div>

        <div className='mt-6'>
            <h1 className='text-3xl font-bold'>{state.text}</h1>
        
          <div className='block md:flex justify-between items-center text-center mt-10'>
            <div className='text-lg mb-6'><div className='text-3xl mb-2 flex justify-center '><FaUser /></div>Occupant: {state.guest}</div>
            <div className='text-lg mb-6'><div className='text-3xl mb-2 flex justify-center '><FaBath /></div>Bathrooms: {state.bath}</div>
            <div className='text-lg mb-6'><div className='text-3xl mb-2 flex justify-center'><LiaBedSolid /></div>Beds: {state.number}</div>
            <h2 className='text-lg mb-4'><div className='text-3xl mb-2 flex justify-center'><RiMoneyDollarCircleLine /></div>{state.price} / night</h2>
          </div>

        </div>
        <button
                className='py-3 bg-[#ff6e00] text-white w-full mt-6 rounded-lg'
                onClick={() => setShowPopup(true)}
            >
                Book Me
        </button>

        {showPopup && (
                <PopUpForm
                    hotel={state}
                    onClose={() => setShowPopup(false)}
                />
        )}
    </div>
    </div>
  )
}

export default RoomComponent