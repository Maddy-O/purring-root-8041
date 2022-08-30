import React from "react";
import {
  Link as RouterLink,
  Box,
  Flex,
  Image,
  Container,
  Heading,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  VStack,
} from "@chakra-ui/react";
import PickUpComponent from "../Components/homePageCompo/PickUpComponent";
import discount from "../Assets/discount.png";
import referFriends from "../Assets/referFriends.png";
import trip from "../Assets/trip.png";
import securityDeposit from "../Assets/securityDeposit.jpeg";

const Home = () => {
  return (
    <>
      <PickUpComponent />
      <Box>
        <Flex justifyContent={"center"} m="20px 0px" flexWrap="wrap">
          <Image
            w="500px"
            h="270px"
            src={referFriends}
            alt="Dan Abramov"
            cursor="pointer"
          />
          <Image
            w="500px"
            h="270px"
            src={discount}
            alt="Dan Abramov"
            cursor="pointer"
          />
        </Flex>
        <Flex bg="rgb(244,244,244)" pt="20px" direction="column">
          <Image w="1000px" h="600px" m="auto" src={trip} alt="Dan Abramov" />
          <Image
            w="970px"
            h="500px"
            m="20px auto"
            src={securityDeposit}
            alt="Dan Abramov"
          />
        </Flex>
        <Container maxW="container.lg" padding="15px">
          <Heading as="h4" size="sm" textAlign={"left"} mb="10px">
            OFFERS
          </Heading>
          <Flex margin="auto" flexWrap="wrap">
            <Image
              w="300px"
              h="180px"
              m="0px 10px"
              src="https://zoomcar-assets.zoomcar.com/photos/original/0d948091d1befad4507bd5710ad03a309f5b5345.jpg?1651837793"
              alt="Dan Abramov"
            />
            <Image
              w="300px"
              h="180px"
              m="0px 10px"
              src="https://zoomcar-assets.zoomcar.com/photos/original/1d96a8389f06beb050e83374b5e3ac9cb448e54c.jpg?1655705601"
              alt="Dan Abramov"
            />
            <Image
              w="300px"
              h="180px"
              m="0px 10px"
              src="https://zoomcar-assets.zoomcar.com/photos/original/67aa017f464b45e52f7bc9a206245e5f15f5a316.jpg?1655478529"
              alt="Dan Abramov"
            />
          </Flex>
        </Container>
        <Container bg="rgb(250,250,250)" maxW="container.4xl">
          <Accordion allowToggle w="fit-content" m="auto">
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="center"
                    mr="10px"
                    color={"rgb(151,151,151)"}
                  >
                    About Us
                  </Box>
                  <AccordionIcon color={"rgb(151,151,151)"} />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {/* <Text> */}
                <VStack>
                  <RouterLink color="rgb(138,139,140)" href="#">
                    {" "}
                    Zoomcar Team
                  </RouterLink>
                  <RouterLink color="rgb(138,139,140)" href="#">
                    {" "}
                    Zoomcar Subscription
                  </RouterLink>
                  <RouterLink color="rgb(138,139,140)" href="#">
                    {" "}
                    Zoomcar Blog
                  </RouterLink>
                  <RouterLink color="rgb(138,139,140)" href="#">
                    {" "}
                    Careers @ Zoomcar
                  </RouterLink>
                </VStack>
                {/* </Text> */}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Container>
        <Container maxW="container.4xl" bg="rgb(245,245,245)">
          <Image
            w="1000px"
            h="600px"
            m="auto"
            src="https://i.ibb.co/DtgT8JQ/image-4.png"
            alt="Dan Abramov"
          />
        </Container>
        <Container maxW="container.4xl">
          <Image
            w="900px"
            h="300px"
            src="https://i.ibb.co/JR3QFhq/image-5-1.png"
            alt="Dan Abramov"
          />
        </Container>
      </Box>
    </>
  );
};

export default Home;
