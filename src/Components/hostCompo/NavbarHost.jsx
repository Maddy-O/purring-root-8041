import {
  Box,
  Flex,
  HStack,
  Link,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Links = ["Contact Us", "FAQ's", "Refer & Earn", "Logout"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function NavbarHost() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/zms");
  };

  return (
    <Box bg="black" position="static" zIndex="1">
      <Box px={4} width="80%" margin="auto">
        <Flex
          alignItems="center"
          h={10}
          justifyContent="space-between"
          paddingBottom="15px"
          marginBottom={"10px"}
        >
          <HStack
            as={"nav"}
            spacing={4}
            color="white"
            display={{ base: "none", md: "flex" }}
          >
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
          <Button
            variant={"solid"}
            bg="rgb(16,163,16)"
            color="white"
            size={"sm"}
            mr={4}
            onClick={handleClick}
          >
            Start Earning
          </Button>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
}
