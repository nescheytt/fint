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
  HStack,
  useRadioGroup,
  Box,
  useRadio,
  UseModalProps,
} from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Formik, Form, Field } from "formik";
import InputTheme from "../ui/Input";

const RadioCard = (props: any) => {
  const { getInputProps, getCheckboxProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Box as='label' w="full">
      <input {...input} />
      <Box
        {...checkbox}
        color="gray.500"
        cursor='pointer'
        borderRadius="md"
        fontWeight={600}
        textAlign="center"
        _checked={{
          bg: 'white',
          color: 'fint.600',
          boxShadow: 'sm'
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  )
}

interface Props extends UseModalProps {
  finalRef: RefObject<any>
}

const ModalNewPaymentMethods: FC<Props> = ({ isOpen, onClose, finalRef }) => {
  const initialRef = useRef(null);
  const options: string[] = ['Cuenta bancaria', 'Tarjeta de crédito / débit'];

  function handlerSubmit({ values, actions }: any) {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))
      actions.setSubmitting(false)
    }, 1000)
  };

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'framework',
    defaultValue: 'Cuenta bancaria',
    onChange: console.log,
  });

  const group = getRootProps();

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
          <Text lineHeight="40px" textAlign="center">Agregar medio de pago</Text>
        </ModalHeader>

        <ModalBody px={6} pt={0} pb={6} borderBottom="1px solid" borderColor="gray.200">
          <Formik initialValues={{}} onSubmit={(values, actions) => handlerSubmit({ values, actions })}>
            <Form>
              <Stack spacing={6}>
                <HStack {...group} p="4px" bgColor="gray.50" border="1px solid" borderColor="gray.100" borderRadius="lg">
                  {options.map((value) => {
                    const radio = getRadioProps({ value })
                    return (
                      <RadioCard key={value} {...radio}>
                        {value}
                      </RadioCard>
                    )
                  })}
                </HStack>

                <SimpleGrid columns={1} spacing={5}>
                  <Field name='holder'>
                    {({ field }: any) => (
                      <FormControl>
                        <FormLabel>Titular de la tarjeta</FormLabel>
                        <InputTheme {...field} type="text" ref={initialRef} placeholder="Ingresá el nombre del titular" />
                      </FormControl>
                    )}
                  </Field>

                  <Field name='cardnumber'>
                    {({ field }: any) => (
                      <FormControl>
                        <FormLabel>Número de tarjeta</FormLabel>
                        <InputTheme {...field} type="number" placeholder="Ingresá el número de tarjeta" />
                      </FormControl>
                    )}
                  </Field>
                </SimpleGrid>

                <SimpleGrid columns={[1, 1, 2]} spacing={5}>
                  <Field name='duedata'>
                    {({ field }: any) => (
                      <FormControl>
                        <FormLabel>Fecha de vencimiento</FormLabel>
                        <InputTheme {...field} type="date" />
                      </FormControl>
                    )}
                  </Field>

                  <Field name='securitycode'>
                    {({ field }: any) => (
                      <FormControl>
                        <FormLabel>Código de seguridad</FormLabel>
                        <InputTheme {...field} type="password" placeholder="•••" />
                      </FormControl>
                    )}
                  </Field>
                </SimpleGrid>

                <HStack
                  alignItems="flex-start"
                  spacing={3}
                  m={14}
                  p={4}
                  bgColor="fint.100"
                  border="1px solid"
                  borderColor="fint.200"
                  borderRadius="xl"
                >
                  <InfoOutlineIcon mt={1} color="fint.800" />
                  <Stack alignItems="flex-start">
                    <Text lineHeight="20px" color="fint.800">Necesita la autorización firmada de su cliente para guardar su tarjeta y protegerlo de la responsabilidad de devolución de cargo. Haga que su cliente complete y firme este formulario, luego guárdelo de manera segura de acuerdo con PCI-DSS y los requisitos de privacidad de datos.</Text>
                    <Button colorScheme="fint" variant="link" onClick={() => console.log('Descargar formulario')}>Descargar formulario</Button>
                  </Stack>
                </HStack>
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

export default ModalNewPaymentMethods;