import { FC } from "react"
import { UseDisclosureProps } from "@chakra-ui/react"
import { mockListBillStartReminders } from "@/data/pages/settings/reminders"
import TitleReminders from "./TitleReminders"
import ContentReminders from "./ContentReminders"

const BillStartReminders: FC<UseDisclosureProps> = ({ onOpen }) => {
  return (
    <>
      <TitleReminders
        title="Emisión de factura"
        subtitle="Estos recordatorios se enviarán a partir del vencimiento de pago de tus facturas"
        onOpen={onOpen}
      />

      <ContentReminders data={mockListBillStartReminders} />
    </>
  )
}

export default BillStartReminders
