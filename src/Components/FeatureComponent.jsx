import React from 'react'
import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import bgComp from "../Images/bgPattern.png";
import hand from "../Images/hand.png";
import bulb from "../Images/bulb.png"
import img1 from "../Images/img1.png"
import img2 from "../Images/img50.png"
import img3 from "../Images/img51.png"

const FeatureComponent = () => {
  return (
    <Flex
    w="90%"
    m="auto"
     placeItems={"center"}
     borderRadius={"50px"}
     bgColor={"#171E27"}
     p={'1%'}
   >
     <Box bgImage={`url(${bgComp})`} borderRadius={"50px"} >
       <Flex
         alignItems={"center"}
         justifyContent={"space-between"}
         p={"1% 4%"}
       >
         <Box color={"white"}  w={"80%"} >
           <Heading fontSize={["3.2vw","2.9vw","2.9vw","2.8vw","2.8vw"]} w={"100%"}> 
             Essential Features for the Super Trader in You - All in
             <Text as={"span"} color="#f8b721">
               One Platform
             </Text>
           </Heading>
           <Text color="#CECECE"  ml="2%" mt={"5%"} lineHeight={["12px","15px","20px","25px"]} fontSize={["1.6vw","1.5vw","1.4vw","1.4vw"]} w="70%">
             Save hours of research by using our readymade screens to find your
             next investment 
           </Text>
           <Flex color="#CECECE" ml="2%" mt="3%" gap="2%" w="75%" placeItems={"center"}>
           <Box >
               <Image src={bulb}/>
           </Box>
           <Text fontSize={["1.7vw","1.6vw","1.5vw","1.4vw"]} lineHeight={["12px","16px","22px","30px"]}>30+ ANALYTICAL TOOLS & CHARTING + LIVE TRADES +
             STOCK PICKS & MUCH MORE</Text>
             </Flex>
             <Flex  mt={"8%"} gap="5%" placeItems={"center"}>
           <Button
           
             bg={"linear-gradient(99deg, #FEC826 0%, #F3A61D 100%);"}
             borderRadius={"35px"}
             ml="2%"
             fontSize={["1.6vw","1.4vw","1.3vw","1.1vw"]}
           >
             Get started now
           </Button>
           <Text fontSize={["14px","16px","17px","19px","1.3vw"]} textDecoration={"underline"}>See all features</Text></Flex>
         </Box>
         <Box position={"relative"} w={"30%"} mt="-10%">
           <Image  src={img1} />
           <Image position={"absolute"} top="40%" right="25%"  src={img2} />
           <Image position={"absolute"} top="75%" right="40%" src={img3} />
         </Box>
       </Flex>
     </Box>
   </Flex>
  )
}

export default FeatureComponent