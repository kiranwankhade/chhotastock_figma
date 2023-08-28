import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import CardUp from "./CardUp";
import man1 from "../Images/man1.png";
import man2 from "../Images/man2.png";
import girl1 from "../Images/girl1.png";
import girl2 from "../Images/girl2.png";
import CardDown from "./CardDown";

const ReviewComponent = () => {
  return (
    <Box w="80%" margin={"auto"} mt="2%">
      <Flex mt="5%" gap="5%">
        <Text w="40%" fontWeight={700} color="black" fontSize={"40px"}>
          Reviews from Early Adopters
        </Text>
        <Flex gap="5%" w="55%">
          <Flex
            bg="#F3F3F3"
            borderRadius={"30px"}
            w="40%"
            h="120px"
            placeContent={"center"}
            placeItems={"center"}
          >
            <Box>
              <Text fontWeight={700} fontSize={"40px"}>
                156k+
              </Text>
              <Text fontSize={"22px"} color="black">
                Registered Users
              </Text>
            </Box>
          </Flex>
          <Flex
            bg="#F3F3F3"
            borderRadius={"30px"}
            w="40%"
            h="120px"
            placeContent={"center"}
            placeItems={"center"}
          >
            <Box>
              <Text fontSize={"40px"} fontWeight={"700"}>
                $1.5Mn+
              </Text>
              <Text fontSize={"22px"} color="black">
                Worth investing done
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Flex>

      <SimpleGrid mt="5%" columns={[2, 2, 5, 5]} gap="2%">
        <CardUp image={man1} />
        <CardDown image={girl1} />
        <CardUp image={man2} />
        <CardDown image={girl2} />
        <CardUp image={man1} />
      </SimpleGrid>
      
    </Box>
  );
};

export default ReviewComponent;
