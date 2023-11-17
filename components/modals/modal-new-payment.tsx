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
  Box,
  Switch,
  HStack,
  InputLeftElement,
  InputGroup,
  Circle,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import { DragEvent, RefObject, useRef, useState } from "react";
import { Icons } from '../icons'
import { UploadCloud } from "lucide-react";
import SelectTheme from "../ui/Select";
import InputTheme from "../ui/Input";

interface Args {
  isOpen: boolean
  onClose: () => void
  finalRef: RefObject<any>
}

const handlerSubmit = ({ values, actions }: any) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))
      actions.setSubmitting(false)
    }, 1000)
}

const optionsBills = [
  { value: '47C69A0A-0009', label: '47C69A0A-0009' },
  { value: '33728055-0010', label: '33728055-0010' },
  { value: '9488C19A-00010', label: '9488C19A-00010' }
];

const optionsPaymentMethods = [
  { value: 'creditcard', label: 'Tarjeta de crédito' },
  { value: 'deposit', label: 'Deposito bancario' },
  { value: 'cash', label: 'Efectivo' }
];

export const ModalNewPayment = ({ isOpen, onClose, finalRef }: Args) => {
  const [dragging, setDragging] = useState(false);
  const [isOn, setIsOn] = useState(false);
  const initialRef = useRef<HTMLSelectElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDragLeave = (e: { preventDefault: () => void; stopPropagation: () => void; }) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  const handleDragOver = (e: { preventDefault: () => void; stopPropagation: () => void; }) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: { preventDefault: () => void; stopPropagation: () => void; dataTransfer: { files: Iterable<unknown> | ArrayLike<unknown>; }; }) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
    const files = Array.from(e.dataTransfer.files);
    // Aquí puedes hacer lo que quieras con los archivos que se han soltado
  };

  const handleFileUpload = () => {
    fileInputRef.current?.click();
    // Aquí puedes hacer lo que quieras con el archivo que se ha cargado
  };

  const handleToggle = () => {
    setIsOn(!isOn);
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
          <Text lineHeight="40px" textAlign="center">Agregar pago</Text>
        </ModalHeader>

        <ModalBody px={6} pt={0} pb={6} borderBottom="1px solid" borderColor="gray.200">
          <Formik initialValues={{}} onSubmit={(values, actions) => handlerSubmit({ values, actions })}>
            <Form>
              <Stack spacing={6}>
                <SimpleGrid columns={1} spacing={5}>
                  <Field name='bill'>
                    {({ field }: any) => (
                      <FormControl>
                        <FormLabel>Factura</FormLabel>
                        <SelectTheme {...field} ref={initialRef} options={optionsBills} placeholder="Seleccionar" />
                      </FormControl>
                    )}
                  </Field>
                </SimpleGrid>

                <SimpleGrid columns={[1, 1, 2]} spacing={5}>
                  <Field name='amount'>
                    {({ field }: any) => (
                      <FormControl>
                        <FormLabel>Monto</FormLabel>
                        <InputGroup>
                          <InputLeftElement pointerEvents="none" color="grayIron.600" fontSize="md" children="$" />
                          <InputTheme {...field} placeholder="Ingresá un monto" pl={10} />
                        </InputGroup>
                      </FormControl>
                    )}
                  </Field>

                  <Field name='date'>
                    {({ field }: any) => (
                      <FormControl>
                        <FormLabel>Fecha</FormLabel>
                        <InputTheme {...field} type="date" />
                      </FormControl>
                    )}
                  </Field>

                  <Field name='paymentmethod'>
                    {({ field }: any) => (
                      <FormControl>
                        <FormLabel>Medio de pago</FormLabel>
                        <SelectTheme {...field} options={optionsPaymentMethods} placeholder="Seleccionar" />
                      </FormControl>
                    )}
                  </Field>

                  <Field name='whatsapp'>
                    {({ field }: any) => (
                      <FormControl>
                        <FormLabel>WhatsApp</FormLabel>
                        <InputGroup>
                          <InputLeftElement pointerEvents='none' children={<Icons.Whatsapp w="16px" h="16px" color='grayIron.500' />} />
                          <InputTheme {...field} type="tel" placeholder="Ingresá un número de WhatsApp" pl={10} />
                        </InputGroup>
                      </FormControl>
                    )}
                  </Field>
                </SimpleGrid>

                <Stack spacing={5}>
                  <Text fontSize="md" fontWeight={600}>Datos de facturación:</Text>

                  <Box
                    border="1px solid"
                    borderColor={dragging ? "fint.600" : "gray.200"}
                    borderRadius="md"
                    height="126px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    onDragEnter={handleDragEnter}
                    onDragLeave={handleDragLeave}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                  >
                    <Box textAlign="center">
                      {dragging ? (
                        <Text>Arrastra un archivo aquí</Text>
                      ) : (
                        <Stack alignItems="center">
                          <Circle size="40px" bgColor="gray.50">
                            <Box color="gray.600">
                              <UploadCloud size={16} />
                            </Box>
                          </Circle>
                          <HStack spacing={1} justifyContent="center">
                            <Button colorScheme="fint" variant="link" onClick={handleFileUpload}>Click to upload</Button>
                            <InputTheme ref={fileInputRef} type="file" style={{ display: "none" }} onChange={handleFileUpload} />
                            <Text color="gray.600">or drag and drop</Text>
                          </HStack>
                          <Text fontSize="xs" color="gray.600">SVG, PNG, JPG or GIF (max. 800x400px)</Text>
                        </Stack>
                      )}
                    </Box>
                  </Box>

                  <HStack alignItems="flex-start" spacing={2}>
                    <Switch colorScheme="fint" isChecked={isOn} onChange={handleToggle} />
                    <Stack spacing={0}>
                      <Text color="gray.700" fontWeight={600}>Enviar notificación del pago</Text>
                      <Text color="gray.600">El cliente recibirá una confirmación de la contabilización del pago justo a los detalles de la factura.</Text>
                    </Stack>
                  </HStack>
                </Stack>
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
