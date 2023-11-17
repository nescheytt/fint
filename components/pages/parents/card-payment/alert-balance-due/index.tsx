import { Box, Icon, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { FiRefreshCcw, FiAlertCircle } from "react-icons/fi";

const Alerts = () => {
  return (
    <>
      <Box
        bg="red.50"
        px={4}
        py="5"
        borderTop="2px"
        borderTopColor="red.600"
        borderBottomEndRadius="md"
        borderBottomStartRadius="md"
      >
        <Stack direction="row" spacing="3">
          <Stack>
            <Icon color="red.600" as={FiAlertCircle} boxSize="5" />
          </Stack>

          <Stack>
            <Text color="red.600" fontWeight="600">
              Necesitas regulizar tu situación
            </Text>

            <Text color="red.700" fontSize="sm">
              Tu cuenta tiene un saldo pendiente de pago. Para evitar
              inconvenientes, regularizala lo antes posible.
            </Text>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Alerts;
