import { Box, Image } from '@chakra-ui/react'
import React from 'react'

import footer from "../Images/footerInvestpe.png"

const Footer = () => {
  return (
    <Box  w={"100%"} margin={'auto'} mt={'6%'}>
        <Image w={"100%"} src= {footer} />
    </Box>
  )
}

export default Footer