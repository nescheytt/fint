"use client"

import React from 'react';
import { Stack, useDisclosure } from '@chakra-ui/react';
import ModalNewReminder from './modal';
import BillStartReminders from './BillStartReminders';
import BillDueReminders from './BillDueReminders';

const Reminders: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Stack spacing={6}>
        <BillStartReminders onOpen={onOpen} />
        <BillDueReminders onOpen={onOpen} />
      </Stack>

      <ModalNewReminder isOpen={isOpen} onClose={onClose} />
    </>
  )
};

export default Reminders;
