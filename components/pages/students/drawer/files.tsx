import { Card } from "@chakra-ui/react";
import { CardHeaderDrawer } from "../../../CardHeader";

export const Files = () => {
  return (
    <Card border="1px solid" borderColor="grayIron.200" borderRadius="xl" bg="white" boxShadow="xs" overflow="hidden">
      <CardHeaderDrawer title="Archivos" button={{ text: 'Subir' }} />
    </Card>
  )
};
