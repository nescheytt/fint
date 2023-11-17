import { Box, Icon, Stack, Text } from "@chakra-ui/react"
import { FiRefreshCcw } from "react-icons/fi"

const Alerts = () => {
  return (
    <>
      <Box
        bg="orange.50"
        px={{ base: "4", md: "6" }}
        py="5"
        borderTop="2px"
        borderTopColor="orange.600"
      >
        <Stack direction="row" spacing="3">
          <Stack>
            <Icon color="orange.600" as={FiRefreshCcw} boxSize="5" />
          </Stack>

          <Stack>
            <Text color="orange.600" fontWeight="600">
              Debito automático activo
            </Text>

            <Text color="orange.700" fontSize="sm">
              Recuerda que el 5 de Septiembre debitaremos la cuota de este mes
              de tu caja de ahorro del Banco Galicia.
            </Text>
          </Stack>
        </Stack>
      </Box>
    </>
  )
}

export default Alerts
