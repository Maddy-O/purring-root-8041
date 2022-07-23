import { Box, Image, Text, Container } from "@chakra-ui/react";
import React from "react";
import FAQ from "../Components/FAQ";
import Growing from "../Components/Growing";
 import HostBanner from "../Components/HostBanner";
import NavbarHost from "../Components/NavbarHost";
import Review from "../Components/Review";
import Steps from "../Components/Steps";

import Video from "../Components/Video";

const Hosts = () => {
  return (
    <Box>


      <NavbarHost />

      <HostBanner/>

      <Video />
      <Box width="80%" margin="auto" mt="10">
        <Image src="https://www.zoomcar.com/zap/subscribe/build/2a59620f522135d45def6fbc74162966.webp"></Image>
      </Box>


      <Steps/>

      <Growing/>

      <Box
        width="80%"
        height="300px"
        margin="auto"
        mt="10"
        bg="rgb(245,244,246)"
        borderRadius="lg"
      >
        <Text
          p="6"
          fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
          fontWeight="600"
        >
          Users Love Zoomcar Host Program. Our App has 4.5+ rating on Play
          Store!
        </Text>

        <Box width="50%" margin="auto" mt="8">
          <video
            poster="https://www.zoomcar.com/zap/subscribe/build/634d050b0dbaf691c850eea5280f220b.jpg"
            autoplay="autoplay"
            disablepictureinpicture="true"
            playsinline="true"
            webkit-playsinline="true"
            preload="auto"
            loop="loop"
            class="amigo-home__video--rating amigo-home__video--desktop"
          >
            <source
              type="video/mp4"
              src="https://www.zoomcar.com/zap/subscribe/build/993b9e144e89da0b2a0df580e13a2cbe.mp4"
            />
          </video>
        </Box>
      </Box>
  
      <Review />

      <FAQ /> 

      <Container maxW="container.4xl" Content>
          <Image
            w="900px"
            h="300px"
            src="https://i.ibb.co/JR3QFhq/image-5-1.png"
            alt="Dan Abramov"
          />
        </Container>
    </Box>
  );
};

export default Hosts;
