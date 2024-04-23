import { Box, Button, Flex, Heading, Spacer,Text,HStack } from "@chakra-ui/react"


const Header = () => {
  return (
    <div className=" h-20">
<Flex bg="gray.200" p='10px' alignItems="center">
  <Heading>Infokalash</Heading>
  <Spacer/>
  <HStack bg="gray.200" p='10px' alignItems="center">
  <Box bg='gray.200' p='10px'> box</Box>

    <Text>Text</Text>
    <Button colorScheme="blue">Button</Button>
  </HStack>
</Flex>
    </div>
  )
}

export default Header
