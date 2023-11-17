"use client"

import { Flex, Stack, useMediaQuery } from '@chakra-ui/react';
import Layout from '../../components/Layout';
import Title from '../../components/Title';
import Filters from '../../components/Filters';
import { List } from '../../components/pages/students/list';
import Paginator from '../../components/Paginator';

export default function Page() {
  const [isDesktop] = useMediaQuery("(min-width: 768px)", { ssr: true, fallback: true });

  return (
    <Layout>
      <Stack spacing={6}>
        <Title title="Estudiantes" />
        <Filters />
        <List />
      </Stack>

      <Flex bgColor="white" border="1px solid" borderColor="gray.200" boxShadow="xs" justifyContent="center" borderRadius="0 0 8px 8px" py={4.5} px={isDesktop ? 6 : 5} borderTop={0}>
        <Paginator />
      </Flex>
    </Layout>
  )
}