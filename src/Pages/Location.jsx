import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Button,
  FormControl,
  Select,
  Stack,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getLocation } from "../Redux/LocationReducer/action";
import { useNavigate } from "react-router-dom";

const Location = () => {
  const { onOpen } = useDisclosure();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [country, setCountry] = useState("");
  const [cities, setCities] = useState([]);
  const [currCity, setCurrCity] = useState("");
  const [countryIndex, setCountryIndex] = useState(0);
  const location = useSelector((state) => state.LocationReducer.location);

  const addloc = () => {
    localStorage.setItem("userLocation", currCity);
    navigate("/");
  };

  const handleOnClickCounrtyIndex = (value) => {
    setCountryIndex(value);
    setCities(location[Number(value)]?.city);
  };

  const handleOnClickCityIndex = (value) => {
    setCurrCity(location[Number(countryIndex)]?.city[value]);
  };

  useEffect(() => {
    dispatch(getLocation());
  }, []);

  return (
    <>
      <Modal isOpen={onOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select your pickup country/city</ModalHeader>
          <ModalBody pb={6}>
            <FormControl>
              <Stack spacing={3}>
                <Select
                  placeholder={country}
                  size="lg"
                  onChange={(e) => {
                    handleOnClickCounrtyIndex(e.target.value);
                  }}
                >
                  <option>Select Your Country</option>
                  {location.map((e, index) => (
                    <option key={e.id} color={"white"} value={index} num={e.id}>
                      {e.country}
                    </option>
                  ))}
                </Select>
              </Stack>
            </FormControl>
            {/* {cities ? ( */}
            <FormControl mt={4}>
              <Stack spacing={3}>
                <Select
                  placeholder={country}
                  size="lg"
                  onChange={(e) => {
                    handleOnClickCityIndex(e.target.value);
                  }}
                >
                  {cities?.map((e, index) => (
                    <option key={index} value={index}>
                      {e}
                    </option>
                  ))}
                </Select>
              </Stack>
            </FormControl>
            {/* // ) : null} */}
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
