import { Image, Flex, Text } from "@chakra-ui/react";
import React from "react";

const ReviewCard = ({ item }) => {
  const { name, org, img, data, age } = item;

  return (
    <Flex direction="column" width={"230px"}>
      <Image height="60%" src={img} />
      <Text mt="4" textAlign="left" fontSize="sm">
        {data}
      </Text>
      <Text mt="4" textAlign="left" fontSize="sm" color="gray">
        {name}, Age {age} <br /> {org}
      </Text>
    </Flex>
  );
};

export default ReviewCard;
