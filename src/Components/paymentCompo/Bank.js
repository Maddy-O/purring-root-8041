import React from "react";
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
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import creditCardLo from "../../Assets/creditcard.png";

const Bank = () => {
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
      <Flex margin="10px" alignItems="center" gap="70px">
        <Box width="40%">
          <FaArrowLeft onClick={() => navigate("/payment")} />
        </Box>
        <Box width="60%" textAlign="left">
          <Text fontSize="16px" fontWeight="500">
            Select Bank
          </Text>
        </Box>
      </Flex>
      <Box width="300px" margin="auto" textAlign="left" height="100vh">
        <Flex
          gap="20px"
          alignItems="center"
          padding="10px"
          justifyContent="space-between"
        >
          <Box>
            <Text fontSize="16px" fontWeight="500">
              POPULAR BANKS
            </Text>
          </Box>
          <Image
            width="30px"
            src="https://www.zoomcar.com/build/760ee3019ff287f2caed7e40c92b1ca5.png"
          />
        </Flex>
        <hr color="gray"></hr>
        <Flex gap="20px" alignItems="center" padding="10px" onClick={onOpen}>
          <Image
            width="30px"
            src="https://zoomcar-assets.zoomcar.com/images/original/f380ffaa7f80bdc586f469a53a3caea8887d84a4.png?1584601955"
          />
          <Box cursor="pointer">
            <Text fontSize="16px" fontWeight="500">
              HDFC Bank
            </Text>
          </Box>
        </Flex>
        <hr color="gray"></hr>
        <Flex gap="20px" alignItems="center" padding="10px">
          <Image
            width="30px"
            src="https://zoomcar-assets.zoomcar.com/images/original/27eac78721d3d14bc9df34231bce661e1d510e8f.png?1584602001"
          />
          <Box onClick={onOpen} cursor="pointer">
            <Text fontSize="16px" fontWeight="500">
              SBI Bank
            </Text>
          </Box>
        </Flex>
        <hr color="gray"></hr>
        <Flex gap="20px" alignItems="center" padding="10px">
          <Image
            width="30px"
            src="https://zoomcar-assets.zoomcar.com/images/original/312f0e8f319287aa09b1e96b45a7d82cabf6184a.png?1584601979"
          />
          <Box onClick={onOpen} cursor="pointer">
            <Text fontSize="16px" fontWeight="500">
              ICICI Bank
            </Text>
          </Box>
        </Flex>
        <hr color="gray"></hr>
        <Flex gap="20px" alignItems="center" padding="10px">
          <Image
            width="30px"
            src="https://zoomcar-assets.zoomcar.com/images/original/d79d466d40fc7df794e2e1c907db212e52d4f47f.png?1584601931"
          />
          <Box onClick={onOpen} cursor="pointer">
            <Text fontSize="16px" fontWeight="500">
              AXIS Bank
            </Text>
          </Box>
        </Flex>
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
                <Text>Enter Bank Details</Text>
                <Image src={creditCardLo} width="25px" />
              </Flex>
            </ModalHeader>
            {/* <ModalCloseButton /> */}
            <ModalBody pb={6}>
              <FormControl>
                <Input ref={initialRef} placeholder="Name" />
              </FormControl>
              <FormControl mt={4}>
                <Input ref={initialRef} placeholder="Account Number" />
              </FormControl>
              <Flex>
                <FormControl mt={4}>
                  <Input placeholder="IFSC Code" />
                </FormControl>
                <FormControl mt={4}>
                  <Input placeholder="PIN" />
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

export default Bank;
