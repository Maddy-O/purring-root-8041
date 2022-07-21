import React from "react";
import Navbar from "../Components/Navbar";
import { Box, Button, Input, Flex } from "@chakra-ui/react";
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
        <Box alignItems="center">
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
        </Box>
      </Box>
    </div>
  );
};

export default HomePage;
