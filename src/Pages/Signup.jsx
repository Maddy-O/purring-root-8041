import React from 'react'
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script"
import { useEffect ,useState} from "react";
import { HStack, Box, Image, Container, Heading, Stack, InputGroup, Input, InputLeftAddon,InputRightElement, Button, Flex } from '@chakra-ui/react';
import {useNavigate} from "react-router-dom"

const clientId = "179149206343-n07ms4tjd5pgo0d64v9f8e89u6avnckr.apps.googleusercontent.com"


const Signup = () => {
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')
    const [show, setShow] = React.useState(false)
    const [password, setPassword] = React.useState('')
    const handleClick = () => setShow(!show)   

    const navigate = useNavigate()

    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: clientId,
                scope: ""
            })
        };
        gapi.load("client:auth2", start)
    });

    const onFailure = (res) => {
        console.log("Login success! Current User", res.profileObj)
    }
    const onSuccess = (res) => {
        console.log("Login Failed", res)
    }
    const onSuccesslogout = () => {
        console.log("logout succesful");
    }

    const handlesubmit = ()=>{
        const loginobj= {email,phone,password}
        localStorage.setItem("Logininfo",JSON.stringify(loginobj));
        navigate("/Login",{replace: true})
    }


    return (
        <div>
            <Container maxW='550px' color='white' h="auto">
                <Image boxSize='sm' m="auto" src='https://www.zoomcar.com/build/fb65fcc43b8bededb813e093ea2d47d3.svg' alt='Dan Abramov' />
                <Heading as='h3' size='md' color="black">
                    Enter details to Sign-up
                </Heading>
                <InputGroup m="20px auto">
                    <InputLeftAddon children='+91' bg="black" />
                    <Input type='tel' placeholder='phone number' color={"black"}  value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                </InputGroup>
                <InputGroup m="20px auto" >
    <InputLeftAddon children='Email'  bg="black"/>
    <Input type='email' color={"black"} placeholder='@gmail.com'  value={email} onChange={(e)=>setEmail(e.target.value)}/>
  </InputGroup>
  <InputGroup size='md' m="20px auto">
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password' color={"black"} value={password} onChange={(e)=>setPassword(e.target.value)}
      />
      <InputRightElement width='4.5rem' >
        <Button h='1.75rem' size='sm' onClick={handleClick} bg="black">
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
                <Button w="lg" bg='rgb(16,163,16)' m="5px auto 20px 0px" onClick={handlesubmit} >Continue</Button>
                <Heading as='h5' size='sm' color="rgb(16,163,16)">
                    Continue with
                </Heading>
                <Flex justifyContent={"center"} gap="20px" m="20px auto" >
                    <GoogleLogin clientId={clientId} buttonText="Login" onSuccess={onSuccess} onFailure={onFailure} cookiePolicy={'single_host_origin'} isSignedIn={true} />
                    <GoogleLogout clientId={clientId} buttonText={"Logout"} onLogoutSuccess={onSuccesslogout} />
                </Flex>
            </Container>
        </div>
    )
}

export default Signup