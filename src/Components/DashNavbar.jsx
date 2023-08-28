import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import logos from "../Images/logos.png";
import Drawer from "./Drawer";
import { useNavigate } from "react-router-dom";

const DashNavbar = () => {
  const [products, setproducts] = useState(false);

  const handleHover=()=>{
    setproducts(true)
  }
  
  const handleMouseLeave=()=>{
    setproducts(false)
  }
  
  const navigate =useNavigate()

  return (
    <Box>
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        bgColor={"#171E27"}
        p={["1% 2%"]}
        pr={"5%"}
      >
        <Flex alignItems={"center"} justifyContent={"center"} w={["40%"]}>
          <Box w={["35%"]} _hover={{cursor:'pointer'}}>
            <Image src={logos} w={"100%"} onClick={()=>navigate("/")} />
          </Box>
          <Button>
            Gateway &nbsp;{" "}
            <Box
              w={"23px"}
              h={"23px"}
              borderRadius={"50%"}
              bgColor={"#F05656"}
            ></Box>
          </Button>
        </Flex>

        <Flex
          alignItems={"center"}
          justifyContent={"space-around"}
          color={"white"}
          w={["25%"]}
        >
          <Text
            fontSize={["1.3rem"]}
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
            _hover={{
              cursor: "pointer",
              borderBottomWidth: "3px",
              borderBottomColor: "white"
            }}
          >
            Products
          </Text>
          <Text fontSize={["1.3rem"]}>About Us</Text>
        </Flex>
      </Flex>

      {products ? <Drawer /> : ""}
    </Box>
  );
};


export default DashNavbar