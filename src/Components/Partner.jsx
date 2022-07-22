import { Box, Flex, Text, Grid } from "@chakra-ui/react";
import React from "react";
import PartnerCard from "./PartnerCard";

const partnerData = [
  {
    id: "1",
    icon: "https://www.zoomcar.com/images/icons-timer-new.png",
    title: "Quick Go-To Market",
    data: "Quick and easy onboarding with a fast turnaround time of one week",
  },
  {
    id: "2",
    icon: "https://www.zoomcar.com/images/icons-car-new.png",
    title: "India’s largest B2C Mobility Platform",
    data: "Fleet management experience of managing 20,000+ assets",
  },
  {
    id: "3",
    icon: "https://www.zoomcar.com/images/icons-remote-new.png",
    title: "Works Across Vehicle Types",
    data: "Works seamlessly across - 2W, 3W, Cars, Trucks & Electric Vehicles alike",
  },
  {
    id: "4",
    icon: "https://www.zoomcar.com/images/icons-table-new.png",
    title: "Advanced Data Science Capabilities",
    data: "Self-learning algorithms powered by Artificial Intelligence & Machine Learning to predict driver behaviour",
  },
  {
    id: "5",
    icon: "https://www.zoomcar.com/images/icons-license-new.png",
    title: "Commitment to Customer Satisfaction",
    data: "24x7 dedicated assistance and support system",
  },
  {
    id: "6",
    icon: "https://www.zoomcar.com/images/icons-delivery-green-new.png",
    title: "Pioneer in Shared subscription",
    data: "Innovative techniques to enable 2-sided marketplaces for better utilisation & revenue",
  },
  {
    id: "7",
    icon: "https://www.zoomcar.com/images/icons-setting-green-new.png",
    title: "Proven Next Gen Technology",
    data: "Best in class stable and scalable tech solutions",
  },
  {
    id: "8",
    icon: "https://www.zoomcar.com/images/icons-distance-new.png",
    title: "Futuristic Products",
    data: "Always in sync with the evolving business landscape",
  },
  {
    id: "9",
    icon: "https://www.zoomcar.com/images/icons-office-new.png",
    title: "Powering Multiple Sectors",
    data: "Partners range from Government bodies to Global companies across varied geographies",
  },
];

const Partner = () => {
  return (
    <Box
    marginTop='100px'
      width="100%"
      bgImage="url('https://www.zoomcar.com/assets/component-images/bound@2x.476261040c66e2e84987563e0b955b44.jpg')"
    >
      <Text p="8" fontSize="4xl" color="white" fontWeight="bold">
        Why Partner with Us?
      </Text>

      <Grid
        bg="white"
        margin="auto"
        borderRadius="lg"
        width={{ base: "100%", lg: "70%" }}
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        templateRows="repeat(3, 200px)"
        gap="3"
      >
        {partnerData.map((elem) => (
          <PartnerCard key={elem.id} item={elem} />
        ))}
      </Grid>
    </Box>
  );
};

export default Partner;
