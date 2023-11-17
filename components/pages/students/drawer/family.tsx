import { FC } from 'react';
import NextLink from 'next/link';
import { Card, CardBody, Center, HStack, LinkBox, LinkOverlay, Stack, StackDivider, Text } from "@chakra-ui/react";
import { ChevronRight } from 'lucide-react';
import { mockListFamily } from '../../../../mock/pages/students/mock-family';
import { CardHeaderDrawer } from '../../../drawer/CardHeader';

export const Family: FC = () => {
  return (
    <Card border="1px solid" borderColor="grayIron.200" borderRadius="xl" bg="white" boxShadow="xs">
      <CardHeaderDrawer title="Hermanos" icon={{ name: 'Users' }} button={{ text: 'Modificar' }} />

      <CardBody>
        <Stack divider={<StackDivider borderColor="grayIron.100" />} spacing={3.5}>
          {mockListFamily.map((person, index) => {
            return (
              <LinkBox key={index}>
                <HStack alignItems="center" justifyContent="space-between" spacing={0}>
                  <Stack spacing={0}>
                    <Text fontWeight={500} color="grayIron.800">{person.name}</Text>
                    <Text color="grayIron.500">{person.level} Turno {person.shift} {person.grade}</Text>
                  </Stack>
                  <LinkOverlay as={NextLink} href="#">
                    <Center color="grayIron.400">
                      <ChevronRight size={20} />
                    </Center>
                  </LinkOverlay>
                </HStack>
              </LinkBox>
            )
          })}
        </Stack>
      </CardBody>
    </Card>
  )
};
