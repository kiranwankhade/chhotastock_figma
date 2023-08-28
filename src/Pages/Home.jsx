import React from "react";
import Navbar from "../Components/Navbar";
import {
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";

import { Search2Icon } from "@chakra-ui/icons";
import { SlLogin } from "react-icons/sl";

import logowithname from "../Images/logowithname.png";
import searchBar from "../Images/searchBar.png";

import mobileFrame from "../Images/mobileFirstFrame.png"

import secondFrame from '../Images/secondFram.png'
import FeatureComponent from "../Components/FeatureComponent";

import stockInvest from "../Images/stockInvest.png"
import PartnersComponent from "../Components/PartnersComponent";

import reviewGroup from "../Images/reviewGroup.png"
import ReviewComponent from "../Components/ReviewComponent";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <Box backgroundColor={"#171e27"}>
        <Flex
          padding={["3%","2%","2%","1%"]}
          w={["100%","90%","90%","90%"]}
          margin={'auto'}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box w={["25%", "25%", "22%", "20%"]}>
            <Image w={"100%"} src={logowithname} />
          </Box>

          {/* <Box w={["30%", "24%", "22%", "50%"]}>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Search2Icon color="gray.300" />
              </InputLeftElement>
              <Input
                // borderRadius={"5px"}
                border={"none"}
                color={"white"}
                _placeholder={{ color: "white", marginLeft: "5%" }}
                bg="#81878c"
                // h="4vh"
                type="tel"
                // size={"sm"}
                placeholder="Search stocks, ETFs, indicies"
              />
            </InputGroup>
           
          </Box> */}
           <Box w={["45%", "45%", "45%", "45%"]}>
            <Image w={"100%"} src={searchBar} />
          </Box>

          <Box
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            w={["15%", "15%", "15%", "15%"]}
            p="0.7%"
            borderRadius={"25px"}
            bg="#f7b421"
            color="black"
            placeContent={"center"}
            placeItems={"center"}
            gap="5%"
          >
            <SlLogin fontSize={["1.3vw", "1.3vw", "1.3vw", "1.3vw"]}/>
            <Button
              onClick={() => navigate("/dashboard")}
              fontWeight={"600"}
              fontSize={["1.3vw", "1.3vw", "1.3vw", "1.3vw"]}
              bg={'none'}
              _hover={{
                bg:'none'
              }}
            >
              Login
            </Button>
          </Box>
        </Flex>
          <br/>
        <Box w={"90%"} margin={'auto'}>
            <Image w={"100%"} src={mobileFrame} />
        </Box>
      </Box>
        <Box w={"90%"} margin={'auto'}>
            <Image w={"100%"} src={secondFrame} />
        </Box>
        <FeatureComponent/>
     
        <Box w={"90%"} margin={'auto'} mt={["5%","5%","5%","8%"]}>
            <Image w={"100%"} src={stockInvest} />
        </Box>

        <Divider w="90%" margin={"auto"} mt="5%" border="1px solid black" />
        <PartnersComponent/>

        <Divider w="90%" margin={"auto"} mt="5%" border="1px solid black" />
        
        {/* <Box w={"90%"} margin={'auto'} mt={["5%","5%","5%","8%"]}>
            <Image w={"100%"} src={reviewGroup} />
        </Box> */}
        <ReviewComponent/>
        <br/>
        <Footer/>

    </div>
  );
};

export default Home;
