import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Box, Image } from "@chakra-ui/react";

export default function Slider({ images }) {
  return (
    <Box width="100%">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoPlay={{
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
        {images.map((elem, index) => {
          return (
            <SwiperSlide key={index}>
              <Image
                borderRadius="md"
                objectFit="cover"
                src={elem.img}
                alt=""
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
}
