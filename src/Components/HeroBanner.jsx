import React from "react";
import {
  Box,
  Image,
  VStack,
  Text,
  Flex,
  Spacer,
  Button,
} from "@chakra-ui/react";
import HeroBannerImg from "../Assets/ZmsHeroBanner.jpg";
import Logo from "../Assets/Zmslogowhite.png";

const HeroBanner = () => {
  return (
    <Box>
      <Box width="100vw" height="100vh" top="0" position="relative">
        <Image
          boxSize="100%"
          objectFit="cover"
          src={HeroBannerImg}
          alt="Hero Banner"
        />

        <Flex
          position="absolute"
          top="5"
          width="70%"
          height="50px"
          left="15%"
          alignItems="center"
        >
          <Box
            bg="transparent"
            width={{ base: "100px", md: "25%", lg: "15%" }}
            height="70%"
          >
            <Image
              boxSize="100%"
              objectFit="cover"
              src={Logo}
              alt="Hero Banner"
            />
          </Box>
          <Spacer />
          <Button
            p="4"
            bg="white"
            width={{ base: "100px", md: "25%", lg: "15%" }}
            height="100%"
          >
            <Text
              fontSize={{ base: "sm", md: "md" }}
              fontWeight="400"
              fontStyle="normal"
            >
              {" "}
              Request Demo
            </Text>
          </Button>
        </Flex>

        <VStack
          width={{ base: "90%", md: "80%", lg: "30%" }}
          height="400px"
          left={{ base: "5%", md: "10%", lg: "35%" }}
          position="absolute"
          top="250"
        >
          <Box>
            <Text
              fontSize={{ base: "2xl", md: "4xl", lg: "4xl" }}
              fontWeight="bold"
              fontFamily="IBM Plex Sans!important"
              color="white"
            >
              Inspiring Profitable Mobility
              <br />
              Solutions of Tomorrow
            </Text>
          </Box>
          <Box>
            <Text
              fontSize={{ base: "lg", md: "xl", lg: "sm " }}
              mt="5"
              color="white"
            >
              Suite of Connected Technology Offerings and Connected Mobility
              <br />
              Solutions for Businesses Worldwide
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
              Request Demo
            </Button>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};

export default HeroBanner;
