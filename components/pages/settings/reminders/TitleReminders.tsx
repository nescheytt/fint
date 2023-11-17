import React from "react"
import { Button, Flex, Stack, Text, UseDisclosureProps } from "@chakra-ui/react"

interface Props extends UseDisclosureProps {
  title: string
  subtitle: string
}

const TitleReminders: React.FC<Props> = ({ title, subtitle, onOpen }) => {
  return (
    <Flex
      flexDirection={{ base: "column", md: "row" }}
      alignItems={{ md: "center" }}
      justifyContent={{ md: "space-between" }}
    >
      <Stack spacing={1} mb={{ base: 4, md: 0 }}>
        <Text color="grayIron.900" fontSize="lg" fontWeight={600}>
          {title}
        </Text>
        <Text color="grayIron.600">{subtitle}</Text>
      </Stack>

      <Button colorScheme="grayIron" onClick={onOpen}>
        Nuevo
      </Button>
    </Flex>
  )
}

export default TitleReminders
