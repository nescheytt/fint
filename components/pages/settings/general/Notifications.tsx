import React from "react"
import NextLink from "next/link"
import {
  Grid,
  GridItem,
  HStack,
  Link,
  Stack,
  StackDivider,
  Switch,
  Text,
} from "@chakra-ui/react"

const Notifications: React.FC = () => {
  const [isOn, setIsOn] = React.useState(null)

  const handleToggle = (index: any) => {
    setIsOn(index === isOn ? null : index)
  }

  return (
    <Stack divider={<StackDivider borderColor="grayIron.200" />} spacing={4}>
      <HStack justifyContent="space-between" mt={10}>
        <Stack spacing={1}>
          <Text color="grayIron.900" fontSize="lg" fontWeight={600}>
            Notificaciones
          </Text>
          <Text color="grayIron.600">
            Revisa y actualiza las notificaciones que recibiras.
          </Text>
        </Stack>
      </HStack>

      <Grid templateColumns="repeat(24, 1fr)" gap={3}>
        <GridItem colSpan={{ base: 24, md: 6 }}>
          <Stack spacing={0}>
            <Text color="grayIron.700" fontWeight={500}>
              Cobros
            </Text>
            <Text color="grayIron.600">
              Add your logo to reports and emails.
            </Text>
            <Link as={NextLink} href="#" color="fint.600" fontWeight={600}>
              View examples
            </Link>
          </Stack>
        </GridItem>

        <GridItem colSpan={{ base: 24, md: 10 }}>
          <Stack>
            {[0, 1].map((index) => (
              <HStack key={index} alignItems="flex-start" spacing={2}>
                <Switch
                  colorScheme="fint"
                  isChecked={isOn === index}
                  onChange={() => handleToggle(index)}
                />
                <Stack spacing={0}>
                  <Text color="grayIron.700" fontWeight={500}>
                    Remember me
                  </Text>
                  <Text color="grayIron.600">
                    Save my login details for next time.
                  </Text>
                </Stack>
              </HStack>
            ))}
          </Stack>
        </GridItem>
      </Grid>
    </Stack>
  )
}

export default Notifications
