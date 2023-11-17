import React from 'react';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';

interface Props {
  content: {
    title: string;
    component: React.ReactElement;
  }[]
};

const TabsContent: React.FC<Props> = ({ content }) => {
  return (
    <Tabs isLazy colorScheme="fint">
      <TabList color="gray.500">
        {content.map((tab, index) => {
          return <Tab key={index}>{tab.title}</Tab>;
        })}
      </TabList>

      <TabPanels>
        {content.map((tab, index) => {
          return <TabPanel key={index} px={0} py={8}>{tab.component}</TabPanel>;
        })}
      </TabPanels>
    </Tabs>
  )
};

export default TabsContent;
