import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';
import Logo from "../Assets/Zmslogowhite.png";

const Links = ['Contact Us', "FAQ's", 'Refer & Earn', "Logout"];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function NavbarHost() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg='black' position='fixed' zIndex='1'>
      <Box  px={4} width='80%' margin='auto'>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} >
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'} color='white' width={{base:'25%', md:'15%', lg:'12%'}}>
            <Box ><Image  src={Logo} /></Box>
           
          </HStack>
          <Flex alignItems={'center' }  >

          <HStack
              as={'nav'}
              spacing={4}
              color='white'
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
            <Button
              variant={'solid'}
             bg='rgb(16,163,16)'
             color='white'
              size={'sm'}
              mr={4}
              >
              Start Earning
            </Button>
          
          </Flex>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
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