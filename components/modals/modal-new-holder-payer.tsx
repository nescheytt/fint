import { FC, RefObject, useRef } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  SimpleGrid,
  Stack,
  ModalFooter,
  UseModalProps,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import InputTheme from "../ui/Input";

interface Props extends UseModalProps {
  finalRef: RefObject<any>;
};

const ModalNewHolderPayer: FC<Props> = ({ isOpen, onClose, finalRef }) => {
  const initialRef = useRef(null);

  function handlerSubmit({ values, actions }: any) {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))
      actions.setSubmitting(false)
    }, 1000);
  };

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
        <ModalHeader px={6} pt={4} pb={3} mb={6} position="relative" boxShadow="sm">
          <ModalCloseButton top="16px" left="24px" w="40px" h="40px" />
          <Text lineHeight="40px" textAlign="center">Agregar responsable</Text>
        </ModalHeader>

        <ModalBody px={6} pt={0} pb={6} borderBottom="1px solid" borderColor="gray.200">
          <Formik initialValues={{}} onSubmit={(values, actions) => handlerSubmit({ values, actions })}>
            <Form>
              <Stack spacing={6}>
                <SimpleGrid columns={[1, 1, 2]} spacing={5}>
                  <Field name='name'>
                    {({ field }: any) => (
                      <FormControl>
                        <FormLabel>Nombre</FormLabel>
                        <InputTheme {...field} type="text" ref={initialRef} placeholder="Ingresá un nombre" />
                      </FormControl>
                    )}
                  </Field>

                  <Field name='surname'>
                    {({ field }: any) => (
                      <FormControl>
                        <FormLabel>Apellido</FormLabel>
                        <InputTheme {...field} type="text" placeholder="Ingresá un apellido" />
                      </FormControl>
                    )}
                  </Field>

                  <Field name='email'>
                    {({ field }: any) => (
                      <FormControl>
                        <FormLabel>Email</FormLabel>
                        <InputTheme {...field} type="email" placeholder="Ingresá un email" />
                      </FormControl>
                    )}
                  </Field>

                  <Field name='whatsapp'>
                    {({ field }: any) => (
                      <FormControl>
                        <FormLabel>WhatsApp</FormLabel>
                        <InputTheme {...field} type="tel" placeholder="Ingresá un número de WhatsApp" />
                      </FormControl>
                    )}
                  </Field>
                </SimpleGrid>

                <SimpleGrid columns={1} spacing={5}>
                  <Text fontSize="md" fontWeight={600}>Datos de facturación:</Text>
                  <Field name='fiscalnumber'>
                    {({ field }: any) => (
                      <FormControl>
                        <FormLabel>CUIT / CUIL</FormLabel>
                        <InputTheme {...field} type="email" placeholder="Ingresá un cuit o cuil" />
                      </FormControl>
                    )}
                  </Field>

                  <Field name='address'>
                    {({ field }: any) => (
                      <FormControl>
                        <FormLabel>Dirección</FormLabel>
                        <InputTheme {...field} placeholder="Ingresá una dirección" />
                      </FormControl>
                    )}
                  </Field>
                </SimpleGrid>

                <SimpleGrid columns={[1, 1, 2]} spacing={5}>
                  <Field name='location'>
                    {({ field }: any) => (
                      <FormControl>
                        <FormLabel>Localidad</FormLabel>
                        <InputTheme {...field} placeholder="Ingresá una localidad" />
                      </FormControl>
                    )}
                  </Field>

                  <Field name='province'>
                    {({ field }: any) => (
                      <FormControl>
                        <FormLabel>Provincia</FormLabel>
                        <InputTheme {...field} placeholder="Ingresá una provincia" />
                      </FormControl>
                    )}
                  </Field>
                </SimpleGrid>
              </Stack>
            </Form>
          </Formik>
        </ModalBody>

        <ModalFooter px={6} py={4} flexDirection={{ base: 'column', md: 'row' }} justifyContent="space-between">
          <Button w={{ base: 'full', md: 'auto' }} colorScheme="fint" isLoading={false} type='submit' mb={{ base: 4, md: 0 }} order={{ base: 0, md: 1 }}>Guardar cambios</Button>
          <Button w={{ base: 'full', md: 'auto' }} colorScheme="grayIron" onClick={onClose}>Cancelar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
};

export default ModalNewHolderPayer;