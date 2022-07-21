import React from 'react'
import { Box,Text,Image } from '@chakra-ui/react' 
import { useSelector } from 'react-redux'

export const CheckoutPage = () => {
  const filterData=useSelector((state)=>state.AppReducer.filterData)
  console.log(filterData)
  // /CarType: "SUV"
  // Damage_Protection_Package: 1500
  // DeliveryType: "Home Delivery"
  // Distance_Traveled: "unlimiited kms without fuel"
  // Driven: "36,613 kms driven"
  // Name: "Figo Aspire MT Petrol"
  // Price: 1696
  // Seat: 5
  // Star: "4"
  // Transmision: "Manual"
  // Type: "Petrol"
  // id: 1
  // image: "https://zoomcar-assets.zoomcar.com/photographs/original/dfcced83a3fca58d27ffea0b465b25831edf894e.JPG?1636629514"
  // [[Prototype]]: Object
  //  '/ 

  return (
    <Box width={"100%"} height={"500px"} border={"1px solid black"}>
      {/* first box */}
      <Box width={"100%"} height={"50px"} bg={"#f5f5f5"}></Box>
      {/* second box */}
      <Box width={"100%"} marginTop={"0%"} height={"90px"} display={"flex"} border={"1px solid transparent"} marginTop={"-1"}>
        <Box width={"25%"} height={"100%"} >
    
        </Box>
        <Box padding={"2%"} textAlign={"left"}bg={"#f5f5f5"} width={"40%"} height={"100%"} border={"none"} marginTop={"0%"}>
          <Text fontSize={"18px"} fontWeight={"600"} >{filterData.Name}</Text>
          <Text fontSize={"10px"}>{filterData.Transmision} .  {filterData.Type}</Text>
        </Box>
        <Box width={"20%"} height={"95%"} border={"1px solid transparent"} marginLeft={"0.8%"} marginTop={"0.5%"}>
          <Image src={filterData.image} width={"100%"} height={"100%"}></Image>
           
        </Box>
          
      </Box>
    </Box>
  )
}
