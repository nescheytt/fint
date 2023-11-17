import {
  Badge,
  Table,
  TableProps,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react"
import { DrawerStudents } from "../drawer"
import { useState } from "react"
import MenuActionsButton from "../../../MenuButton"
import { mockData } from "../../../../mock/mock-data"
import { MockDataTypes } from "../../../../types/mock-data-types"
import { setColorSchemeBadge } from "../../../../utilities/pages/students/setColorSchemeBadge"

const basicThStyles = {
  px: 5,
  py: "13px",
  bg: "grayIron.50",
  color: "grayIron.600",
  fontSize: "12px",
  borderTop: 0,
  borderColor: "grayIron.200",
}

export const MemberTable = (props: TableProps) => {
  const [memberSelected, setMemberSelected] = useState<
    MockDataTypes | undefined
  >(undefined)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleOnClick = (member: MockDataTypes) => {
    onOpen()
    setMemberSelected(member)
  }

  return (
    <>
      <Table {...props}>
        <Thead>
          <Tr>
            <Th sx={basicThStyles}>Nombre y Apellido</Th>
            <Th sx={basicThStyles}>Nivel</Th>
            <Th sx={basicThStyles}>Turno</Th>
            <Th sx={basicThStyles}>Curso</Th>
            <Th sx={basicThStyles}>Estado</Th>
            <Th borderTop={0} borderColor="grayIron.200"></Th>
          </Tr>
        </Thead>

        <Tbody>
          {mockData.map((member) => {
            return (
              <Tr key={member.id} _hover={{ bg: "grayIron.50" }}>
                <Td
                  w="50%"
                  py={0}
                  px={5}
                  cursor="pointer"
                  onClick={() => handleOnClick(member)}
                >
                  <Text
                    fontWeight={500}
                    color="gray.900"
                    textTransform="capitalize"
                  >
                    {member.student.name}
                  </Text>
                </Td>
                <Td
                  w="12%"
                  py={0}
                  px={5}
                  cursor="pointer"
                  onClick={() => handleOnClick(member)}
                >
                  <Text color="gray.600" textTransform="capitalize">
                    {member.student.level}
                  </Text>
                </Td>
                <Td
                  w="11%"
                  py={0}
                  px={5}
                  cursor="pointer"
                  onClick={() => handleOnClick(member)}
                >
                  <Text color="gray.600" textTransform="capitalize">
                    {member.student.shift}
                  </Text>
                </Td>
                <Td
                  w="11%"
                  py={0}
                  px={5}
                  cursor="pointer"
                  onClick={() => handleOnClick(member)}
                >
                  <Text color="gray.600" textTransform="capitalize">
                    {member.student.grade}
                  </Text>
                </Td>
                <Td
                  w="12%"
                  p="10px 10px 10px 20px"
                  cursor="pointer"
                  onClick={() => handleOnClick(member)}
                >
                  <Badge
                    size="sm"
                    colorScheme={setColorSchemeBadge(member.student.status.id)}
                    textTransform="capitalize"
                  >
                    {member.student.status.label}
                  </Badge>
                </Td>
                <Td w="4%" p={0}>
                  <MenuActionsButton fontSize="sm" />
                </Td>
              </Tr>
            )
          })}
        </Tbody>
      </Table>

      <DrawerStudents
        isOpen={isOpen}
        onClose={onClose}
        member={memberSelected}
      />
    </>
  )
}
