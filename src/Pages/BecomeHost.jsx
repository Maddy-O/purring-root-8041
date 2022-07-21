import React from 'react'
import {  Image,
    Text, Stack
  } from "@chakra-ui/react";

const BecomeHost = () => {
  return (
    <div>
        <Image
    w='auto' h="400px" m="auto"
    objectFit='cover'
    src='https://i.ibb.co/gmQPpmJ/image-6-1.png'
    alt='Dan Abramov'
  />
        <Image w='auto' h="250px" m="auto" objectFit='cover' src='https://www.zoomcar.com/zap/subscribe/build/2a59620f522135d45def6fbc74162966.webp' alt='Dan Abramov' />
  <Stack m="30px auto" alignItems="center">
        <Image w='1000px' h="400px" m="auto" objectFit='cover' src='https://i.ibb.co/FbMfGvB/image-7-2.png' alt='Dan Abramov' />
        <Image w='1000px' h="250px" m="auto"  objectFit='cover' src='https://i.ibb.co/h2gLBHx/image-8.png' alt='Dan Abramov' />
        <Image w='1000px' h="200px" m="auto"  objectFit='cover' src='https://i.ibb.co/9vX1XNX/image-9.png' alt='Dan Abramov' />
    
  </Stack>
    </div>
  )
}

export default BecomeHost