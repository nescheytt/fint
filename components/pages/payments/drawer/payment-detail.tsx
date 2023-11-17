import { Badge, Box, Card, CardBody, CardFooter, HStack, Link, Stack, StackDivider, Text } from "@chakra-ui/react";
import NextLink from 'next/link'
import { MockDataTypes } from "../../../../types/mock-data-types";
import { CardHeaderDrawer } from "../../../drawer/CardHeader";
import { setColorSchemeBadge } from "../../../../utilities/pages/payments/setColorSchemeBadge";

interface Args {
  member: MockDataTypes
}

export const PaymentDetail = ({ member }: Args) => {
  return (
    <Card border="1px solid" borderColor="grayIron.200" borderRadius="xl" bg="white" boxShadow="xs" overflow="hidden">
      <CardHeaderDrawer title="Detalle de pago" icon={{ name: 'FileText' }} />

      <CardBody>
        <Stack divider={<StackDivider borderColor="grayIron.100" />} spacing={3.5}>
          <HStack alignItems="center" spacing={0}>
            <Text w="40%" fontWeight={500} color="grayIron.800">Factura</Text>
            <Link w="60%" as={NextLink} href="#" color="fint.600" fontWeight={500}>52D608C2-0010</Link>
          </HStack>
          <HStack alignItems="center" spacing={0}>
            <Text w="40%" fontWeight={500} color="grayIron.800">Liquidación</Text>
            <Text w="60%" color="grayIron.700">Octubre 2023</Text>
          </HStack>
          <HStack alignItems="center" spacing={0}>
            <Text w="40%" fontWeight={500} color="grayIron.800">Cuota</Text>
            <Text w="60%" color="grayIron.700">8 de 10</Text>
          </HStack>
          <HStack alignItems="center" spacing={0}>
            <Text w="40%" fontWeight={500} color="grayIron.800">Estado</Text>
            <Box w="60%">
              <Badge
                size="sm"
                textTransform="capitalize"
                colorScheme={setColorSchemeBadge(member.payment.status.id)}
                variant={member.payment.status.id === 6 ? "outline" : "subtle"}
              >{member.payment.status.label}</Badge>
            </Box>
          </HStack>
        </Stack>
      </CardBody>

      <CardFooter px={0} py={0} borderTop="1px solid" borderColor="grayIron.100">
        <Box w="full">
          <Stack p={5} divider={<StackDivider borderColor="grayIron.100" />} spacing={3.5}>
            <Stack spacing={4.5}>
              <Text fontWeight={600} color="grayIron.800">Conceptos</Text>
              <HStack alignItems="center" spacing={2}>
                <Text w="70%" color="gray.900">Cuota Octubre</Text>
                <Text w="30%" color="gray.900" fontWeight={500} textAlign="right">$38.908,35</Text>
              </HStack>
              <HStack alignItems="center" spacing={2}>
                <Text w="70%" color="fint.600">Comisión Procesamiento Fint (1%)</Text>
                <Text w="30%" color="fint.600" fontWeight={500} textAlign="right">-$1.361,79</Text>
              </HStack>
            </Stack>

            <Stack spacing={4.5}>
              <HStack alignItems="center" spacing={2}>
                <Text w="70%" color="gray.900" fontWeight={600} fontSize="md">Total</Text>
                <Text w="30%" color="gray.900" fontWeight={600} fontSize="md" textAlign="right">$38.908,35</Text>
              </HStack>

              <Badge py={1} size="sm" bg="grayIron.100" color="fint.600" fontWeight={500} textAlign="center">A liquidarse el 23 Oct., 18:34hs.</Badge>
            </Stack>
          </Stack>
        </Box>
      </CardFooter>
    </Card>
  )
};
