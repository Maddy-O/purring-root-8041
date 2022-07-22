import React, { useEffect, useState } from "react";
import { Box, Button, Input, Flex, Text } from "@chakra-ui/react";
import { FiArrowLeft } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserLocation,
  getUserPickUpLoc,
  getCheckLoc,
} from "../Redux/LocationReducer/action";

const PickUpPage = () => {
  const [b, setb] = useState("");
  const dispatch = useDispatch();
  const userCity = useSelector((state) => state.LocationReducer.currLocation);
  const pickUpLoc = useSelector((state) => state.LocationReducer.pickUpLoc);

  // const asArray = Object.entries(pickUpLoc);
  // const data = Object.keys(pickUpLoc[0]).filter((e, value) =>
  //   e.includes(b) ? [...e] : [...e]
  // );
  // const filtered = asArray.filter(([key, value]) =>  key === 'Pune');

  // console.log(data);

  useEffect(() => {
    dispatch(getUserLocation());
    setb(userCity[0]?.city);
    dispatch(getUserPickUpLoc());
  }, [dispatch]);

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
      <Box></Box>
    </Box>
  );
};

export default PickUpPage;
