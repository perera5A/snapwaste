import { useState } from "react";
import { Link } from "@chakra-ui/react";
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
  Grid,
  GridItem,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

export default function App() {
  return (
    <>
      <Flex color="green">
        <Box />
        <Box p="6">
          <Spacer />
          <Heading>
            <Avatar size="xs" name="Camera Recycle" src="cameraRecycle.jpg" />
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
            <Button colorScheme="green" marginTop={"-5px"} marginLeft={4}>
              Sign In
            </Button>
          </a>

          <a href="signup">
            <Button
              colorScheme="green"
              marginTop={"-5px"}
              variant="outline"
              marginLeft={4}
            >
              Register
            </Button>
          </a>
        </Box>
      </Flex>

      <Flex>
        <Box />
        <Spacer />
        <Box p="2" marginTop={50}></Box>

        <Spacer />
      </Flex>

      <Grid
        h="450px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={1} colSpan={1} bg="white" marginTop={20}>
          <Heading>
            <Center>Identify, Recycle, Compost</Center>
          </Heading>
        </GridItem>

        <GridItem
          rowSpan={2}
          colSpan={1}
          bg="green.500"
          borderRadius={15}
          marginRight={"10"}
        >
          <Heading>
            <Center>
              <Image
                borderRadius={5}
                marginTop="6"
                boxSize="400"
                src="HomepagePic.jpg"
              />
            </Center>
          </Heading>
        </GridItem>

        <GridItem rowSpan={1} colSpan={1} bg="white" marginLeft={"10"}>
          <Box marginTop={-20}>
            <Center>
              <Text fontSize="lg" mb="4">
                Welcome to SnapWaste, your go-to platform for waste
                identification and disposal guidance. We help you make
                environmentally conscious decisions by simply uploading an image
                of your waste. Using advanced image recognition software, we
                help you determine whether the item is recyclable, garbage, or
                compost.
              </Text>
            </Center>
            <Center>
              <a href="locate">
                <Button colorScheme="green" variant="outline">
                  Enter Tool
                </Button>
              </a>
            </Center>
          </Box>
        </GridItem>
      </Grid>

      <Flex>
        <Spacer />
        <Box p="2" marginTop={51}></Box>
        <Spacer />
      </Flex>

    <Flex>
        <Box marginBottom='-33px' bg='green.200' w={'100%'}>
          <Center>
            <Text marginTop='1' marginRight={5}>
              Privacy Policy and Terms of Service
              </Text>
            </Center>
          </Box>
        </Flex>

    </>
  );
}
