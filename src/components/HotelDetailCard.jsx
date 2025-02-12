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
    import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  Input,
  Button,
  FormControl,
  FormLabel,
  VStack,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";

function Booking() {
  const [email, setEmail] = useState("");
  const [bookings, setBookings] = useState([]);
  const [submittedEmail, setSubmittedEmail] = useState("");

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(storedBookings);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedEmail(email);
  };

  const filteredBookings = bookings.filter(
    (booking) => booking.email === submittedEmail
  );

  return (
    <Box minH="100vh" bg="#f2f6fc" py={8} px={6} textAlign="center">
      <Text fontSize="3xl" fontWeight="bold" color="#212529" mb={6}>
        Track Your Bookings
      </Text>

      
      <Box
        as="form"
        onSubmit={handleSubmit}
        maxW="md"
        mx="auto"
        bg="white"
        p={6}
        rounded="lg"
        shadow="md"
      >
        <FormControl mb={4}>
          <FormLabel>Enter Your Email:</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </FormControl>
        <Button type="submit" colorScheme="blue" w="full">
          Check Bookings
        </Button>
      </Box>

      
      {filteredBookings.length === 0 ? (
        <Text mt={6} color="gray.600">
          No bookings found for this email.
        </Text>
      ) : (
        <SimpleGrid
          mt={8}
          spacing={6}
          maxW="4xl"
          mx="auto"
          columns={[1, 2, 3]}
        >
          {filteredBookings.map((booking, index) => (
            <Box
              key={index}
              bg="white"
              p={4}
              rounded="lg"
              shadow="md"
              textAlign="left"
            >
              <Image
                src={booking.image[1]}
                alt="Room"
                w="full"
                h="160px"
                objectFit="cover"
                rounded="md"
              />
              <Text fontSize="xl" fontWeight="semibold" mt={3}>
                {booking.text}
              </Text>
              <Text color="gray.600">Price: ${booking.price} / night</Text>
              <Text color="gray.600">Bed: {booking.number}</Text>
              <Text color="gray.600">Bath: {booking.bath}</Text>
              <Text color="gray.600">Booked by: {booking.email}</Text>
              <Text color="gray.600">First Name: {booking.firstname}</Text>
              <Text color="gray.600">Last Name: {booking.lastname}</Text>
            </Box>
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
}

export default Booking;


*/}