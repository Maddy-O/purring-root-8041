import React from "react";
import Navbar from "../Components/Navbar";
import { Box,Text,Link as RouterLink, Button, Input,VStack, Flex ,Container,Image,Heading, HStack,AccordionButton,Accordion,AccordionItem,AccordionPanel,AccordionIcon} from "@chakra-ui/react";
import homeBgImage from "../Utils/bg-desktop.png";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Box
        backgroundImage={homeBgImage}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundPosition="bottom right"
        height="600"
        width="150"
      >
        {/* <Box alignItems="center">
          <Flex
            position="absolute"
            bottom="30px"
            right="40%"
            alignItems="center"
            direction="column"
            margin="auto"
            gap="10px"
          >
            <Input
              border="2px solid black"
              placeholder="Pick Up City"
              background="black"
              width="400px"
              height="50px"
            />
            <Button width="400px" bg="gray.400" height="50px">
              FIND CARS
            </Button>
          </Flex>
        </Box> */}
      </Box>
      <Flex justifyContent={"center"} m="20px 0px" >
      <Image  w='500px' h="270px" src='https://i.ibb.co/TB5KMyC/image-1-5.png' alt='Dan Abramov' />
      <Image  w='500px' h="270px" src='https://i.ibb.co/GsmQh50/image-2-3.png' alt='Dan Abramov' />
      </Flex>
      <Flex bg="rgb(244,244,244)" pt="20px" direction="column">
      <Image  w='1000px' h="600px" m="auto" src='https://i.ibb.co/MncLhs0/image-3-3.png' alt='Dan Abramov' />
      <Image  w='970px' h="500px" m="20px auto" src='https://zoomcar-assets.zoomcar.com/pictures/original/1d8cdddd9d45435cbe1b4a5389a5879fc19dc179.jpeg?1652363899' alt='Dan Abramov' />
      </Flex>

      <Container maxW='container.lg' p="40px ">
    <Heading as='h4' size='sm' textAlign={"left"} mb="10px">
      OFFERS
  </Heading>
  <Flex>
      <Image  w='300px' h="180px"  m="0px 10px" src='https://zoomcar-assets.zoomcar.com/photos/original/0d948091d1befad4507bd5710ad03a309f5b5345.jpg?1651837793' alt='Dan Abramov' />
      <Image  w='300px' h="180px" m="0px 10px" src='https://zoomcar-assets.zoomcar.com/photos/original/1d96a8389f06beb050e83374b5e3ac9cb448e54c.jpg?1655705601' alt='Dan Abramov' />
      <Image  w='300px' h="180px" m="0px 10px" src='https://zoomcar-assets.zoomcar.com/photos/original/67aa017f464b45e52f7bc9a206245e5f15f5a316.jpg?1655478529' alt='Dan Abramov' />
  </Flex>
  </Container>
  <Container bg="rgb(250,250,250)" maxW='container.4xl' >
  <Accordion allowToggle w="fit-content" m="auto" >
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='center' mr="10px" color={"rgb(151,151,151)"}>
          About Us
        </Box>
        <AccordionIcon color={"rgb(151,151,151)"} />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Text>
      <VStack>
  <RouterLink color='rgb(138,139,140)' href='#'>  Zoomcar Team</RouterLink>
  <RouterLink color='rgb(138,139,140)' href='#'> Zoomcar Subscription</RouterLink>
  <RouterLink color='rgb(138,139,140)' href='#'> Zoomcar Blog</RouterLink>
  <RouterLink color='rgb(138,139,140)' href='#'>  Careers @ Zoomcar</RouterLink>
  </VStack>
</Text>
    </AccordionPanel>
  </AccordionItem>
  </Accordion>
  </Container>
  <Container maxW='container.4xl' bg="rgb(245,245,245)">
      <Image  w='1000px' h="600px" m="auto" src='https://i.ibb.co/DtgT8JQ/image-4.png' alt='Dan Abramov' />
  </Container>
  <Container maxW='container.4xl' Content>
      <Image  w='900px' h="300px"  src='https://i.ibb.co/JR3QFhq/image-5-1.png' alt='Dan Abramov' />
  </Container>
    </div>
  );
};

export default HomePage;
