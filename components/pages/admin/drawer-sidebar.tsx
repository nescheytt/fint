"use client";

import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Square,
  HStack,
  Stack,
  Text,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiFileText } from "react-icons/fi";

export default function DrawerSidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
      <DrawerOverlay />
      <DrawerContent bg="bg-canvas">
        <DrawerCloseButton />
        <DrawerHeader>Valentino Flores</DrawerHeader>

        <DrawerBody p={{ base: "2", md: "4" }}>
          <Stack spacing="5">
            <Box
              bg="bg-surface"
              boxShadow={useColorModeValue("xs", "xs-dark")}
              borderRadius="lg"
              p={{ base: "4", md: "6" }}
            >
              <Stack spacing="5">
                <Stack spacing="1">
                  <Text fontSize="lg" fontWeight="medium">
                    Invoice
                  </Text>
                  <Text fontSize="sm" color="muted">
                    Please pay the outstanding amount by the end of the
                    following month.
                  </Text>
                </Stack>
                <Box
                  borderWidth={{ base: "0", md: "1px" }}
                  p={{ base: "0", md: "4" }}
                  borderRadius="lg"
                >
                  <Stack
                    justify="space-between"
                    direction={{ base: "column", md: "row" }}
                    spacing="5"
                  >
                    <HStack spacing="3">
                      <Square size="10" bg="bg-subtle" borderRadius="lg">
                        <Icon as={FiFileText} boxSize="5" />
                      </Square>
                      <Box fontSize="sm">
                        <Text color="empahsized" fontWeight="medium">
                          Invoice_03/2023.pdf
                        </Text>
                        <Text color="muted">1.2MB</Text>
                      </Box>
                    </HStack>
                    <Stack
                      spacing="3"
                      direction={{ base: "column-reverse", md: "row" }}
                    >
                      <Button variant="secondary">Download</Button>
                      <Button variant="primary">View</Button>
                    </Stack>
                  </Stack>
                </Box>
              </Stack>
            </Box>
            <Box
              bg="bg-surface"
              boxShadow={useColorModeValue("xs", "xs-dark")}
              borderRadius="lg"
              p={{ base: "4", md: "6" }}
            >
              <Stack spacing="5">
                <Stack spacing="1">
                  <Text fontSize="lg" fontWeight="medium">
                    Invoice
                  </Text>
                  <Text fontSize="sm" color="muted">
                    Please pay the outstanding amount by the end of the
                    following month.
                  </Text>
                </Stack>
                <Box
                  borderWidth={{ base: "0", md: "1px" }}
                  p={{ base: "0", md: "4" }}
                  borderRadius="lg"
                >
                  <Stack
                    justify="space-between"
                    direction={{ base: "column", md: "row" }}
                    spacing="5"
                  >
                    <HStack spacing="3">
                      <Square size="10" bg="bg-subtle" borderRadius="lg">
                        <Icon as={FiFileText} boxSize="5" />
                      </Square>
                      <Box fontSize="sm">
                        <Text color="empahsized" fontWeight="medium">
                          Invoice_03/2023.pdf
                        </Text>
                        <Text color="muted">1.2MB</Text>
                      </Box>
                    </HStack>
                    <Stack
                      spacing="3"
                      direction={{ base: "column-reverse", md: "row" }}
                    >
                      <Button variant="secondary">Download</Button>
                      <Button variant="primary">View</Button>
                    </Stack>
                  </Stack>
                </Box>
              </Stack>
            </Box>
            <Box
              bg="bg-surface"
              boxShadow={useColorModeValue("xs", "xs-dark")}
              borderRadius="lg"
              p={{ base: "4", md: "6" }}
            >
              <Stack spacing="5">
                <Stack spacing="1">
                  <Text fontSize="lg" fontWeight="medium">
                    Invoice
                  </Text>
                  <Text fontSize="sm" color="muted">
                    Please pay the outstanding amount by the end of the
                    following month.
                  </Text>
                </Stack>
                <Box
                  borderWidth={{ base: "0", md: "1px" }}
                  p={{ base: "0", md: "4" }}
                  borderRadius="lg"
                >
                  <Stack
                    justify="space-between"
                    direction={{ base: "column", md: "row" }}
                    spacing="5"
                  >
                    <HStack spacing="3">
                      <Square size="10" bg="bg-subtle" borderRadius="lg">
                        <Icon as={FiFileText} boxSize="5" />
                      </Square>
                      <Box fontSize="sm">
                        <Text color="empahsized" fontWeight="medium">
                          Invoice_03/2023.pdf
                        </Text>
                        <Text color="muted">1.2MB</Text>
                      </Box>
                    </HStack>
                    <Stack
                      spacing="3"
                      direction={{ base: "column-reverse", md: "row" }}
                    >
                      <Button variant="secondary">Download</Button>
                      <Button variant="primary">View</Button>
                    </Stack>
                  </Stack>
                </Box>
              </Stack>
            </Box>
          </Stack>
        </DrawerBody>

        <DrawerFooter borderTopWidth="1px">
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue">Submit</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
