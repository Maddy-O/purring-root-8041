import React, { useEffect } from "react";
import { getCar,getCarId} from "../Redux/AppReducer/action";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Text, Heading, Button, Flex } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Navigate, useNavigate } from "react-router-dom";

export const FilterPage = () => {
  const data = useSelector((state) => state.AppReducer.car);
  //  const filterdataa=useSelector((state)=>state.AppReducer.filterData)
  //  console.log(filterdataa,"jjj")

  const [metaa, setMet] = useState([]);
  const[idd,setIdd]=useState(0);
  const dispatch = useDispatch();
  // console.log(idd,"iddd");
  const navigate=useNavigate();
  

  const handleFilter = (e) => {
  
    const datatoset = data.filter((ele) => ele.Seat == e.target.value);
  
    setMet(datatoset);
  };

 const handleCarTypes=(e)=>{
  const datatoset=data.filter((ele)=>ele.CarType == e.target.value)
  // console.log(datatoset)
  setMet(datatoset)
 };

 const handleTransmission=(e)=>{
  const datatoset=data.filter((ele)=>ele.Transmision == e.target.value)
  // console.log(datatoset)
  setMet(datatoset)
 }
 const handleDelivery=(e)=>{
  const datatoset=data.filter((ele)=>ele.DeliveryType == e.target.value)
  // console.log(datatoset)
  setMet(datatoset)
 }

 const handelId=(e)=>{
   setIdd(e.target.value);

 
  }
    



 

  useEffect(()=>{
      setMet(data)
  },[setMet,data.length])

  useEffect(() => {
    dispatch(getCar());
  }, [data.length,dispatch,metaa]);

 useEffect(()=>{
  if(idd!==0)
  {
  const payload={
    idd:idd
  }
    dispatch(getCarId(payload));
    navigate("checkoutpage")
    // <Navigate to="/checkoutpage" replace={true}/>
}
 },[dispatch,idd])

  return (
    <Box
      width={"100"}
      height={"400px"}
      border={"1px solid transparent"}
      display={"flex"}
    >
      <Box
  
        width={"27%"}
        height={"100%"}
        border={"1px solid none"}
        marginRight={"2%"}
        boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
      >
        <Box width={"100%"} height={"100px"} border={"1px solid none"}>
          <Text fontSize={"20px"}>SEATS</Text>
              <Button
                value={5}
                bg={"light-grey"} border={"1px solid grey"}
                 width={"30%"}
                onClick={(e) => handleFilter(e)}
                cursor="pointer" 
              >
                5
              </Button>
              <Button value={6} 
                bg={"light-grey"} border={"1px solid grey"}
               width={"30%"}
              onClick={(e) => handleFilter(e)}>
                6
              </Button>
              <Button value={7} 
                bg={"light-grey"} border={"1px solid grey"}
                width={"33%"}
              onClick={(e) => handleFilter(e)}>
                7
              </Button>
        </Box>

        {/* car Types */}
        <Box width={"100%"} height={"100px"} border={"1px solid none"}>
          <Text fontSize={"20px"}>CAR TYPES</Text>
              <Button
                value={"SUV"}
                bg={"light-grey"} border={"1px solid grey"}
                 width={"30%"}
                onClick={(e) => handleCarTypes(e)}
                cursor="pointer" 
              >
                SUV
              </Button>
              <Button value={"sedan"} 
                bg={"light-grey"} border={"1px solid grey"}
               width={"30%"}
              onClick={(e) => handleCarTypes(e)}>
                Sedan
              </Button>
              <Button value={"hatchback"} 
                bg={"light-grey"} border={"1px solid grey"}
                width={"33%"}
              onClick={(e) => handleCarTypes(e)}>
                hatchback
              </Button>
        </Box>
        {/* Transmission */}
                
        <Box width={"100%"} height={"100px"} border={"1px solid none"} >
          <Text fontSize={"20px"}>TRANSMISSION</Text>
              <Button
                value={"Manual"}
                bg={"light-grey"} border={"1px solid grey"}
                 width={"30%"}
                onClick={(e) => handleTransmission(e)}
                cursor="pointer" 
              >
                Manual
              </Button>
              <Button value={"Automatic"} 
                bg={"light-grey"} border={"1px solid grey"}
               width={"30%"}
              onClick={(e) => handleTransmission(e)}>
                Automatic
              </Button>
              
        </Box>
        {/* Delivery div */}
        <Box width={"100%"} height={"100px"} border={"1px solid none"}>
          <Text fontSize={"20px"}>DELIVERY TYPE</Text>
              <Button
                value={"Home Delivery"}
                bg={"light-grey"} border={"1px solid grey"}
                 width={"30%"}
                onClick={(e) => handleDelivery(e)}
                cursor="pointer" 
              >
               Home
              </Button>
              <Button value={"Airport Delivery"} 
                bg={"light-grey"} border={"1px solid grey"}
               width={"30%"}
              onClick={(e) => handleDelivery(e)}>
                Airport 
              </Button>
              
        </Box>
       
        
      </Box>

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
                  width={"70%"}
                  height={"30%"}
                />
              </Box>
              {/* centernamediv */}
              <Box
                width={"33%"}
                height={"120px"}
                border={"1px solid transparent"}
                marginRight={"1.4%"}
              >
                <Text marginTop={"3%"}>{item.Name}</Text>
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
                <Heading>₹{item.Price}</Heading>
                <Button
                  value={`${item._id}`}
                  height={"50%"}
                  width={"50%"}
                  borderRadius={"20px"}
                  fontSize={"12px"}
                  border={"1px solid green"}
                  background={"transparent"}
                  marginTop={"1%"}
                  onClick={(e)=>handelId(e)}
                  
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
