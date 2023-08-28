import { Box, Image } from '@chakra-ui/react'
import React from 'react'

import topAdImage from "../Images/topfigmaSS.png"

const Navbar = () => {
  return (
    <Box w={"100%"} >
        <Image w={"100%"} src= {topAdImage} />
    </Box>
  )
}

export default Navbar