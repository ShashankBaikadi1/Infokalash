
// import { Box, Button, Flex, Heading, Spacer, Text, HStack,Image } from "@chakra-ui/react";
// // import { Link as RouterLink } from 'react-router-dom';
// import logo from '../../assets/logo.png';
// const Header = () => {
//   return (
//     <Flex bg="gray.200" p='10px' alignItems="center" className="h-20">
//             <Image src={logo} boxSize="50px" alt="Logo" mr="10px" />
//       <Heading  to="/">Infokalash</Heading>
//       <Spacer/>
//       <HStack spacing={5}>
//         {/* <Box bg='gray.200' p='10px'> box</Box> */}
//         <Text to="/about"  p={2} _hover={{ color: 'blue.500', transform: 'scale(1.05)' }}>Home</Text>
//         <Text to="/about"  p={2} _hover={{ color: 'blue.500', transform: 'scale(1.05)' }}>Services</Text>
//         <Text to="/about"  p={2} _hover={{ color: 'blue.500', transform: 'scale(1.05)' }}>Case Study</Text>
//         <Text to="/about"  p={2} _hover={{ color: 'blue.500', transform: 'scale(1.05)' }}>Partners</Text>
//         <Text to="/about"  p={2} _hover={{ color: 'blue.500', transform: 'scale(1.05)' }}>Blog</Text>
//         <Text  to="/contact"  p={2} _hover={{ color: 'blue.500', transform: 'scale(1.05)' }}>About</Text>
//         <Button  to="/login" colorScheme="blue">Contact Us</Button>
//       </HStack>
//     </Flex>
//   );
// }

// export default Header;

import { Box, Button, Flex, Heading, Spacer, Text, HStack, Image, useBreakpointValue } from "@chakra-ui/react";
import logo from '../../assets/logo.png';

const Header = () => {
  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  return (
    <Flex bg="" p={isSmallScreen ? '5px' : '10px'} alignItems="center" className="h-20" border={'1px'} borderColor={'gray.200'} >
   
      <Image src={logo} boxSize={isSmallScreen ? "30px" : "50px"} alt="Logo" mr="10px" ml="50px"/>
      <Heading to="/" fontSize={'25px'} ml="10px">Infokalash</Heading>

      <Spacer/>
      <HStack spacing={isSmallScreen ? 2 : 5}>
        <Text to="/about" p={2} _hover={{ color: 'blue.500', transform: 'scale(1.05)' }}>Home</Text>
        <Text to="/about" p={2} _hover={{ color: 'blue.500', transform: 'scale(1.05)' }}>Services</Text>
        <Text to="/about" p={2} _hover={{ color: 'blue.500', transform: 'scale(1.05)' }}>Case Study</Text>
        <Text to="/about" p={2} _hover={{ color: 'blue.500', transform: 'scale(1.05)' }}>Partners</Text>
        <Text to="/about" p={2} _hover={{ color: 'blue.500', transform: 'scale(1.05)' }}>Blog</Text>
        <Text to="/contact" p={2} _hover={{ color: 'blue.500', transform: 'scale(1.05)' }}>About</Text>
        <Button to="/login" colorScheme="blue">Contact Us</Button>
      </HStack>
    </Flex>
  );
}

export default Header;