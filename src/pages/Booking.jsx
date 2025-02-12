// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import {
  Box,
  Text,
  Input,
  Button,
  FormControl,
  FormLabel,
  //VStack,
  SimpleGrid,
  Flex,
  Image,
} from "@chakra-ui/react";

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
    <Box minH={'100vh'} bg="#f2f6fc" py={8} px={6} textAlign="center" /*className="min-h-screen flex flex-col items-center bg-[#f2f6fc] p-8"*/>
    <Text fontSize="3xl" fontWeight="bold" color="#212529" mb={6} /*className="text-3xl font-bold text-[#212529] mb-6"*/>Track Your Bookings</Text>

    {/* Form */}
    <Box 
        as='form'
        onSubmit={handleSubmit}
        maxW="md"
        mx="auto"
        bg="white"
        p={6}
        rounded="lg"
        shadow="md" /*className="w-full max-w-md bg-white p-6 rounded-lg shadow-md"*/
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
        <Button type="submit" bg="#ff6e00" w="full">
          Check Bookings
        </Button>
    </Box>

    <Box>
          {/* Show bookings content only after email is submitted */}
          {filteredBookings.length === 0 ? (
            <Text className="text-gray-600">No bookings found for this email.</Text>
          ) : (
            <Flex 
            mt={8}
            justify="center"
            align="center"
            maxW="4xl"
            mx="auto"
            flexWrap="wrap"  
            >
            <SimpleGrid
             spacing={6}
             columns={filteredBookings.length === 1 ? 1 : [1, 2, 3]}
             justifyContent="center"
             alignItems="center"
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
          </Flex>
          )}
        </Box>
    </Box>
  );
}

export default Booking;