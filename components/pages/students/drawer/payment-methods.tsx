import { Box, Card, CardBody, Center, HStack, IconButton, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { useRef } from "react";
import { Pencil } from "lucide-react";
import ModalNewPaymentMethods from "../../../modal-new-payment-methods";
import { CardHeaderDrawer } from "../../../CardHeader";

export const PaymentMethods = () => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const finalRef = useRef(null)

  return (
    <>
      <Card border="1px solid" borderColor="grayIron.200" borderRadius="xl" bg="white" boxShadow="xs">
        <CardHeaderDrawer title="Medio de pago guardado" button={{ text: 'Agregar', onClick: onOpen }} />

        <CardBody>
          <Stack spacing='3.5'>
            <HStack alignItems="center" justifyContent="space-between" spacing={0}>
              <HStack spacing={3}>
                <Center w='34px' h='24px' color='black' border="1px solid gray" borderRadius="base">
                  <Box as='span' fontWeight='bold' fontSize="2xs">VISA</Box>
                </Center>
                <Stack spacing={0}>
                  <Text fontWeight={500} color="grayIron.800">Terminada en 1234</Text>
                  <Text color="grayIron.500">Expira 06/24</Text>
                </Stack>
              </HStack>
              <IconButton aria-label='Share whatsapp' color="grayIron.500" icon={<Pencil size={20} />} w="40px" minW={0} h="40px" variant="ghost" />
            </HStack>
          </Stack>
        </CardBody>
      </Card>

      <ModalNewPaymentMethods isOpen={isOpen} onClose={onClose} finalRef={finalRef} />
    </>
  )
};
