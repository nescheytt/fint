import React from "react"
import {
  Box,
  Button,
  Center,
  HStack,
  IconButton,
  Input,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react"
import { AlertTriangle, ArrowDown, ArrowUp, X } from "lucide-react"

interface Item {
  id: number
  concept: string
  amount: string
}

interface Props {
  items: Item[]
}

const ListConcepts: React.FC<Props> = ({ items }) => {
  const [listItems, setListItems] = React.useState<Item[]>(items)
  const amount = "0,00"

  const format = (val: string) => {
    return val
  }

  function handleMoveItem(fromIndex: number, toIndex: number) {
    const itemsCopy = [...listItems]
    const [removedItem] = itemsCopy.splice(fromIndex, 1)
    itemsCopy.splice(toIndex, 0, removedItem)
    setListItems(itemsCopy)
  }

  function handleRemoveItem(index: number) {
    const itemsCopy = [...listItems]
    itemsCopy.splice(index, 1)
    setListItems(itemsCopy)
  }

  const handleConceptChange = (index: number, concept: string) => {
    const updatedList = listItems.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          concept,
        }
      }
      return item
    })
    setListItems(updatedList)
  }

  const handleLastConceptChange = (index: number, concept: string) => {
    const updateList = [...listItems, { id: index + 2, concept, amount }]
    setListItems(updateList)
  }

  const handleLastAmountChange = (
    index: number,
    amount: string,
    concept = ""
  ) => {
    const updateList = [...listItems, { id: index + 2, amount, concept }]
    setListItems(updateList)
  }

  const handleAmountChange = (index: number, amount: string) => {
    const updatedList = listItems.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          amount,
        }
      }
      return item
    })
    setListItems(updatedList)
  }

  React.useEffect(() => {
    console.log("use effect", listItems)
  }, [listItems])

  return (
    <Stack spacing={0}>
      <Box p={4} bgColor="warning.25">
        <HStack alignItems="flex-start">
          <Center mt={0.5}>
            <AlertTriangle size={20} fontSize="sm" color="#DC6803" />
          </Center>
          <Text color="warning.700">
            Podes editar este plan, pero ten en cuenta que si quieres que un
            concepto cambie en la facturación esta debe siempre hacerse antes
            del 1 de cada mes, que es el día donde se generan las facturas.
          </Text>
        </HStack>
      </Box>

      <Table mt={0}>
        <Thead>
          <Tr>
            <Th bgColor="white"></Th>
            <Th
              bgColor="white"
              fontSize="sm"
              fontWeight={600}
              color="grayIron.800"
              pl={0}
            >
              Concepto
            </Th>
            <Th
              w="auto"
              bgColor="white"
              fontSize="sm"
              fontWeight={600}
              color="grayIron.800"
              textAlign="right"
              pr={0}
            >
              Monto
            </Th>
            <Th bgColor="white"></Th>
          </Tr>
        </Thead>

        <Tbody>
          {listItems.map((item, index) => {
            const lastItem = index === listItems.length - 1

            return (
              <>
                <Tr key={item.id}>
                  <Td w="10%" py={2} px={3}>
                    <IconButton
                      aria-label="Move up"
                      icon={<ArrowUp />}
                      onClick={() => handleMoveItem(index, index - 1)}
                      isDisabled={index === 0}
                      colorScheme="fint"
                      size="sm"
                      variant="link"
                    />
                    <IconButton
                      aria-label="Move down"
                      icon={<ArrowDown />}
                      onClick={() => handleMoveItem(index, index + 1)}
                      colorScheme="fint"
                      size="sm"
                      variant="link"
                    />
                  </Td>
                  <Td p={0}>
                    <HStack mr={4}>
                      <Text lineHeight="24px">{index + 1}. </Text>
                      <Input
                        h="36px"
                        defaultValue={`${item.concept}`}
                        placeholder="Nombre del concepto"
                        onChange={(e) =>
                          handleConceptChange(index, e.target.value)
                        }
                        colorScheme="fint"
                        variant="unstyled"
                        fontSize={{ base: "md", md: "sm" }}
                      />
                    </HStack>
                  </Td>
                  <Td w="auto" p={0} textAlign="right">
                    <Input
                      onChange={(e) =>
                        handleAmountChange(index, e.target.value)
                      }
                      defaultValue={`$ ${item.amount}`}
                      variant="unstyled"
                      textAlign="right"
                      p={0}
                    />
                  </Td>
                  <Td w="5%" py={2} px={3} textAlign="right">
                    <Button
                      size="xs"
                      boxSize="24px"
                      aria-label="Delete"
                      variant="link"
                      onClick={() => handleRemoveItem(index)}
                    >
                      <X size={20} color="#A0A0AB" />
                    </Button>
                  </Td>
                </Tr>

                {lastItem && (
                  <Tr>
                    <Td w="10%" py={2} px={3} borderBottom={0}>
                      <IconButton
                        aria-label="Move up"
                        icon={<ArrowUp />}
                        onClick={() => handleMoveItem(index, index - 1)}
                        colorScheme="fint"
                        size="sm"
                        variant="link"
                      />
                      <IconButton
                        aria-label="Move down"
                        icon={<ArrowDown />}
                        onClick={() => handleMoveItem(index, index + 1)}
                        isDisabled
                        colorScheme="fint"
                        size="sm"
                        variant="link"
                      />
                    </Td>
                    <Td p={0}>
                      <HStack mr={4}>
                        <Text lineHeight="24px">{listItems.length + 1}. </Text>
                        <Input
                          h="36px"
                          placeholder="Nombre del concepto"
                          onBlur={(e) =>
                            handleLastConceptChange(index, e.target.value)
                          }
                          colorScheme="fint"
                          variant="unstyled"
                          fontSize={{ base: "md", md: "sm" }}
                        />
                      </HStack>
                    </Td>
                    <Td w="auto" p={0} textAlign="right">
                      <Input
                        onBlur={(e) =>
                          handleLastAmountChange(index, e.target.value)
                        }
                        defaultValue={format(amount)}
                        variant="unstyled"
                        textAlign="right"
                        p={0}
                      />
                    </Td>
                    <Td w="5%" py={2} px={3} textAlign="right">
                      <Button
                        size="xs"
                        boxSize="24px"
                        aria-label="Delete"
                        variant="link"
                        isDisabled
                        onClick={() => handleRemoveItem(index)}
                      >
                        <X size={20} color="#A0A0AB" />
                      </Button>
                    </Td>
                  </Tr>
                )}
              </>
            )
          })}
        </Tbody>
      </Table>

      <HStack justifyContent="flex-end" px={12} py={5}>
        <Text fontSize="lg" color="gray.900" fontWeight={600}>
          Total $44.731,50
        </Text>
      </HStack>
    </Stack>
  )
}

export default ListConcepts
