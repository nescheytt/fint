import { FC } from "react"
import NextLink from "next/link"
import { ChevronRight } from "lucide-react"
import {
  Box,
  Card,
  Center,
  HStack,
  LinkBox,
  LinkOverlay,
  Text,
} from "@chakra-ui/react"
import { mockListDebts } from "@/data/pages/students/debts"

interface DebtProps {
  debt: {
    type: string
    value: string
  }
}

const DebtFamily: FC<DebtProps> = ({ debt }) => {
  const { type, value } = debt

  return (
    <LinkBox as="article">
      <HStack
        px={5}
        py={4}
        spacing={0}
        bgColor="warning.25"
        borderBottom="1px solid"
        borderColor="grayIron.200"
      >
        <Box width="full">
          <Text
            textTransform="uppercase"
            fontSize="xs"
            fontWeight={600}
            color="warning.700"
          >
            Deuda {type}
          </Text>
          <Text fontSize="2xl" fontWeight={600} color="gray.900">
            ${value}
          </Text>
        </Box>

        <LinkOverlay as={NextLink} href="#">
          <Center color="grayIron.400">
            <ChevronRight size={20} />
          </Center>
        </LinkOverlay>
      </HStack>
    </LinkBox>
  )
}

const DebtIndividual: FC<DebtProps> = ({ debt }) => {
  const { type, value } = debt

  return (
    <HStack px={5} py={4} bgColor="grayIron.25">
      <Box w="full">
        <Text
          textTransform="uppercase"
          fontSize="xs"
          fontWeight={600}
          color="grayIron.500"
        >
          Deuda {type}
        </Text>
        <Text fontSize="xl" fontWeight={600} color="gray.900">
          ${value}
        </Text>
      </Box>
    </HStack>
  )
}

export const Debts: FC = () => {
  return (
    <Card
      border="1px solid"
      borderColor="grayIron.200"
      borderRadius="xl"
      overflow="hidden"
      boxShadow="xs"
    >
      {mockListDebts.map((debt, index) => {
        if (debt.type === "familiar") {
          return <DebtFamily key={index} debt={debt} />
        }

        return <DebtIndividual key={index} debt={debt} />
      })}
    </Card>
  )
}
