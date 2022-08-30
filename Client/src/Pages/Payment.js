import {
  Box,
  Container,
  Flex,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Image,
  Input,
  Button,
  useDisclosure,
  FormControl,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { BsCreditCard, BsBank } from "react-icons/bs";
import { IoWalletOutline } from "react-icons/io5";
import { MdOutlineMobileFriendly } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";
import creditCardLo from "../Assets/creditcard.png";

const Payment = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const handleSubmit = () => {
    alert("payment successful");
    navigate("/");
  };

  return (
    <Container>
      <Box margin="10px">
        <FaArrowLeft
          cursor="pointer"
          onClick={() => navigate("/cars/checkout")}
        />
      </Box>
      <Box width="300px" margin="auto" textAlign="left" height="100vh">
        <Flex
          gap="20px"
          alignItems="center"
          padding="10px"
          onClick={onOpen}
          cursor="pointer"
        >
          <BsCreditCard size="30px" />
          <Box>
            <Text fontSize="16px" fontWeight="500">
              Credit / Debit / ATM Card
            </Text>
            <Text fontSize="12px" color="gray">
              All major card provider are supported
            </Text>
          </Box>
        </Flex>
        <hr color="gray"></hr>
        <Flex gap="20px" alignItems="center" padding="10px" cursor="pointer">
          <BsBank size="30px" />
          <Box onClick={() => navigate("bank")}>
            <Text fontSize="16px" fontWeight="500">
              Net Banking
            </Text>
            <Text fontSize="12px" color="gray">
              All major banks are supported
            </Text>
          </Box>
        </Flex>
        <hr color="gray"></hr>
        <Flex gap="20px" alignItems="center" padding="10px" cursor="pointer">
          <IoWalletOutline size="30px" />
          <Box>
            <Text fontSize="16px" fontWeight="500">
              Mobile Wallet
            </Text>
            <Text fontSize="12px" color="gray">
              Paytm Wallet + Postpaid
            </Text>
          </Box>
        </Flex>
        <hr color="gray"></hr>
        <Flex gap="20px" alignItems="center" padding="10px" cursor="pointer">
          <MdOutlineMobileFriendly size="30px" />
          <Box>
            <Text fontSize="16px" fontWeight="500">
              UPI
            </Text>
            <Text fontSize="12px" color="gray">
              Get ₹28 Instant Cashback on using any UPI payment
            </Text>
          </Box>
        </Flex>
        <hr color="gray"></hr>
      </Box>
      <>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <Flex justifyContent="space-between">
                <Text>Enter Card Details</Text>
                <Image src={creditCardLo} width="25px" />
              </Flex>
            </ModalHeader>
            <ModalBody pb={6}>
              <FormControl>
                <Input ref={initialRef} placeholder="Card Number" />
              </FormControl>
              <Flex>
                <FormControl mt={4}>
                  <Input placeholder="Expiry (MM/YY)" />
                </FormControl>
                <FormControl mt={4}>
                  <Input placeholder="CVV" />
                </FormControl>
              </Flex>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </Container>
  );
};

export default Payment;
