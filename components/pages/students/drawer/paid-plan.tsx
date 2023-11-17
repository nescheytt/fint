import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Button,
  Card,
  CardFooter,
  Center,
  HStack,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react"
import { Info, Pencil } from "lucide-react"
import {
  mockDetail,
  mockDetailBonus,
  mockDetailSubTotal,
  mockDetailTotal,
} from "../../../../mock/pages/students/mock-paid-plan"
import { CardHeaderDrawer } from "../../../CardHeader"

export function PaidPlan() {
  return (
    <Card
      border="1px solid"
      borderColor="grayIron.200"
      borderRadius="xl"
      bg="white"
      boxShadow="xs"
      overflow="hidden"
    >
      <CardHeaderDrawer title="Plan de cuota" icon={{ name: "FileText" }} />

      <CardFooter
        px={0}
        py={0}
        borderTop="1px solid"
        borderColor="grayIron.100"
      >
        <Stack spacing={0}>
          <HStack>
            <Accordion allowToggle defaultIndex={[0]} w="100%">
              <AccordionItem border={0}>
                <AccordionButton p={0}>
                  <HStack
                    w="100%"
                    justifyContent="space-between"
                    px={5}
                    pt={4.5}
                    pb={4}
                  >
                    <Text fontWeight={600} color="grayIron.800">
                      Conceptos
                    </Text>
                    <AccordionIcon />
                  </HStack>
                </AccordionButton>

                <AccordionPanel
                  p={0}
                  borderTop="1px solid"
                  borderColor="grayIron.100"
                >
                  <Stack spacing={6} px={5} py={5}>
                    <Stack
                      divider={<StackDivider borderColor="grayIron.200" />}
                      spacing={3.5}
                    >
                      <Stack spacing={4}>
                        {mockDetail.map((item, index) => {
                          return (
                            <HStack key={index} alignItems="center" spacing={2}>
                              <Text w="70%" color="grayIron.800">
                                {item.item}
                              </Text>
                              <Text
                                w="30%"
                                color="grayIron.800"
                                textAlign="right"
                              >
                                ${item.value}
                              </Text>
                            </HStack>
                          )
                        })}
                      </Stack>

                      <Stack spacing={4}>
                        {mockDetailBonus.map((item, index) => {
                          return (
                            <HStack key={index} alignItems="center" spacing={2}>
                              <Text w="70%" color="success.600">
                                {item.item}
                              </Text>
                              <Text
                                w="30%"
                                color="success.600"
                                textAlign="right"
                              >
                                -${item.value}
                              </Text>
                            </HStack>
                          )
                        })}
                      </Stack>

                      <Stack spacing={4}>
                        {mockDetailSubTotal.map((item, index) => {
                          const subtotal = item.item === "Subtotal"
                          return (
                            <HStack key={index} alignItems="center" spacing={2}>
                              <Text
                                w="70%"
                                color={
                                  subtotal ? "grayIron.800" : "success.600"
                                }
                              >
                                {item.item}
                              </Text>
                              <Text
                                w="30%"
                                color={
                                  subtotal ? "grayIron.800" : "success.600"
                                }
                                textAlign="right"
                              >
                                {subtotal ? "" : "-"}${item.value}
                              </Text>
                            </HStack>
                          )
                        })}
                      </Stack>

                      <Stack>
                        {mockDetailTotal.map((item, index) => {
                          return (
                            <HStack key={index} alignItems="center" spacing={2}>
                              <Text
                                w="70%"
                                color="gray.900"
                                fontWeight={600}
                                fontSize="md"
                              >
                                {item.item}
                              </Text>
                              <Text
                                w="30%"
                                color="gray.900"
                                fontWeight={600}
                                fontSize="md"
                                textAlign="right"
                              >
                                ${item.value}
                              </Text>
                            </HStack>
                          )
                        })}
                      </Stack>
                    </Stack>

                    <Button
                      leftIcon={<Pencil size={20} />}
                      colorScheme="grayIron"
                    >
                      Editar conceptos del estudiante
                    </Button>
                  </Stack>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </HStack>

          <HStack
            m={14}
            p={4}
            borderTop="1px solid"
            borderColor="grayIron.200"
            alignItems="flex-start"
            spacing={3}
            bgColor="grayIron.25"
          >
            <Center color="grayIron.600">
              <Info size={20} />
            </Center>
            <Text lineHeight="20px" color="grayIron.700">
              Recuerda que podrás editar los conceptos del estudiante en caso
              que quieras dejar algo o sumar algo por fuera del plan al que esta
              asociado.
            </Text>
          </HStack>
        </Stack>
      </CardFooter>
    </Card>
  )
}
