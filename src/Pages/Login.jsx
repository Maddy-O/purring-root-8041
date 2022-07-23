import React from "react";
import { useState } from "react";
import {
  Image,
  Container,
  Heading,
  InputGroup,
  Input,
  InputLeftAddon,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [show, setShow] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const handleClick = () => setShow(!show);

  var LogArr = JSON.parse(localStorage.getItem("Logininfo"));

  const handlesubmit = () => {
    if (LogArr.email === email && password === LogArr.password) {
      setIsAuth(true);
      navigate("/", { replace: true });
    } else {
      alert("No Credentials");
    }
  };

  return (
    <div>
      <Container maxW="550px" color="white" h="100vh">
        <Image
          boxSize="sm"
          m="auto"
          src="https://www.zoomcar.com/build/fb65fcc43b8bededb813e093ea2d47d3.svg"
          alt="Dan Abramov"
        />
        <Heading as="h3" size="md" color="black">
          Enter details to Log-in
        </Heading>
        <InputGroup m="20px auto">
          <InputLeftAddon
            children="Email"
            bg="black"
            boxShadow="0px 0px 0px 1px black"
          />
          <Input
            boxShadow="0px 0px 0px 1px black"
            type="email"
            color={"black"}
            placeholder="@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputGroup>
        <InputGroup
          size="md"
          m="20px auto"
          boxShadow="0px 0px 0px 1px black"
          borderRadius="5px"
        >
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
            color={"black"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick} bg="black">
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Button
          w="lg"
          bg="rgb(16,163,16)"
          m="5px auto 20px 0px"
          onClick={handlesubmit}
        >
          Continue
        </Button>
        <Heading
          as="h5"
          size="sm"
          color="rgb(16,163,16)"
          onClick={() => navigate("/signup")}
          cursor="pointer"
        >
          Sign Up
        </Heading>
      </Container>
    </div>
  );
};

export default Login;
