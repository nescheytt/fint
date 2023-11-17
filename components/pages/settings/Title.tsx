"use client"

import React from 'react';
import { Box, Drawer, DrawerBody, DrawerContent, DrawerOverlay, Flex, Heading, IconButton, useDisclosure, useMediaQuery } from '@chakra-ui/react';
import { Menu } from 'lucide-react';
import Sidebar from '../../Sidebar';

const Title: React.FC = () => {
  const [isDesktop] = useMediaQuery("(min-width: 768px)", { ssr: true, fallback: true });
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box w="full">
      <Flex mb={{ base: 4, md: 0 }}>
        {!isDesktop && <IconButton colorScheme="grayIron" aria-label="Menu" icon={<Menu size={20} />} onClick={onOpen} />}
        <Heading w="full" size="sm" mb={{ md: 6 }} textAlign={{ base: 'center', md: 'left' }}>Configuración</Heading>
      </Flex>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody p={0}>
            <Sidebar />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
};

export default Title;
