import React from "react";
import { Box, Button, Input, Flex, Text } from "@chakra-ui/react";

const PickUpPage = () => {
  return (
    <Box>
      <Box>Arrow</Box>
      <Flex>
        <Input />
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
          <Text>Banglore International Airport</Text>
        </Box>
        <Box>
          <Text>Yelahanka Railway Station, Yelahanka, 3127564</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default PickUpPage;
