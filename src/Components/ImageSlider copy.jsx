import { Swiper, SwiperSlide } from "swiper/react";
import {Box, Image} from "@chakra-ui/react"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "../../Style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Slider({images}) {
 
  return (
    <Box width='100%'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((elem)=> {
          return (
            <SwiperSlide><Image borderRadius='md'  objectFit='cover' src={elem.img} alt="" /></SwiperSlide>
          )
        })}
        
       
      </Swiper>
    </Box>
  );
}