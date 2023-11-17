import * as React from "react"
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Square,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import { FiFileText, FiDownload } from "react-icons/fi"
import { NavData } from "./data"

type ItemProps = {
  children: React.ReactNode
  discount?: boolean
  value: string
  priceTotal?: boolean
}

const Item = (props: ItemProps) => {
  const { children, discount, value, priceTotal } = props

  return (
    <HStack
      py={priceTotal ? "3" : "1.5"}
      spacing="3"
      direction="row"
      justify="space-between"
      borderTop={priceTotal ? "1px" : "none"}
      borderTopColor="gray.200"
    >
      <Text
        fontSize={priceTotal ? "lg" : "sm"}
        color={discount ? "green.600" : "gray.700"}
        fontWeight={priceTotal ? "semibold" : "normal"}
      >
        {children}
      </Text>
      <Text
        fontSize={priceTotal ? "lg" : "sm"}
        color={discount ? "green.600" : "gray.700"}
        fontWeight={priceTotal ? "semibold" : "normal"}
      >
        {value}
      </Text>
    </HStack>
  )
}

type NavAccordionProps = {
  data: NavData
}

const Details = (props: NavAccordionProps) => {
  const { data } = props

  return (
    <Box
      bg="bg-surface"
      px={{ base: "4" }}
      py="1"
      mb="3"
      boxShadow={useColorModeValue("sm", "sm-dark")}
      borderRadius="md"
      borderTopEndRadius="none"
      borderTopStartRadius="none"
    >
      <Accordion allowMultiple as="ul" listStyleType="none">
        {data.map((group) => (
          <AccordionItem key={group.title} as="li" border="none">
            <AccordionButton
              py="3"
              px={0}
              _hover={{ backgroundColor: "transparent" }}
            >
              <Box
                flex="1"
                textAlign="start"
                fontWeight="500"
                textColor="grayIron.700"
              >
                {group.title}
              </Box>

              <AccordionIcon fontSize="2xl" />
            </AccordionButton>

            <AccordionPanel pb={3} px={0} pt={0}>
              {group.items.map((item, index) => (
                <Item
                  key={index}
                  value={item.value}
                  discount={item.discount}
                  priceTotal={item.priceTotal}
                >
                  {item.label}
                </Item>
              ))}

              <Flex
                direction="column"
                justifyContent="center"
                py="1"
                width="full"
                marginTop="5"
                marginBottom="5"
              >
                <Button variant="outline" colorScheme="fint" marginBottom={2}>
                  Hacer pago parcial
                </Button>
              </Flex>

              <Box borderWidth="1px" borderRadius="lg" borderColor="gray.200">
                <Stack spacing="5">
                  <Button variant="secondary" px={0}>
                    <HStack width="full" justify="space-between" spacing="3">
                      <Square size="10" bg="bg-subtle" borderRadius="lg">
                        <Icon as={FiFileText} boxSize="5" />
                      </Square>

                      <Box>
                        <Text color="empahsized" fontWeight="medium">
                          Descargar Factura
                        </Text>
                      </Box>

                      <Square size="10" borderRadius="lg">
                        <Icon as={FiDownload} boxSize="5" />
                      </Square>
                    </HStack>
                  </Button>
                </Stack>
              </Box>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  )
}

export default Details
