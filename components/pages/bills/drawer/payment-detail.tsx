import { FC } from 'react';
import NextLink from 'next/link';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Center,
  HStack,
  Link,
  Stack,
  StackDivider,
  Text
} from "@chakra-ui/react";
import { Info, Pencil } from "lucide-react";
import { MockDataTypes } from "../../../../types/mock-data-types";
import { CardHeaderDrawer } from "../../../CardHeader";
import { setColorSchemeBadge } from "../../../../utilities/pages/bills/setColorSchemeBadge";
import { mockDetail, mockDetailBonus, mockDetailSubTotal, mockDetailTotal } from "../../../../mock/pages/bills/mock-details";

interface Props {
  member: MockDataTypes;
};

export const PaymentDetail: FC<Props> = ({ member }) => {
  return (
    <Card border="1px solid" borderColor="grayIron.200" borderRadius="xl" bg="white" boxShadow="xs" overflow="hidden">
      <CardHeaderDrawer title="Plan de cuota" icon={{ name: 'FileText' }} />

      <CardBody>
        <Stack divider={<StackDivider borderColor="grayIron.100" />} spacing={3.5}>
          <HStack alignItems="center" spacing={0}>
            <Text w="44%" fontWeight={500} color="grayIron.800">Liquidación</Text>
            <Text w="56%" color="grayIron.700">Octubre 2023</Text>
          </HStack>
          <HStack alignItems="center" spacing={0}>
            <Text w="44%" fontWeight={500} color="grayIron.800">Cuota</Text>
            <Text w="56%" color="grayIron.700">8 de 10</Text>
          </HStack>
          <HStack alignItems="center" spacing={0}>
            <Text w="44%" fontWeight={500} color="grayIron.800">Vencimiento</Text>
            <Text w="56%" color="grayIron.700">15 Oct., 2023 00:00:00</Text>
          </HStack>
          <HStack alignItems="center" spacing={0}>
            <Text w="44%" fontWeight={500} color="grayIron.800">Descuentos adicionales</Text>
            <Link w="56%" as={NextLink} href="#" color="fint.600" fontWeight={500} textTransform="capitalize">
              Descuento por Hermanos 5%
            </Link>
          </HStack>
          <HStack alignItems="center" spacing={0}>
            <Text w="44%" fontWeight={500} color="grayIron.800">Estado</Text>
            <Box w="56%">
              <Badge
                size="sm"
                textTransform="capitalize"
                colorScheme={setColorSchemeBadge(member.bill.status.id)}
              >{member.bill.status.label}</Badge>
            </Box>
          </HStack>
        </Stack>
      </CardBody>

      <CardFooter px={0} py={0} borderTop="1px solid" borderColor="grayIron.100">
        <Stack spacing={0}>
          <HStack>
            <Accordion allowToggle w="100%">
              <AccordionItem border={0}>
                <AccordionButton p={0}>
                  <HStack w="100%" justifyContent="space-between" px={5} pt={4.5} pb={4}>
                    <Text fontSize="sm" fontWeight={600} color="grayIron.800">Conceptos</Text>
                    <AccordionIcon />
                  </HStack>
                </AccordionButton>

                <AccordionPanel p={0} borderTop="1px solid" borderColor="grayIron.100">
                  <Stack spacing={6} px={5} py={5}>
                    <Stack divider={<StackDivider borderColor="grayIron.200" />} spacing={3.5}>
                      <Stack spacing={4}>
                        {mockDetail.map((item, index) => {
                          return (
                            <HStack key={index} alignItems="center" spacing={2}>
                              <Text w="70%" color="grayIron.800">{item.item}</Text>
                              <Text w="30%" color="grayIron.800" textAlign="right">${item.value}</Text>
                            </HStack>
                          )
                        })}
                      </Stack>

                      <Stack spacing={4}>
                        {mockDetailBonus.map((item, index) => {
                          return (
                            <HStack key={index} alignItems="center" spacing={2}>
                              <Text w="70%" color="success.600">{item.item}</Text>
                              <Text w="30%" color="success.600" textAlign="right">-${item.value}</Text>
                            </HStack>
                          )
                        })}
                      </Stack>

                      <Stack spacing={4}>
                        {mockDetailSubTotal.map((item, index) => {
                          const subtotal = item.item === "Subtotal"
                          return (
                            <HStack key={index} alignItems="center" spacing={2}>
                              <Text w="70%" color={subtotal ? "grayIron.800" : "success.600"}>{item.item}</Text>
                              <Text w="30%" color={subtotal ? "grayIron.800" : "success.600"} textAlign="right">
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
                              <Text w="70%" color="gray.900" fontWeight={600} fontSize="md">{item.item}</Text>
                              <Text w="30%" color="gray.900" fontWeight={600} fontSize="md" textAlign="right">${item.value}</Text>
                            </HStack>
                          )
                        })}
                      </Stack>
                    </Stack>

                    <Button leftIcon={<Pencil size={20} />} colorScheme="grayIron">
                      Editar conceptos de esta factura
                    </Button>
                  </Stack>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </HStack>

          <HStack m={14} p={4} borderTop="1px solid" borderColor="grayIron.200" alignItems="flex-start" spacing={3} bgColor="grayIron.25">
            <Center color="grayIron.600">
              <Info size={20} />
            </Center>
            <Text lineHeight="20px" color="grayIron.700">Recuerda que solo podrás editar los conceptos mientras la factura no esté paga.</Text>
          </HStack>
        </Stack>
      </CardFooter>
    </Card>
  )
};
