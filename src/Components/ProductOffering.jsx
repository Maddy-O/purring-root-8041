import React from "react";
import { Box, Text, Grid, GridItem, Button } from "@chakra-ui/react";
import { useState } from "react";
import ImageSlider from "./ImageSlider";
import FeaturesCard from "./FeaturesCard";

const solutionImage = [
    {id:'1',img:"https://www.zoomcar.com/assets/component-images/ZMS_Slide-Banner_201_A.06f7fa208212fb4dc92e611fdf69304e.jpg"},
    {id:'2',img: "https://www.zoomcar.com/assets/component-images/ZMS_Slide-Banner_201_C.c9d9a766c44e0796bce6e3bdcc65d589.jpg"},
    {id:'3',img:"https://www.zoomcar.com/assets/component-images/ZMS_Slide-Banner_201_E.43c8d28a91111b0eb44831b1d040bc79.jpg"},
]

const servicesImage = [
    {id:'1',img:"https://www.zoomcar.com/assets/component-images/ZMS_Slide-Banner_201_F.c6cae2c0c2d78e980c507982bab4c1b9.jpg"},
   { id:'2',img:"https://www.zoomcar.com/assets/component-images/ZMS_Slide-Banner_201_D.c564a1d96dd9b4b03806837bbc51ca52.jpg"},
   { id:'3',img:"https://www.zoomcar.com/assets/component-images/ZMS_Slide-Banner_201_B.a4d19a95cb4faa68b9c0cdd1bf6e703e.jpg"},

]

const servicesData =[ 
    {id:1, title:"Renter Platform", data:"Customisable stack to launch station based & free-floating keyless renter services"},
    {id:2, title:"Subscription Platform", data:"Whitelabel Subscription platform that works across all vehicle types for higher utilization"},
    {id:3, title:"Dynamic Pricing", data:"Plug and play module matching demand-supply and maximizing ROI"},
    {id:4, title:"Analytics & Reporting", data:"Empower decision making through advanced Data Science and Analytics capabilities"},
    {id:5, title:"Real-Time Monitoring", data:"Connectivity and Real-time monitoring features to bring more transparency and reliability"},
    
];

const solutionData = [
    {id:1, title:"Vehicle Tracking & Safety", data:"Geo-fencing, Real time alerts, immobilization to manage 24x7"},
    {id:2, title:"Driver Score", data:"Improved fuel efficiency and cost benefits from better driving behavior"},
    {id:3, title:"Vehicle Health Monitoring", data:"Real-time Asset health monitoring systems for reduced downtime"},
    {id:4, title:"Fuel Management", data:"Real time fuel level monitoring and fuel theft detection mechanisms"},
    {id:5, title:"Operations Automation", data:"Automate routine operational tasks and increase uptime over 25%"},
    
];


const ProductOffering = () => {
  const [features, setFeatures] = useState(true);

  return (
    <Box width="80%" bg="rgb(245,244,246)" margin="auto" mt="20" borderRadius='lg'>
      <Text fontSize="3xl" fontWeight="600" mt="8">
        Product Offering
      </Text>

      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        width={{base:"100%", lg:"80%"}}
        margin="auto"
        mt="8"
        boxShadow='xl'
      >
        <GridItem>
          <Button width="100%" p='8' color={features ? "white" : "black"} fontSize='lg'  bg={features ? "rgb(16,163,16)" : "white"} onClick={()=> setFeatures(true)}>
            Connected Vehicle Solutions
          </Button>
        </GridItem>
        <GridItem>
          <Button width="100%" p='8' color={features ? "black" : "white"} fontSize='lg' bg={features ? "white" : "rgb(16,163,16)"} onClick={()=> setFeatures(false)}>
            Yeild Management Service
          </Button>
        </GridItem>
      </Grid>

      <Text width={{base:'90%', md:"70%", lg:"50"}} margin='auto'  mt='8' color ='gray' fontSize='lg'>
          {features ? "All-in-one solution to reduce operating costs over 30% via advanced vehicle monitoring and management systems" : "  Suite of connected technologies offering fleet agnostic solutions aimed at driving higher revenue through better yield management and dual fleet utilisation to expand customer base  "} 
      </Text>

      <Box width='70%' margin='auto' mt='8' >
          {
              features ? <ImageSlider images={solutionImage} /> : <ImageSlider images={servicesImage}  />
          } 
      </Box>

      <Text textAlign='left' ml='8' mt='12' fontSize='2xl' fontWeight='500' color='gray'>FEATURES</Text>

<Grid templateColumns={{base:"repeat(1, 1fr)", md:"repeat(2, 1fr)", lg:"repeat(3, 1fr)"}} ml='8' gap='4' mt='4' >

   
        {features ? solutionData.map((elem)=> <FeaturesCard key={elem.id} item={elem} />)  : 
        
        servicesData.map((elem)=> <FeaturesCard key={elem.id} item={elem} />)
        }
   

</Grid>

    </Box>
  );
};

export default ProductOffering;
