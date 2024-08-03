import { useState } from "react";
import { Link } from '@chakra-ui/react'
//import { ExternalLinkIcon } from '@chakra-ui/icons'
import {
  Image,
  Box,
  Text,
  Spacer,
  Flex,
  Button,
  Center,
  Heading,
  Avatar,
  AvatarGroup,
  AvatarBadge,
  Container,
} from "@chakra-ui/react";

function App() {

  return (
    <>
      <Flex color='green'>
        <Box />
        <Box p="6">

          <Spacer />
          <Heading>
              <Avatar size='xs' name='Camera Recycle' src='cameraRecycle.jpg' />
              SnapWaste
            </Heading>
        </Box>

        <Spacer />
        <Box p="10">

          <a href="">
            <Link marginLeft={4} marginRight={4}>
                Home
              </Link>
          </a>

          <a href="locate">
            <Link marginLeft={4} marginRight={4}> 
              Locate
            </Link>
          </a>

          <a href="faq">
            <Link marginLeft={4} marginRight={4}>
              FAQ
            </Link>
            </a>

          <a href="about">
            <Link marginLeft={4} marginRight={4}>
              About Us
            </Link>
          </a>

          <a href="signin">
            <Button colorScheme='green' marginTop={"-5px"} marginLeft={4}>
                Sign In
              </Button>
          </a>

          <a href="signup">
            <Button colorScheme='green' marginTop={"-5px"} variant= 'outline' marginLeft={4}>
              Register
            </Button>
          </a>

        </Box>
      </Flex>

      <Flex>
        <Box />
        <Spacer />
        <Box p="2" marginTop={100}>

        </Box>

        <Spacer />
      </Flex>

      <Flex>
        <Box bg='green.400' w='100%' p={4} color='white' borderRadius={25}>
        <Container maxW='2xl' bg='blue.600' centerContent>
          <Box padding='4' bg='blue.400' color='black' maxW='md'>
            <Heading marginTop={20} marginLeft={100}>
                SnapWaste
              </Heading>
            
            <Text>
              Welcome to SnapWaste, your go-to platform for waste identification and disposal guidance. We help you make environmentally conscious decisions by simplify uploading an image of your waste. Using advanced image recognition software, we help you determine whether the item is recyclable, garbage, or compost. 
            </Text>
          </Box>
        </Container>
          
          <Heading marginTop={20} marginLeft={100}>
              SnapWaste
            </Heading>
          
          <Text>
            Welcome to SnapWaste, your go-to platform for waste identification and disposal guidance. We help you make environmentally conscious decisions by simplify uploading an image of your waste. Using advanced image recognition software, we help you determine whether the item is recyclable, garbage, or compost. 
          </Text>

          <Center>
            <Box boxSize={"lg"} >
              <Image marginLeft={40} marginTop={9} borderRadius={25} src="ontarioLand.png"></Image>
            </Box>
          </Center>
        </Box>
      </Flex>

      <Spacer />

      <Flex>
        <Box />
        <Spacer />
        <Box p="2" marginTop={100}>

        </Box>

        <Spacer />
      </Flex>

      <Flex>
        <Box>
          <Text marginTop="40px" marginRight={5}>
            Privacy Policy and Terms of Service
          </Text>
        </Box>
      </Flex>
    </>
  );
}

export default App
