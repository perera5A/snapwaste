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

export default function About() {
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

      <Box p="4" mx="auto" maxW="4xl" bg="gray.100" borderRadius="md">
        <Heading as="h3" size="lg" mb="2">
          Our Story
        </Heading>
        <Text fontSize="lg" mb="4">
          SnapWaste was created to address the growing need for effective waste management solutions. We recognized that many people struggle with understanding how to properly dispose of various types of waste. Our solution? A user-friendly platform that leverages technology to provide clear, actionable advice on waste disposal.
        </Text>
      </Box>

      <Box p="4" mx="auto" maxW="4xl">
        <Heading as="h3" size="lg" mb="2">
          What We Offer
        </Heading>
        <Text fontSize="lg" mb="2">
          <strong>Smart Waste Identification:</strong> Simply take a picture of your trash using the SnapWaste app or website. Our advanced AI technology analyzes the image and identifies whether the item should be recycled, composted, or sent to the landfill.
        </Text>
        <Text fontSize="lg" mb="2">
          <strong>Personalized Disposal Instructions:</strong> SnapWaste doesn’t just tell you where to dispose of your waste; it also provides detailed instructions on how to prepare items for disposal. This includes steps like cleaning or rinsing containers before recycling them, ensuring that you follow the best practices for waste management.
        </Text>
        <Text fontSize="lg" mb="2">
          <strong>Locate Disposal Centers:</strong> Our platform helps you find the nearest recycling centers, compost facilities, and garbage disposal sites. Whether you're at home or traveling, SnapWaste ensures you can easily locate a facility to drop off your waste.
        </Text>
      </Box>

      <Box p="4" mx="auto" maxW="4xl" bg="gray.100" borderRadius="md">
        <Heading as="h3" size="lg" mb="2">
          Why Choose SnapWaste?
        </Heading>
        <Text fontSize="lg" mb="2">
          <strong>Easy to Use:</strong> Our intuitive interface makes waste management simple. Just snap a picture, and let SnapWaste guide you through the rest.
        </Text>
        <Text fontSize="lg" mb="2">
          <strong>Educational Resources:</strong> SnapWaste offers a wealth of information on waste reduction, recycling best practices, and sustainable living tips. We aim to educate and empower our users to make environmentally-friendly choices.
        </Text>
        <Text fontSize="lg" mb="2">
          <strong>Community Engagement:</strong> Join a community of environmentally conscious individuals dedicated to reducing waste and promoting sustainability. Share tips, ask questions, and learn from others.
        </Text>
        <Text fontSize="lg" mb="2">
          <strong>Continuous Innovation:</strong> We are committed to continuously improving our technology and expanding our database to provide the most accurate and helpful information. Your feedback is essential in helping us enhance our services.
        </Text>
      </Box>

      <Box p="4" mx="auto" maxW="4xl">
        <Text fontSize="lg" mb="4">
          At SnapWaste, we believe that proper waste management is crucial for a sustainable future. Join us in making a positive impact on our environment by disposing of waste the right way, one snap at a time.
        </Text>
      </Box>

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
