import React from "react"
import {
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Stack,
  SimpleGrid,
  Text,
} from "@chakra-ui/react"
import { Formik, Form, Field } from "formik"
import TextareaQuill from "../../../../TextareaQuill"
import SelectTheme from "../../../../ui/Select"
import InputTheme from "../../../../ui/Input"

const optionsTypesReminders = [
  { value: "mail", label: "Mail" },
  { value: "message", label: "Mensaje" },
  { value: "call", label: "Llamada" },
]

const optionsDateReminders = [
  { value: "sameday", label: "El mismo día de la fecha de vencimiento" },
  { value: "daybefore", label: "Días antes de la fecha de vencimiento" },
  { value: "dayafter", label: "Días después de la fecha de vencimiento" },
]

interface Props {
  initialRef: React.MutableRefObject<null>
}

const FormContent: React.FC<Props> = ({ initialRef }) => {
  function handlerSubmit({ values, actions }: any) {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))
      actions.setSubmitting(false)
    }, 1000)
  }

  return (
    <Formik
      initialValues={{}}
      onSubmit={(values, actions) => handlerSubmit({ values, actions })}
    >
      <Form>
        <Stack spacing={6}>
          <Grid templateColumns="repeat(24, 1fr)" gap={{ base: 3, md: 6 }}>
            <GridItem colSpan={{ base: 24, md: 7 }}>
              <Field name="type">
                {({ field }: any) => (
                  <FormControl>
                    <FormLabel>Tipo de recordatorio</FormLabel>
                    <SelectTheme
                      {...field}
                      ref={initialRef}
                      options={optionsTypesReminders}
                      placeholder="WhatsApp"
                    />
                  </FormControl>
                )}
              </Field>
            </GridItem>

            <GridItem colSpan={{ base: 24, md: 17 }}>
              <Field name="quantity">
                {({ field }: any) => (
                  <FormControl>
                    <FormLabel>Tipo de recordatorio</FormLabel>
                    <HStack spacing={0}>
                      <InputTheme
                        {...field}
                        type="number"
                        placeholder="0"
                        maxWidth="75px"
                        borderRightRadius={0}
                      />
                      <SelectTheme
                        {...field}
                        ref={initialRef}
                        options={optionsDateReminders}
                        placeholder="Dias después de la fecha de vencimiento"
                        borderLeftRadius={0}
                      />
                    </HStack>
                  </FormControl>
                )}
              </Field>
            </GridItem>
          </Grid>

          <Stack spacing={5}>
            <Text fontSize="md" fontWeight={600}>
              Mensaje
            </Text>

            <SimpleGrid columns={1} spacing={5}>
              <Field name="subject">
                {({ field }: any) => (
                  <FormControl>
                    <FormLabel>Asunto</FormLabel>
                    <InputTheme
                      {...field}
                      type="text"
                      placeholder="Mejora la gestión de cobros y pagos de [company]"
                    />
                  </FormControl>
                )}
              </Field>

              <Field name="message">
                {({ field }: any) => (
                  <FormControl>
                    <FormLabel>Mensaje</FormLabel>
                    <TextareaQuill {...field} />
                  </FormControl>
                )}
              </Field>
            </SimpleGrid>
          </Stack>
        </Stack>
      </Form>
    </Formik>
  )
}

export default FormContent
