import React from 'react'
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import image1 from '../../assets/undraw_photos/undraw_data_reports_706v.png'
import image2 from '../../assets/undraw_photos/undraw_data_reports_706v.png'

const Trial = () => {
  return (
    <Flex direction={{ base: 'column', md: 'row' }} overflowX='hidden'>
      <Box p='12' bg='red.200' w={{ base: 'full', md: '105vh' }}>
        <Flex direction='column' justify='center' align='center' bg='green.200' h='50vh' w='55vh' rounded='md'>
          <Image src={image1} alt="Description" h='30vh' mb='10' rounded='lg' />
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </Flex>
      </Box>

      <Box p='12' bg='red.200' w={{ base: 'full', md: '105vh' }}>
        <Flex direction='column' justify='center' align='center' bg='green.200' h='50vh' w='55vh' rounded='md'>
          <Image src={image2} alt="Description" h='30vh' mb='10' rounded='lg' />
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </Flex>
      </Box>



      <Box p='12' bg='red.200' w={{ base: 'full', md: '105vh' }}>
        <Flex direction='column' justify='center' align='center' bg='green.200' h='50vh' w='55vh' rounded='md'>
          <Image src={image1} alt="Description" h='30vh' mb='10' rounded='lg' />
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </Flex>
      </Box>

      <Box p='12' bg='red.200' w={{ base: 'full', md: '105vh' }}>
        <Flex direction='column' justify='center' align='center' bg='green.200' h='50vh' w='55vh' rounded='md'>
          <Image src={image2} alt="Description" h='30vh' mb='10' rounded='lg' />
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </Flex>
      </Box>
      
    </Flex>

    
  )
}

export default Trial