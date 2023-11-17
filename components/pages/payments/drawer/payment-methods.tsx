import {
  Box,
  Card,
  CardBody,
  Center,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react"
import { CardHeaderDrawer } from "../../../CardHeader"

export const PaymentMethods = () => {
  return (
    <Card
      border="1px solid"
      borderColor="grayIron.200"
      borderRadius="xl"
      bg="white"
      boxShadow="xs"
    >
      <CardHeaderDrawer title="Medio de pago" />

      <CardBody>
        <Stack spacing="3.5">
          <HStack
            alignItems="center"
            justifyContent="space-between"
            spacing={0}
          >
            <HStack spacing={3}>
              <Center
                w="34px"
                h="24px"
                color="black"
                border="1px solid gray"
                borderRadius="base"
              >
                <Box as="span" fontWeight={600} fontSize="2xs">
                  VISA
                </Box>
              </Center>
              <Stack spacing={0}>
                <Text fontWeight={500} color="grayIron.800">
                  Visa Banco Galicia
                </Text>
                <Text color="grayIron.500">Terminada en 1234</Text>
              </Stack>
            </HStack>
          </HStack>
        </Stack>
      </CardBody>
    </Card>
  )
}
