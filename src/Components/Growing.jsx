import { Box, GridItem, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react';
import GrowingCard from './GrowingCard';

const growingData = [
    {id:'1', icon:"https://www.zoomcar.com/zap/subscribe/build/e3a6d127cac35a3a7a139256bb3761eb.png", count:"25,000+", task:"Satisfied hosts"},
    {id:'2', icon:"https://www.zoomcar.com/zap/subscribe/build/4a5f55fc81b9a6df6a460a025fdfa509.png", count:"50 Lakhs+", task:"Booking Served"},
    {id:'3', icon:"https://www.zoomcar.com/zap/subscribe/build/36da13bf403485c4efacd507efd93735.png", count:"32 Cr+", task:"Km's Run"},
    {id:'4', icon:"https://www.zoomcar.com/zap/subscribe/build/c0db9479a08980b830b63433f60d336c.png", count:"₹ 300Cr+", task:"Earned by Hosts"},
    


]

const Growing = () => {
  return (
    <Box width='80%'  bg='rgb(245,244,246)' borderRadius='lg' margin='auto' mt='8' p='8' > 
        <Text fontSize='5xl' textAlign='left' fontWeight='600'>Growing Rapidly</Text>
        <Text fontSize='lg' color='gray' mt='12' textAlign='left' fontWeight='300'>Join Host Program and be the part of the largest tech enabled car sharing marketplace </Text>


        <SimpleGrid templateColumns={{base:'repeat(2, 1fr)', lg:'repeat(4, 1fr)'}} gap='4' mt='4'>
        
                {growingData.map((elem)=> <GrowingCard  key={elem.id} item={elem} /> )}
      

        </SimpleGrid>
      
    </Box>
  )
}

export default Growing
