import React, { useState, useEffect } from "react";
import { Box, Button, Input, Flex, Text } from "@chakra-ui/react";
import { FiArrowLeft } from "react-icons/fi";
import { FaCircle, FaRegMap } from "react-icons/fa";
import { TbCurrentLocation } from "react-icons/tb";
import { GoLocation } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";

const PickUpPage = ({ setPoint }) => {
  const navigate = useNavigate();
  const [te, setTe] = useState("");

  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setItems(items);
    }
  }, []);

  const handleAdd = () => {
    setPoint(true);
    navigate("/");
  };

  console.log(items);

  return (
    <Box
      padding={"20px"}
      alignContent="center"
      alignItems={"center"}
      textAlign="center"
    >
      <Box>
        <Link to="/">
          <FiArrowLeft size="25px" />
        </Link>
      </Box>
      <Box margin={"auto"} maxWidth="1000px">
        <Flex
          gap="15px"
          margin={"auto"}
          alignItems="center"
          marginTop="25px"
          marginBottom="20px"
        >
          <Box
            border="1px solid gary"
            borderRadius="7px"
            padding="10px"
            textAlign="left"
            boxShadow="0px 0px 0px 1px gray"
            background="white"
            width="55%"
            height="50px"
            display="flex"
            alignItems="center"
            gap="10px"
            cursor="pointer"
          >
            <FaCircle size={"10px"} color="green" />
            <Text color="gray">Pick Up City, Airpot, Address or Hotel</Text>
          </Box>
          <Flex gap="10px" alignItems="center">
            <TbCurrentLocation size="30px" color="gray" />
            <Text>Current Location</Text>
          </Flex>
          <Flex gap="10px" alignItems="center">
            <FaRegMap size="30px" color="gray" />
            <Text>Select Location on Map</Text>
          </Flex>
        </Flex>
        <Flex
          gap="50px"
          backgroundColor="#fbfbfb"
          textAlign="left"
          padding="25px"
        >
          {te ? (
            <Box width="50%">
              <Box backgroundColor="#f5f5f5" padding="5px">
                <Text fontWeight={"bold"} color="gray.700">
                  RECENTLY SEARCHED LOCATIONS
                </Text>
              </Box>
              <Flex gap="10px" padding="5px" marginTop="10px">
                <GoLocation size="20px" />
                <Text>{te}</Text>
              </Flex>
            </Box>
          ) : (
            <Box></Box>
          )}
          <Box width="50%">
            <Box backgroundColor="#f5f5f5" padding="5px">
              <Text fontWeight={"bold"} color="gray.700">
                SUGGESTED PICK UP LOCATIONS
              </Text>
            </Box>
            <Flex
              gap="10px"
              padding="5px"
              marginTop="10px"
              alignItems="center"
              cursor="pointer"
            >
              <GoLocation size="20px" />
              <Text onClick={() => setTe(`${items} International Airport`)}>
                {items} International Airport
              </Text>
            </Flex>
            <Flex
              gap="10px"
              padding="5px"
              marginTop="10px"
              alignItems="center"
              cursor="pointer"
            >
              <GoLocation size="20px" />
              <Text onClick={() => setTe(`${items} Raiway Station`)}>
                {items} Raiway Station
              </Text>
            </Flex>
            <Flex
              gap="10px"
              padding="5px"
              marginTop="10px"
              alignItems="center"
              cursor="pointer"
            >
              <GoLocation size="20px" />
              <Text onClick={() => setTe(`${items} City Bus Station`)}>
                {items} City Bus Station
              </Text>
            </Flex>
          </Box>
        </Flex>
        <Box>
          <Button
            onClick={handleAdd}
            width="45%"
            backgroundColor={te ? "#10a310" : "#e0e0e0"}
          >
            CONFIRM PICKUP LOCATION
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PickUpPage;
