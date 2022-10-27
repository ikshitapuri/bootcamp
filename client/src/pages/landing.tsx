import type { NextPage } from "next";
import NavBar from "../components/nav-bar";
import { Box, VStack , Heading} from "@chakra-ui/react";
import DocumentsFooter from "../components/footer";

const Landing: NextPage = () => {
  return (
    <>
      <NavBar />
      <Box bgColor={'lightGrey'} alignContent={'center'} paddingY={20}>
        <VStack>
            <Heading variant={"h1"}>Create. Explore.</Heading>
            <Heading variant={"h2"}>The document editing software you've been waiting for</Heading>
        </VStack>
      </Box>
      <DocumentsFooter/>
    </>
  );
};

export default Landing;