import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import one from "../Images/one.png";
import two from "../Images/two.png";
import three from "../Images/three.png";
import four from "../Images/four.png";
import five from "../Images/five.png";
import six from "../Images/six.png";

const Drawer = () => {
  return (
    <Box
      w="80%"
      margin={"auto"}
      bg="white"
      left="10%"
      position={"absolute"}
      zIndex={100000}
      boxShadow={
        "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;"
      }
      textAlign={"justify"}
    >
      <Box w="90%" margin={"auto"} mt="2%" pb="4%">
        <Flex>
          <Box w="55%">
            <Text color="#28B570" fontWeight={"500"} fontSize={"22px"}>
              INVESTMENTS
            </Text>
            <Flex mt="4%" placeItems={"center"} gap="2%">
              <Box w="10%">
                <Image w={"90%"} src={one} />
              </Box>
              <Box>
                <Text fontSize={"22px"} fontWeight={"500"}>
                  Mutual Funds
                </Text>
                <Text fontSize={"18px"}>
                  E2E infrastructure for mutual fund investing
                </Text>
              </Box>
            </Flex>
            <Flex mt="4%" placeItems={"center"} gap="2%">
              <Box w="10%">
                <Image w="90%" src={two} />
              </Box>
              <Box>
                <Text fontSize={"22px"} fontWeight={"500"}>
                  Indian Equity
                </Text>
                <Text fontSize={"18px"}>
                  Ready-made stock baskets with major
                </Text>
              </Box>
            </Flex>
            <Flex mt="4%" placeItems={"center"} gap="2%">
              <Box w="10%">
                <Image w="90%" src={three} />
              </Box>
              <Box>
                <Text fontSize={"22px"} fontWeight={"500"}>
                  Digital Gold
                </Text>
                <Text fontSize={"18px"}>
                  Allow your users to buy & sell digital gold
                </Text>
              </Box>
            </Flex>
            <Flex mt="4%" placeItems={"center"} gap="2%">
              <Box w="10%">
                <Image w="90%" src={four} />
              </Box>
              <Box>
                <Text fontSize={"22px"} fontWeight={"500"}>
                  Fixed Deposits
                </Text>
                <Text fontSize={"18px"}>
                  Book FDs in one-click without opeing a bank account
                </Text>
              </Box>
            </Flex>
          </Box>
          <Box w="45%">
            <Text color="#28B570" fontWeight={"500"} fontSize={"22px"}>
              Data
            </Text>
            <Flex mt="4%" placeItems={"center"} gap="2%">
              <Box w="10%">
                <Image w="90%" src={five} />
              </Box>
              <Box>
                <Text fontSize={"22px"} fontWeight={"500"}>
                  Market Research
                </Text>
                <Text fontSize={"18px"}>
                  Deep-tech stack research & analysis
                </Text>
              </Box>
            </Flex>
            <Flex mt="4%" placeItems={"center"} gap="2%">
              <Box w="12%">
                <Image w="100%" src={six} />
              </Box>
              <Box>
                <Text fontSize={"22px"} fontWeight={"500"}>
                  Historical Performance
                </Text>
                <Text fontSize={"18px"}>
                  Multi timeframe historical data for stocks, mutual funds &
                  digital gold
                </Text>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Drawer;
