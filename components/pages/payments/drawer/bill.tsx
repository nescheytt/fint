import NextLink from 'next/link'
import { Card, CardBody, Center, HStack, LinkBox, LinkOverlay, Stack, StackDivider, Text } from "@chakra-ui/react";
import { Download, FileDown } from 'lucide-react';
import { CardHeaderDrawer } from '../../../CardHeader';

export const Bill = () => {
  return (
    <Card border="1px solid" borderColor="grayIron.200" borderRadius="xl" bgColor="white" boxShadow="xs">
      <CardHeaderDrawer title="Factura" />

      <CardBody>
        <Stack divider={<StackDivider borderColor="grayIron.100" />} spacing={3.5}>
          <LinkBox>
            <HStack alignItems="center" justifyContent="space-between" spacing={0}>
              <HStack>
                <Center w="40px" h="40px" bgColor="grayIron.100" borderRadius="lg" color="grayIron.500">
                  <FileDown size={20} />
                </Center>
                <Stack spacing={0}>
                  <Text fontWeight={500} textTransform="capitalize" color="grayIron.800">Recibo C Octubre 2023</Text>
                  <Text color="grayIron.500">Creada el 19 Oct. 12:34hs.</Text>
                </Stack>
              </HStack>

              <LinkOverlay as={NextLink} href="#">
                <Center color="grayIron.500">
                  <Download size={20} />
                </Center>
              </LinkOverlay>
            </HStack>
          </LinkBox>
        </Stack>
      </CardBody>
    </Card>
  )
};
