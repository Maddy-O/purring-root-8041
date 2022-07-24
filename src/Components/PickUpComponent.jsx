import React from "react";
import homeBgImage from "../Assets/bg-desktop.png";
import { FaCircle } from "react-icons/fa";
import { VscCalendar } from "react-icons/vsc";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Box, Flex, Text, Button } from "@chakra-ui/react";

const PickUpComponent = ({ point, dateData }) => {
  const navigate = useNavigate();

  return (
    <Box
      backgroundImage={homeBgImage}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom right"
      height="550"
      width="150"
      marginBottom={"50px"}
    >
      <Box alignItems="center">
        <Flex
          bottom="30px"
          right="40%"
          alignItems="center"
          direction="column"
          gap="10px"
        >
          <Box
            marginTop="400px"
            border="1px solid gary"
            borderRadius="7px"
            padding="10px"
            textAlign="left"
            boxShadow="2px 2px 2px gray"
            background="white"
            width="400px"
            height="50px"
            display="flex"
            alignItems="center"
            gap="10px"
            cursor="pointer"
            onClick={() => navigate("/pickup")}
          >
            <FaCircle size={"10px"} color="green" />
            <Text color="gray">Pick Up City, Airpot, Address or Hotel</Text>
          </Box>
          {point ? (
            <Flex
              onClick={() => navigate("/datetime")}
              border="1px solid gary"
              borderRadius="7px"
              padding="10px"
              textAlign="left"
              boxShadow="2px 2px 2px gray"
              background="white"
              width="400px"
              height="50px"
              display="flex"
              alignItems="center"
              gap="10px"
              cursor="pointer"
            >
              <VscCalendar />
              {dateData.startDate ? (
                <Text color="gray">{dateData.startDate}</Text>
              ) : (
                "Start Date"
              )}
              <BsArrowRight />
              {dateData.startDate ? (
                <Text color="gray">{dateData.endDate}</Text>
              ) : (
                "End Date"
              )}
            </Flex>
          ) : (
            ""
          )}

          <Button
            border="1px solid gary"
            boxShadow="2px 2px 2px gray"
            width="400px"
            height="50px"
            backgroundColor={dateData.startDate ? "#10a310" : "#e0e0e0"}
            onClick={() => navigate("/filterpage")}
          >
            FIND CARS
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default PickUpComponent;
