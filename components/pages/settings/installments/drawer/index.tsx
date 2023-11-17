import React from "react"
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  HStack,
  Stack,
  Text,
  UseModalProps,
} from "@chakra-ui/react"
import { MockDataTypes } from "../../../../../types/mock-settings-types"
import MenuActionsButton from "../../../../MenuButton"
import PlanDetails from "./PlanDetails"
import PlanConcepts from "./PlanConcepts"

interface Props extends UseModalProps {
  plan?: MockDataTypes
}

const DrawerSettings: React.FC<Props> = ({ isOpen, onClose, plan }) => {
  if (plan === undefined) {
    return null
  }

  return (
    <Drawer placement="right" isOpen={isOpen} onClose={onClose}>
      <DrawerContent bgColor="grayIron.50" boxShadow="xl" w={"full"} maxW={480}>
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
              <Text color="gray.900">{plan.plan}</Text>
              <Text fontSize="sm" fontWeight={400} color="gray.600">
                Creado el 23 Nov. 2023, 21:56hs.
              </Text>
            </Box>
            <MenuActionsButton fontSize="md" />
          </HStack>
        </DrawerHeader>

        <DrawerBody px={4} pt={0} pb={6}>
          <Stack spacing={4}>
            <PlanDetails plan={plan} />
            <PlanConcepts />
          </Stack>

          <Box
            w="full"
            py={4}
            bgColor="grayIron.50"
            pos="sticky"
            bottom="-24px"
          >
            <Button
              w="full"
              colorScheme="grayIron"
              onClick={() => console.log("onClick: Add student")}
            >
              Agregar estudiante
            </Button>
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export default DrawerSettings
