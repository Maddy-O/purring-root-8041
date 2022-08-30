import React, { useState } from "react";
import {
  Image,
  Container,
  Heading,
  InputGroup,
  Input,
  InputLeftAddon,
  InputRightElement,
  Button,
  Alert,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../Redux/AuthReducer/action";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [show, setShow] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const handleClick = () => setShow(!show);
  const dispatch = useDispatch();
  const isError = useSelector((state) => state.AuthReducer);
  const errorMessgae = useSelector((state) => state.AuthReducer.message);

  const handlesubmit = () => {
    const loginobj = { email, password };
    dispatch(loginUser(loginobj));
    navigate("/", { replace: true });
  };

  return (
    <Container maxW="550px" color="white" h="100vh">
      {isError ? <Alert>Use Correct Credentials{errorMessgae}</Alert> : null}
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
        w="100%"
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
        onClick={() => navigate("/register")}
        cursor="pointer"
      >
        Sign Up
      </Heading>
    </Container>
  );
};

export default Login;
