import { Box, Flex, Heading, Image, ListItem, SimpleGrid, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'

import img6 from '../Images/img6.png'
import img7 from '../Images/img7.png'
import img8 from '../Images/img8.png'
import img9 from '../Images/img9.png'

const DashSolution = () => {
    return (
        <Box p={'4% 10%'} textAlign={'justify'}>
            <Text  color={'green.300'}>SOLUTION</Text>
            <Heading mt={'3%'}>Stay ahead with our <br /> Wealth-tech as a service</Heading>

            

            <SimpleGrid mt={'5%'} columns={['3', '4', '4', '4']} gap={'20px'}>
                <Box bgColor={'#FEF8EC'} w={'100%'} border={'1px solid #FDE3AF'} p={'4% 4%'} h={'35vh'} >
                    <Image src={img6} w={'30%'} />
                    <Text color={'#7C59CF'}>INVESTPE</Text>
                    <Heading color={'#7C59CF'} fontSize={["1rem","1.1rem","1.2rem",'1.3rem']} mt={'5%'}>Why does it make sense to start with us?</Heading>
                </Box>
                <Box gridColumnStart={2} gridColumnEnd={4} bgColor={'#FAFCFD;'} h={'35vh'}  border={'1px solid #FDE3AF'} p={'2%'}>
                    <Flex> 
                        <Box w={'50%'} p={'2%'}>
                        <Text color={'#7C59CF'} fontSize={'1.2rem'} fontWeight={'600'}>We value your precious time.</Text>
                            <Text mt={'5%'} fontSize={'1.0rem'} fontWeight={'600'}>No regulatory licenses required as we have everything for you to get started.</Text>
                        </Box>
                        <Image  display={'block'} m={'auto'} mt={'9%'}src={img7} w={'30%'} />
                    </Flex>
                    

                </Box>
                <Box gridColumnStart={4} p={'2% 5%'} pb={'0%'} gridColumnEnd={5} gridRowStart={'1'} gridRowEnd={'4'} bgColor={'#FEF8EC'} w={'100%'} border={'1px solid #FDE3AF'} >
                    <Image src={img9}/>
                    <Text color={'#7C59CF'}>FIXED DEPOSITS</Text>
                    <Text color={'#7C59CF'} mt={'5%'} fontWeight={'600'} fontSize={'1.3rem'}>Fully digital FDs for your users</Text>
                    <Text mt={'5%'}> Offer fixed deposits on your app or website, from multiple banks. Embed a pre-built SDK and go live in weeks.</Text>
                    <Image src={img8} display={'block'} m={'auto'} mt={'5%'} w={'50%'} />
                </Box>
                <Box gridRowStart={'2'} gridRowEnd={'2'} gridColumnStart={'3'} gridColumnEnd={'4'} bgColor={'#FAFCFD'} w={'100%'} border={'1px solid #FDE3AF'} p={'4%'} >
                    {/* <Image src={img6} w={'30%'} /> */}
                    <Text color={'#7C59CF'}>MUTUAL FUNDS</Text>
                    <Text color={'#7C59CF'} fontWeight={'600'} fontSize={'1.3rem'}>Get the complete MF Infra & focus on customer engagement</Text>
                    <UnorderedList mt={'5%'}>
                        <ListItem>SEBI compliant KYC process</ListItem>
                        <ListItem>Multi-AMC empanelments</ListItem>
                        <ListItem>Transact & Track orders</ListItem>
                        <ListItem>Advanced reporting</ListItem>
                    </UnorderedList>
                </Box>
                <Box gridRowStart={'2'} gridRowEnd={'2'} gridColumnStart={'1'} gridColumnEnd={'3'}  bgColor={'#FAFCFD'} w={'100%'} border={'1px solid #FDE3AF'} p={'4%'} >
                    {/* <Image src={img6} w={'30%'} /> */}
                    <Text color={'#7C59CF'}>INDIAN EQUITY</Text>
                    <Text color={'#7C59CF'} fontWeight={'600'} fontSize={'1.3rem'}>One gateway for all top securities</Text>
                    <UnorderedList mt={'5%'}>
                        <ListItem>Enable stocks, ETFs & expert curated stock baskets in your app</ListItem>
                        <ListItem>Integrates with all major brokers</ListItem>
                        <ListItem>Offer expert curated & monitored stock basket solutions</ListItem>
                        {/* <ListItem>Advanced reporting</ListItem> */}
                    </UnorderedList>
                </Box>
            </SimpleGrid>

        </Box>
    )
}

export default DashSolution