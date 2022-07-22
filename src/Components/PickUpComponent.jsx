import React, { useState } from "react";
import homeBgImage from "../Assets/bg-desktop.png";
import { FaCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Box, Flex, Text, Button, Input } from "@chakra-ui/react";
import DateTimePicker from "react-datetime-picker";

const PickUpComponent = () => {
  const navigate = useNavigate();
  const [value, onChange] = useState(new Date());

  return (
    <Box
      backgroundImage={homeBgImage}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom right"
      height="550"
      width="150"
    >
      <Box alignItems="center">
        <Flex
          bottom="30px"
          right="40%"
          alignItems="center"
          direction="column"
          gap="10px"
        >
          <Box
            marginTop="400px"
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
            onClick={() => navigate("/pickup")}
          >
            <FaCircle size={"10px"} color="green" />
            <Text color="gray">Pick Up City, Airpot, Address or Hotel</Text>
          </Box>
          <Box>
            <DateTimePicker height="100px" onChange={onChange} value={value} />
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
  );
};

export default PickUpComponent;
