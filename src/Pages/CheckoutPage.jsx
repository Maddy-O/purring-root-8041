import React from 'react'
import { Box } from '@chakra-ui/react' 
import { useSelector } from 'react-redux'

export const CheckoutPage = () => {
  const filterData=useSelector((state)=>state.AppReducer.filterData)
  console.log(filterData)

  return (
    <Box width={"100%"} height={"500px"} border={"1px solid black"}>
      {/* first box */}
      <Box width={"100%"} height={"50px"} bg={"#f5f5f5"}></Box>
      {/* second box */}
      <Box width={"100%"} marginTop={"0%"} height={"110px"} display={"flex"} border={"1px solid green"}>
        <Box width={"25%"} height={"100%"} border={"1px solid pink"}>

        </Box>
        <Box width={"50%"} height={"100%"} border={"1px solid grey"}></Box>
        <Box width={"20%"} height={"100%"} border={"1px solid yellow"} marginLeft={"1%"}></Box>
          
      </Box>
    </Box>
  )
}
