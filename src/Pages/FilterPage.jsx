import React, { useEffect } from "react";
import { getCar } from "../Redux/AppReducer/action";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
// import { CardCar } from '../Components/CarList'
import { Box, Text, Heading, Button, Flex } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

export const FilterPage = () => {
  const data = useSelector((state) => state.AppReducer.car);
  const [metaa, setMet] = useState([]);
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    // console.log(e.target.value);
    const datatoset = data.filter((ele) => ele.Seat == e.target.value);
    // console.log(datatoset);
    setMet(datatoset);
  };
  useEffect(() => {
    dispatch(getCar());
  }, [data.length, dispatch, metaa]);

  // console.log(data);
  // console.log(metaa);
  return (
    <Box
      width={"100"}
      height={"400px"}
      border={"1px solid transparent"}
      display={"flex"}
    >
      <Flex
        gap="15px"
        width={"27%"}
        height={"100%"}
        border={"1px solid green"}
        marginRight={"2%"}
      >
        <Button
          value={5}
          bg={"red"}
          onClick={(e) => handleFilter(e)}
          cursor="pointer"
        >
          5
        </Button>
        <Button value={6} bg={"red"} onClick={(e) => handleFilter(e)}>
          6
        </Button>
        <Button value={7} bg={"red"} onClick={(e) => handleFilter(e)}>
          7
        </Button>
      </Flex>

      {/* MAIN DIV */}
      <Box width={"68%"} height={"100%"} border={"1px solid transparent"}>
        {metaa.map((item) => {
          return (
            <Box
              width={"100%"}
              height={"120px"}
              display={"flex"}
              padding={"0%"}
              textAlign={"left"}
              lineHeight={"12px"}
              boxShadow={" rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;"}
              marginBottom={"2%"}
              key={item.id}
            >
              {/* imagediv */}
              <Box
                width={"33%"}
                height={"120px"}
                border={"1px solid transparent"}
                marginRight={"0.5%"}
                padding={"1%"}
              >
                <img
                  src={item.image}
                  alt="nsbns"
                  width={"90%"}
                  height={"90%"}
                />
              </Box>
              {/* centernamediv */}
              <Box
                width={"33%"}
                height={"120px"}
                border={"1px solid transparent"}
                marginRight={"1.4%"}
              >
                <Text>{item.Name}</Text>
                <Text fontSize={"12px"}>
                  {item.Transmision} . {item.Type} . {item.Seat}seat
                </Text>
                <Text fontSize={"10px"}>
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
                <Heading>₹{item.Price}</Heading>
                <Button
                  height={"50%"}
                  width={"50%"}
                  borderRadius={"20px"}
                  fontSize={"12px"}
                  border={"1px solid green"}
                  background={"transparent"}
                  marginTop={"1%"}
                >
                  Book Now
                </Button>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
