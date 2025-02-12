// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import { Box, Stack, Button, Flex, Grid, GridItem, Heading,  Image, Text,  } from "@chakra-ui/react";
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
    <Box>
      <Box maxWidth={'2xl'} mx={'auto'} py={10} px={5}>
      {/* Large Image */}
      <Stack className="mb-2">
        <Image
          src={state.image[0]} // Replace with actual image URL
          alt="Main Room"
          className="w-full h-72 object-cover rounded-lg"
        />
      </Stack>

      {/* Small Image Grid */}
      <Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }} gap={2}>
          {state.image.slice(1, 5).map((img, index) => (
              <GridItem key={index}>
                <Image src={img} alt={`Room Detail ${index + 1}`} w="full" h={'100px'} objectFit="cover" borderRadius="lg" />
              </GridItem>
          ))}
      </Grid>

        <Box mt={6} >
        <Heading size="lg">{state.text}</Heading>
        
          <Flex direction={{ base: "column", md: "row" }} justify={"space-between"} align={"center"} textAlign={"center"} mt={10}>
            <Text fontSize={'18px'} mb={6}><Stack fontSize={'30px'} mb={2} display={'flex'} justifyContent={'center'} alignItems={'center'}><FaUser /></Stack>Occupant: {state.guest}</Text>
            <Text fontSize={'18px'} mb={6}><Stack fontSize={'30px'} mb={2} display={'flex'} justify={'center'} alignItems={'center'}><FaBath /></Stack>Bathrooms: {state.bath}</Text>
            <Text fontSize={'18px'} mb={6}><Stack fontSize={'30px'} mb={2} display={'flex'} justifyContent={'center'} alignItems={'center'}><LiaBedSolid /></Stack>Beds: {state.number}</Text>
            <Text fontSize={'18px'} mb={6}><Stack fontSize={'30px'} mb={2} display={'flex'} justifyContent={'center'} alignItems={'center'}><RiMoneyDollarCircleLine /></Stack>{state.price} / night</Text>
          </Flex>

        </Box>
        <Button
            backgroundColor={'#ff6e00'} width={'full'} mt={6} rounded={'lg'}
                onClick={() => setShowPopup(true)}
            >
                Book Me
        </Button>

        {showPopup && (
                <PopUpForm
                    hotel={state}
                    onClose={() => setShowPopup(false)}
                />
        )}
    </Box>
    </Box>
  )
}

export default RoomComponent