"use client"

import { FC } from 'react';
import { Badge, Box, Table, Text, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react";
import { mockData } from "../../../../mock/pages/settings/mock-settings";
import { MockDataTypes } from '../../../../types/mock-settings-types';
import { setColorSchemeBadge } from "../../../../utilities/pages/settings/setColorSchemeBadge";
import MenuActionsButton from "../../../MenuButton";

const basicThStyles = {
  px: 5,
  py: '13px',
  bg: 'grayIron.50',
  color: 'grayIron.600',
  fontSize: '12px',
  borderTop: 0,
  borderColor: 'grayIron.200'
};

interface Props {
  onClick(plan: MockDataTypes): void;
};

const TablePlans: FC<Props> = ({ onClick }) => {
  return (
    <Box width="full" bg="white" boxShadow="xs" overflowX="auto" borderRadius="lg" border="1px solid" borderColor="gray.200">
      <Table>
        <Thead>
          <Tr>
            <Th sx={basicThStyles}>Plan</Th>
            <Th sx={basicThStyles}>Cant. de alumnos</Th>
            <Th sx={basicThStyles}>Conceptos</Th>
            <Th sx={basicThStyles}>Importe</Th>
            <Th borderTop={0} borderColor="grayIron.200"></Th>
          </Tr>
        </Thead>

        <Tbody>
          {mockData.map((plan) => {
            return (
              <Tr key={plan.id} _hover={{ bg: 'grayIron.50' }}>
                <Td py={0} px={5} cursor="pointer" onClick={() => onClick(plan)}>
                  <Text fontWeight={500} color="gray.900" textTransform="capitalize">
                    {plan.plan}
                  </Text>
                </Td>
                <Td w="15%" py={0} px={5} cursor="pointer" onClick={() => onClick(plan)}>
                  <Text color="gray.600" textTransform="capitalize">
                    {plan.quantityStudents}
                  </Text>
                </Td>
                <Td w="15%" p="10px 10px 10px 20px" cursor="pointer" onClick={() => onClick(plan)}>
                  <Badge size="sm" colorScheme={setColorSchemeBadge(plan.concept.id)} textTransform="capitalize">
                    {plan.concept.label}
                  </Badge>
                </Td>
                <Td w="10%" py={0} px={5} cursor="pointer" onClick={() => onClick(plan)}>
                  <Text color="gray.600" textTransform="capitalize">
                    ${plan.amount}
                  </Text>
                </Td>
                <Td w="4%" p={0}>
                  <MenuActionsButton fontSize="sm" />
                </Td>
              </Tr>
            )
          })}
        </Tbody>
      </Table>
    </Box>
  )
};

export default TablePlans;