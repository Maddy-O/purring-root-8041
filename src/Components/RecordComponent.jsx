import { Box, Text, VStack, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import RecordCard from "./RecordCard";

const recordData = [
  {
    id: "1",
    icon: "https://www.zoomcar.com/images/icons-fuel-fuel-type.png",
    data: "30% Fuel Costs Savings",
  },
  {
    id: "2",
    icon: "https://www.zoomcar.com/images/icons-swap.png",
    data: "30% Fuel Costs Savings",
  },
  {
    id: "3",
    icon: "https://www.zoomcar.com/images/icons-car-pick-up.png",
    data: "50% Less Accidents & Better Safety",
  },
  {
    id: "4",
    icon: "https://www.zoomcar.com/images/icons-deposit.png",
    data: "25% Maintenance Cost Reduction",
  },
  {
    id: "5",
    icon: "https://www.zoomcar.com/images/icons-ruppee.png",
    data: "15% Revenue Uplift",
  },
  {
    id: "6",
    icon: "https://www.zoomcar.com/images/icons-arrows-arrow-right-top.png",
    data: "Increase in sales funnel conversion and utilisation",
  },
];

const RecordComponent = () => {
  return (
    <Box
    marginTop='100px'
      width="100%"
      bgImage="url('https://www.zoomcar.com/assets/component-images/rectangle.e2190cd211f285fb86e5c7809c0f7b42.jpg')"
    >
      <VStack
        width={{ base: "90%", md: "90%", lg: "80%" }}
        height="100%"
        margin="auto"
      >
        <Text fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} fontWeight="600">
          Proven track records
        </Text>
        <Text
          fontSize={{ base: "sm", md: "md", lg: "lg" }}
          color="gray"
          fontWeight="400"
        >
          Backed by deep learnings and great driving experiences <br /> brought
          to you over 1 billion+ kms spanning over 7 years
        </Text>

        <Grid
          width={{ base: "75%", lg: "60%" }}
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          templateRows="repeat(2, 250px)"
          gap="3"
        >
          {recordData.map((elem) => (
            <RecordCard key={elem.id} item={elem} />
          ))}
        </Grid>
      </VStack>
    </Box>
  );
};

export default RecordComponent;
