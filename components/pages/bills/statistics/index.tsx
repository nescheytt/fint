import { Badge, HStack, StackDivider, Stack, Text } from "@chakra-ui/react"

export const Statistics = () => {
  return (
    <HStack divider={<StackDivider borderColor="gray.200" />} spacing={3.5} borderBottom="1px solid" borderColor="gray.200">
      <Stack w="full" px={6} py={5} spacing={0}>
        <HStack>
          <Text color="gray.700" fontWeight={600} textTransform="uppercase">Por cobrar</Text>
          <Badge>38%</Badge>
        </HStack>
        <Text color="gray.900" fontSize="3xl" fontWeight={600}>$5.472.000</Text>
        <Text color="gray.600" fontWeight={500}>152 cuotas</Text>
      </Stack>
      <Stack w="full" px={6} py={5} spacing={0}>
        <HStack>
          <Text color="#107569" fontWeight={600} textTransform="uppercase">Cobrado</Text>
          <Badge colorScheme="green">50%</Badge>
        </HStack>
        <Text color="gray.900" fontSize="3xl" fontWeight={600}>$7.200.000</Text>
        <Text color="gray.600" fontWeight={500}>200 cuotas</Text>
      </Stack>
      <Stack w="full" px={6} py={5} spacing={0}>
        <HStack>
          <Text color="#B42318" fontWeight={600} textTransform="uppercase">Atrasado</Text>
          <Badge colorScheme="red">12%</Badge>
        </HStack>
        <Text color="gray.900" fontSize="3xl" fontWeight={600}>$1.728.000</Text>
        <Text color="gray.600" fontWeight={500}>48 cuotas</Text>
      </Stack>
    </HStack>
  )
}