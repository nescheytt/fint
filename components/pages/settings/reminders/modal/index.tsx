import React from 'react';
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, UseModalProps } from '@chakra-ui/react';
import ModalFormContent from './FormContent';

const ModalNewReminder: React.FC<UseModalProps> = ({ isOpen, onClose }) => {
  const initialRef = React.useRef(null);

  return (
    <Modal
      initialFocusRef={initialRef}
      isOpen={isOpen}
      onClose={onClose}
      closeOnOverlayClick={false}
      motionPreset="slideInBottom"
      scrollBehavior="inside"
      size={['full', 'md', '2xl']}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader px={6} pt={4} pb={3} position="relative" boxShadow="sm">
          <ModalCloseButton top="16px" left="24px" w="40px" h="40px" />
          <Text lineHeight="40px" textAlign="center">Crear recordatorio</Text>
        </ModalHeader>

        <ModalBody py={6}>
          <Stack spacing={8}>
            <ModalFormContent initialRef={initialRef} />
          </Stack>
        </ModalBody>

        <ModalFooter px={6} py={4} flexDirection={{ base: 'column', md: 'row' }} justifyContent="space-between" borderTop="1px solid" borderColor="gray.200">
          <Button w={{ base: 'full', md: 'auto' }} colorScheme="fint" isLoading={false} type='submit' mb={{ base: 4, md: 0 }} order={{ base: 0, md: 1 }}>Guardar cambios</Button>
          <Button w={{ base: 'full', md: 'auto' }} colorScheme="grayIron" onClick={onClose}>Cancelar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
};

export default ModalNewReminder;
