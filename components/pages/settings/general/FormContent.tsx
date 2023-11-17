import React from 'react';
import Image from 'next/image';
import { Box, Button, Circle, Grid, GridItem, Flex, HStack, Stack, StackDivider, Text } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import { UploadCloud } from 'lucide-react';
import logoFint from '@/public/logo-fint.svg';
import InputTheme from '../../../ui/Input';

const FormContent: React.FC = () => {
  const [dragging, setDragging] = React.useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  function handleDragEnter(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  function handleDragLeave(e: { preventDefault(): void; stopPropagation(): void; }) {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  function handleDragOver(e: { preventDefault(): void; stopPropagation(): void; }) {
    e.preventDefault();
    e.stopPropagation();
  };

  function handleDrop(e: { preventDefault(): void; stopPropagation(): void; dataTransfer: { files: Iterable<unknown> | ArrayLike<unknown>; }; }) {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
    const files = Array.from(e.dataTransfer.files);
    console.log({ files })
  };

  function handleFileUpload() {
    const files = fileInputRef.current?.click();
    console.log({ files })
  };

  function handlerSubmit({ values, actions }: any) {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))
      actions.setSubmitting(false)
    }, 1000)
  };

  return (
    <Formik initialValues={{}} onSubmit={(values, actions) => handlerSubmit({ values, actions })}>
      <Form>
        <Stack divider={<StackDivider borderColor="grayIron.200" />} spacing={4}>
          <Grid templateColumns='repeat(24, 1fr)' gap={3}>
            <GridItem colSpan={{ base: 24, md: 6 }}>
              <Stack spacing={0}>
                <Text color="grayIron.700" fontWeight={500}>Nombre de la institución</Text>
                <Text color="grayIron.600">Appears on receipts, invoices, and more</Text>
              </Stack>
            </GridItem>
            <GridItem colSpan={{ base: 24, md: 18, lg: 10 }}>
              <InputTheme type="text" placeholder="Nombre" />
            </GridItem>
          </Grid>

          <Grid templateColumns='repeat(24, 1fr)' gap={3}>
            <GridItem colSpan={{ base: 24, md: 6 }}>
              <Stack spacing={0}>
                <Text color="grayIron.700" fontWeight={500}>Razón social</Text>
              </Stack>
            </GridItem>
            <GridItem colSpan={{ base: 24, md: 18, lg: 10 }}>
              <InputTheme type="text" placeholder="Nombre del Instituto SRL" />
            </GridItem>
          </Grid>

          <Grid templateColumns='repeat(24, 1fr)' gap={3}>
            <GridItem colSpan={{ base: 24, md: 6 }}>
              <Stack spacing={0}>
                <Text color="grayIron.700" fontWeight={500}>CUIT</Text>
              </Stack>
            </GridItem>
            <GridItem colSpan={{ base: 24, md: 18, lg: 10 }}>
              <InputTheme type="text" placeholder="CUIT" />
            </GridItem>
          </Grid>

          <Grid templateColumns='repeat(24, 1fr)' gap={3}>
            <GridItem colSpan={{ base: 24, md: 6 }}>
              <Stack spacing={0}>
                <Text color="grayIron.700" fontWeight={500}>Correo electrónico</Text>
              </Stack>
            </GridItem>
            <GridItem colSpan={{ base: 24, md: 18, lg: 10 }}>
              <InputTheme type="email" placeholder="Correo electrónico" />
            </GridItem>
          </Grid>

          <Grid templateColumns='repeat(24, 1fr)' gap={3}>
            <GridItem colSpan={{ base: 24, md: 6 }}>
              <Stack spacing={0}>
                <Text color="grayIron.700" fontWeight={500}>Nombre completo del responsable</Text>
              </Stack>
            </GridItem>
            <GridItem colSpan={{ base: 24, md: 18, lg: 10 }}>
              <InputTheme type="text" defaultValue="Margarita Flores" placeholder="Nombre responsable" />
            </GridItem>
          </Grid>

          <Grid templateColumns='repeat(24, 1fr)' gap={3}>
            <GridItem colSpan={{ base: 24, md: 6 }}>
              <Stack spacing={0}>
                <Text color="grayIron.700" fontWeight={500}>Número Fijo</Text>
              </Stack>
            </GridItem>
            <GridItem colSpan={{ base: 24, md: 18, lg: 10 }}>
              <InputTheme type="text" defaultValue="4281-6767" placeholder="Número fijo" />
            </GridItem>
          </Grid>

          <Grid templateColumns='repeat(24, 1fr)' gap={3}>
            <GridItem colSpan={{ base: 24, md: 6 }}>
              <Stack spacing={0}>
                <Text color="grayIron.700" fontWeight={500}>Número de WhatsApp</Text>
                <Text color="grayIron.600">Se enviaran las avisos de cobro e información relevante de la cuenta.</Text>
              </Stack>
            </GridItem>
            <GridItem colSpan={{ base: 24, md: 18, lg: 10 }}>
              <InputTheme type="text" defaultValue="1130742042" placeholder="Número whatsapp" />
            </GridItem>
          </Grid>

          <Grid templateColumns='repeat(24, 1fr)' gap={3}>
            <GridItem colSpan={{ base: 24, md: 6 }}>
              <Stack spacing={0} mr={{ lg: 8 }}>
                <Text color="grayIron.700" fontWeight={500}>Logo</Text>
                <Text color="grayIron.600">Apararecerá en el portal de padres y correos electrónicos.</Text>
              </Stack>
            </GridItem>
            <GridItem colSpan={{ base: 24, md: 18, lg: 10 }}>
              <Flex flexDirection={{ base: 'column', md: 'row' }} alignItems='flex-start'>
                <Box mt={5} mb={{ base: 8, md: 0 }} mr={{ md: 4, lg: 8 }}>
                  <Image src={logoFint} alt="Logo" />
                </Box>

                <Box
                  border="1px solid"
                  borderColor={dragging ? "fint.600" : "gray.200"}
                  borderRadius="md"
                  w='full'
                  height="126px"
                  bgColor="white"
                  p="16px 24px"
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
                          <InputTheme type="file" ref={fileInputRef} onChange={handleFileUpload} style={{ display: "none" }} />
                          <Text color="gray.600">or drag and drop</Text>
                        </HStack>
                        <Text fontSize="xs" color="gray.600">SVG, PNG, JPG or GIF (max. 800x400px)</Text>
                      </Stack>
                    )}
                  </Box>
                </Box>
              </Flex>
            </GridItem>
          </Grid>
        </Stack>
      </Form>
    </Formik>
  )
};

export default FormContent;