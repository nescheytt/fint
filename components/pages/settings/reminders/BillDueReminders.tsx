import { FC } from 'react';
import { UseDisclosureProps } from '@chakra-ui/react';
import { mockListBillDueReminders } from '../../../../mock/pages/settings/mock-reminders';
import TitleReminders from './TitleReminders';
import ContentReminders from './ContentReminders';

const BillDueReminders: FC<UseDisclosureProps> = ({ onOpen }) => {
  return (
    <>
      <TitleReminders
        title="Vencimiento de factura"
        subtitle="Estos recordatorios se enviaran a partir de que emitas tus facturas"
      />

      <ContentReminders data={mockListBillDueReminders} />
      
      <TitleReminders
        title="Fin de cobranza"
        subtitle="Estos recordatorios se enviaran a partir de que emitas tus facturas"
      />
    </>
  )
};

export default BillDueReminders;
