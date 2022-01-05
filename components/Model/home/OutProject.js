import React from 'react'
import { 
 Modal,
 ModalOverlay,
 ModalContent,
 ModalHeader,
 ModalCloseButton,
 ModalBody,
 ModalFooter,
 Button,
 FormLabel,
 FormControl,
 Input,
 useDisclosure } from "@chakra-ui/react";
 import { Grid, GridItem,Image, Text,Textarea ,Container,SimpleGrid  } from "@chakra-ui/react"
function OutProject({title}) {
 const { isOpen, onOpen, onClose } = useDisclosure()
 const initialRef = React.useRef()
  const finalRef = React.useRef()

  const [size, setSize] = React.useState('xl')



  const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full']

 return (
  <>
      <Button style={{background: "none",width:"100%"}} onClick={() => onOpen()}>Out Reach Project</Button>
      <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Out Reach Project</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           Hldsfjksdfjkl
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
  </>
 )
}

export default OutProject
