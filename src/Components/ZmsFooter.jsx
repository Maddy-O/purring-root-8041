import React from "react";
import { Box, Flex, VStack, Text, Image } from "@chakra-ui/react";
import Logo from "../Assets/Zmslogowhite.png";

const ZmsFooter = () => {
  return (
    <Box width="100%" mt="4" marginTop='100px'>
      <Box height="15px" bg="rgb(16,163,16)"></Box>
      <Flex
        top="125"
        width="100%"
        height="350px"
        bg="#1f1f1f"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          width={{ base: "90%", md: "70%", lg: "30%" }}
          height="65%"
          left="35%"
        >
          <VStack>
            <Text
              fontSize="lg"
              fontWeight="400"
              fontStyle="IBM Plex Sans"
              color="white"
            >
              For more information, connect with us at
            </Text>
            <Text
              fontSize="xl"
              fontWeight="600"
              fontStyle="IBM Plex Sans"
              color="white"
            >
              zms.contact@zoomcar.com
            </Text>
            <Flex justifyContent="center">
              <Image
                marginTop="10"
                boxSize="30%"
                objectFit="cover"
                src={Logo}
                alt="Hero Banner"
              />
            </Flex>

            <Text
              fontSize="xl"
              fontWeight="400"
              fontStyle="IBM Plex Sans"
              color="white"
            >
              ⓒ 2020 Zoomcar | All Rights Reserved
            </Text>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default ZmsFooter;
