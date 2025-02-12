// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

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
        <ModalHeader className="text-xl font-bold mb-4">Confirm Your Booking</ModalHeader>
        <ModalBody>
        <Text>{hotel.text}</Text>


        <FormControl mb={3}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </FormControl>

          <FormControl mb={3}>
            <FormLabel>First Name</FormLabel>
            <Input
              type="text"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter your first name"
              required
            />
          </FormControl>
          <FormControl mb={3}>
            <FormLabel>Last Name</FormLabel>
            <Input
              type="text"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter your last name"
              required
            />
          </FormControl>
        </ModalBody>



        <ModalFooter className="mt-4 flex justify-between">
          <Button 
            onClick={onClose}
            className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
          >
            Cancel
          </Button>
          <Button 
            onClick={handleConfirmBooking}
            className="bg-[#ff6e00] text-white px-4 py-2 rounded "
          >
            Confirm Booking
          </Button>
        </ModalFooter>
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
