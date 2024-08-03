import React from "react";
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
  Link,
} from "@chakra-ui/react";

export default function Locate() {
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
          <a href="/">
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
            <Button colorScheme='green' marginTop={"-5px"} variant='outline' marginLeft={4}>
              Register
            </Button>
          </a>
        </Box>
      </Flex>

      <Box bg="green.400" p="6" mx="auto">
        <Center>
          <Heading as="h2" size="xl" mb="4">
            About SnapWaste
          </Heading>
        </Center>
      </Box>

      <Box p="4" mx="auto" maxW="4xl">
        <Text fontSize="lg" mb="4">
          Welcome to SnapWaste, the innovative platform that helps you manage your waste efficiently and sustainably. Our mission is to simplify the disposal process by providing personalized guidance on how to handle your trash, ensuring that you dispose of it correctly and responsibly.
        </Text>
      </Box>
    </>
  );
}


