import React from "react"
import {
  Box,
  Button,
  Flex,
  IconButton,
  HStack,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  UseModalProps,
  Stack,
} from "@chakra-ui/react"
import { FileText, X } from "lucide-react"
import FormContent from "./FormContent"
import ListConcepts from "./ListConcepts"

interface Props extends UseModalProps {
  listItems: {
    id: number
    concept: string
    amount: string
  }[]
}

const ModalNewPlan: React.FC<Props> = ({ isOpen, onClose, listItems }) => {
  const initialRef = React.useRef(null)

  return (
    <Modal
      initialFocusRef={initialRef}
      isOpen={isOpen}
      onClose={onClose}
      closeOnOverlayClick={false}
      motionPreset="slideInBottom"
      scrollBehavior="inside"
      size="full"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          borderBottom="1px solid"
          borderColor="gray.200"
        >
          <Flex
            w="full"
            flexDirection={{ base: "column", md: "row" }}
            justifyContent={{ md: "space-between" }}
          >
            <HStack w="full" mb={{ base: 4, md: 0 }}>
              <IconButton
                variant="outline"
                colorScheme="whiteAlpha"
                aria-label="Close modal"
                fontSize="20px"
                icon={<X />}
                onClick={onClose}
              />
              <Text w="full" textAlign="center">
                Nuevo plan de cobro
              </Text>
            </HStack>

            <Flex
              w={{ base: "full", md: "auto" }}
              flexDirection={{ base: "column", md: "row" }}
              justifyContent={{ md: "flex-end" }}
            >
              <Button
                colorScheme="whiteAlpha"
                variant="outline"
                mb={{ base: 4, md: 0 }}
                mr={{ md: 4 }}
              >
                Guardar como borrador
              </Button>
              <Button colorScheme="fint">Guardar</Button>
            </Flex>
          </Flex>
        </ModalHeader>

        <ModalBody bgColor="grayIron.50" p={{ base: 4, md: 12 }}>
          <Stack maxW="container.sm" m="0 auto" spacing={8}>
            <Stack spacing={6}>
              <Stack spacing={1}>
                <Text fontSize="lg" fontWeight={500} color="gray.900">
                  Personal info
                </Text>
                <Text>Update your photo and personal details here.</Text>
              </Stack>

              <Box
                p={6}
                bgColor="white"
                boxShadow="sm"
                border="1px solid"
                borderColor="gray.200"
                borderRadius="xl"
              >
                <FormContent initialRef={initialRef} />
              </Box>
            </Stack>

            <Stack spacing={6}>
              <HStack spacing={3}>
                <FileText color="#8800FF" size={20} />
                <Text fontSize="md" fontWeight={500} color="grayIron.800">
                  Detalle de la cuota
                </Text>
              </HStack>

              <Box
                width="full"
                bg="white"
                boxShadow="xs"
                overflowX="auto"
                borderRadius="lg"
                border="1px solid"
                borderColor="gray.200"
              >
                <ListConcepts items={listItems} />
              </Box>
            </Stack>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ModalNewPlan
