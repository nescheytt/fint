import {
  Box,
  Button,
  Stack,
  Badge,
  Icon,
  Text,
  Heading,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react"
import { FiLock } from "react-icons/fi"
import Details from "./details"
import { data } from "../../../../data/pages/parents/data"

const CardPayment = () => {
  return (
    <>
      <Box
        bg="bg-surface"
        boxShadow={useColorModeValue("sm", "sm-dark")}
        borderRadius="md"
        borderBottomEndRadius="none"
        borderBottomStartRadius="none"
      >
        <Stack
          justifyContent="center"
          alignItems="center"
          px={4}
          py={2}
          borderBottom="1px"
          borderColor="gray.200"
        >
          <Heading
            as="h6"
            size="20"
            textTransform="uppercase"
            color="blue.600"
            letterSpacing={1}
          >
            Valentino Flores
          </Heading>
        </Stack>
        <Stack
          spacing="4"
          justifyContent="center"
          alignItems="center"
          px={4}
          py="5"
        >
          <Text color="gray.700" fontWeight="500">
            Cuota Septiembre
          </Text>

          <Heading
            as="h3"
            color="gray.900"
            fontSize="4xl"
            fontWeight="bold"
            letterSpacing="tight"
            lineHeight={1}
            sx={{ "margin-top": "6px !important" }}
          >
            $32.739,40
          </Heading>

          <Badge size="lg" colorScheme="green">
            Paga hoy y recibe un 5% bonificado
          </Badge>

          <Button
            width="full"
            colorScheme="blue"
            flexShrink={0}
            type="submit"
            size="lg"
          >
            Pagar ahora
          </Button>
          <HStack>
            <Icon as={FiLock} color="muted" boxSize="4" />
            <Text fontSize="sm" fontWeight="medium" color="gray.500">
              Aceptamos transferencia, tarjetas de débito y crédito
            </Text>
          </HStack>
        </Stack>
      </Box>

      <Details data={data} />
    </>
  )
}

export default CardPayment
