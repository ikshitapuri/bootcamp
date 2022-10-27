import { Box, Image, Heading, HStack, Spacer, Button, } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Box px={49} py={30} bg="lightGrey">
      <HStack align="center" spacing={4}>
        <Image src="/logo.svg" w={10} />
        <Heading color="darkGrey" fontSize="2xl">
          Notiom
        </Heading>
        <Spacer />
        <HStack color="white" fontSize="2xs" fontWeight="semibold">
          <Button bgColor={'blue'}>
            Create
          </Button>
        </HStack>
      </HStack>
    </Box>
  );
};

export default NavBar;