import { Button, HStack, Link, Text, useColorModeValue } from "@chakra-ui/react"
import Details from "./details"
import { data } from "./details/data"

const CardPayment = () => {
  return (
    <>
      <HStack
        bg="bg-surface"
        px={4}
        py="3"
        boxShadow={useColorModeValue("sm", "sm-dark")}
        borderRadius="md"
        borderBottomEndRadius="none"
        borderBottomStartRadius="none"
      >
        <Text fontSize="lg" fontWeight="semibold" flex="1" textAlign="start">
          Cuotas pendiente de pago
        </Text>
        <Button as={Link} color="blue.600" variant="ghost" size="sm">
          Ver todas
        </Button>
      </HStack>

      <Details data={data} />
    </>
  )
}

export default CardPayment
