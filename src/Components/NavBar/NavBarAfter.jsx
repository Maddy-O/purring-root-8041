import React from "react";
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
import { GiTwoCoins } from "react-icons/gi";
import { TbCoin } from "react-icons/tb";
import { MdOutlineAccountBalanceWallet, MdVerifiedUser } from "react-icons/md";
import { BiCar } from "react-icons/bi";
import { RiLogoutBoxRLine } from "react-icons/ri";
import logoHomePage from "../../Assets/logoHomePage.png";
import { FaUser, FaRegCopy, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export default function NavBarAfter({ userName, userCity, handleLogout }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  return (
    <Box bg={"black"} color={"white"} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Flex gap={"15px"} alignItems="center" direction="row">
          <Box>
            <HamburgerIcon
              w={6}
              h={5}
              color="white.500"
              onClick={onOpen}
              cursor="pointer"
            >
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
                <DrawerHeader borderBottomWidth="1px" bg="black" color="white">
                  <Flex alignItems={"center"} gap="20px">
                    <FaUser size={"25px"} />
                    <Box>
                      <Text fontSize="18px">{userName.name}</Text>
                      <Text fontSize="12px" color="gray.300">
                        {userName.email}
                      </Text>
                      <Text fontSize="12px" color="gray.300">
                        {userName.phone}
                      </Text>
                    </Box>
                  </Flex>
                </DrawerHeader>
                <DrawerBody>
                  <Flex
                    alignItems="center"
                    height="50px"
                    justifyContent="space-between"
                  >
                    <Flex alignItems={"center"} gap="10px" height={"50px"}>
                      <GiTwoCoins size={"22"} color="black" />
                      <Text fontSize="16px" cursor="pointer">
                        Credits
                      </Text>
                    </Flex>
                    <Text fontWeight="600" fontSize="16px" color="green.500">
                      {0}
                    </Text>
                  </Flex>
                  <Flex
                    alignItems="center"
                    height="50px"
                    justifyContent="space-between"
                  >
                    <Flex alignItems={"center"} gap="10px" height={"50px"}>
                      <TbCoin size={"22"} />
                      <Text fontSize="16px" cursor="pointer">
                        Z-POINTS
                      </Text>
                    </Flex>
                    <Text fontWeight="600" fontSize="16px" color="green.500">
                      {320}
                    </Text>
                  </Flex>
                  <Flex
                    alignItems="center"
                    height="50px"
                    justifyContent="space-between"
                  >
                    <Flex alignItems={"center"} gap="10px" height={"50px"}>
                      <MdOutlineAccountBalanceWallet size={"22"} />
                      <Text fontSize="16px" cursor="pointer">
                        Paytm wallet
                      </Text>
                    </Flex>
                    <Text fontWeight="600" fontSize="16px" color="green.500">
                      {"Link Wallet"}
                    </Text>
                  </Flex>
                  <hr color="gray"></hr>
                  <Flex alignItems={"center"} gap="10px" height={"50px"}>
                    <BiCar size={"22"} />
                    <Text fontSize="16px" cursor="pointer">
                      My Trips
                    </Text>
                  </Flex>
                  <Flex alignItems={"center"} gap="10px" height={"50px"}>
                    <MdVerifiedUser size={"22"} />
                    <Text fontSize="16px" cursor="pointer">
                      Profile Verification
                    </Text>
                  </Flex>
                  <Flex
                    alignItems="center"
                    height="50px"
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
                    <Text fontWeight="600" fontSize="16px" color="green.500">
                      {userCity[0]?.city}
                    </Text>
                  </Flex>
                  <hr color="gray"></hr>
                  <Flex alignItems={"center"} gap="10px" height={"50px"}>
                    <FaRegCopy size={"22"} />
                    <Text fontSize="16px" cursor="pointer">
                      Zoomcar Fleet Vehicles Policies
                    </Text>
                  </Flex>
                  <Flex alignItems={"center"} gap="10px" height={"50px"}>
                    <FaRegCopy size={"22"} />
                    <Text fontSize="16px" cursor="pointer">
                      Zoomcar Host Vehicles Policies
                    </Text>
                  </Flex>
                  <Flex alignItems={"center"} gap="10px" height={"50px"}>
                    <FaPhone size={"22"} />
                    <Text fontSize="16px" cursor="pointer">
                      Help & Support
                    </Text>
                  </Flex>
                  <hr color="gray"></hr>
                  <Flex alignItems={"center"} gap="10px" height={"50px"}>
                    <RiLogoutBoxRLine size={"22"} />
                    <Text
                      fontSize="16px"
                      onClick={handleLogout}
                      cursor="pointer"
                    >
                      Logout
                    </Text>
                  </Flex>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Box>
          <Image
            src={logoHomePage}
            cursor="pointer"
            onClick={() => navigate("/")}
          />
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
              <Text fontWeight={"600"} fontSize="20px">
                {userName.name}
              </Text>
            </MenuButton>
            <MenuList alignItems={"center"}>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
}
