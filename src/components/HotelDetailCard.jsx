// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
//import { FaLocationPin } from "react-icons/fa6";
//import { FaPhoneAlt } from "react-icons/fa";
//import { MdOutlinePhoneIphone } from "react-icons/md";
//import PopUpForm from './PopUpForm';
//import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function HotelDetailCard({
    // eslint-disable-next-line react/prop-types
    id,
     // eslint-disable-next-line react/prop-types
    text,
     // eslint-disable-next-line react/prop-types
    number,
     // eslint-disable-next-line react/prop-types
    bath,
     // eslint-disable-next-line react/prop-types
    guest,
     // eslint-disable-next-line react/prop-types
    image,
     // eslint-disable-next-line react/prop-types
    price,
    // eslint-disable-next-line react/prop-types
    }) {

        const navigate = useNavigate();

        const handleViewDetails = () => {
            navigate(`/room/${id}`, {
                state: { id, text, bath, price, number, image, guest }
            });
        };
    

        //const [showPopup, setShowPopup] = useState(false);
        //const [selectedHotel, setSelectedHotel] = useState(null);

        {/*const handleBookNow = () => {
            setSelectedHotel({ id, text, bath, price, number, image, quest });
            setShowPopup(true);
          };*/}

  return (
        <div className='bg-white rounded-lg' >
                <div className=''>
                    <img src={image[0]} alt="" className='h-[320px] w-full rounded-lg'  />
                </div>

                <div className='px-10 py-8 '>
                    <div>
                        <h1 className='text-2xl font-bold'>{text}</h1>
                        {/*<h1 className='text-xl'>Occupant:</h1>*/}
                    </div>
                    {/*<div className='flex items-center justify-between mb-3'>
                            <h1 className='flex items-center gap-2 mt-2'><FaLocationPin />{quest}Quest</h1>
                            <h1 className='flex items-center gap-2 text-sm mt-2'> <FaPhoneAlt />{bath} Bath</h1>
                            <h1 className='flex items-center gap-2 text-sm mt-2'><MdOutlinePhoneIphone />
                            {number} Bed</h1>
                        
                    </div>*/}
                    <div className=''>
                    <div className='flex items-center'>
                        <h1 className='text-[28px] font-bold '>{price}</h1>
                        <h1 className='font-bold'>/ night</h1>
                    </div>

                
                    <button className='py-3 bg-[#ff6e00] text-white w-full mx-auto mt-4 rounded-lg font-bold text-xl'  onClick={handleViewDetails}/*</div>onClick={handleBookNow}*/>Check Details</button>
                    

                    </div>

                </div>

                      {/* Show popup when book now is clicked */}
                {/*{showPopup && (
                    <PopUpForm 
                    hotel={selectedHotel} 
                    onClose={() => setShowPopup(false)} 
                    />
                )}*/}
        
        </div>

  )
}

export default HotelDetailCard

{/*
    import React, { useState } from "react";
import PropTypes from "prop-types";
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

function PopUpForm({ hotel, onClose }) {
  const [email, setEmail] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");

  const handleConfirmBooking = () => {
    const bookingData = { ...hotel, firstname, lastname, email };

    let storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    storedBookings.push(bookingData);
    localStorage.setItem("bookings", JSON.stringify(storedBookings));

    onClose(); // Close the modal
  };

  return (
    <Modal isOpen={true} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Confirm Your Booking</ModalHeader>
        <ModalBody>
          <Text mb={4}>{hotel.text}</Text>

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

        <ModalFooter>
          <Button colorScheme="gray" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="orange" onClick={handleConfirmBooking}>
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

*/}