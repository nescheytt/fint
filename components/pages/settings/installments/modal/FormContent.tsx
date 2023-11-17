import React from 'react';
import { FormControl, FormLabel, HStack, InputGroup, InputRightElement, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import { HelpCircle, Info } from 'lucide-react';
import SelectTheme from '../../../../ui/Select';
import InputTheme from '../../../../ui/Input';

const optionsFrecuency = [
  { value: 'daily', label: 'Diaria' },
  { value: 'monthly', label: 'Mensual' },
  { value: 'yearly', label: 'Anual' }
];

interface Props {
  initialRef: React.MutableRefObject<null>;
};

const FormContent: React.FC<Props> = ({ initialRef }) => {
  function handlerSubmit({ values, actions }: any) {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))
      actions.setSubmitting(false)
    }, 1000)
  };
  
  return (
    <Formik initialValues={{}} onSubmit={(values, actions) => handlerSubmit({ values, actions })}>
      <Form>
        <Stack spacing={6}>
          <SimpleGrid columns={1} spacing={5}>
            <Field name='title'>
              {({ field }: any) => (
                <FormControl>
                  <FormLabel>Título</FormLabel>
                  <InputTheme {...field} type="text" ref={initialRef} placeholder="Ej.: Cuota jardín maternal" />
                </FormControl>
              )}
            </Field>

            <Field name='initdate'>
              {({ field }: any) => (
                <FormControl>
                  <FormLabel>Fecha de inicio del ciclo de facturación</FormLabel>
                  <InputTheme {...field} type="date" />
                </FormControl>
              )}
            </Field>
          </SimpleGrid>

          <SimpleGrid columns={[1, 1, 2]} spacing={5}>
            <Field name='frecuency'>
              {({ field }: any) => (
                <FormControl>
                  <FormLabel>Frecuencia</FormLabel>
                  <SelectTheme {...field} options={optionsFrecuency} placeholder="Mensual" />
                </FormControl>
              )}
            </Field>

            <Field name='quantity'>
              {({ field }: any) => (
                <FormControl>
                  <FormLabel>Cantidad de cuotas</FormLabel>
                  <InputGroup>
                    <InputTheme {...field} type="number" pr={10} />
                    <InputRightElement height="44px" children={<HelpCircle color="gray" size={16} />} />
                  </InputGroup>
                </FormControl>
              )}
            </Field>

            <Field name='sendbill'>
              {({ field }: any) => (
                <FormControl>
                  <FormLabel>Envio factura</FormLabel>
                  <InputGroup>
                    <InputTheme {...field} type="number" pr={120} />
                    <InputRightElement width={120} height="44px">
                      <Text>de cada mes</Text>
                    </InputRightElement>
                  </InputGroup>
                  <Text color="grayIron.600" mt={1}>Puedes elegir el día del mes en que se cobrará la suscripción.</Text>
                </FormControl>
              )}
            </Field>

            <Field name='expirationbill'>
              {({ field }: any) => (
                <FormControl>
                  <FormLabel>Vencimiento de la factura</FormLabel>
                  <InputGroup>
                    <InputTheme {...field} type="number" pr={120} />
                    <InputRightElement width={120} height="44px" children={<Text>de cada mes</Text>} />
                  </InputGroup>
                  <Text color="grayIron.600" mt={1}>Puedes elegir el día del mes en que se cobrará la suscripción.</Text>
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
            <Info color="purple" size={40} height="20px" />
            <Stack alignItems="flex-start">
              <Text lineHeight="20px" color="fint.800">
                Esta factura se creará y enviará <b>todos los meses</b> el <b>día 1 y vencerá el día 15</b>, a partir del <b>1 Mar 2023</b> y la última factura se enviará el <b>1 de Dic 2023</b>
              </Text>
            </Stack>
          </HStack>
        </Stack>
      </Form>
    </Formik>
  )
};

export default FormContent;