'use client'

import {
  Image,
  Box,
  Text,
  Spacer,
  Button,
  Link,
  Center,
  Heading,
  Avatar,
  Accordion,
  AvatarGroup,
  AvatarBadge,
  Container,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react'

import { ChevronDownIcon } from '@chakra-ui/icons'

export default function Faq() {
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
            Frequently Asked Questions
          </Heading>
        </Center>
      </Box>

      <Spacer>

      <Box marginTop={'50px'} p="4" mx="auto" maxW="4xl" bg="gray.100" borderRadius="md">

        <Text fontSize="lg" mb="4">
        Welcome to the SnapWaste FAQ page! Here, we answer some of the most common questions about our platform and how it helps you manage waste more efficiently. Whether you’re new to SnapWaste or a seasoned user, this section will provide valuable information on how to make the most of our services. From understanding how to use our waste identification tool to learning the best practices for waste disposal, we've got you covered.
        </Text>
      </Box>

      </Spacer> 

      <Flex
      minH={'100vh'}
      justify={'center'}
      bg={useColorModeValue('white')}>
      <Container>
        <Accordion marginTop='100' allowMultiple width="100%" maxW="lg" rounded="lg">
          <AccordionItem>
          <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="md">Why Is Proper Waste Disposal Important?</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                Chakra UI is a simple and modular component library that gives developers
                the building blocks they need to create web applications.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
          <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="md">Can I trust the accuracy of your system?</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                Chakra UI is a simple and modular component library that gives developers
                the building blocks they need to create web applications.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="md">What Are The Different Types of Waste?</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                Chakra UI is a simple and modular component library that gives developers
                the building blocks they need to create web applications.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="md">What Are The Advantafes of SnapWaste?</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                Chakra UI offers a variety of advantages including ease of use,
                accessibility, and customization options. It also provides a comprehensive
                set of UI components and is fully compatible with React.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="md">What Are The Environmental Impacts of Waste?</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                To get started with Chakra UI, you can install it via npm or yarn, and
                then import the components you need in your project. The Chakra UI
                documentation is also a great resource for getting started and learning
                more about the library.
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </Flex>

    </>
  );
}

