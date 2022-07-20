import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { addUserLocation, getLocation } from "../Redux/LocationReducer/action";

const Location = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const [country, setCountry] = useState("");
  const [countryIndex, setCountryIndex] = useState(Number);
  const [city, setCity] = useState("");
  const location = useSelector((state) => state.LocationReducer.location);

  const cities = useSelector((state) => state.LocationReducer.location.city);

  const addloc = () => {
    dispatch(addUserLocation({ country, city }));
  };

  useEffect(() => {
    dispatch(getLocation());
  }, [dispatch, setCountry]);

  //   console.log(country);
  return (
    <>
      <Modal isOpen={onOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select your pickup country/city</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <Stack spacing={3}>
                <Select
                  placeholder={country}
                  size="lg"
                  onChange={(e) => {
                    setCountryIndex(e.target.num);
                    console.log(e.target.num);
                    console.log(e.target);
                    setCountry(e.target.value);
                    console.log(e.target.value);
                  }}
                >
                  {location.map((e, index) => (
                    <option
                      key={e.id}
                      color={"white"}
                      value={e.country}
                      num={index}
                      //   onClick={() => setCountryIndex(e.id)}
                    >
                      {e.country}
                    </option>
                  ))}
                </Select>
              </Stack>
            </FormControl>
            <FormControl mt={4}>
              <Input placeholder="Last name" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={addloc}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Location;
