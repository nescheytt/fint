import { FC } from 'react';
import Layout from '../../components/Layout';
import Tabs from '../../components/pages/settings/Tabs';
import Title from '../../components/pages/settings/Title';
import General from '../../components/pages/settings/general';
import Installments from '../../components/pages/settings/installments';
import Reminders from '../../components/pages/settings/reminders';

const tabsContent = [
  {
    title: 'General',
    component: <General />
  },
  {
    title: 'Recordatorios',
    component: <Reminders />
  },
  {
    title: 'Conceptos y descuentos',
    component: <Installments />
  },
];

const PageSettings: FC = () => {
  return (
    <Layout>
      <Title />
      <Tabs content={tabsContent} />
    </Layout>
  )
};

export default PageSettings;