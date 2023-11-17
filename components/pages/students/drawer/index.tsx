import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react"
import MenuActionsButton from "../../../MenuButton"
import { MockDataTypes } from "../../../../types/mock-data-types"
import { Bill } from "./bill"
import { Debts } from "./debts"
import { Family } from "./family"
import { Files } from "./files"
import { HolderPayer } from "./holder-payer"
import { Notes } from "./notes"
import { PaidPlan } from "./paid-plan"
import { PaymentMethods } from "./payment-methods"
import { Student } from "./student"

interface DrawerStudentsProps {
  isOpen: boolean
  onClose: () => void
  member?: MockDataTypes
}

export const DrawerStudents = ({
  isOpen,
  onClose,
  member,
}: DrawerStudentsProps) => {
  if (!member) {
    return null
  }

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerContent w="full" maxW={480} bgColor="grayIron.50" boxShadow="xl">
        <DrawerHeader px={4} pt={4} pb="19px">
          <HStack w="100%" justifyContent="space-beetwen" spacing={0}>
            <DrawerCloseButton
              position="relative"
              top="auto"
              right="auto"
              boxSize="40px"
              bgColor="grayIron.100"
            />
            <Box w="100%" textAlign="center">
              <Text color="gray.900" textTransform="capitalize">
                {member.student.name}
              </Text>
              <Text fontSize="sm" fontWeight={400} color="gray.600">
                Creado el 23 Nov. 2023, 21:56hs.
              </Text>
            </Box>
            <MenuActionsButton fontSize="md" />
          </HStack>
        </DrawerHeader>

        <DrawerBody px={4} pt={0} pb={6}>
          <Stack spacing={4}>
            <Debts />
            <Student member={member} />
            <Bill member={member} />
            <PaidPlan />
            <Family />
            <HolderPayer />
            <PaymentMethods />
            <Notes />
            <Files />
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
