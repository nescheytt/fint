import NextLink from 'next/link'
import { Box, Card, CardBody, HStack, Link, Stack, StackDivider, Text } from "@chakra-ui/react";
import BadgeTheme from "../../../Badge";
import { MockDataTypes } from "../../../../types/mock-data-types";
import { CardHeaderDrawer } from "../../../CardHeader";

interface Args {
  member: MockDataTypes
}

export const Student = ({ member }: Args) => {
  return (
    <Card border="1px solid" borderColor="grayIron.200" borderRadius="xl" bg="white" boxShadow="xs">
      <CardHeaderDrawer title="Estudiante" icon={{ name: 'UserCheck' }} button={{ text: 'Editar' }} />

      <CardBody>
        <Stack divider={<StackDivider borderColor="grayIron.100" />} spacing={3.5}>
          <HStack spacing={0}>
            <Text w="50%" fontWeight={500} color="grayIron.800">Nombre completo</Text>
            <Link w="50%" as={NextLink} href="#" color="fint.600" fontWeight={500} textTransform="capitalize">{member.student.name}</Link>
          </HStack>
          <HStack spacing={0}>
            <Text w="50%" fontWeight={500} color="grayIron.800">Nivel</Text>
            <Text w="50%" color="grayIron.700" textTransform="capitalize">{member.student.level}</Text>
          </HStack>
          <HStack spacing={0}>
            <Text w="50%" fontWeight={500} color="grayIron.800">Turno</Text>
            <Text w="50%" color="grayIron.700" textTransform="capitalize">{member.student.shift}</Text>
          </HStack>
          <HStack spacing={0}>
            <Text w="50%" fontWeight={500} color="grayIron.800">Sala</Text>
            <Text w="50%" color="grayIron.700" textTransform="capitalize">{member.student.grade}</Text>
          </HStack>
          <HStack spacing={0}>
            <Text w="50%" fontWeight={500}>Estado</Text>
            <Box w="50%">
              <BadgeTheme size="sm" member={member} />
            </Box>
          </HStack>
        </Stack>
      </CardBody>
    </Card>
  )
};
