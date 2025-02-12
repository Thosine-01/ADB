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
    <Modal isOpen={true} onClose={onClose} className="px-[2em] fixed inset-0 bg-opacity-30 backdrop-blur-md flex justify-center items-center">
      <ModalOverlay />
      <ModalContent  backgroundColor={'white'} p={6} rounded={'lg'} w={'24rem'}  className="shadow-lg">
        <ModalHeader fontSize={'20px'} fontStyle={'bold'} mb={4}>Confirm Your Booking</ModalHeader>
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



        <ModalFooter display={'flex'} justifyContent={'space-between'} mt={4}>
          <Button 
            onClick={onClose}
            backgroundColor={"gray.400"} textColor={"white"} px={4} py={2} rounded={"md"} _hover={{bg: "gray.500"}}
          >
            Cancel
          </Button>
          <Button 
            onClick={handleConfirmBooking}
            backgroundColor={"#ff6e00"} textColor={"white"} px={4} py={2} rounded={"md"} _hover={{bg: "#ff6e00"}}
          >
            Confirm Booking
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
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
