// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
function PopUpForm({ hotel, onClose }) {
  
  const [email, setEmail] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
 

  const handleConfirmBooking = () => {
    const bookingData = { ...hotel, firstname, lastname, email };

    let storedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    storedBookings.push(bookingData);
    localStorage.setItem('bookings', JSON.stringify(storedBookings));

    onClose(); // Close the popup
  };

  return (
    <div className="px-[2em] fixed inset-0 bg-opacity-30 backdrop-blur-md flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Confirm Your Booking</h2>
        <div>{hotel.text}</div>

        <label className="block mt-3">Email:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className="border w-full p-2 rounded-md"
          placeholder="Enter your email"
          required
        />

        <label className="block mt-3">First Name:</label>
        <input 
          type="text" 
          value={firstname} 
          onChange={(e) => setFirstName(e.target.value)} 
          className="border w-full p-2 rounded-md"
          placeholder="Enter your firstname"
          required
        />

        <label className="block mt-3">Last Name:</label>
        <input 
          type="text" 
          value={lastname} 
          onChange={(e) => setLastName(e.target.value)} 
          className="border w-full p-2 rounded-md"
          placeholder="Enter your lastname"
          required
        />

        <div className="mt-4 flex justify-between">
          <button 
            onClick={onClose}
            className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
          >
            Cancel
          </button>
          <button 
            onClick={handleConfirmBooking}
            className="bg-[#ff6e00] text-white px-4 py-2 rounded "
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
}
PopUpForm.propTypes = {
  hotel: PropTypes.shape({
    text: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    number: PropTypes.number.isRequired,
    bath: PropTypes.number.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PopUpForm;
