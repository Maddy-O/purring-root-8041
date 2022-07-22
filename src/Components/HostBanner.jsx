import React from 'react'
import {Box, Image, Flex, Text, Spacer, Button, VStack} from "@chakra-ui/react"

const HostBanner = () => {
  return (
    <Box>
    <Box width="80%"  top="0" position="relative" margin='auto' visibility={{base:'hidden', lg:"visible"}}>
      <Image
        boxSize="100%"
        objectFit="cover"
        src='https://www.zoomcar.com/zap/subscribe/build/a2ff940380f1315a0c0aacefb766e858.jpg'
        alt="Hero Banner"
      />

      <VStack
      
     
        width={{ base: "90%", md: "80%", lg: "60%" }}
        left={{ base: "5%", md: "10%", lg: "35%" }}
        position="absolute"
        left='-10'
        top="70"
        
      >
        <Box>
          <Text
          textAlign='left'
            fontSize={{ base: "2xl", md: "4xl", lg: "4xl" }}
            fontWeight="bold"
            fontFamily="IBM Plex Sans!important"
            color="white"
          >
            Share Your Car And Earn
            <br />
            up to ₹50,0000 per month
          </Text>
        </Box>
        <Box>
          <Text
            fontSize={{ base: "lg", md: "xl", lg: "sm " }}
            mt="5"
            color="white"
            textAlign='left'
          >
           Get upto ₹7,500 on signup
          </Text>
        </Box>
        <Box>
          <Button
            bg="rgb(16,163,16)"
            color="white"
            fontWeight="400"
            mt="8"
            width={{ base: "100%" }}
          >
            Start Earning
          </Button>
        </Box>
      </VStack>
    </Box>
  </Box>
  )
}

export default HostBanner
