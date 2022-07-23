import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
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
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const userCity = useSelector((state) => state.LocationReducer.currLocation);
  const [isAuth, setIsAuth] = useState(false);
  const [userName, setUserName] = useState("");

  console.log(userName);

  const handleLogout = () => {
    const loginobj = { name: "", email: "", phone: "", password: "" };
    localStorage.setItem("Logininfo", JSON.stringify(loginobj));
    navigate("/Login", { replace: true });
  };

  const handleLogin = () => {
    navigate("/Login", { replace: true });
  };

  useEffect(() => {
    dispatch(getUserLocation());
    const items = JSON.parse(localStorage.getItem("Logininfo"));
    if (items) {
      setUserName(items);
    }
  }, [dispatch]);

  return (
    <>
      <Box bg={"black"} color={"white"} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Flex gap={"15px"} alignItems="center" direction="row">
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
                    {userName.name ? (
                      <Flex alignItems={"center"} gap="10px">
                        <FaUser size={"18px"} />
                        <Text fontSize="16px">{userName.name}</Text>
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
              <Link to="/hosts">Become a Host</Link>
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
                {userName.name ? (
                  <Text fontWeight={"600"} fontSize="20px">
                    {userName.name}
                  </Text>
                ) : (
                  <Text fontWeight={"600"} fontSize="20px" color="white">
                    Login/SignUp
                  </Text>
                )}
              </MenuButton>
              <MenuList alignItems={"center"}>
                {userName.name ? (
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                ) : (
                  <MenuItem onClick={handleLogin}>Login</MenuItem>
                )}
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
