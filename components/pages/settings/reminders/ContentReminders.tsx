import React from "react"
import { Box, Center, Flex, HStack, Stack, Text } from "@chakra-ui/react"
import { ArrowDown, Mail } from "lucide-react"
import MenuActionsButton from "../../../MenuButton"
import { WhatsappIcon } from "../../../WhatsappIcon"

const renderTextType = (type: string) => {
  if (type === "whatsapp") {
    return "WhatsApp"
  }

  if (type === "mail") {
    return "correo"
  }

  return null
}

const renderIconType = (type: string) => {
  if (type === "whatsapp") {
    return <WhatsappIcon w="20px" h="20px" color="grayIron.500" />
  }

  if (type === "mail") {
    return <Mail size={20} color="#70707B" />
  }

  return null
}

const Divider: React.FC = () => {
  return (
    <Flex alignItems="center" justifyContent="center" my={2}>
      <ArrowDown size={32} color="#A0A0AB" />
    </Flex>
  )
}

interface Props {
  data: {
    type: string
    date: string
  }[]
}

const ContentReminders: React.FC<Props> = ({ data }) => {
  return (
    <Stack divider={<Divider />} spacing={3.5}>
      {data.map((item, index) => {
        return (
          <Box
            key={index}
            p={{ base: 3, md: 6 }}
            bgColor="white"
            boxShadow="xs"
            border="1px solid"
            borderColor="gray.200"
            borderRadius="xl"
          >
            <HStack justifyContent="space-between">
              <HStack spacing={3}>
                <Text>{index + 1}. </Text>
                <Center boxSize="40px" bgColor="green.100" borderRadius="lg">
                  {renderIconType(item.type)}
                </Center>
                <Text>
                  Enviar{" "}
                  <b>
                    {renderTextType(item.type)} de recordatorio, {item.date} día
                    antes
                  </b>{" "}
                  de la fecha <b>de vencimiento</b>
                </Text>
              </HStack>

              <MenuActionsButton fontSize="sm" orientation="horizontal" />
            </HStack>
          </Box>
        )
      })}
    </Stack>
  )
}

export default ContentReminders
