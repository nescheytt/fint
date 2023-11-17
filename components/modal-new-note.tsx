import { Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Button, Textarea } from "@chakra-ui/react";
import { RefObject, useRef, useState } from "react";

interface ModalNewNoteProps {
  isOpen: boolean
  onClose: () => void
  finalRef: RefObject<any>
}

export const ModalNewNote = ({ isOpen, onClose, finalRef }: ModalNewNoteProps) => {
  const [count, setCount] = useState(0);
  const initialRef = useRef(null)

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCount(event.target.value.length);
  }

  return (
    <Modal
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      motionPreset="slideInBottom"
      scrollBehavior="inside"
      size={['full', 'md', '2xl']}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader m={6} p={0} mb={0} position="relative">
          <ModalCloseButton top={1} left={0} />
          <Text lineHeight="40px" textAlign="center">Agregar nota</Text>
          <Button colorScheme="fint" variant="solid" position="absolute" top={0} right={0}>Guardar</Button>
        </ModalHeader>

        <ModalBody p={6}>
          <Textarea colorScheme="fint" ref={initialRef} maxLength={240} mb={1} placeholder="Nota" onChange={(event) => handleChange(event)} resize="none" fontSize={{ base: 'md', md: 'sm' }} />
          <Text color="gray.600">{count}/240</Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
};
