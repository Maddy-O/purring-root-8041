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
import { addUserLocation, getLocation } from "../Redux/LocationReducer/action";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const Location = ({ setLocation }) => {
  const [searchParam, setSearchParam] = useSearchParams();
  const urlCountry = searchParam.getAll("country");
  const urlCity = searchParam.getAll("city");
  const [selectedCountry, setSelectedCountry] = useState(urlCountry || "");
  const [selectedCity, setSelectedCity] = useState(urlCity || "");
  const navigate = useNavigate();
  const { onOpen } = useDisclosure();
  const dispatch = useDispatch();
  const [country, setCountry] = useState("");
  const [countryIndex, setCountryIndex] = useState(0);
  const [currCityIndex, setCurrCityIndex] = useState(0);
  const location = useSelector((state) => state.LocationReducer.location);
  const cities = useSelector(
    (state) => state.LocationReducer.location[Number(countryIndex)]?.city
  );
  const currCity = useSelector(
    (state) =>
      state.LocationReducer.location[Number(countryIndex)]?.city[currCityIndex]
  );

  const addloc = () => {
    let cou = location[countryIndex].country;
    let cit = "";
    if (cities.length === 1) {
      cit = cities[0];
    } else {
      cit = currCity;
    }
    // console.log(cou, cit);
    setSelectedCountry(cou);
    setSelectedCity(cit);
    dispatch(addUserLocation({ country: cou, city: cit }));
    setLocation(cit);
    navigate("/");
  };

  const handleOnClickCounrtyIndex = (value) => {
    setCountryIndex(value);
  };

  const handleOnClickCityIndex = (value) => {
    setCurrCityIndex(value);
  };

  useEffect(() => {
    dispatch(getLocation());
    if (selectedCity || selectedCountry) {
      let params = {};
      params.country = selectedCountry;
      params.city = selectedCity;
      setSearchParam(params);
    }
  }, [
    location.length,
    dispatch,
    setCountry,
    setCountryIndex,
    selectedCity,
    selectedCountry,
    setSearchParam,
  ]);

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
                  {location.map((e, index) => (
                    <option key={e.id} color={"white"} value={index} num={e.id}>
                      {e.country}
                    </option>
                  ))}
                </Select>
              </Stack>
            </FormControl>
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
