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
function FormEmail({title}) {
 const { isOpen, onOpen, onClose } = useDisclosure()
 const initialRef = React.useRef()
  const finalRef = React.useRef()
 return (
  <>
<Button style={{background: "none",width:"100%"}} onClick={onOpen}>{title}</Button>
<Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>Contact us</ModalHeader>
    <ModalCloseButton />
    <ModalBody pb={6}>
     <Text mb='1rem'>Send us your message and we will get back to you</Text>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input ref={initialRef} placeholder='Name' />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Email</FormLabel>
        <Input placeholder='Email' />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Message</FormLabel>
        <Textarea placeholder='Message' h={200}/>
      </FormControl>
    </ModalBody>
    <ModalFooter>
      <Button colorScheme='blue' mr={3}>
        send
      </Button>
      <Button onClick={onClose}>Cancel</Button>
    </ModalFooter>
  </ModalContent>
</Modal>
  </>
 )
}

export default FormEmail
