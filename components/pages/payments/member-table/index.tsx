"use client"

import type { MockDataTypes } from "@/types/data"
import { useState } from "react"
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
import MenuActionsButton from "../../../MenuButton"
import { mockData } from "@/data/data"
import { setColorSchemeBadge } from "../../../../utilities/pages/payments/setColorSchemeBadge"

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
            <Th sx={basicThStyles}>Fecha</Th>
            <Th sx={basicThStyles}>Estudiante</Th>
            <Th sx={basicThStyles}>Concepto</Th>
            <Th sx={basicThStyles}>Estado</Th>
            <Th sx={basicThStyles}>Importe</Th>
            <Th sx={basicThStyles}>Nivel</Th>
            <Th sx={basicThStyles}>Curso</Th>
            <Th borderTop={0} borderColor="grayIron.200"></Th>
          </Tr>
        </Thead>

        <Tbody>
          {mockData.map((member) => {
            return (
              <Tr key={member.id} _hover={{ bg: "grayIron.50" }}>
                <Td
                  py={0}
                  px={{ base: 2, md: 5 }}
                  cursor="pointer"
                  onClick={() => handleOnClick(member)}
                >
                  <Text color="gray.600" textTransform="capitalize">
                    {member.payment.date}
                  </Text>
                </Td>
                <Td
                  w={"32%"}
                  py={0}
                  px={{ base: 2, md: 5 }}
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
                  py={0}
                  px={{ base: 2, md: 5 }}
                  cursor="pointer"
                  onClick={() => handleOnClick(member)}
                >
                  <Text color="gray.600" textTransform="capitalize">
                    {member.payment.concept}
                  </Text>
                </Td>
                <Td
                  p="10px 10px 10px 20px"
                  cursor="pointer"
                  onClick={() => handleOnClick(member)}
                >
                  <Badge
                    size="sm"
                    textTransform="capitalize"
                    colorScheme={setColorSchemeBadge(member.payment.status.id)}
                    variant={
                      member.payment.status.id === 6 ? "outline" : "subtle"
                    }
                  >
                    {member.payment.status.label}
                  </Badge>
                </Td>
                <Td
                  py={0}
                  px={{ base: 2, md: 5 }}
                  cursor="pointer"
                  onClick={() => handleOnClick(member)}
                >
                  <Text color="gray.600" textTransform="capitalize">
                    ${member.payment.amount}
                  </Text>
                </Td>
                <Td
                  py={0}
                  px={{ base: 2, md: 5 }}
                  cursor="pointer"
                  onClick={() => handleOnClick(member)}
                >
                  <Text color="gray.600" textTransform="capitalize">
                    {member.student.level}
                  </Text>
                </Td>
                <Td
                  py={0}
                  px={{ base: 2, md: 5 }}
                  cursor="pointer"
                  onClick={() => handleOnClick(member)}
                >
                  <Text color="gray.600" textTransform="capitalize">
                    {member.student.grade}
                  </Text>
                </Td>
                <Td p={0}>
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
