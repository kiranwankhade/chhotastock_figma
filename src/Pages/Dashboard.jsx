import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

import dashboardFrame1 from "../Images/dashboardFrame1.png"
import DashNavbar from '../Components/DashNavbar'
import DashFeatures from '../Components/DashFeature'
import DashHand from '../Components/DashHand'
import PartnersComponent from '../Components/PartnersComponent'

import contactus from  "../Images/contactus.png"
import DashSolution from '../Components/DashSolution'

const Dashboard = () => {
  return (
    <Box>
        <Navbar/>
        <DashNavbar/>
        <Box w={"100%"} margin={'auto'}>
            <Image w={"100%"} src={dashboardFrame1} />
        </Box>
        <DashFeatures/>
        
        <DashHand/>
        <DashSolution/>
        <PartnersComponent/>
        
        <Box w={"90%"} margin={'auto'} mt={'5%'}>
            <Image w={"100%"} src={contactus} />
        </Box>
        <Footer/>
    </Box>
  )
}

export default Dashboard