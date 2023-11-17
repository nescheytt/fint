import * as React from "react"
import NextLink from "next/link"
import {
  Card,
  CardBody,
  HStack,
  Link,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react"
import { MockDataTypes } from "../../../../../types/mock-settings-types"
import { CardHeaderDrawer } from "../../../../CardHeader"

interface Props {
  plan: MockDataTypes
}

const PlanDetails: React.FC<Props> = ({ plan }) => {
  return (
    <Card
      border="1px solid"
      borderColor="grayIron.200"
      borderRadius="xl"
      bg="white"
      boxShadow="xs"
    >
      <CardHeaderDrawer
        title="Detalles del plan"
        icon={{ name: "FileText" }}
        button={{ text: "Editar" }}
      />

      <CardBody>
        <Stack
          divider={<StackDivider borderColor="grayIron.100" />}
          spacing={3.5}
        >
          <HStack spacing={0}>
            <Text w="40%" fontWeight={500} color="grayIron.800">
              Nombre
            </Text>
            <Text color="grayIron.700" textTransform="capitalize">
              {plan.plan}
            </Text>
          </HStack>
          <HStack spacing={0}>
            <Text w="40%" fontWeight={500} color="grayIron.800">
              Fecha de inicio
            </Text>
            <Text color="grayIron.700" textTransform="capitalize">
              1 Mar, 2023
            </Text>
          </HStack>
          <HStack spacing={0}>
            <Text w="40%" fontWeight={500} color="grayIron.800">
              Frecuencia
            </Text>
            <Text color="grayIron.700" textTransform="capitalize">
              Mensual
            </Text>
          </HStack>
          <HStack spacing={0}>
            <Text w="40%" fontWeight={500} color="grayIron.800">
              Número de cuotas
            </Text>
            <Text color="grayIron.700" textTransform="capitalize">
              10
            </Text>
          </HStack>
          <HStack spacing={0}>
            <Text w="40%" fontWeight={500} color="grayIron.800">
              Envio de factura
            </Text>
            <Text color="grayIron.700" textTransform="capitalize">
              1 de cada mes
            </Text>
          </HStack>
          <HStack spacing={0}>
            <Text w="40%" fontWeight={500} color="grayIron.800">
              Vencimiento
            </Text>
            <Text color="grayIron.700" textTransform="capitalize">
              15 de cada mes
            </Text>
          </HStack>
          <HStack spacing={0}>
            <Text w="40%" fontWeight={500} color="grayIron.800">
              Débito automático programado
            </Text>
            <Text color="grayIron.700" textTransform="capitalize">
              5 de cada mes
            </Text>
          </HStack>
          <HStack spacing={0}>
            <Text w="40%" fontWeight={500} color="grayIron.800">
              Estudiantes con este plan
            </Text>
            <Link
              as={NextLink}
              href="#"
              color="fint.600"
              fontWeight={500}
              textTransform="capitalize"
            >
              {plan.quantityStudents}
            </Link>
          </HStack>
        </Stack>
      </CardBody>
    </Card>
  )
}

export default PlanDetails
