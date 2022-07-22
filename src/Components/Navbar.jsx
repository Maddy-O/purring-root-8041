import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Center,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Image,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import logoHomePage from "../Assets/logoHomePage.png";
import { FaUser, FaRegCopy, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getUserLocation } from "../Redux/LocationReducer/action";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const userCity = useSelector((state) => state.LocationReducer.currLocation);
  // get this using useSelector
  const [isAuth, setIsAuth] = useState(false);

  // console.log(userCity);

  useEffect(() => {
    dispatch(getUserLocation());
  }, [dispatch]);

  return (
    <>
      <Box bg={"black"} color={"white"} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Flex gap={"15px"} alignItems={"center"}>
            <Box>
              <HamburgerIcon w={6} h={5} color="white.500" onClick={onOpen}>
                Open
              </HamburgerIcon>
              <Drawer
                placement="left"
                onClose={onClose}
                isOpen={isOpen}
                size="sm"
              >
                <DrawerOverlay />
                <DrawerContent bg={"white"} color={"gray.700"}>
                  <DrawerHeader borderBottomWidth="1px" bg={"gray.300"}>
                    {isAuth ? (
                      <Flex alignItems={"center"} gap="10px">
                        <FaUser size={"18px"} />
                        <Text fontSize="16px">Login or Signup</Text>
                      </Flex>
                    ) : (
                      <Flex alignItems={"center"} gap="10px">
                        <FaUser size={"18px"} />
                        <Text fontSize="16px">Username</Text>
                      </Flex>
                    )}
                  </DrawerHeader>
                  <DrawerBody>
                    <Flex
                      alignItems={"center"}
                      height={"50px"}
                      justifyContent="space-between"
                    >
                      <Flex alignItems={"center"} gap="10px" height={"50px"}>
                        <FaMapMarkerAlt size={"22"} />
                        <Text fontSize="16px">
                          <Link
                            to={"/location"}
                            style={{
                              textDecoration: "none",
                              border: "none",
                              backgroundColor: "white",
                            }}
                          >
                            Change City
                          </Link>
                        </Text>
                      </Flex>
                      <Text
                        fontWeight={"600"}
                        fontSize="16px"
                        color={"green.500"}
                      >
                        {userCity[0]?.city}
                      </Text>
                    </Flex>
                    <Flex alignItems={"center"} gap="10px" height={"50px"}>
                      <FaRegCopy size={"22"} />
                      <Text fontSize="16px">
                        Zoomcar Fleet Vehicles Policies
                      </Text>
                    </Flex>
                    <Flex alignItems={"center"} gap="10px" height={"50px"}>
                      <FaRegCopy size={"22"} />
                      <Text fontSize="16px">
                        Zoomcar Host Vehicles Policies
                      </Text>
                    </Flex>
                    <Flex alignItems={"center"} gap="10px" height={"50px"}>
                      <FaPhone size={"22"} />
                      <Text fontSize="16px">Help & Support</Text>
                    </Flex>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </Box>
            <Image src={logoHomePage} />
          </Flex>

          <Flex
            minWidth={"350px"}
            alignItems={"center"}
            justifyContent={"space-between"}
            direction={"row"}
            className="navBarRightSide"
          >
            <Text fontWeight={"600"} fontSize="18px">
              Become a Host
            </Text>
            <Text fontWeight={"600"} fontSize="18px">
              <Link to="/zms">ZMS</Link>
            </Text>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                {isAuth ? (
                  <Text fontWeight={"700"} fontSize="20px">
                    ZMS
                  </Text>
                ) : (
                  <Text fontWeight={"700"} fontSize="20px">
                    Username
                  </Text>
                )}
              </MenuButton>
              <MenuList alignItems={"center"}>
                <br />
                <Center>
                  <Avatar
                    size={"2xl"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </Center>
                <br />
                <Center>
                  <p>Username</p>
                </Center>
                <br />
                <MenuDivider />
                <MenuItem>Your Servers</MenuItem>
                <MenuItem>Account Settings</MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
