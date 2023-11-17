import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, HStack, Stack, Text } from "@chakra-ui/react";

// components
import MenuActionsButton from "../../../MenuButton";
import { Member } from "./member";
import { HolderPayer } from "./holder-payer";
import { PaymentDetail } from "./payment-detail";
import { PaymentMethods } from "./payment-methods";
import { Bill } from "./bill";
import { Notes } from "./notes";

// types
import { MockDataTypes } from "../../../../types/mock-data-types";

interface DrawerStudents {
  isOpen: boolean
  onClose: () => void
  member?: MockDataTypes
}

export const DrawerStudents = ({ isOpen, onClose, member }: DrawerStudents) => {
  if (member === undefined) {
    return null
  } 

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerContent bgColor="grayIron.50" boxShadow="xl" w={'full'} maxW={480}>
        <DrawerHeader px={4} pt={4} pb="19px">
          <HStack w="100%" justifyContent="space-beetwen" spacing={0}>
            <DrawerCloseButton position="relative" top="auto" right="auto" boxSize="40px" bgColor="grayIron.100" />
            <Box w="100%" textAlign="center">
              <Text color="gray.900">Pago #{member.payment.code}</Text>
              <Text fontSize="sm" fontWeight={400} color="gray.600">Creado el 23 Nov. 2023, 21:56hs.</Text>
            </Box>
            <MenuActionsButton fontSize="md" />
          </HStack>
        </DrawerHeader>

        <DrawerBody px={4} pt={0} pb={6}>
          <Stack spacing={4}>
            <Member member={member} />
            <PaymentDetail member={member} />
            <HolderPayer />
            <PaymentMethods />
            <Bill />
            <Notes />
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
};
