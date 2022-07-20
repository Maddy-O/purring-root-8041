import {
  Flex,
  Text,
  FormControl,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import React from "react";

const ContactForm = () => {
  return (
    <Flex
      width={{ base: "90%", md: "70%", lg: "30%" }}
      height="600px"
      boxShadow="xl"
      margin="auto"
      marginTop='100px'
      direction="column"
    >
      <Text mt="4" fontSize="3xl" fontWeight="600">
        Connect With Us
      </Text>
      <Text mt="4" fontSize="lg" fontWeight="400" color="gray">
        Leave details for us to help your business become future ready
      </Text>

      <FormControl>
        <Input height="12" placeholder="Name" width="45%" mr="1%" mt="4" />
        <Input height="12" placeholder="Company Name" width="45%" ml="1%" />
        <Input height="12" placeholder="Email" width="92%" mt="4" />
        <Input
          height="12"
          placeholder="Phone Number"
          width="45%"
          mr="1%"
          mt="4"
        />
        <Input height="12" placeholder="Country" width="45%" ml="1%" mt="4" />
        <Textarea
          width="92%"
          height="40%"
          mt="4"
          placeholder="Mention Requirements"
        />

        <Button mt="8" width="25%" color="white" bg="rgb(16,163,16)">
          Submit
        </Button>
      </FormControl>
    </Flex>
  );
};

export default ContactForm;
