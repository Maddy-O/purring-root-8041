import React from "react";
import { Box, Button, Input, Flex, Text } from "@chakra-ui/react";
import { FiArrowLeft } from "react-icons/fi";

const PickUpPage = () => {
  return (
    <Box padding={"20px"}>
      <Box>
        <FiArrowLeft size="25px" />
      </Box>
      <Flex gap="15px">
        <Box>
          <Input
            variant={"outline"}
            border={"1px solid gray"}
            boxShadow="0px 0px 0px 1px gray"
            placeholder="Select your starting point"
            color="black"
            backgroundColor="white"
          />
        </Box>
        <Box>
          <Text>Current Location</Text>
        </Box>
        <Box>
          <Text>Select Location on Map</Text>
        </Box>
      </Flex>
      <Box>
        <Box>
          <Text>SUGGESTED PICK UP LOCATIONS</Text>
        </Box>
        <Box>
          <Text>Airport</Text>
        </Box>
        <Box>
          <Text>Railway Station</Text>
        </Box>
        <Box>
          <Text>City Bus Station</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default PickUpPage;
