import { FC } from 'react';
import NextLink from 'next/link';
import { Badge, Card, CardBody, Center, HStack, LinkBox, LinkOverlay, Stack, StackDivider, Text } from "@chakra-ui/react";
import { ChevronRight, FileText } from 'lucide-react';
import { mockListBills } from '../../../../mock/pages/students/mock-bills';
import { MockDataTypes } from '../../../../types/mock-data-types';
import BadgeTheme from "../../../Badge";
import { CardHeaderDrawer } from '../../../CardHeader';

interface Props {
  member: MockDataTypes;
};

export const Bill: FC<Props> = ({ member }) => {
  return (
    <Card border="1px solid" borderColor="grayIron.200" borderRadius="xl" bgColor="white" boxShadow="xs">
      <CardHeaderDrawer title="Facturas" icon={{ name: 'Archive' }} />

      <CardBody>
        <Stack divider={<StackDivider borderColor="grayIron.100" />} spacing={3.5}>
          {mockListBills.map((bill, index) => {
            return (
              <LinkBox key={index}>
                <HStack alignItems="center" justifyContent="space-between" spacing={0}>
                  <HStack>
                    <Center w="40px" h="40px" bgColor="grayIron.100" borderRadius="lg" color="grayIron.500">
                      <FileText size={20} />
                    </Center>
                    <Stack spacing={0}>
                      <Text fontWeight={500} textTransform="capitalize" color="grayIron.800">Cuota {bill.month}</Text>
                      <Text color="grayIron.500">${bill.value}</Text>
                    </Stack>
                  </HStack>

                  <HStack spacing={3}>
                    <Stack alignItems="flex-end" spacing={1}>
                      {bill.status === "success" ? (
                        <>
                          <Badge w="max-content" size="sm" bgColor="success.50" color="success.700">Pagada</Badge>
                          <Text color="grayIron.500">{bill.date}</Text>
                        </>
                      ) : (
                        <BadgeTheme size="sm" member={member} />
                      )}
                    </Stack>
                    <LinkOverlay as={NextLink} href="#">
                      <Center color="grayIron.400">
                        <ChevronRight size={20} />
                      </Center>
                    </LinkOverlay>
                  </HStack>
                </HStack>
              </LinkBox>
            )
          })}
        </Stack>
      </CardBody>
    </Card>
  )
};
