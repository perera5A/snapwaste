import React, { useState } from "react";
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
  Grid,
  GridItem,
} from "@chakra-ui/react";
import axios from "axios";

import { GoogleGenerativeAI } from "@google/generative-ai"; // Ensure this import is correct

function Locate() {
  const [baseImage, setBaseImage] = useState("");
  const [disposalInstructions, setDisposalInstructions] = useState([]);

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);

    axios({
      method: "POST",
      url: "https://detect.roboflow.com/garbage-classification-qmp4x/11",
      params: {
        api_key: "key",
      },
      data: base64,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then(function (response) {
        const predictions = response.data.predictions;

        const instructionsPromises = predictions.map(async (prediction) => {
          const prompt = `I am going to give you a type of common trash waste. I need you to tell me what bin I should dispose of it into. Format your answer to once sentence and dont ask any follow up information. The item is ${prediction.class}`;
          const result = await generateDisposalInstruction(prompt);
          return {
            class: prediction.class,
            instruction: result,
          };
        });

        Promise.all(instructionsPromises).then((instructions) => {
          setDisposalInstructions(instructions);
        });
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const generateDisposalInstruction = async (prompt) => {
    const API_KEY = "AIzaSyBfCXcyVz76nHqVpYdAXkdZeBYwiPsIDvc";
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    try {
      const result = await model.generateContent(prompt);
      const response = await result.response;
      return await response.text();
    } catch (error) {
      console.error("Error generating content:", error);
      if (error.message.includes("SAFETY")) {
        return "The generated content was blocked due to safety concerns.";
      }
      return "Error generating content.";
    }
  };

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
        <GridItem rowSpan={1} colSpan={1} bg="white" marginTop={10}>
          <Heading>
            <Center>Getting Started with SnapWaste</Center>
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
              <div className="Locate">
                <input
                  type="file"
                  onChange={(e) => {
                    uploadImage(e);
                  }}
                />
                <br></br>
                <img src={baseImage} height="200px" />
              </div>
            </Center>
          </Heading>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1} bg="white" marginLeft={"10"}>
          <Box marginBottom={70}>
            <Center>
              <Text fontSize="lg" mb="4">
                To identify and properly dispose of your waste, simply click the
                "Upload" button on our homepage and select a clear image of your
                waste item from your device. Our advanced image recognition
                system will quickly analyze the image and provide an instant
                classification of the waste as recyclable, compostable, or
                general garbage. Follow the detailed disposal instructions
                provided by our system, and check local guidelines if needed to
                ensure compliance with specific disposal rules in your area.
                Dispose of the waste item accordingly, whether it’s placing it
                in the recycling bin, compost bin, or general trash, and feel
                good knowing you’re helping to reduce waste and protect the
                environment!
              </Text>
            </Center>
          </Box>
        </GridItem>
      </Grid>
      <Flex>
        <Spacer />
        <Box p="2" marginTop={51}></Box>
        <Spacer />
      </Flex>
      <Box>
        {disposalInstructions.map((instruction, index) => (
          <Box key={index} p={4} borderWidth="1px" borderRadius="md" mt={2}>
            <Text fontWeight="bold">{instruction.class}</Text>
            <Text>{instruction.instruction}</Text>
          </Box>
        ))}
      </Box>

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

export default Locate;
