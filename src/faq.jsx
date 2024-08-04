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
  Stack,
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
      minH={'65vh'}
      justify={'center'}
      bg={useColorModeValue('white')}>
      <Container>
        <Accordion marginBottom='20' marginTop='100' allowMultiple width="100%" maxW="lg" rounded="lg">
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
                Proper waste disposal is crucial for protecting the environment, human health, and conserving natural resources. It helps prevent pollution of air, water, and soil, reduces greenhouse gas emissions, and ensures that recyclable and compostable materials are processed correctly. By disposing of waste properly, we can minimize the negative impact on wildlife, reduce landfill use, and promote sustainable practices.
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
                Yes, you can trust the accuracy of our system. Our platform uses advanced image recognition technology and constantly updated databases to ensure accurate waste identification. However, we recommend double-checking with local waste management guidelines for specific disposal rules in your area to ensure complete accuracy.
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
              <Stack>
                <Text color="gray.600">
                    The main types of waste are:
                  </Text>
                <Text color="gray.600">
                    Recyclable: Items like paper, cardboard, glass, metals, and certain plastics that can be processed and used to make new products.
                  </Text>
                <Text color="gray.600">
                    Compostable: Organic waste such as food scraps, yard waste, and biodegradable materials that can be decomposed into nutrient-rich compost.
                  </Text>
                <Text color="gray.600">
                    Hazardous: Waste that poses a risk to human health or the environment, including batteries, chemicals, electronics, and certain household products.
                  </Text>
                <Text color="gray.600">
                    General Garbage: Waste that cannot be recycled or composted, typically destined for landfill.
                  </Text>
                </Stack>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="md">What Are The Advantages of SnapWaste?</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
            <Stack>
                <Text color="gray.600">
                    Ease of Use: Quickly identify and sort waste with a simple image upload.
                  </Text>
                <Text color="gray.600">
                    Accurate Guidance: Receive reliable instructions on how to properly dispose of different types of waste.
                  </Text>
                <Text color="gray.600">
                    Environmental Impact: Promote recycling and composting, reducing the amount of waste sent to landfills and minimizing environmental pollution.
                  </Text>
                <Text color="gray.600">
                    Convenience: Accessible on both desktop and mobile devices, making waste sorting simple and convenient wherever you are.
                  </Text>
                </Stack>
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
            <Stack>
                <Text color="gray.600">
                    Pollution: Contamination of air, water, and soil from chemicals, plastics, and other hazardous materials.
                  </Text>
                <Text color="gray.600">
                    Greenhouse Gas Emissions: Decomposition of organic waste in landfills produces methane, a potent greenhouse gas contributing to climate change.
                  </Text>
                <Text color="gray.600">
                    Wildlife Harm: Animals can ingest or become entangled in waste, leading to injury or death. 
                  </Text>
                <Text color="gray.600">
                    Resource Depletion: Failure to recycle means more raw materials must be extracted to produce new products, depleting natural resources.
                  </Text>
                <Text color="gray.600">
                    Ecosystem Disruption: Waste accumulation can disrupt natural habitats and ecosystems, affecting biodiversity and ecological balance.
                  </Text>
                </Stack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
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

