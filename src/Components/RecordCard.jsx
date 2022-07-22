import { Flex, Box, Text } from "@chakra-ui/react";
import React from "react";

const RecordCard = ({ item }) => {
  const { icon, data } = item;
  // console.log(icon);
  return (
    <Flex bg="rgb(31,31,31)" direction="column" rounded="md">
      <Box p="4" width="30%" height="15%">
        <img width="100%" height="100%" src={icon} />
      </Box>

      <Box mt="36">
        <Text fontWeight="400" fontSize="xl" color="white">
          {data}
        </Text>
      </Box>
    </Flex>
  );
};

export default RecordCard;
