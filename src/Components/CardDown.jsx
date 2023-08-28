import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import curldown from "../Images/curldown.png";
import curlUp from "../Images/curlup.png";


const CardDown = ({image}) => {
  return (
    <Box  borderRadius={"10px"}  boxShadow={"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;"} bg="#F3F3F3"  position={"relative"} color="black" mt="30%" pb="70px">
    <Text
      w="80%"
      margin={"auto"}
      mt="15%"
      textAlign={"center"}
      fontSize={"0.9vw"}
    >
      Chhotastock has cool investment ideas, looking forward to see how the green energy basket does
    </Text>
    <Text
      w="80%"
      margin={"auto"}
      mt="20%"
      textAlign={"center"}
      fontSize={"0.9vw"}
    
    >
      Sunita,4th Year B.com student. Bihar
    </Text>

  <Box position={"absolute"} top="5%" left="10%"><Image w={"80%"} src={curldown}/></Box>
  <Box position={"absolute"} top="45%" left="80%"><Image w={"80%"} src={curlUp}/></Box>
  <Box w={"50%"} position={"absolute"} top="80%" left="25%">  <Image w={"100%"} src={image}/></Box>

  </Box>
  )
}

export default CardDown