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
  GridItem
} from "@chakra-ui/react";

import axios from 'axios';
function Locate() {
  const [baseImage, setBaseImage] = useState("");

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    console.log(base64)
    setBaseImage(base64);


        axios({
          method: "POST",
          url: "https://detect.roboflow.com/waste-classification-uwqfy/1",
          params: {
              api_key: "AQ76DEOvAyMGi8flg5mu"
          },
          "data": base64,
          headers: {
              "Content-Type": "application/x-www-form-urlencoded"
          }
      })
      .then(function(response) {
          console.log(response.data);
      })
      .catch(function(error) {
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

  <Flex>
        <Box />
        <Spacer />
            <Box p="2" marginTop={50}>
            </Box>
        <Spacer />
      </Flex>

  <Grid
        h='450px'
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(2, 1fr)'
        gap={4}
      >
        <GridItem rowSpan={1} colSpan={1} bg='white' marginTop={10}>
            <Heading>
              <Center>
                Getting Started with SnapWaste
              </Center>
            </Heading>
          </GridItem> 

          <GridItem rowSpan={2} colSpan={1} bg='green.500' borderRadius={15} marginRight={'10'}>
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

          <GridItem rowSpan={1} colSpan={1} bg='white' marginLeft={'10'}>
            <Box marginBottom={70}>
              <Center>
                <Text fontSize="lg" mb="4">
                    To identify and properly dispose of your waste, simply click the "Upload" button on our homepage and select a clear image of your waste item from your device. Our advanced image recognition system will quickly analyze the image and provide an instant classification of the waste as recyclable, compostable, or general garbage. Follow the detailed disposal instructions provided by our system, and check local guidelines if needed to ensure compliance with specific disposal rules in your area. Dispose of the waste item accordingly, whether it’s placing it in the recycling bin, compost bin, or general trash, and feel good knowing you’re helping to reduce waste and protect the environment!
                  </Text>
                </Center>
              </Box>
          </GridItem> 
      </Grid>

      <Flex>
        <Spacer />
          <Box p="2" marginTop={51}>
            </Box>
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


