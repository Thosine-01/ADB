// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

function Booking() {
    const [email, setEmail] = useState('');
    const [bookings, setBookings] = useState([]);
    const [submittedEmail, setSubmittedEmail] = useState('');

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    setBookings(storedBookings);
  }, []);



  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedEmail(email);
  };

  const filteredBookings = bookings.filter(booking => booking.email === submittedEmail);

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#f2f6fc] p-8">
    <h2 className="text-3xl font-bold text-[#212529] mb-6">Track Your Bookings</h2>

    {/* Form */}
    <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
      <label className="block mb-4">
        Enter Your Email:
        <input 
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 rounded mt-2"
          required
        />
      </label>
      <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition">
        Check Bookings
      </button>
    </form>

    <div>
          {/* Show bookings content only after email is submitted */}
          {filteredBookings.length === 0 ? (
            <p className="text-gray-600">No bookings found for this email.</p>
          ) : (
            <div className={`mt-8 w-full max-w-4xl ${
        filteredBookings.length === 1 
          ? "flex justify-center" // Center when only one booking exists
          : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      }`}>
              {filteredBookings.map((booking, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                  <img src={booking.image[1]} alt="Room" className="w-full h-40 object-cover rounded-md" />
                  <h3 className="text-xl font-semibold mt-3">{booking.text}</h3>
                  <p className="text-gray-600">Price: ${booking.price} / night</p>
                  <p className="text-gray-600">Bed: {booking.number}</p>
                  <p className="text-gray-600">Bath: {booking.bath}</p>
                  <p className="text-gray-600">Booked by: {booking.email}</p>
                  <p className="text-gray-600">First Name: {booking.firstname}</p>
                  <p className="text-gray-600">Lawal Name: {booking.lastname}</p>
                </div>
              ))}
            </div>
          )}
        </div>
    </div>
  );
}

export default Booking;