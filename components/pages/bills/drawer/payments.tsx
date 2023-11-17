import { FC, useRef } from "react";
import { Box, Card, CardBody, Center, HStack, Stack, StackDivider, Text, useDisclosure } from "@chakra-ui/react";
import { mockPayments } from "../../../../mock/pages/bills/mock-payments";
import MenuActionsButton from "../../../MenuButton";
import { ModalNewPayment } from "../../../modals/modal-new-payment";
import { CardHeaderDrawer } from "../../../drawer/CardHeader";

export const Payments: FC = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const finalRef = useRef(null);
 
  return (
    <>
      <Card border="1px solid" borderColor="grayIron.200" borderRadius="xl" bg="white" boxShadow="xs">
        <CardHeaderDrawer title="Pagos" icon={{ name: 'CreditCard'}} button={{ text: 'Agregar', onClick: onOpen }} />

        <CardBody px={0}>
          <Stack spacing={3.5} divider={<StackDivider borderColor="gray.200" />}>
          {mockPayments.map((item, index) => {
            return (
              <HStack key={index} alignItems="center" justifyContent="space-between" spacing={0} px={5}>
                <HStack spacing={2}>
                  <Center w='34px' h='24px' color='black' border="1px solid gray" borderRadius="base">
                    <Box as='span' fontWeight={600} fontSize="2xs">VISA</Box>
                  </Center>
                  <Stack spacing={0}>
                    <Text fontWeight={500} color="gray.700">{item.method}</Text>
                    <Text color="gray.500">{item.status} el {item.date}</Text>
                  </Stack>
                </HStack>
                <HStack spacing={1}>
                  <Text fontWeight={500} color="gray.600">${item.amount}</Text>
                  <MenuActionsButton fontSize="sm" size="20" />
                </HStack>
              </HStack>
            )
          })}
          </Stack>
        </CardBody>
      </Card>

      <ModalNewPayment isOpen={isOpen} onClose={onClose} finalRef={finalRef} />
    </>
  )
};
