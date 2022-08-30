import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import HeroBanner from "../Components/zmsCompo/HeroBanner";
import ProductOffering from "../Components/zmsCompo/ProductOffering";
import Partner from "../Components/zmsCompo/Partner";
import Image1 from "../Assets/ImgImg.png";
import Record from "../Components/zmsCompo/Record";
import ContactForm from "../Components/zmsCompo/ContactForm";
import ZmsFooter from "../Components/zmsCompo/ZmsFooter";

const Zms = () => {
  return (
    <>
      <HeroBanner />
      <ProductOffering />
      <Partner />
      <Flex
        width={{ base: "90%", lg: "80%" }}
        height="500px"
        margin="auto"
        marginTop="150px"
      >
        <Image width="100%" height="100%" src={Image1} alt="demo" />
      </Flex>
      <Record />
      <ContactForm />
      <ZmsFooter />
    </>
  );
};

export default Zms;
