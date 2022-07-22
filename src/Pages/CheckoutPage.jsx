import React from 'react'
import { Box,Text,Image, List, Button, filter } from '@chakra-ui/react' 
import { useSelector } from 'react-redux'
import {ArrowBackIcon, StarIcon} from "@chakra-ui/icons"
import {Link as RouterLink} from "react-router-dom"
import {FcEmptyBattery} from "react-icons/fa"
import { FaRegBuilding } from "react-icons/fa"

export const CheckoutPage = () => {
  const filterData = useSelector((state) => state.AppReducer.filterData);

  return (
    <Box width={"100%"} height={"550px"} border={"1px solid none"}>
     
      {/* first box */}
      <Box width={"100%"} height={"50px"} bg={"#f5f5f5"} textAlign={"left"}>
        <RouterLink to="/filterpage" >
        <ArrowBackIcon w={30} h={45}></ArrowBackIcon>
        </RouterLink>
      
      </Box>
      {/* second box */}
      <Box
        width={"100%"}
        marginTop={"0%"}
        height={"90px"}
        display={"flex"}
        border={"1px solid transparent"}
      >
        <Box width={"25%"} height={"100%"}></Box>
        <Box
          padding={"2%"}
          textAlign={"left"}
          bg={"#f5f5f5"}
          width={"40%"}
          height={"100%"}
          border={"none"}
          marginTop={"0%"}
        >
          <Text fontSize={"18px"} fontWeight={"600"}>
            {filterData.Name}
          </Text>
          <Text fontSize={"10px"}>
            {filterData.Transmision} . {filterData.Type}
          </Text>
        </Box>
        <Box
          width={"20%"}
          height={"95%"}
          border={"1px solid transparent"}
          marginLeft={"0.8%"}
          marginTop={"0.5%"}
        >
          <Image src={filterData.image} width={"100%"} height={"100%"}></Image>
        </Box>
          {/* total div */}
          </Box>
          <Box textAlign={"left"} padding={"1%"} marginLeft={"25%"} width={"50%"} height={"300px"} border={"1px solid none"}
          
           >
          
            <Box width={"100%"} marginBottom={"3%"}>
              <Text fontSize={"18px"}>Fri,22 Jul,12:00 PM</Text>
            <Text fontSize={"12px"}>New Delhi Railway Station</Text>
            </Box>
            
          
            <Text fontSize={"18px"}>Fri,22 Jul,8:00  PM</Text>
            <Text fontSize={"12px"}>New Delhi Railway Station</Text>
            <Box display={"flex"}>
            <Image src={"https://zoomcar-assets.zoomcar.com/images/original/ccedfb3dddda918d76ad27240ffa582f4a59a157.png?1584454852"} 
            alt="sf" width={"5%"} height={"20px"} marginTop={"5%"}/>
         <Text fontSize={"16px"} marginLeft={"2%"} marginTop={"4.5%"}>Unlimited Kms without Fuel</Text> 
            </Box>
            <Box display={"flex"} width={"100%"} marginTop={"1%"}>
             <StarIcon w={"6"} h={"8"} color={"gold"}></StarIcon>
              <Text fontSize={"14px"} marginLeft={"2%"} marginTop={"2%"}>3.7 (6) . {filterData.Driven}</Text>
            </Box>
            <Box  
            fontSize={["10px","12px"]} padding={"12px 40px 12px 16px"} marginTop={"16px"} color={"#5160C2"} bg={"#f0f4ff"}
             borderRadius={"4px"} marginTop={"4%"} width={"100%"}
              height={[20,50,50]} border={"none"}>
              you will get a clean and sanitized car.Exact car location will be shared post-booking
            </Box>
            <Box marginTop={"1%"} width={"100%"} fontSize={"19px"}
             border={"1px solid none"} >
              <Text fontWeight={"600"}>Damage Protection Package</Text>
               <Text fontSize={"14px"} marginBottom={"0.3%"}>Standard (₹509)</Text>
               <Text fontSize={"10px"}>You pay up to INR 3499 in case of any damage</Text>
            </Box>
            <Box marginTop={"2%"} 
             width={"100%"} height={"70px"}>
              <Box display={"flex"}>
              <Text fontWeight={"600"} fontSize={"18px"}>₹{filterData.Price+509}</Text> 
              

             
              </Box>
             

              <Button fontSize={"20px"}
               width={"100%"} height={"60px"} bg={"green"} color={"white"}>
                Checkout Summary
              </Button>
             </Box>
      </Box>
    </Box>
  );
};
