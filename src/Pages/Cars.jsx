import React, { useEffect } from "react";
import { getCar, getCarId } from "../Redux/AppReducer/action";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Text, Button, Image, Grid, Flex } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Cars = () => {
  const data = useSelector((state) => state.AppReducer.car);
  const [metaa, setMet] = useState([]);
  const [idd, setIdd] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFilter = (e) => {
    const datatoset = data.filter((ele) => ele.Seat == e.target.value);
    setMet(datatoset);
  };
  const handleCarTypes = (e) => {
    const datatoset = data.filter((ele) => ele.CarType == e.target.value);
    setMet(datatoset);
  };
  const handleTransmission = (e) => {
    const datatoset = data.filter((ele) => ele.Transmision == e.target.value);
    setMet(datatoset);
  };
  const handleDelivery = (e) => {
    const datatoset = data.filter((ele) => ele.DeliveryType == e.target.value);
    setMet(datatoset);
  };
  const handelId = (e) => {
    setIdd(e.target.value);
  };
  useEffect(() => {
    setMet(data);
  }, [setMet, data.length]);

  useEffect(() => {
    dispatch(getCar());
  }, [data.length, dispatch, metaa]);

  useEffect(() => {
    if (idd !== 0) {
      const payload = {
        idd: idd,
      };
      dispatch(getCarId(payload));
      navigate("checkout");
    }
  }, [dispatch, idd]);

  return (
    <>
      <Flex margin="10px" alignItems="center" gap="70px">
        <Box width="40%">
          <FaArrowLeft cursor="pointer" onClick={() => navigate("/")} />
        </Box>
        <Box width="60%" textAlign="left">
          <Text fontSize="16px" fontWeight="500">
            Select Your Drive
          </Text>
        </Box>
      </Flex>
      <Box
        width={"100"}
        height={["500px,550px,400px"]}
        border={"1px solid transparent"}
        display={"flex"}
      >
        <Box
          width={"27%"}
          border={"1px solid none"}
          marginRight={"2%"}
          boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
        >
          <Box width={"100%"}>
            <Text mb="2" fontSize={{ base: "sm ", md: "lg", lg: "xl" }}>
              SEATS
            </Text>
            <Grid
              templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}
            >
              <Button
                value={5}
                bg={"light-grey"}
                border={"1px solid grey"}
                width={{ base: "85%", lg: "90%" }}
                mb="2"
                ml="2"
                onClick={(e) => handleFilter(e)}
                cursor="pointer"
              >
                5
              </Button>
              <Button
                value={6}
                bg={"light-grey"}
                border={"1px solid grey"}
                width={{ base: "85%", lg: "90%" }}
                mb="2"
                ml="2"
                onClick={(e) => handleFilter(e)}
              >
                6
              </Button>
              <Button
                value={7}
                bg={"light-grey"}
                border={"1px solid grey"}
                width={{ base: "85%", lg: "90%" }}
                mb="2"
                ml="2"
                onClick={(e) => handleFilter(e)}
              >
                7
              </Button>
            </Grid>
          </Box>
          {/* car Types */}
          <Box width={"100%"} border={"1px solid none"}>
            <Text mb="2" mt="4" fontSize={{ base: "sm ", md: "lg", lg: "xl" }}>
              CAR TYPES
            </Text>
            <Grid
              templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}
            >
              <Button
                value={"SUV"}
                bg={"light-grey"}
                border={"1px solid grey"}
                width={{ base: "85%", lg: "90%" }}
                mb="2"
                ml="2"
                onClick={(e) => handleCarTypes(e)}
                cursor="pointer"
              >
                SUV
              </Button>
              <Button
                value={"sedan"}
                bg={"light-grey"}
                border={"1px solid grey"}
                width={{ base: "85%", lg: "90%" }}
                mb="2"
                ml="2"
                onClick={(e) => handleCarTypes(e)}
              >
                Sedan
              </Button>
              <Button
                value={"hatchback"}
                bg={"light-grey"}
                border={"1px solid grey"}
                width={{ base: "85%", lg: "90%" }}
                mb="2"
                ml="2"
                onClick={(e) => handleCarTypes(e)}
              >
                Hatchback
              </Button>
            </Grid>
          </Box>
          {/* Transmission */}
          <Box width={"100%"} border={"1px solid none"}>
            <Text mb="2" mt="4" fontSize={{ base: "sm ", md: "lg", lg: "xl" }}>
              TRANSMISSION
            </Text>
            <Grid
              templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
            >
              <Button
                value={"Manual"}
                bg={"light-grey"}
                border={"1px solid grey"}
                width={{ base: "85%", lg: "90%" }}
                mb="2"
                ml="2"
                onClick={(e) => handleTransmission(e)}
                cursor="pointer"
              >
                Manual
              </Button>
              <Button
                value={"Automatic"}
                bg={"light-grey"}
                border={"1px solid grey"}
                width={{ base: "85%", lg: "90%" }}
                mb="2"
                ml="2"
                onClick={(e) => handleTransmission(e)}
              >
                Automatic
              </Button>
            </Grid>
          </Box>
          {/* Delivery div */}
          <Box width={"100%"} height={"100px"} border={"1px solid none"}>
            <Text mb="2" mt="4" fontSize={{ base: "sm ", md: "lg", lg: "xl" }}>
              DELIVERY TYPE
            </Text>
            <Grid
              templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
            >
              <Button
                value={"Home Delivery"}
                bg={"light-grey"}
                border={"1px solid grey"}
                width={{ base: "85%", lg: "90%" }}
                mb="2"
                ml="2"
                onClick={(e) => handleDelivery(e)}
                cursor="pointer"
              >
                Home
              </Button>
              <Button
                value={"Airport Delivery"}
                bg={"light-grey"}
                border={"1px solid grey"}
                width={{ base: "85%", lg: "90%" }}
                mb="2"
                ml="2"
                onClick={(e) => handleDelivery(e)}
              >
                Airport
              </Button>
            </Grid>
          </Box>
        </Box>
        {/* MAIN DIV */}
        <Box
          width={{ base: "95%", md: "90%", lg: "68%" }}
          height={"100%"}
          border={"1px solid transparent"}
        >
          {metaa.map((item) => {
            return (
              <Box
                width={"100%"}
                height={"120px"}
                display={"flex"}
                padding={"0%"}
                border="1px solid transparent"
                textAlign={"left"}
                lineHeight={"12px"}
                boxShadow={" rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;"}
                marginBottom={"2%"}
                key={item.id}
              >
                {/* imagediv */}
                <Box
                  width={{ base: "33%" }}
                  height={"120px"}
                  border={"1px solid transparent"}
                  marginRight={"0.5%"}
                  padding={"1%"}
                >
                  <Image
                    src={item.image}
                    alt="nsbns"
                    objectFit="cover"
                    width={{ base: "100%", lg: "70%" }}
                    height={{ base: "50%", md: "75%", lg: "100%" }}
                  />
                </Box>
                {/* centernamediv */}
                <Box
                  width={"33%"}
                  height={"120px"}
                  border={"1px solid transparent"}
                  marginRight={"1.4%"}
                >
                  <Text
                    mt="2"
                    fontSize={{ base: "sm", md: "lg", lg: "xl" }}
                    fontWeight="500"
                    lineHeight="1"
                  >
                    {item.Name}
                  </Text>
                  <Text marginTop={"3%"} fontSize={"12px"}>
                    {item.Transmision} . {item.Type} . {item.Seat}seat
                  </Text>
                  <Text fontSize={"10px"} marginTop={"3.5%"}>
                    <StarIcon w={15} h={15} color={"#FFD700"}></StarIcon>{" "}
                    {item.Star} . {item.Driven}
                  </Text>
                </Box>
                {/* rightdiv */}
                <Box
                  width={"33%"}
                  height={"120px"}
                  border={"1px solid transparent"}
                  textAlign={"center"}
                  marginRight={"1.4%"}
                >
                  <Text
                    fontSize={{ base: "lg", md: "2xl", lg: "4xl" }}
                    fontWeight="600"
                    mt="2"
                  >
                    ₹{item.Price}
                  </Text>
                  <Button
                    value={`${item.id}`}
                    height={{ base: "30%", lg: "50%" }}
                    width={{ base: "100%", lg: "50%" }}
                    borderRadius={"20px"}
                    fontSize={{ base: "md", md: "lg", lg: "xl" }}
                    border={"1px solid green"}
                    background={"transparent"}
                    marginTop="8"
                    onClick={(e) => handelId(e)}
                    _hover={{ background: "rgb(16,163,16)", color: "white" }}
                  >
                    Book Now
                  </Button>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default Cars;
