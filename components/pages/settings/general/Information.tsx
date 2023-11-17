import React from 'react';
import { Button, HStack, Stack, StackDivider, Text } from '@chakra-ui/react';
import FormContent from './FormContent';

const Information: React.FC = () => {
  return (
    <Stack divider={<StackDivider borderColor="grayIron.200" />} spacing={4}>
      <HStack justifyContent="space-between">
        <Stack spacing={1}>
          <Text color="grayIron.900" fontSize="lg" fontWeight={600}>Información general</Text>
          <Text color="grayIron.600">View and update your store details</Text>
        </Stack>

        <Button colorScheme="fint" onClick={() => console.log('Guardar información general')}>Guardar</Button>
      </HStack>

      <FormContent />
    </Stack>
  )
};

export default Information;
