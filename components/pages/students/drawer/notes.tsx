import { FC, useRef } from "react";
import { Card, CardBody, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { mockListNotes } from "../../../../mock/pages/students/mock-notes";
import { ModalNewNote } from "../../../modals/modal-new-note";
import { CardHeaderDrawer } from "../../../drawer/CardHeader";

export const Notes: FC = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const finalRef = useRef(null);

  return (
    <>
      <Card border="1px solid" borderColor="grayIron.200" borderRadius="xl" bg="white" boxShadow="xs">
        <CardHeaderDrawer title="Notas" button={{ text: 'Agregar', onClick: onOpen }} />

        <CardBody px={5} py={4.5}>
          <Stack spacing={5}>
            {mockListNotes.map((note, index) => {
              return (
                <Stack key={index} p={4} bgColor="warning.50" spacing={2.5} borderRadius="lg">
                  <Text color="warning.900">{note.text}</Text>
                  <Text fontSize="xs" color="warning.900" textAlign="right">{note.date}</Text>
                </Stack>
              )
            })}
          </Stack>
        </CardBody>
      </Card>

      <ModalNewNote isOpen={isOpen} onClose={onClose} finalRef={finalRef} />
    </>
  )
};