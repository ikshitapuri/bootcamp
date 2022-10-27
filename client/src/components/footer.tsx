import { 
  Box, 
  Grid, 
  GridItem, 
  Image, 
  Modal, 
  ModalOverlay, 
  ModalContent,  
  ModalHeader, 
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import Doc from "./doc";

const DocumentsFooter = () => {

  const [documents, updateDocuments] = useState(Array())
  const [isOpen, updateOpen] = useState(false)
  const [activeIndex, updateActiveIndex] = useState(-1)
  const [docText, updateText] = useState('')

  const onClose = () => {
    updateOpen(false)
  }

  const onSave = (index) => {
    if (documents[index] != docText) {
      var newDocuments = [...documents]
      newDocuments[index] = docText
      updateDocuments(newDocuments)
    }
    updateOpen(false)
    updateText('')
  }

  const onDelete = (index) => {
    var newDocuments = [...documents]
    newDocuments.splice(index, 1)
    updateDocuments([...newDocuments])
  }

  const onTapDoc = (index) => {
    updateText(documents[index])
    updateActiveIndex(index)
    updateOpen(true)
  }

  return (
    <>
    <Box paddingY={50}>
            <Grid
              templateColumns={'repeat(6, 1fr)'}
              gap='3'
              justifyItems={'center'}
            >
                <GridItem>
                <Box borderRadius={10} as = "button" bgColor={'blue'} height={150} width={150} onClick={() => updateDocuments([...documents, ""])}>
                  <Image src="/new-doc-button.svg" alt="Blue create document button" />
                </Box>
                </GridItem>
                {documents.map((text, index) => {return <GridItem onClick={() => {onTapDoc(index)}}><Doc onDelete= {() => onDelete(index)} docText={text}/></GridItem>})}
            </Grid>
    </Box>
    <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Document</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Textarea 
        placeholder='Enter some text.' 
        value={docText}
        onChange={(event) => {
          updateText(event.target.value);
        }}
        />
      </ModalBody>
      <ModalFooter>
        <Button onClick={() => {onSave(activeIndex)
          updateActiveIndex(-1)
        }} variant='solid'>Save</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
  </>
  );
};

export default DocumentsFooter;