import { FC } from "react";
import { Box, Card, CardBody, Circle, HStack, Stack, Text } from "@chakra-ui/react";
import { CardHeaderDrawer } from '../../../CardHeader';
import { mockActivity } from "../../../../mock/pages/bills/mock-activity";

export const Activity: FC = () => {
  return (
    <Card border="1px solid" borderColor="grayIron.200" borderRadius="xl" bg="white" boxShadow="xs">
      <CardHeaderDrawer title="Actividad" icon={{ name: 'Bell' }} />

      <CardBody>
        <Stack ml="7px">
          <Box as="ol" listStyleType="none">
            {mockActivity.map((item, index) => {
              const firstItem = index === 0
              const lastItem = index === mockActivity.length - 1

              return (
                <Box key={index} as="li" position="relative" borderLeft="1px solid" borderColor={lastItem ? "transparent" : "grayIron.200"}>
                  <HStack alignItems="start" pb={lastItem ? 0 : 3.5}>
                    {firstItem ? (
                      <Circle size='14px' bg='black' position="absolute" left="-7.3px">
                        <Circle size='12px' bg='white'>
                          <Circle size="6px" bg='black' />
                        </Circle>
                      </Circle>
                    ) : (
                      <Circle size='14px' bg='white' position="absolute" top={-0.5} left="-7.3px">
                        <Circle size="6px" bg='black' />
                      </Circle>
                    )}

                    <Stack spacing={0} pl={4}>
                      <Text fontWeight={500} color={firstItem ? "grayIron.900" : "grayIron.700"} mt={-1.5}>{item.title}</Text>
                      <Text color={firstItem ? "grayIron.700" : "grayIron.500"}>{item.description}</Text>
                    </Stack>
                  </HStack>
                </Box>
              )
            })}
          </Box>
        </Stack>
      </CardBody>
    </Card>
  )
};
