import { FC } from "react";
import { Card, CardBody, HStack, IconButton, Stack, StackDivider, Text } from "@chakra-ui/react";
import { Mail, PhoneOutgoing } from "lucide-react";
import { mockListHolderPayers } from "../../../../mock/pages/payments/mock-holder-payers";
import { CardHeaderDrawer } from "../../../CardHeader";
import { WhatsappIcon } from "@/components/WhatsappIcon";

export const HolderPayer: FC = () => {
  return (
    <Card border="1px solid" borderColor="grayIron.200" borderRadius="xl" bg="white" boxShadow="xs">
      <CardHeaderDrawer title="Responsable" icon={{ name: 'User' }} />

      <CardBody>
        <Stack divider={<StackDivider borderColor="grayIron.100" />} spacing={3.5}>
          {mockListHolderPayers.map((holder, index) => {
            return (
              <HStack key={index} alignItems="center" justifyContent="space-between" spacing={0}>
                <Stack spacing={0}>
                  <Text fontWeight={500} color="grayIron.800">{holder.name}</Text>
                  <Text color="grayIron.500">{holder.relationship}</Text>
                </Stack>
                <HStack >
                  <IconButton aria-label='Share whatsapp' icon={<WhatsappIcon color="grayIron.500" w="20px" h="20px" />} w="40px" minW={0} h="40px" variant="ghost" />
                  <IconButton aria-label='Share phone' icon={<PhoneOutgoing size={20} />} color="grayIron.500" w="40px" minW={0} h="40px" variant="ghost" />
                  <IconButton aria-label='Share email' icon={<Mail size={20} />} color="grayIron.500" w="40px" minW={0} h="40px" variant="ghost" />
                </HStack>
              </HStack>
            )
          })}
        </Stack>
      </CardBody>
    </Card>
  )
};
