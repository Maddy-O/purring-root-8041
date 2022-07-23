import { Flex, Box, Text } from '@chakra-ui/react'
import React from 'react'

const GrowingCard = ({item}) => {
    const {icon, count, task} = item;
  return (
    <Flex justifyContent='center' direction='column' >
        <Box display='flex' margin='auto' width="50%"  justifyContent='center'><img src={icon}  /></Box>
        
       
   <Box mt='20'>
       <Text fontSize='2xl' fontWeight='bold'>{count}</Text>
   </Box>

   <Box mt='12'>
       <Text fontSize='xl' color='gray' >{task}</Text>
   </Box>
    </Flex>
  )
}

export default GrowingCard
