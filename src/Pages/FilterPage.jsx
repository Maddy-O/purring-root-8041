import React, { useEffect } from 'react'
import { getCar,getFivue } from '../Redux/action'
import { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux/es/exports'
import { CardCar } from '../Components/CarList'
import {Box,Text,Heading,Button} from "@chakra-ui/react"
import { PhoneIcon, AddIcon, WarningIcon,StarIcon } from '@chakra-ui/icons'

export const FilterPage = () => {
  const data=useSelector((state)=>state.AppReducer.car);
  const [metaa,setMet]=useState([])
 
  const dispatch=useDispatch();
  
  

  
  useEffect(()=>{
      
    
      dispatch(getCar())
      setMet(data)
      
  },[])

  const handleFilter = (e) => {
  
    const datatoset = data.filter((ele) => ele.Seat === e.target.value);
     console.log(datatoset);
     setMet(datatoset);
   
  };

    return (
      <Box width={"100"} height={"400px"} border={"1px solid transparent"} display={"flex"}>
       <Box width={"27%"} height={"100%"} border={"1px solid green"} marginRight={"2%"}>
         filter div
          <Button value={5} onClick={(e)=>handleFilter(e)}>5</Button>
         <Button value={6} onClick={(e)=>handleFilter(e)}>6</Button>
         <Button value={7} onClick={(e)=>handleFilter(e)}>7</Button> 
       </Box>

     
       {/* MAIN DIV */}
       <Box width={"68%"} height={"100%"} border={"1px solid transparent"}>
      {metaa.map((item)=>{
        return <Box width={"100%"} height={"120px"}  display={"flex"} padding={"0%"} textAlign={"left"}lineHeight={"12px"} 
        boxShadow={" rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;"}
        marginBottom={"2%"}>
          {/* imagediv */}
           <Box width={"33%"} height={"120px"} border={"1px solid transparent"} marginRight={"0.5%"}padding={"1%"} >
             <img src={item.image} alt="nsbns" width={"90%"} height={"90%"} />
           </Box>
           {/* centernamediv */}
           <Box width={"33%"} height={"120px"} border={"1px solid transparent"}  marginRight={"1.4%"}>
            <Text>{item.Name}</Text> 
            <Text fontSize={"12px"}>{item.Transmision} . {item.Type} . {item.Seat}seat</Text> 
            <Text fontSize={"10px"}><StarIcon w={15} h={15} color={"#FFD700"}></StarIcon>  {item.Star} . {item.Driven}</Text>

           

           </Box>
           {/* rightdiv */}
           <Box width={"33%"} height={"120px"} border={"1px solid transparent"} textAlign={"center"} marginRight={"1.4%"} >
            <Heading>₹{item.Price}</Heading>
            <Button height={"50%"} width={"50%"} borderRadius={"20px"} fontSize={"12px"} border={"1px solid green"} background={"transparent"} marginTop={"1%"}>Book Now</Button>
           </Box>

        </Box>
      })}
       </Box>

       
      </Box>
  );
};


 