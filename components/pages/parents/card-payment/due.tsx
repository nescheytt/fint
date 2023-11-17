import {
  Box,
  Button,
  HStack,
  Stack,
  Tag,
  TagLabel,
  Text,
  Icon,
  Badge,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiDownloadCloud, FiSearch, FiPlus, FiLock } from "react-icons/fi";
import { ST } from "next/dist/shared/lib/utils";
import AlertDebit from "./alert-debit";
import AlertDue from "./alert-balance-due";
import Details from "./details";
import { data } from "./details/data";

const CardPayment = () => {
  return (
    <>
      <Box
        bg="bg-surface"
        borderRadius="md"
        border="2px"
        borderColor="red.600"
        sx={{ "box-shadow": "0 0 0 3px rgba(252, 129, 129, 0.25)" }}
        mb="4"
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
            Monto total a pagar
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
            $113.074,62
          </Heading>

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
        <AlertDue />
      </Box>
    </>
  );
};

export default CardPayment;
