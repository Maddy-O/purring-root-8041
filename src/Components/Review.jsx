import { Box, SimpleGrid, GridItem , Text} from '@chakra-ui/react'
import React from 'react'
import ReviewCard from './ReviewCard'

const reviewData  = [
    {id:1, img:"https://www.zoomcar.com/zap/subscribe/build/3f72230754b1fb30e311c9f78848ee62.png", data:"I always dreamt of owning a car in which I can take my family for a drive, But, due to high           EMIs, I couldn't afford a car. With host program, I reduced my EMI by sharing the car on weekdays and           take my family out on weekends. I am happy that I could finally realise my dream, thanks to host.", name:" Gajendra Tomar", age:"38", org:" Govt School Teacher, Pune "},
    {id:2, img:"https://www.zoomcar.com/zap/subscribe/build/bd8cb705e0b100c897e16bbfff2a275f.png", data:"I am an environmentally conscious person. I saw a wonderful opportunity to do something for           congested roads and the environment with host program. Sharing my second car on host helps me to           reduce traffic and reduce my carbon footprint. And yes, additional earning through my second car is           cherry on the cake :)", name:" Srikanth Venkatesh", age:"43", org:"VP in an IT Company, Hyderabad"},
    {id:3, img:"https://www.zoomcar.com/zap/subscribe/build/5c4df7d7677b23ee3d6c5e32e964303e.png", data:"I bought a car recently. But, ended up using it only once or twice a week for errands and           grocery visits. I saw a great way to earn additional money through the host program while also having           the car to myself on weekends for my grocery visits. It is a win-win situation for me.", name:"Archana Sundaram", age:"55",  org:" Housewife, Hyderabad"},
    {id:4, img:"https://www.zoomcar.com/zap/subscribe/build/9f1be46d5b847adf8089338ebb6d89d8.png", data:"I am a travel enthusiast and use my car to explore new places. I prefer taking public transport           to office, because of which my car stays idle during the weekdays. So, I decided to share my car on host.           Now, I earn extra bucks for my travel expenses :)", name:"Shishir Gupta", age:"28",  org:" Young urban professional, Pune"},
    {id:5, img:"https://www.zoomcar.com/zap/subscribe/build/66c77e4621ef9ac32bdd9b5441ba7e71.png", data:"My parents gave me a car so that I can commute safely to college. Since I've been having online           classes now, my car wasn't being used much. I shared my car on host so that I could earn some extra pocket           money from it. It easy to share the car on host and earn pocket money.", name:"Prateek Singh", age:"22", org:"College Student, Hyderabad"},

]

const Review = () => {
  return (
    <Box width='80%'  bg='rgb(245,244,246)' margin='auto' mt='10' borderRadius='lg' overflowX='scroll'>
        <SimpleGrid templateColumns='repeat(6, 270px)' gap='4'>
            <GridItem p='4' >
                <Text fontSize='2xl' fontWeight='bold' textAlign='left'>
                  What are the Host user Saying?
                </Text>
                <Text fontSize='lg' fontWeight='400' textAlign='left' mt='4'>
                10,000+ hosts are earning average of ₹50,000 per month
                </Text>
            </GridItem>
                {reviewData.map((elem)=> <ReviewCard  key={elem.id} item={elem} /> )}
     
        </SimpleGrid>
      
    </Box>
  )
}

export default Review
