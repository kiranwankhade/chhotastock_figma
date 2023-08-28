import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import kotak from "../Images/kotak.png"
import angleOne from "../Images/angleone.png"
import upstock from "../Images/upstock.png"
import amfi from "../Images/amfi.png"
import lendbox from "../Images/lendbox.png"
import liquiloans from "../Images/liquiloans.png"
import siply from "../Images/siply.png"
import jupiter from "../Images/jupiter.png"

const PartnersComponent = () => {
    return (
        <Box mt="2%" w="80%" margin={"auto"}>
        <Flex  mt="5%" gap="2%"  >
     <Text w="33%" mt="2%" color="#777777" fontWeight={400} fontSize={["1.1vw","25px","29px"]}>Some partners who make InvestPe products possible-</Text>
     <Box w="65%" >
      <Flex placeItems={"center"}>
      <Box><Image blendMode={"darken"} src={kotak}/></Box>
      <Box mt="3%"><Image   blendMode={"darken"} src={angleOne}/></Box>
      <Box mt="3%"><Image  blendMode={"darken"} src={upstock}/></Box>
      
        
        
    
      </Flex>
      <Flex placeItems={"center"} gap="5%">
      <Box w="12%" ml="3%"><Image w="100%" blendMode={"darken"} src={amfi}/></Box>
      <Box w="20%"><Image w="100%"  blendMode={"darken"} src={lendbox}/></Box>
      <Box w="25%"><Image w="100%"  blendMode={"darken"} src={liquiloans}/></Box>
      
    
      </Flex>
     </Box>
        </Flex>
        
    <Flex mt="5%" gap="6%">
      <Text w="30%" color="#777777" fontWeight={400} fontSize={["1.1vw","25px","29px"]} >..and a few of the bussinesses building some incredible with solutions  InvestPe</Text>
      <Flex gap="5%"  w="62%" >
    <Flex bg="#B1B1B1" borderRadius={"30px"} w="28%" h={["90px","100px","110px","120px"]} placeContent={"center"} placeItems={"center"}><Image w="80%" src={siply}/></Flex>
    <Flex bg="#B1B1B1" borderRadius={"30px"} w="28%" h={["90px","100px","110px","120px"]} placeContent={"center"} placeItems={"center"}><Image w="80%" src={jupiter}/></Flex>
      </Flex>
    </Flex>
    
        </Box>
      )
}

export default PartnersComponent