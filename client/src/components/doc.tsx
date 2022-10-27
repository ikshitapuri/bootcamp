import { Box, Image, Text, Button, } from "@chakra-ui/react";

interface docProps {
  docText: string,
  onDelete: any,
}

const Doc = (props: docProps) => {

  return (
    <Box display={"flex"} flexDirection={"column"} as= {'button'} bg={'lightGrey'} borderColor={'darkGrey'} borderWidth={1} height={150} width={150} borderRadius={10}>
        <Button paddingLeft={2} variant= {"unstyled"} onClick = {(e) => {
          props.onDelete()
          e.stopPropagation()
          }}>
          <Image src="/cross.svg" alt={'delete'}/>
        </Button>
        <Text alignSelf={"center"} paddingX={5}>{props.docText == "" ? "Tap to edit." : props.docText.length > 40 ? props.docText.substring(0, 40) + '...'
          : props.docText}</Text>
    </Box>
  );
};

export default Doc;