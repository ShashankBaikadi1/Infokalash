
import { Button, Flex, Heading, Spacer, Text, HStack, Image, useBreakpointValue } from "@chakra-ui/react";
import logo from '../../assets/logo.png';

const Header = () => {
  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  return (
    <Flex position="sticky" top="0" zIndex="1000" bg="white" p={isSmallScreen ? '5px' : '10px'} alignItems="center" className="h-20" border={'1px'} borderColor={'gray.200'} >

      <Image src={logo} boxSize={isSmallScreen ? "30px" : "50px"} alt="Logo" mr="10px" ml="50px" />
      <Heading to="/" fontSize={'25px'} ml="10px">Infokalash</Heading>

      <Spacer />
      <HStack spacing={isSmallScreen ? 2 : 5}>
        <Text to="/home" p={2} _hover={{ color: 'blue.500', transform: 'scale(1.05)' }}>Home</Text>
        <Text to="/services" p={2} _hover={{ color: 'blue.500', transform: 'scale(1.05)' }}>Services</Text>
        <Text to="/solutions" p={2} _hover={{ color: 'blue.500', transform: 'scale(1.05)' }}>Solutions</Text>
        <Text to="/partners" p={2} _hover={{ color: 'blue.500', transform: 'scale(1.05)' }}>Partners</Text>
        <Text to="/about" p={2} _hover={{ color: 'blue.500', transform: 'scale(1.05)' }}>About</Text>
        <Button to="/login" bg='#1d4ed8'
          borderColor='#ccd0d5'
          color='#ffffff'  >Contact Us</Button>
      </HStack>
    </Flex>
  );
}

export default Header;