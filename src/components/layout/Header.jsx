// import { Button, Flex, Heading, Spacer, Text, HStack, Image, useBreakpointValue } from "@chakra-ui/react";
// // import logo from '../../assets/logo.png';
// import logo from '../../assets/images/v_IK logo.png';

// const Header = () => {
//   const isSmallScreen = useBreakpointValue({ base: true, md: false });

//   return (
//     <div className="font-geist overflow-x-0">
//       <Flex position="sticky" top="0" zIndex="1000" bg="white" p={isSmallScreen ? '5px' : '10px'} alignItems="center" className="h-20" border={'1px'} borderColor={'gray.200'}>
//         <Image src={logo} boxSize={isSmallScreen ? "30px" : "50px"} alt="Logo" mr="10px" ml="50px" />
//         <Heading to="/" fontSize={'25px'} ml="10px" fontFamily={'roboto'}>Infokalash</Heading>
//         <Spacer />
//         <HStack spacing={isSmallScreen ? 2 : 5}>
//           <Text to="/home" p={2} _hover={{ color: 'blue.500', transform: 'scale(1.05)' }}>Home</Text>
//           <Text to="/services" p={2} _hover={{ color: 'blue.500', transform: 'scale(1.05)' }}>Services</Text>
//           <Text to="/solutions" p={2} _hover={{ color: 'blue.500', transform: 'scale(1.05)' }}>Solutions</Text>
//           <Text to="/partners" p={2} _hover={{ color: 'blue.500', transform: 'scale(1.05)' }}>Partners</Text>
//           <Text to="/about" p={2} _hover={{ color: 'blue.500', transform: 'scale(1.05)' }}>About</Text>
//           <Button to="/login" bg='#000000' borderColor='#ccd0d5' color='#ffffff'>Contact Us</Button>
//         </HStack>
//       </Flex>
//     </div>
//   );
// }

// export default Header;
//#ffffff
//bg #1d4ed8

import React from 'react';
import logo from '../../assets/images/new_logo.png';
import { Button} from "@chakra-ui/react";
import { useState } from 'react';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-white py-4 px-6 flex items-center justify-between shadow-md">
  
      <a href="/" className="flex items-center">
        <img src={logo} alt="Cleanlab Logo" className="h-8 md:h-10 lg:h-12" loading="eager" />
        <span className="ml-2 text-xl md:text-2xl font-bold lg:text-3xl font-geist">Infokalash</span>
      </a>


      <div className="hidden md:flex space-x-6 ">

        
      <span className="text-gray-700 hover:text-gray-900 transition-colors duration-300 font-semibold ">
  <a href="/solutions/">Home</a>
</span>

        <span className="text-gray-700 hover:text-gray-900 transition-colors duration-300 font-semibold">
          <a href="/pricing/">Services</a>
        </span>
        <span className="text-gray-700 hover:text-gray-900 transition-colors duration-300 font-semibold">
          <a href="/testimonials/">Solutions</a>
        </span>
        <span className="text-gray-700 hover:text-gray-900 transition-colors duration-300 font-semibold">
          <a href="/learn/">Partners</a>
        </span>
        <span className="text-gray-700 hover:text-gray-900 transition-colors duration-300 font-semibold">
          <a href="/company/">About</a>
        </span>
        
      </div>

   
      <div className="flex items-center space-x-4">
      <Button to="/login" bg='#000000' borderColor='#ccd0d5' color='#ffffff' size={['sm', 'md', 'lg']}>Contact Us</Button>

      </div>

       <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-gray-900 transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

  
{isOpen && (
      
        <div className="flex flex-col absolute top-full right-0 w-[15vh] text-center border shadow-lg py-2">
  <span className="text-gray-700 hover:text-gray-900 transition-colors duration-300 font-semibold">
    <a href="/solutions/">Home</a>
  </span>
  <span className="text-gray-700 hover:text-gray-900 transition-colors duration-300 font-semibold">
    <a href="/pricing/">Services</a>
  </span>
  <span className="text-gray-700 hover:text-gray-900 transition-colors duration-300 font-semibold">
    <a href="/testimonials/">Solutions</a>
  </span>
  <span className="text-gray-700 hover:text-gray-900 transition-colors duration-300 font-semibold">
    <a href="/learn/">Partners</a>
  </span>
  <span className="text-gray-700 hover:text-gray-900 transition-colors duration-300 font-geist font-semibold">
    <a href="/company/">About</a>
  </span>
 
</div>
      )}
    </nav>
  );
};

export default Header;

