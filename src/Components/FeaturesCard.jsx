import React from 'react'
import { Flex, Text } from '@chakra-ui/react'

const FeaturesCard = ({item}) => {
    const{title, data} = item
  return (
    <Flex direction='column' height='150px'>
      
        <Text textAlign='left' fontWeight='bold'>{title}</Text>
        <Text textAlign='left' mt='4'>{data}</Text>
      
    </Flex>
  )
}

export default FeaturesCard
