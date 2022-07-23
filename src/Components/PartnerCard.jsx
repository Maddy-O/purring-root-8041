import { Flex, Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const PartnerCard = ({ item }) => {
  const { icon, data, title } = item;
  return (
    <Flex p="10" direction="column" textAlign="left">
      <Box width="10%" height="25%">
        <Image objectFit="cover" src={icon}></Image>
      </Box>
      <Box>
        <Text mt="3" fontWeight="600">
          {title}
        </Text>
      </Box>

      <Box>
        <Text mt="4" color="gray" fontWeight="400">
          {data}
        </Text>
      </Box>
    </Flex>
  );
};

export default PartnerCard;
