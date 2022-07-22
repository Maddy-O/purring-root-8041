import React from "react";
import Navbar from "../Components/Navbar";
import { Box, Button, Input, Flex, Text } from "@chakra-ui/react";
import homeBgImage from "../Utils/bg-desktop.png";
import { FaCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
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
            <Box
              border="1px solid gary"
              borderRadius="7px"
              padding="10px"
              textAlign="left"
              boxShadow="2px 2px 2px gray"
              background="white"
              width="400px"
              height="50px"
              display="flex"
              alignItems="center"
              gap="10px"
              cursor="pointer"
              onClick={() => navigate("/location")}
            >
              <FaCircle size={"10px"} color="green" />
              <Text color="gray">Pick Up City, Airpot, Address or Hotel</Text>
            </Box>
            <Button
              border="1px solid gary"
              boxShadow="2px 2px 2px gray"
              width="400px"
              bg="gray"
              height="50px"
              onClick={() => navigate("/filterpage")}
            >
              FIND CARS
            </Button>
          </Flex>
        </Box>
      </Box>
    </div>
  );
};

export default HomePage;
