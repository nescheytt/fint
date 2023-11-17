import NextLink from 'next/link'
import { Avatar, Card, Center, HStack, LinkBox, LinkOverlay, Stack, Text } from "@chakra-ui/react";
import { ChevronRight } from 'lucide-react';
import { MockDataTypes } from '../../../../types/mock-data-types';

interface Args {
  member: MockDataTypes
}

export const Member = ({ member }: Args) => {
  return (
    <LinkBox>
      <Card px={5} py={4.5} border="1px solid" borderColor="grayIron.200" borderRadius="xl" bg="white" boxShadow="xs">
        <Stack>
          <HStack alignItems="center" justifyContent="space-between" spacing={0}>
            <HStack spacing={3}>
              <Avatar boxSize={10} name={member.student.name} src="https://bit.ly/broken-link" />
              <Stack spacing={0}>
                <Text fontSize="md" fontWeight={600} color="fint.600" textTransform="capitalize">{member.student.name}</Text>
                <Text color="grayIron.600" textTransform="capitalize">nivel {member.student.level} / turno {member.student.shift} / sala {member.student.grade}</Text>
              </Stack>
            </HStack>
            <LinkOverlay as={NextLink} href="#">
              <Center color="grayIron.400">
                <ChevronRight  size={20} />
              </Center>
            </LinkOverlay>
          </HStack>
        </Stack>
      </Card>
    </LinkBox>
  )
};
